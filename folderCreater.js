import fs from 'fs';
import path from 'path';

/**
 * Creates multiple nested folders inside the project.
 * @param {string[]} paths - Relative paths from project root (e.g., ['src/config', 'src/models'])
 */


export const createProjectDir = (rawProjectName) => {
  const projectDir = path.join(process.cwd(), rawProjectName);

  // Create the project folder
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir);
    console.log(`📁 Project root created: ${rawProjectName}`);
  }

  // Switch working directory
  process.chdir(projectDir);
}


export const createFolders = (paths) => {
  paths.forEach((folderPath) => {
    const fullPath = path.join(process.cwd(), folderPath);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      console.log(`📁 Folder created: ${folderPath}`);
    } else {
      console.log(`📂 Folder already exists: ${folderPath}`);
    }
  });
};