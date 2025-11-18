import * as fs from 'node:fs/promises';
import path from 'path';

/**
 * Generates package.json file based on project configuration
 * @param {string} projectName - Name of the project
 * @param {string} dbchoice - Database choice ('MongoDB' or 'MySQL')
 * @param {string} langchoice - Language choice ('Typescript' or 'Javascript')
 */
export const createPackageJson = async (projectName, dbchoice, langchoice) => {
  // Base dependencies that every project needs
  const baseDependencies = {
    express: '^4.18.2',
    dotenv: '^16.3.1',
    cors: '^2.8.5'
  };

  // Database-specific dependencies
  const dbDependencies = {
    MongoDB: {
      mongoose: '^8.0.3'
    },
    MySQL: {
      mysql2: '^3.6.5'
    }
  };

  // Merge base dependencies with database-specific ones
  const dependencies = {
    ...baseDependencies,
    ...dbDependencies[dbchoice]
  };

  // Development dependencies (common for both JS and TS)
  const devDependencies = {
    nodemon: '^3.0.2'
  };

  // Add TypeScript-specific dev dependencies if needed
  if (langchoice.includes('Typescript')) {
    devDependencies['typescript'] = '^5.3.3';
    devDependencies['@types/node'] = '^20.10.6';
    devDependencies['@types/express'] = '^4.17.21';
    devDependencies['@types/cors'] = '^2.8.17';
    devDependencies['ts-node'] = '^10.9.2';
  }

  // Scripts configuration
  const scripts = {
    start: 'node app.js',
    dev: 'nodemon app.js',
    test: 'echo "Error: no test specified" && exit 1'
  };

  // Modify scripts for TypeScript
  if (langchoice.includes('Typescript')) {
    scripts.start = 'node dist/app.js';
    scripts.dev = 'nodemon --exec ts-node app.ts';
    scripts.build = 'tsc';
  }

  // Complete package.json object
  const packageJson = {
    name: projectName.toLowerCase().replace(/\s+/g, '-'),
    version: '1.0.0',
    description: `A ${dbchoice} backend project scaffolded with JerrIt`,
    main: langchoice.includes('Typescript') ? 'dist/app.js' : 'app.js',
    type: 'module',
    scripts,
    keywords: ['express', 'backend', dbchoice.toLowerCase()],
    author: '',
    license: 'ISC',
    dependencies,
    devDependencies
  };

  // Write package.json to the project root
  const packageJsonPath = path.join(process.cwd(), 'package.json');

  try {
    await fs.writeFile(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2),
      'utf-8'
    );
    console.log('✅ package.json created successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to create package.json:', error);
    return false;
  }
};