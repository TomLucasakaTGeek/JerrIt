import fs from 'fs';
import path from 'path';

export const createProjectDir = (rawProjectName) => {
  const projectDir = path.join(process.cwd(), rawProjectName);

  if (fs.existsSync(projectDir)) {
    throw new Error(`Folder "${rawProjectName}" already exists`);
  }

  fs.mkdirSync(projectDir);
  console.log(`📁 Project root created: ${rawProjectName}`);

  process.chdir(projectDir);
};