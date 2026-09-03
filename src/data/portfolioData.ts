export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  resume: string;
  portfolio: string;
  twitter?: string;
}

export interface PersonalProfile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone?: string;
  socials: SocialLinks;
  heroHeadline: string;
  heroSubtext: string;
  aboutBio: string[];
  philosophyPillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    description: string;
    projectsCount?: number;
  }[];
}

export interface CaseStudy {
  problem: string;
  research: string;
  idea: string;
  architecture: string;
  implementation: string;
  innovation: string;
  results: string[];
  metrics: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  contribution: string;
  impact: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: 'Full-Stack' | 'AI / Systems' | '3D / Creative' | 'Cloud Architecture';
  caseStudy?: CaseStudy;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  duration: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface LabExperiment {
  id: string;
  title: string;
  category: string;
  status: 'Prototype' | 'Experimental' | 'Live Sandbox' | 'Research Paper';
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  interactiveType: 'shader' | 'physics' | 'nodes';
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Award' | 'Certification' | 'Milestone' | 'Publication';
  year: string;
  organization: string;
  description: string;
  credentialUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details?: string[];
}

export const PORTFOLIO_DATA: {
  profile: PersonalProfile;
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  experiments: LabExperiment[];
  achievements: Achievement[];
  education: Education[];
} = {
  profile: {
    name: "[YOUR FULL NAME]",
    title: "[Software Engineer | AI & Innovation Enthusiast]",
    tagline: "I BUILD IDEAS INTO REALITY.",
    location: "[YOUR LOCATION]",
    email: "your.email@domain.com",
    phone: "[YOUR PHONE NUMBER]",
    socials: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      email: "mailto:your.email@domain.com",
      resume: "#resume-download",
      portfolio: "https://yourportfolio.com",
      twitter: "https://twitter.com/yourusername",
    },
    heroHeadline: "I BUILD IDEAS INTO REALITY.",
    heroSubtext: "Engineering scalable systems, immersive 3D digital experiences, and AI-driven solutions with precision and innovative product thinking.",
    aboutBio: [
      "[PASTE YOUR BIO HERE - Paragraph 1: Describe your background, engineering mindset, passion for innovation, and approach to solving complex problems.]",
      "[PASTE YOUR BIO HERE - Paragraph 2: Highlight your technical versatility across full-stack architecture, high-performance web graphics, and modern software design.]",
      "[PASTE YOUR BIO HERE - Paragraph 3: Detail what drives your commitment to crafting polished, reliable, and high-impact digital products.]"
    ],
    philosophyPillars: [
      {
        title: "Engineering Excellence",
        description: "Writing clean, scalable, maintainable code with modern architectural principles.",
        icon: "Cpu"
      },
      {
        title: "Product & Innovation",
        description: "Bridging deep technical execution with user-centric design and intuitive UX.",
        icon: "Lightbulb"
      },
      {
        title: "High Performance",
        description: "Optimizing 3D rendering pipelines, WebGL canvas frames, and fast page loads.",
        icon: "Zap"
      },
      {
        title: "Problem Solving",
        description: "Deconstructing complex distributed constraints into elegant software solutions.",
        icon: "Layers"
      }
    ]
  },

