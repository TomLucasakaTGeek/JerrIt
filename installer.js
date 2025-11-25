import { createSpinner } from 'nanospinner';
import { execSync } from 'child_process';
import chalk from 'chalk';
import { exit } from './index.js';

/**
 * Installs dependencies using npm install
 * Assumes package.json already exists in the current directory
 */
export function installer() {
  const spinner = createSpinner(chalk.whiteBright('Installing Dependencies...')).start();

  try {
    // Simple npm install command - reads from package.json
    execSync('npm install', { stdio: 'inherit' });

    console.log('\n');

    spinner.success({ 
      text: `${chalk.greenBright('Dependencies Installed Successfully!\n')}` 
    });

    exit("Get Started !!!\n");

  } catch (err) {
    spinner.error({ 
      text: `${chalk.redBright('Failed to Install Dependencies')}` 
    });
    console.error(err);
    exit("Try Again !!!");
  }
}