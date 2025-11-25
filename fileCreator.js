import { fileURLToPath } from 'url';
import path from 'path';
import * as fs from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Stable reference to your Templates folder in scaff/
const templateDir = path.join(__dirname, 'Templates');

// 🟡 Create empty .env
export const writeEnvFile = async () => {
  const envPath = path.join(process.cwd(), 'src', 'config', '.env');
  try {
    await fs.writeFile(envPath, '', 'utf-8');
    console.log('✅ .env file created in src/config');
  } catch (error) {
    console.error('❌ Failed to create .env file:', error);
  }
};

// 🔵 Generate db.js from template
export const writeDbFiles = async (dbchoice) => {
  const dbfile = dbchoice === 'MySQL' ? 'db-sql.js' : 'db-mongo.js';
  const dbTemplatePath = path.join(templateDir, dbfile);
  const targetPath = path.join(process.cwd(), 'src', 'models', 'db.js');

  try {
    const content = await fs.readFile(dbTemplatePath, 'utf-8');
    await fs.writeFile(targetPath, content);
    console.log('✅ db.js created successfully');
  } catch (error) {
    console.error('❌ Failed to create db.js:', error);
  }
};

// 🟢 Generate app.js from express.js
export const writeServerFiles = async () => {
  const serverTemplatePath = path.join(templateDir, 'express.js');
  const targetPath = path.join(process.cwd(), 'app.js');

  try {
    const content = await fs.readFile(serverTemplatePath, 'utf-8');
    await fs.writeFile(targetPath, content);
    console.log('✅ app.js created successfully');
  } catch (error) {
    console.error('❌ Failed to create app.js:', error);
  }
};
