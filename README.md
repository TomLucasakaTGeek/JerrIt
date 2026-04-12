# 🚀 create-jerry (JerrIt CLI)

> A lightning-fast CLI tool to scaffold production-ready Express backend projects with MongoDB or MySQL, plugin-based architecture, and optional AI module support.

[![npm version](https://img.shields.io/npm/v/create-jerry.svg)](https://www.npmjs.com/package/create-jerry)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Overview

**create-jerry** is a backend scaffolding CLI inspired by tools like Vite and Create React App.

It generates a structured Express.js backend with:

- MongoDB OR MySQL support
- JavaScript OR TypeScript support
- Optional AI module (OpenAI integration)
- Plugin-based architecture (extensible design)
- Clean modular folder structure

---

## ⚡ Features

- 🎯 Interactive CLI prompts (Inquirer-based)
- 🧠 Optional AI module (OpenAI integration)
- 🗄️ Database selection (MongoDB / MySQL)
- 🧾 JavaScript & TypeScript support
- 🔌 Plugin-based architecture system
- 📁 Production-ready folder structure
- ⚙️ Auto dependency injection in package.json
- 🚀 Fully working Express server setup

---

## 🚀 Quick Start

```bash
npx create-jerry
```

Then follow prompts:

1. Project name
2. Database (MongoDB / MySQL)
3. Language (JavaScript / TypeScript)
4. AI module (Yes / No)

---

## 📦 What Gets Generated

### Project Structure

```
your-project/
├── src/
│   ├── config/
│   │   ├── db.js / db.ts
│   │   └── index.js
│   │
│   ├── modules/
│   │   ├── user/
│   │   └── ai/ (optional)
│   │
│   ├── routes/
│   │   └── index.js
│   │
│   ├── middlewares/
│   │   └── error.middleware.js
│   │
│   ├── utils/
│   │   └── asyncHandler.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── package.json
└── tsconfig.json (if TypeScript)
```

---

## 🧠 Architecture

This CLI uses a **plugin-based generator system**:

### Supported Plugins

- 🟢 MongoDB Plugin
- 🟡 MySQL Plugin
- 🤖 AI Plugin (OpenAI)

### Each Plugin Handles:

- Module generation (if required)
- Dependency injection
- Route injection
- Setup logic execution

---

## 🔌 Example CLI Flow

```bash
✔ Project name? my-app
✔ Select Database MongoDB
✔ Select Language Typescript
✔ Add AI module? Yes
```

### Output:

- MongoDB configured project
- AI module added (optional)
- Routes auto-injected
- Dependencies installed dynamically

---

## 🧰 Available Scripts (Generated Project)

```bash
npm run dev      # Development mode
npm start        # Production mode
npm run build    # TypeScript build (if TS)
```

---

## 🧠 AI Module (Optional)

When enabled:

- `/ai/chat` endpoint is created
- OpenAI SDK installed
- Controller → Service → Provider architecture
- GPT-powered backend endpoint ready to use

---

## 🗄️ Database Support

### MongoDB

- Mongoose integration
- Predefined User model + CRUD
- Auto connection setup

### MySQL

- mysql2 connection pool
- Prebuilt SQL queries
- Ready-to-use CRUD layer

---

## 🔌 Plugin System

Plugins follow this structure:

```js
{
  name: "plugin-name",
  setup(),
  inject,
  dependencies
}
```

### Benefits:

- Extensible architecture
- Clean separation of concerns
- Easy future expansion (auth, redis, payments, etc.)

---

## 📚 Tech Stack

- Node.js
- Express.js
- Inquirer.js
- Chalk
- Nanospinner
- OpenAI SDK (optional)
- Mongoose / MySQL2

---

## 🎯 Why create-jerry?

Because backend setup is repetitive:

- Folder structure setup ❌
- Database configuration ❌
- Boilerplate code ❌

Now:

```bash
npx create-jerry
```

Done in seconds ⚡

---

## 🛠️ Future Plans
- 🟦 Typescript Migration
- 🔐 Authentication plugin (JWT / OAuth)
- ⚡ Redis caching plugin
- 📦 Docker support
- 🧪 Testing setup (Jest)
- ☁️ Deployment presets

---

## 👨‍💻 Author

**Tanmay Khanna**

- GitHub: [@TomLucasakaTGeek](https://github.com/TomLucasakaTGeek)
- Project: JerrIt CLI

---

## ⭐ Support

If this helped you:

- ⭐ Star the repo
- 🔁 Share with developers
- 🧩 Contribute plugins

---

## 📄 License

MIT License

---

**Built with ❤️ to make backend development faster and easier**



<!-- ## Low Level Daigram   ## Challenges  -->
<!-- ======= -->