  skills: [
    {
      id: "programming",
      name: "Programming",
      description: "Core algorithms, strongly typed system architectures, and scripting languages.",
      icon: "Code2",
      skills: [
        { name: "TypeScript / JavaScript", level: 95, description: "Advanced ESNext, static type systems, generic design patterns" },
        { name: "Python", level: 90, description: "Data structures, machine learning scripting, automation API engines" },
        { name: "C++ / Rust", level: 78, description: "Systems programming, memory safety, WASM integration" },
        { name: "Go", level: 82, description: "Concurrent backend services, microservices, high-throughput pipelines" }
      ]
    },
    {
      id: "frontend",
      name: "Frontend",
      description: "Modern, responsive, user-interface frameworks and dynamic web rendering engines.",
      icon: "Layout",
      skills: [
        { name: "React / Next.js", level: 96, description: "Server components, state management, SSR/SSG hydration" },
        { name: "Tailwind CSS", level: 95, description: "Utility-first design systems, custom dark themes, responsive layouts" },
        { name: "Vue / Nuxt", level: 85, description: "Reactivity engines, component architecture, performant SPA builds" },
        { name: "HTML5 / CSS3 / SASS", level: 98, description: "Semantic web standards, CSS animations, flexible grid layouts" }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      description: "Scalable server architectures, REST/GraphQL APIs, microservices, and queue management.",
      icon: "Server",
      skills: [
        { name: "Node.js / Express / NestJS", level: 92, description: "Async runtime, event loops, middleware pipeline design" },
        { name: "FastAPI / Django", level: 88, description: "Python backend services, OpenAPI specs, async endpoint handlers" },
        { name: "GraphQL & REST APIs", level: 90, description: "Schema design, query optimization, rate-limiting, authentication" },
        { name: "gRPC & Microservices", level: 82, description: "Protocol buffers, high-speed inter-service communications" }
      ]
    },
    {
      id: "ai-ml",
      name: "AI / ML",
      description: "Machine learning integration, LLM orchestration, and intelligent system workflows.",
      icon: "Brain",
      skills: [
        { name: "PyTorch & TensorFlow", level: 84, description: "Model training, neural net evaluation, computer vision pipelines" },
        { name: "LangChain / LlamaIndex", level: 86, description: "RAG architectures, vector store retrievers, agentic workflows" },
        { name: "OpenAI / HuggingFace APIs", level: 90, description: "LLM fine-tuning, embeddings, streaming response pipelines" },
        { name: "Vector Databases", level: 85, description: "Pinecone, Qdrant, ChromaDB vector indexing and hybrid search" }
      ]
    },
    {
      id: "creative-3d",
      name: "3D / Creative Dev",
      description: "WebGL canvas rendering, Three.js scenes, shaders, and real-time graphics.",
      icon: "Sparkles",
      skills: [
        { name: "Three.js / React Three Fiber", level: 92, description: "PBR material shaders, lighting, 3D geometry manipulation, camera lerp" },
        { name: "GLSL / Shaders", level: 80, description: "Custom vertex/fragment shaders, procedural noise generation" },
        { name: "Framer Motion & GSAP", level: 94, description: "Timeline animations, scroll triggers, magnetic micro-interactions" },
        { name: "Blender / 3D Asset Prep", level: 78, description: "Low-poly mesh optimization, GLTF/GLB export compression" }
      ]
    },
    {
      id: "cloud-devops",
      name: "Cloud / DevOps",
      description: "Automated deployment pipelines, containerization, serverless, and infrastructure.",
      icon: "Cloud",
      skills: [
        { name: "Docker & Kubernetes", level: 88, description: "Containerized environments, image multi-staging, orchestration" },
        { name: "AWS / Vercel / GCP", level: 90, description: "Serverless lambda compute, S3 assets, CloudFront CDN edge routes" },
        { name: "CI/CD & GitHub Actions", level: 92, description: "Automated test suites, build pipelines, production release triggers" },
        { name: "Terraform / IaC", level: 80, description: "Infrastructure as code provisioning, multi-region architecture" }
      ]
    },
    {
      id: "databases",
      name: "Databases",
      description: "Relational, document, key-value, and distributed data store systems.",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", level: 92, description: "Complex SQL queries, index optimization, JSONB storage, migrations" },
        { name: "MongoDB", level: 88, description: "Document schemas, aggregation frameworks, replica set clustering" },
        { name: "Redis", level: 90, description: "In-memory caching layer, pub/sub queues, session state management" },
        { name: "Prisma / Supabase / ORMs", level: 94, description: "Type-safe database ORM layer, row-level security policy design" }
      ]
    },
    {
      id: "tools",
      name: "Tools & Ecosystem",
      description: "Version control, development tooling, system monitoring, and design handoff.",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub Workflow", level: 98, description: "Branching strategies, rebase workflows, code review standards" },
        { name: "Figma & UI Handoff", level: 88, description: "Design system tokens, interactive prototypes, component specs" },
        { name: "Vite / Webpack / Turbopack", level: 92, description: "Module bundling, hot module replacement, asset chunking" },
        { name: "Postman / Bruno API Test", level: 94, description: "Automated endpoint testing suites and environment mocks" }
      ]
    }
  ],

  projects: [
    {
      id: "project-01",
      title: "[PROJECT 01 NAME]",
      tagline: "[ONE-LINE DESCRIPTION OF PROJECT 01]",
      description: "An innovative, high-performance application built to solve complex domain challenges with modern full-stack architecture.",
      problem: "[DESCRIBE THE PROBLEM THAT THIS PROJECT SOLVED]",
      solution: "[DESCRIBE YOUR SOLUTION AND TECHNICAL APPROACH]",
      technologies: ["React", "TypeScript", "Three.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
      contribution: "[EXPLAIN YOUR SPECIFIC CONTRIBUTION TO THIS PROJECT]",
      impact: "[HIGHLIGHT THE MEASURABLE RESULTS, SPEED GAINS, OR USER ADOPTION IMPACT]",
      githubUrl: "https://github.com/yourusername/project-01",
      liveUrl: "https://project01-demo.com",
      featured: true,
      category: "Full-Stack",
      caseStudy: {
        problem: "Legacy systems struggled with real-time state synchronization, leading to latency spikes above 800ms and fragmented data views.",
        research: "Evaluated WebSocket fallback transport strategies, binary serialization via Protocol Buffers, and client-side web worker state caching.",
        idea: "Architected a dual-engine platform utilizing reactive edge subscriptions for live updates paired with an interactive 3D visual workspace.",
        architecture: "React + R3F UI Layer -> WebSocket Gateway -> Microservices Broker -> Redis Sub/Pub -> PostgreSQL Distributed Storage.",
        implementation: "Constructed custom state sync hooks, optimized GLTF model chunk loading, and built zero-layout-shift UI component pipelines.",
        innovation: "Designed a lightweight procedural canvas buffer that reduced GPU memory overhead by 45% while preserving visual fidelity.",
        results: [
          "Reduced end-to-end telemetry latency from 800ms to <45ms.",
          "Increased concurrent active user throughput by 3.5x.",
          "Zero downtime deployment strategy integrated into CI/CD."
        ],
        metrics: [
          { label: "Latency Reduction", value: "94%" },
          { label: "GPU Load", value: "-45%" },
          { label: "Active Users", value: "10K+" }
        ]
      }
    },
    {
      id: "project-02",
      title: "[PROJECT 02 NAME]",
      tagline: "[ONE-LINE DESCRIPTION OF PROJECT 02]",
      description: "AI-powered intelligent platform delivering automated decision pipelines and interactive data visualizations.",
      problem: "[DESCRIBE THE PROBLEM THAT PROJECT 02 SOLVED]",
      solution: "[DESCRIBE YOUR SOLUTION AND AI ARCHITECTURE]",
      technologies: ["Python", "PyTorch", "FastAPI", "TypeScript", "Next.js", "Pinecone"],
      contribution: "[EXPLAIN YOUR SPECIFIC CONTRIBUTION TO PROJECT 02]",
      impact: "[HIGHLIGHT IMPACT / RESULT OF PROJECT 02]",
      githubUrl: "https://github.com/yourusername/project-02",
      liveUrl: "https://project02-demo.com",
      featured: true,
      category: "AI / Systems",
      caseStudy: {
        problem: "Unstructured document workflows required hours of manual extraction and context verification across siloed databases.",
        research: "Benchmarked vector search indexing algorithms, embedding precision vs memory trade-offs, and streaming LLM chunk parse rates.",
        idea: "Developed an autonomous RAG agent platform with continuous semantic feedback loops and interactive graph visualization.",
        architecture: "FastAPI Backend -> LangChain Core Engine -> Pinecone Vector Database -> Next.js Edge UI Client.",
        implementation: "Implemented hybrid semantic-keyword searching, automated document chunking algorithms, and dynamic streaming SSE UI nodes.",
        innovation: "Created an adaptive context compression layer that boosts answer accuracy while cutting API token consumption.",
        results: [
          "Automated 85% of manual extraction operations.",
          "Lowered query processing time from 4 minutes to 1.2 seconds.",
          "Token efficiency improved by 38% using dynamic context windowing."
        ],
        metrics: [
          { label: "Accuracy", value: "99.2%" },
          { label: "Search Time", value: "1.2s" },
          { label: "Token Savings", value: "38%" }
        ]
      }
    },
    {
      id: "project-03",
      title: "[PROJECT 03 NAME]",
      tagline: "[ONE-LINE DESCRIPTION OF PROJECT 03]",
      description: "Immersive 3D interactive web product showcase engineered for seamless cross-device performance.",
      problem: "[DESCRIBE THE PROBLEM FOR PROJECT 03]",
      solution: "[DESCRIBE THE CREATIVE & 3D SOLUTION]",
      technologies: ["Three.js", "React Three Fiber", "GLSL Shaders", "GSAP", "Tailwind CSS"],
      contribution: "[EXPLAIN YOUR CONTRIBUTION TO PROJECT 03]",
      impact: "[HIGHLIGHT IMPACT / RESULT OF PROJECT 03]",
      githubUrl: "https://github.com/yourusername/project-03",
      liveUrl: "https://project03-demo.com",
      featured: true,
      category: "3D / Creative",
      caseStudy: {
        problem: "Traditional 3D web experiences suffered low frame rates (<24fps) on mobile browsers and heavy initial bundle loads (>15MB).",
        research: "Analyzed Draco mesh compression, WebGL instanced rendering techniques, and adaptive Level-of-Detail (LOD) scene switches.",
        idea: "Built a custom R3F pipeline featuring dynamic asset streaming and custom GLSL fragment shaders for realistic lighting.",
        architecture: "Vite SPA -> Custom GLSL Shader Pipeline -> R3F Adaptive Canvas -> Web Audio API Engine.",
        implementation: "Optimized geometry draw calls, integrated post-processing bloom shaders, and wrote custom parallax camera physics.",
        innovation: "Achieved 60fps locked rendering on mobile GPUs through custom geometry instancing and dynamic texture compression.",
        results: [
          "Reduced asset payload from 18MB to under 2.4MB.",
          "Maintained stable 60 FPS across 95% of mobile hardware tested.",
          "Awarded featured digital experience recognition."
        ],
        metrics: [
          { label: "Frame Rate", value: "60 FPS" },
          { label: "Payload Size", value: "2.4MB" },
          { label: "Load Time", value: "<1.5s" }
        ]
      }
    }
  ],

  experiences: [
    {
      id: "exp-01",
      company: "[COMPANY / ORGANIZATION NAME 01]",
      role: "[YOUR ROLE / TITLE]",
      location: "[LOCATION / REMOTE]",
      duration: "[DATES / PRESENT]",
      responsibilities: [
        "[RESPONSIBILITY 1 - Lead architectural decisions and frontend/backend feature delivery]",
        "[RESPONSIBILITY 2 - Optimize system performance, CI/CD automated deployment, and unit testing]",
        "[RESPONSIBILITY 3 - Collaborate with cross-functional teams, UI designers, and product stakeholders]"
      ],
      achievements: [
        "[KEY ACHIEVEMENT 1 - Measurable speed or scale improvement achieved]",
        "[KEY ACHIEVEMENT 2 - Key product feature or architecture milestone delivered]"
      ],
      technologies: ["TypeScript", "React", "Node.js", "AWS", "Docker", "Tailwind CSS"]
    },
    {
      id: "exp-02",
      company: "[COMPANY / ORGANIZATION NAME 02]",
      role: "[YOUR ROLE / TITLE]",
      location: "[LOCATION / REMOTE]",
      duration: "[DATES]",
      responsibilities: [
        "[RESPONSIBILITY 1 - Developed resilient web applications and API integrations]",
        "[RESPONSIBILITY 2 - Engineered interactive features and scalable database schemas]",
        "[RESPONSIBILITY 3 - Maintained high code quality standards through code reviews and automated tests]"
      ],
      achievements: [
        "[KEY ACHIEVEMENT 1 - Delivered high-impact platform upgrade ahead of schedule]",
        "[KEY ACHIEVEMENT 2 - Reduced server response latencies across core API endpoints]"
      ],
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"]
    }
  ],

  experiments: [
    {
      id: "lab-01",
      title: "Procedural Quantum Field Shader",
      category: "GLSL / WebGL Graphics",
      status: "Live Sandbox",
      description: "Interactive real-time procedural particle simulation testing custom fragment shaders, raymarching, and magnetic cursor field distortion.",
      technologies: ["Three.js", "GLSL", "React Three Fiber"],
      githubUrl: "https://github.com/yourusername/quantum-field-lab",
      demoUrl: "#lab-demo",
      interactiveType: "shader"
    },
    {
      id: "lab-02",
      title: "Neural Node Gravity Sandbox",
      category: "Artificial Intelligence & Physics",
      status: "Experimental",
      description: "Visual simulation of interconnected neural weights reacting dynamically to user input forces and real-time gravity attractors.",
      technologies: ["Canvas2D", "Vector Physics", "TypeScript"],
      githubUrl: "https://github.com/yourusername/neural-node-sandbox",
      demoUrl: "#lab-demo",
      interactiveType: "nodes"
    },
    {
      id: "lab-03",
      title: "Autonomous Agent Workflow Graph",
      category: "LLM Orchestration",
      status: "Prototype",
      description: "Visual node graph simulator illustrating asynchronous agent communication pathways and state machine branching.",
      technologies: ["React Flow", "LangChain", "WebSockets"],
      githubUrl: "https://github.com/yourusername/agent-workflow-lab",
      demoUrl: "#lab-demo",
      interactiveType: "physics"
    }
  ],

  achievements: [
    {
      id: "ach-01",
      title: "[ACHIEVEMENT OR AWARD TITLE 01]",
      category: "Award",
      year: "2024",
      organization: "[ORGANIZATION / COMPETITION NAME]",
      description: "[DESCRIBE THE RECOGNITION, COMPETITION WIN, OR ACCOMPLISHMENT]",
      credentialUrl: "https://example.com/credential"
    },
    {
      id: "ach-02",
      title: "[CERTIFICATION OR MILESTONE 02]",
      category: "Certification",
      year: "2023",
      organization: "[ISSUING BODY / INSTITUTION]",
      description: "[DESCRIBE THE CERTIFICATION, SPECIFIC SKILLS VALIDATED, OR HIGHLIGHT]",
      credentialUrl: "https://example.com/certification"
    },
    {
      id: "ach-03",
      title: "[TECHNICAL PUBLICATION OR HACKATHON WIN 03]",
      category: "Publication",
      year: "2023",
      organization: "[PUBLISHER / EVENT NAME]",
      description: "[DESCRIBE THE RESEARCH PAPER, TECHNICAL BLOG POST, OR HACKATHON WIN]",
      credentialUrl: "https://example.com/publication"
    }
  ],

  education: [
    {
      degree: "[DEGREE NAME - e.g. Bachelor of Science in Computer Science]",
      institution: "[INSTITUTION / UNIVERSITY NAME]",
      duration: "[DURATION - e.g. 2019 - 2023]",
      details: [
        "Focused on Distributed Systems, Computer Graphics, and Algorithms.",
        "Graduated with Honors / Top Percentile Project Recognition."
      ]
    }
  ]
};
