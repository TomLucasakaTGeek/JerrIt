#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';

import {
  writeCoreFiles,
  writeUserModule,
  writeEnvFile,
  injectRoutes
} from './fileCreator.js';

import { createProjectDir } from './folderCreator.js';
import { createPackageJson } from './packageJsonCreator.js';

import { mongodbPlugin } from './plugins/mongodb.plugin.js';
import { mysqlPlugin } from './plugins/mysql.plugin.js';
import { aiPlugin } from './plugins/ai.plugin.js';
import { applyPlugins } from './plugins/pluginManager.js';

// globals
let rawProjectName;
let dbchoice;
let langchoice;

// utils
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow("\n Welcome to JERRIT \n");
  await sleep();
  rainbowTitle.stop();
}

async function askName() {
  const res = await inquirer.prompt({
    name: 'name',
    type: 'input',
    message: 'Project name?',
    default: 'my-app'
  });
  return res.name;
}

async function askDb() {
  const res = await inquirer.prompt({
    name: 'db',
    type: 'list',
    message: 'Select Database',
    choices: ['MongoDB', 'MySQL']
  });
  dbchoice = res.db;
}

async function askLang() {
  const res = await inquirer.prompt({
    name: 'lang',
    type: 'list',
    message: 'Select Language',
    choices: ['Typescript', 'Javascript']
  });
  langchoice = res.lang;
}

async function askAI() {
  const res = await inquirer.prompt({
    name: 'ai',
    type: 'confirm',
    message: 'Add AI module?',
    default: false
  });
  return res.ai;
}

// MAIN
await welcome();

rawProjectName = await askName();
createProjectDir(rawProjectName);

await askDb();
await askLang();

const aiEnabled = await askAI();

console.log(chalk.whiteBright("\nSetting up project...\n"));

// core
await writeCoreFiles(langchoice);

// base module
await writeUserModule(langchoice);

// env
await writeEnvFile();

// plugins
const plugins = [];

if (dbchoice === 'MongoDB') {
  plugins.push(mongodbPlugin(langchoice));
}

if (dbchoice === 'MySQL') {
  plugins.push(mysqlPlugin(langchoice));
}

if (aiEnabled) {
  plugins.push(aiPlugin(langchoice));
}

await applyPlugins(plugins, { langchoice });

// route injection
const injections = plugins
  .map((p) => p.inject)
  .filter(Boolean);

await injectRoutes(langchoice, injections);

// package.json
await createPackageJson(rawProjectName, dbchoice, langchoice, plugins);

// installer(); // optional