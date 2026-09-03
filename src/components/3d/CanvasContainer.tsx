import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { QualityLevel } from '../../hooks/use3DQuality';
import { DigitalCore } from './DigitalCore';

interface CanvasContainerProps {
  quality: QualityLevel;
}

// 2D Canvas matrix / grid fallback when 3D quality is turned off
const Canvas2DFallback: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const dots: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];
    const numDots = 60;

    for (let i = 0; i < numDots; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw floating nodes & connections
      const targetX = (mousePos.x + 1) * 0.5 * width;
      const targetY = (-mousePos.y + 1) * 0.5 * height;

      dots.forEach((dot, index) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        if (dot.x < 0 || dot.x > width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > height) dot.vy *= -1;

        // Draw dot
        ctx.fillStyle = index % 2 === 0 ? '#00f3ff' : '#a855f7';
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby dots
        for (let j = index + 1; j < dots.length; j++) {
          const other = dots[j];
          const dist = Math.hypot(dot.x - other.x, dot.y - other.y);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0, 243, 255, ${0.15 * (1 - dist / 120)})`;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Mouse attraction line
        const mouseDist = Math.hypot(dot.x - targetX, dot.y - targetY);
        if (mouseDist < 180) {
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.25 * (1 - mouseDist / 180)})`;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(targetX, targetY);
          ctx.stroke();
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export const CanvasContainer: React.FC<CanvasContainerProps> = ({ quality }) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (quality === 'off') {
    return <Canvas2DFallback mousePos={mousePos} />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: quality === 'high', powerPreference: 'high-performance' }}
        dpr={quality === 'high' ? [1, 2] : [1, 1.5]}
      >
        <Suspense fallback={null}>
          <DigitalCore quality={quality} mousePos={mousePos} />
        </Suspense>
      </Canvas>
    </div>
  );
};
