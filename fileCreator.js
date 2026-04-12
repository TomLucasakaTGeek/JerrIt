import path from 'path';
import * as fs from 'fs/promises';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templateDir = path.join(__dirname, 'Templates');

if (!existsSync(templateDir)) {
  throw new Error(`Templates folder missing at ${templateDir}`);
}

// ---------------- HELPERS ----------------

const copyFile = async (src, dest) => {
  const content = await fs.readFile(src);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, content);
};

const copyDir = async (srcDir, destDir) => {
  try {
    const entries = await fs.readdir(srcDir, { withFileTypes: true });

    for (const entry of entries) {
      const src = path.join(srcDir, entry.name);
      const dest = path.join(destDir, entry.name);

      if (entry.isDirectory()) {
        await copyDir(src, dest);
      } else {
        await copyFile(src, dest);
      }
    }
  } catch {
    throw new Error(`Template missing or invalid: ${srcDir}`);
  }
};

// ---------------- CORE ----------------

export const writeCoreFiles = async (langchoice) => {
  const variant = langchoice.includes('Typescript') ? 'ts' : 'js';

  const basePath = path.join(templateDir, 'base', variant);

  // copy base project directly into src
  await copyDir(
    basePath,
    path.join(process.cwd(), 'src')
  );

  // tsconfig (only TS)
  if (variant === 'ts') {
    const tsconfigPath = path.join(basePath, 'tsconfig.json');

    if (existsSync(tsconfigPath)) {
      await copyFile(
        tsconfigPath,
        path.join(process.cwd(), 'tsconfig.json')
      );
    }
  }
};

// ---------------- USER MODULE ----------------

export const writeUserModule = async (langchoice) => {
  const variant = langchoice.includes('Typescript') ? 'ts' : 'js';

  const src = path.join(templateDir, 'modules/user', variant);
  const dest = path.join(process.cwd(), 'src/modules/user');

  await copyDir(src, dest);
};

// ---------------- AI MODULE ----------------

export const writeAIModule = async (langchoice) => {
  const variant = langchoice.includes('Typescript') ? 'ts' : 'js';

  const src = path.join(templateDir, 'modules/ai', variant);
  const dest = path.join(process.cwd(), 'src/modules/ai');

  await copyDir(src, dest);
};

// ---------------- DB (LEGACY SAFE) ----------------

export const writeDbFiles = async (dbchoice, langchoice) => {
  const variant = langchoice.includes('Typescript') ? 'ts' : 'js';
  const db = dbchoice === 'MongoDB' ? 'mongodb' : 'mysql';

  await copyDir(
    path.join(templateDir, 'db', db, variant),
    path.join(process.cwd(), 'src/config')
  );
};

// ---------------- ENV ----------------

export const writeEnvFile = async () => {
  const content = `PORT=3000

# MongoDB
MONGO_URI=

# MySQL
MYSQL_HOST=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DATABASE=

# AI
OPENAI_API_KEY=
`;

  await fs.writeFile(path.join(process.cwd(), '.env'), content);
};

// ---------------- ROUTE INJECTION ----------------

export const injectRoutes = async (langchoice, injections = []) => {
  const ext = langchoice.includes('Typescript') ? 'ts' : 'js';

  const filePath = path.join(process.cwd(), `src/routes/index.${ext}`);

  try {
    await fs.stat(filePath);
  } catch {
    throw new Error(`Routes file not found: ${filePath}`);
  }

  let content = await fs.readFile(filePath, 'utf-8');

  if (
    !content.includes('// [IMPORT_ROUTES]') ||
    !content.includes('// [USE_ROUTES]')
  ) {
    throw new Error('Route placeholders missing in base template');
  }

  for (const inject of injections) {
    content = content.replace(
      '// [IMPORT_ROUTES]',
      `${inject.import}\n// [IMPORT_ROUTES]`
    );

    content = content.replace(
      '// [USE_ROUTES]',
      `${inject.use}\n// [USE_ROUTES]`
    );
  }

  await fs.writeFile(filePath, content);
};