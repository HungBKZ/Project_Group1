# 🍽️ SWD392 Group Project – QR-Based Restaurant Ordering & Management System

## 🧩 Overview
This project is developed for the **SWD392 – AI-Assisted System Design** course.  
The system enables customers to order meals at restaurant tables via **QR codes**, while staff and managers handle orders, kitchen operations, and reports through an integrated platform.

### 🎯 Objectives
- Implement a **full-stack software system** with both web backend and mobile app.
- Apply **AI tools (ChatGPT, Copilot, PlantUML)** to support analysis, UML design, and coding.
- Demonstrate team collaboration, architecture design, and proper AI usage declaration.

---

## 🏗️ Architecture
| Layer | Technology |
|-------|-------------|
| Backend (Web API) | Node.js, Express.js, MongoDB (Mongoose ODM) |
| Frontend (Mobile App) | React Native with Expo Go |
| Development Tools | VS Code, Postman, GitHub |
| AI Tools | ChatGPT (UML, code generation), Copilot (boilerplate code), PlantUML (diagram rendering) |

---

## 👥 Team Members
| Role | Main Responsibilities |
|------|------------------------|
|Customer Module | QR menu, order, payment |
|Member Module | Authentication, loyalty, recommendations |
|Waitstaff Module | Order management, chat, table service |
|Kitchen Module | Kitchen tickets, status tracking |
|Manager Module | Menu, promotion, analytics, accounts |

Each member contributes approximately **15 Use Cases**, documented and implemented separately.

---

## 📁 Project Structure
```

swd392-group1/
├─ web/                     # Backend (NodeJS + Express + MongoDB)
│  ├─ src/
│  │  ├─ config/            # Database connection, environment setup
│  │  ├─ models/            # Mongoose schema definitions
│  │  ├─ routes/            # Express routers (menu, order, user, etc.)
│  │  ├─ controllers/       # Logic layer
│  │  ├─ seed/              # Database initialization (seed.js)
│  │  └─ app.js             # Server entry point
│  ├─ .env.example
│  ├─ package.json
│  └─ README.md
│
├─ app/                     # Mobile client (Expo React Native)
│  ├─ app/                  # Screens (Expo Router)
│  ├─ src/
│  │  ├─ api/               # Axios API client
│  │  ├─ components/        # Reusable UI components
│  │  ├─ hooks/             # Custom hooks
│  │  └─ store/             # Zustand/Redux store
│  ├─ app.json
│  ├─ package.json
│  └─ README.md
│
├─ AI-USAGE.md              # Record of all AI prompts and outputs
├─ .gitignore
├─ package.json             # Optional root-level scripts
└─ README.md                # ← this file

````

---

## ⚙️ Installation & Run

### 1️⃣ Backend (Web)
```bash
cd web
cp .env.example .env
npm install
npm run seed      # Create empty collections (no sample data)
npm run dev       # Start Express server on http://localhost:5000
````

### 2️⃣ Mobile App (Expo Go)

```bash
cd ../app
cp .env.example .env
npm install
npm start         # Scan QR code with Expo Go on your phone
```

---

## 🧠 AI Usage Declaration (per SWD392 requirements)

| Date       | Tool     | Prompt Summary                                     | Output                           | Understanding & Customization                                                      |
| ---------- | -------- | -------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------- |
| 2025-10-19 | ChatGPT  | Generate Mongoose schemas and database seed script | Full model definitions & seed.js | Understood schema relationships, removed sample data, kept empty DB initialization |
| 2025-10-19 | ChatGPT  | Create project folder structure for NodeJS + Expo  | Folder tree and setup guide      | Adopted MVC + layered design, customized for group roles                           |
| 2025-10-20 | Copilot  | Generate route/controller boilerplate              | Sample Express routes            | Adjusted naming, added error handling                                              |
| 2025-10-20 | PlantUML | Render ERD and Use Case diagrams                   | UML images                       | Selected relevant diagrams for report submission                                   |

---

## 📦 Environment Variables

`web/.env.example`

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/swd392_group1
JWT_SECRET=change_this_secret
DEFAULT_PASSWORD=Admin@123
```

`app/.env.example`

```
API_BASE_URL=http://10.0.2.2:5000/api
```

---

## 🧩 UML & Documentation

* **Use Case Diagram:** for all 5 actor groups
* **ERD / Class Diagram:** created with [dbdiagram.io](https://dbdiagram.io/) or PlantUML
* **Sequence & Activity Diagrams:** for main workflows (Ordering, Kitchen, Payment)

---

## ✅ Project Deliverables

1. Requirement Analysis & Modeling (Evaluation 1)
2. Software Architecture & Design (Evaluation 2)
3. Final Report & Integrated Demo (Evaluation 3)
4. AI Usage Appendix (transparency declaration)

---

