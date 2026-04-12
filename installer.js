import { createSpinner } from 'nanospinner';
import { execSync } from 'child_process';
import chalk from 'chalk';

export function installer() {
  const spinner = createSpinner(
    chalk.whiteBright('Installing Dependencies...')
  ).start();

  try {
    execSync('npm install', { stdio: 'inherit' });

    console.log('\n');

    spinner.success({
      text: chalk.greenBright('Dependencies Installed Successfully!\n')
    });

    console.log(chalk.cyanBright('🚀 Get Started !!!\n'));

    return true;
  } catch (err) {
    spinner.error({
      text: chalk.redBright('Failed to Install Dependencies')
    });

    console.error(err);
    return false;
  }
}