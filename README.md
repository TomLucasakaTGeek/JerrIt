# 🚀 create-jerry

> A lightning-fast CLI tool to scaffold Express backend projects with MongoDB or MySQL

[![npm version](https://img.shields.io/npm/v/create-jerry.svg)](https://www.npmjs.com/package/create-jerry)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**create-jerry** is a project scaffolding tool similar to Vite.js and Create React App, but designed specifically for backend development. It generates a production-ready Express.js boilerplate with your choice of MongoDB or MySQL, complete with folder structure, database configuration, and all necessary dependencies.

---

## ✨ Features

- 🎯 **Interactive CLI** - Simple prompts guide you through project setup
- ⚡ **Fast Setup** - Get a working backend in under 60 seconds
- 🗄️ **Database Choice** - MongoDB or MySQL support out of the box
- 📝 **TypeScript Support** - Choose JavaScript or TypeScript for your project
- 📁 **Clean Architecture** - Pre-configured folder structure following best practices
- 🔧 **Ready to Code** - All dependencies installed and configured automatically

---

## 🚀 Quick Start

```bash
npx create-jerry
```

That's it! Just answer a few prompts:
1. **Project name** - What do you want to call your project?
2. **Database** - MongoDB or MySQL?
3. **Language** - JavaScript or TypeScript?

Your backend project will be created and ready to go! 🎉

---

## 📦 What Gets Generated

```
your-project-name/
├── src/
│   ├── config/
│   │   └── .env
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   │   └── db.js          # Pre-configured database connection
│   └── routes/
├── app.js                  # Express server setup
└── package.json            # With all dependencies configured
```

### 📋 Included Dependencies

**Base:**
- Express.js - Web framework
- dotenv - Environment variables
- cors - Cross-origin resource sharing

**Database:**
- Mongoose (MongoDB) or MySQL2 (MySQL)

**Dev Tools:**
- Nodemon - Auto-restart during development
- TypeScript tooling (if TypeScript is selected)

---

## 💻 Usage

### Create a new project

```bash
npx create-jerry
```

### Navigate to your project

```bash
cd your-project-name
```

### Start developing

```bash
npm run dev
```

Your Express server will start with hot-reload enabled! 🔥

---

## 🎯 Problem It Solves

Setting up a backend project from scratch involves:
- ❌ Creating folder structure manually
- ❌ Installing and configuring dependencies
- ❌ Setting up database connections
- ❌ Configuring development environment
- ❌ 15-30 minutes of repetitive setup work

**create-jerry** reduces this to a single command! ✅

---

## 🛠️ Available Scripts

In your generated project:

```bash
npm run dev      # Start development server with hot-reload
npm start        # Start production server
npm run build    # Compile TypeScript (TS projects only)
```

---

## 📚 Examples

### MongoDB + JavaScript Project
```bash
npx create-jerry
? Project name: my-mongodb-api
? Select your Database: MongoDB
? Select your Language: Javascript
```

### MySQL + TypeScript Project
```bash
npx create-jerry
? Project name: my-mysql-api
? Select your Database: MySQL
? Select your Language: Typescript
```

---

## 🎥 Demo

Watch the tool in action: [Demo Video](https://drive.google.com/file/d/1o_9_5RMI21Inew4knCqXlCmeArhAG3xD/view?usp=sharing)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests

---

## 📄 License

MIT © Tanmay Khanna

---

## 👨‍💻 Author

**Tanmay Khanna**

- GitHub: [@TomLucasakaTGeek](https://github.com/TomLucasakaTGeek)
- LinkedIn: [TanmayKhanna](https://linkedin.com/in/khannatanmay)

---

## ⭐ Show Your Support

If this tool helped you save time, give it a star! ⭐

It helps others discover the project and motivates continued development.

---

**Built with ❤️ to make backend development faster and easier**



<!-- ## Low Level Daigram   ## Challenges  -->
<!-- ======= -->
