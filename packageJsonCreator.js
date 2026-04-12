import fs from 'fs/promises';
import path from 'path';

export const createPackageJson = async (
  name,
  db,
  lang,
  plugins = []
) => {
  const isTS = lang.includes('Typescript');

  const dependencies = {
    express: '^4.18.2',
    cors: '^2.8.5',
    dotenv: '^16.3.1'
  };

  // safe plugin merge
  for (const plugin of plugins) {
    if (plugin.dependencies) {
      for (const key in plugin.dependencies) {
        if (!dependencies[key]) {
          dependencies[key] = plugin.dependencies[key];
        }
      }
    }
  }

  const devDependencies = {
    nodemon: '^3.0.0'
  };

  if (isTS) {
    devDependencies.typescript = '^5.0.0';
    devDependencies.tsx = '^4.0.0';
    devDependencies['@types/node'] = '^20.0.0';
    devDependencies['@types/express'] = '^4.0.0';
  }

  const scripts = isTS
    ? {
        dev: 'tsx watch src/server.ts',
        build: 'tsc',
        start: 'node dist/server.js'
      }
    : {
        dev: 'nodemon src/server.js',
        start: 'node src/server.js',
        build: 'echo "No build step for JS"'
      };

  const pkg = {
    name,
    version: '1.0.0',
    type: 'module',
    scripts,
    dependencies,
    devDependencies
  };

  await fs.writeFile(
    path.join(process.cwd(), 'package.json'),
    JSON.stringify(pkg, null, 2)
  );
};
