#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
import { installer } from './installer.js';
import { 
    writeDbFiles, 
    writeServerFiles, 
    writeEnvFile 
} from './fileCreator.js';
import { createFolders, createProjectDir } from './folderCreater.js';
import { createPackageJson } from './packageJsonCreator.js';

// global responses
let rawProjectName;
let dbchoice;
let langchoice;

// timeout
export const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

// welcome function 
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("\n Welcome to JERRIT \n");
    await sleep();
    rainbowTitle.stop();
}

// project name
async function askName() {
    const res = await inquirer.prompt({
        name: 'admin_name',
        type: 'input',
        message: `${chalk.magentaBright('Project name ?')}`,
        default() {
            return 'my-app';
        },
    });
    
    return res.admin_name;
}

// database selection
async function askDb() {
    const res = await inquirer.prompt({
        name: 'db_name',
        type: 'list',
        message: `${chalk.yellowBright('Select your Database ...')}`,
        choices: [
            { name: chalk.greenBright('MongoDB'), value: 'MongoDB' },
            { name: chalk.whiteBright('MySQL'), value: 'MySQL' },
        ],
    });

    dbchoice = res.db_name;
}

// language selection
async function askLang() {
    const res = await inquirer.prompt({
        name: 'lang_name',
        type: 'list',
        message: `${chalk.green('Select your Language...')}`,
        choices: [
            `${chalk.cyanBright('Typescript')}`,
            `${chalk.yellowBright('Javascript')}`,
        ],
    });

    langchoice = res.lang_name;
}

// exit function 
export async function exit(str) {
    const rainbowTitle = chalkAnimation.rainbow(str);
    await sleep();
    rainbowTitle.stop();
}

// Main execution
await welcome();

rawProjectName = await askName();

// Creating root directory
createProjectDir(rawProjectName);

await askDb();
await askLang();

console.log("\n");

// Project setup execution calls
console.log(chalk.whiteBright("Setting up your Project ... "));

// 1. Create folder structure
const backendFolders = [
  'src/config',
  'src/controllers',
  'src/middlewares',
  'src/models',
  'src/routes',
];
createFolders(backendFolders);

// 2. Create configuration and code files
await writeEnvFile();
await writeServerFiles();
await writeDbFiles(dbchoice);

// 3. Generate package.json
await createPackageJson(rawProjectName, dbchoice, langchoice);

// 4. Install dependencies
installer();