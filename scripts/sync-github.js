import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Common secret patterns to guard against accidental commit of credentials
const SECRET_PATTERNS = [
  /AIzaSy[0-9A-Za-z-_]{35}/, // Google API Key
  /sk-[a-zA-Z0-9]{32,}/,     // OpenAI API Key
  /ghp_[a-zA-Z0-9]{36}/,      // GitHub Personal Access Token
  /-----BEGIN PRIVATE KEY-----/,
  /-----BEGIN RSA PRIVATE KEY-----/,
  /AWS_SECRET_ACCESS_KEY/i,
  /SECRET_KEY/i,
];

function runCommand(command) {
  try {
    return execSync(command, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  } catch (error) {
    console.error(`❌ Command failed: ${command}`);
    if (error.stderr) console.error(error.stderr);
    throw error;
  }
}

function sync() {
  console.log('🔍 Checking Git status...');

  const status = runCommand('git status --porcelain');
  if (!status) {
    console.log('✅ No uncommitted changes detected. Repository is up to date.');
    return;
  }

  console.log('📋 Changed files detected:');
  console.log(status);

  // Security Check: Ensure forbidden files are not being staged
  const lines = status.split('\n');
  for (const line of lines) {
    const filePath = line.trim().slice(3);

    if (filePath.includes('.env') || filePath.includes('node_modules') || filePath.includes('dist/')) {
      console.error(`🚨 SECURITY BLOCK: Forbidden file path detected in changes: ${filePath}`);
      process.exit(1);
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const content = fs.readFileSync(filePath, 'utf-8');
      for (const pattern of SECRET_PATTERNS) {
        if (pattern.test(content)) {
          console.error(`🚨 SECURITY BLOCK: Possible secret pattern detected in file: ${filePath}`);
          process.exit(1);
        }
      }
    }
  }

  // Validation: Check build and type safety
  console.log('⚡ Validating build and TypeScript safety...');
  try {
    runCommand('npm run build');
    console.log('✅ Build validation passed!');
  } catch (err) {
    console.error('❌ Build validation failed. Commit aborted.');
    process.exit(1);
  }

  // Determine meaningful commit message
  const userMessage = process.argv.slice(2).join(' ');
  let commitMessage = userMessage;

  if (!commitMessage) {
    const fileList = lines.map(l => l.trim().slice(3)).join(', ');
    if (fileList.includes('README.md') || fileList.includes('docs')) {
      commitMessage = 'docs: update repository documentation';
    } else if (fileList.includes('package.json') || fileList.includes('scripts/')) {
      commitMessage = 'chore: update project scripts and dependencies';
    } else if (fileList.includes('src/components/3d')) {
      commitMessage = 'feat: refine 3D graphics and core scene';
    } else if (fileList.includes('src/components/ui/CustomCursor')) {
      commitMessage = 'fix: optimize cursor interaction and responsiveness';
    } else {
      commitMessage = `chore: update portfolio files (${fileList.slice(0, 50)})`;
    }
  }

  // Stage relevant files
  console.log('📦 Staging files...');
  runCommand('git add .');

  // Create commit
  console.log(`💬 Creating commit: "${commitMessage}"...`);
  runCommand(`git commit -m "${commitMessage}"`);

  // Push to GitHub safely
  console.log('🚀 Pushing to GitHub (origin main)...');
  const pushOutput = runCommand('git push origin main');
  console.log(pushOutput);

  console.log('🎉 GitHub synchronization complete!');
}

sync();
