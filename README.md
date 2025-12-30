# 🚀 Quantum Portfolio Finance Optimizer

> A full-stack quantum computing application for portfolio optimization using real IBM quantum hardware and simulators.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://quantum-finance-portfolio.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Nuxt UI](https://img.shields.io/badge/Nuxt_UI-00DC82?logo=nuxt.js&logoColor=white)](https://ui.nuxt.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Qiskit](https://img.shields.io/badge/Qiskit-6929C4?logo=qiskit&logoColor=white)](https://qiskit.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![Railway](https://img.shields.io/badge/Railway-0B0D0E?logo=railway&logoColor=white)](https://railway.app/)

---

## 📋 Table of Contents

1. [🎯 Project Overview](#-project-overview)
2. [✨ Key Features](#-key-features)
3. [🛠️ Tech Stack](#-tech-stack)
4. [🏗️ Architecture](#-architecture)
5. [🎨 Design & Development Process](#-design--development-process)
6. [🚀 Live Demo](#-live-demo)
7. [📸 Screenshots](#-screenshots)
8. [⚙️ Getting Started](#-getting-started)
9. [📚 Personal Notes: Starting a Nuxt Project](#-personal-notes-starting-a-nuxt-project)
10. [🤝 Contributing](#-contributing)
11. [📄 License](#-license)
12. [👤 Contact](#-contact)

---

## 🎯 Project Overview

**Quantum Portfolio Finance Optimizer** is a production-ready web application that demonstrates the practical application of quantum computing in financial portfolio optimization. Built from scratch with modern web technologies and real quantum hardware access through IBM Quantum.

This project showcases:
- **Full-stack development** from design to deployment
- **Quantum computing integration** with Qiskit and IBM Quantum hardware
- **Modern frontend architecture** with Nuxt and TypeScript
- **Backend services** with FastAPI and Supabase
- **Cloud deployment** on Vercel and Railway
- **Professional UI/UX design** from Figma to production

**Perfect for**: Recruiters, hiring managers, and technical teams evaluating full-stack quantum computing capabilities.

---

## ✨ Key Features

### Quantum Computing
- ✅ Real IBM Quantum hardware integration
- ✅ Quantum simulator fallback for development
- ✅ Portfolio optimization using QAOA (Quantum Approximate Optimization Algorithm)
- ✅ Real-time quantum circuit visualization
- ✅ Comparison between classical and quantum solutions

### User Features
- 🎯 Interactive portfolio builder with real-time optimization
- 📊 Historical performance tracking and analysis
- 👤 User authentication and profile management
- 💾 Portfolio state persistence with Supabase
- 📈 Data visualization with custom charts
- 🌐 Responsive design for all devices

### Developer Experience
- ⚡ Hot module replacement with Nuxt
- 🎨 Type-safe components with TypeScript
- 🧩 Modular architecture with pages, layouts, and composables
- 🔒 Middleware for authentication and route protection
- 📦 Optimized production builds

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Nuxt](https://nuxt.com/) (Vue 3, TypeScript)
- **UI Library**: [Nuxt UI](https://ui.nuxt.com/) (Tailwind CSS)
- **State Management**: Pinia / Composables
- **Deployment**: [Vercel](https://vercel.com/)

### Backend
- **Main Backend**: [Supabase](https://supabase.com/) (PostgreSQL, Auth, Storage, Realtime)
- **Quantum Computing API**: [FastAPI](https://fastapi.tiangolo.com/) (Python for quantum calculations)
- **Quantum SDK**: [Qiskit](https://qiskit.org/)
- **Deployment**: Supabase Cloud + [Railway](https://railway.app/) (FastAPI)

### IBM Quantum
- **Hardware**: Real IBM Quantum processors
- **Simulator**: Qiskit Aer
- **SDK**: Qiskit Runtime

### Design & Tools
- **Design**: [Figma](https://www.figma.com/)
- **Version Control**: Git & GitHub
- **CI/CD**: Vercel & Railway auto-deploy

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       USER INTERFACE                        │
│                    (Nuxt + TypeScript)                      │
│          Landing → Dashboard → Simulation → Results         │
└────────────┬───────────────────────────┬────────────────────┘
             │                           │
             ▼                           ▼
┌────────────────────────┐   ┌─────────────────────────────┐
│  SUPABASE BACKEND      │   │  FastAPI (Quantum Service)  │
│  - PostgreSQL Database │   │  - Quantum Calculations     │
│  - Authentication      │   │  - Qiskit Integration       │
│  - Storage & Realtime  │   │  - IBM Quantum API          │
│  - REST & GraphQL APIs │   └──────────┬──────────────────┘
└────────────────────────┘              │
                                        ▼
                            ┌─────────────────────────────┐
                            │   IBM Quantum Platform      │
                            │  - Real Quantum Hardware    │
                            │  - Quantum Simulators       │
                            │  - Qiskit Runtime           │
                            └─────────────────────────────┘
```

---

## 🎨 Design & Development Process

### 1. **Design Phase** (Figma)
- Created complete UI/UX wireframes and prototypes
- Established design system with colors, typography, and components
- Mobile-first responsive design approach

### 2. **Frontend Development** (Nuxt)
- Component-based architecture with Vue 3 Composition API
- Type-safe development with TypeScript
- Responsive layouts with Tailwind CSS
- Route management with file-based routing

### 3. **Backend Development** (Supabase + FastAPI)
- Supabase as main backend (database, auth, storage, APIs)
- Database schema design with PostgreSQL
- FastAPI microservice for quantum calculations
- Quantum circuit implementation with Qiskit
- Integration with IBM Quantum services

### 4. **Integration & Testing**
- Connected frontend to backend APIs
- Tested quantum algorithms on real hardware
- Performance optimization and error handling

### 5. **Deployment**
- Frontend deployed on Vercel with automatic CI/CD
- Supabase backend on Supabase Cloud (managed service)
- FastAPI quantum service deployed on Railway with containerization

---

## 🚀 Live Demo

**🌐 Visit the live application**: [quantum-finance-portfolio.vercel.app](https://quantum-finance-portfolio.vercel.app)

Try these features:
1. Create a portfolio with multiple assets
2. Run quantum optimization on IBM hardware
3. Compare classical vs quantum solutions
4. View historical optimization results

---

## 📸 Screenshots

> Add screenshots of your application here once completed

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm
- Python 3.10+
- IBM Quantum account (free at [quantum-computing.ibm.com](https://quantum-computing.ibm.com))
- Supabase account (free at [supabase.com](https://supabase.com))

### Installation

#### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/Jdaniel-tech/quantum-finance-portfolio.git
cd quantum-finance-portfolio

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Add your Supabase URL and keys

# Run development server
npm run dev
```

#### Backend Setup

**Supabase** (Main Backend):
1. Create account at [supabase.com](https://supabase.com)
2. Create new project
3. Copy project URL and anon key to frontend `.env`
4. Set up database tables via Supabase dashboard

**FastAPI** (Quantum Computing Service):
```bash
cd quantum-service

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Add IBM Quantum token

# Run FastAPI server
uvicorn main:app --reload
```

---

## 📚 Personal Notes: Starting a Nuxt Project

> **This section is for my reference** when starting future Nuxt projects.

### 1. Initial Setup
```bash
# Create new Nuxt project
npx nuxi@latest init project-name
cd project-name
npm install
```

### 2. Core Structure
Create these folders in the root:
```
pages/          # File-based routing
layouts/        # Reusable page layouts
components/     # Vue components
composables/    # Composition API utilities
middleware/     # Route middleware
plugins/        # Vue plugins
assets/         # Styles, images
public/         # Static files
```

### 3. Setup app.vue
```vue
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

### 4. Create Basic Routes
```
pages/
  index.vue              → /
  about.vue              → /about
  dashboard/
    index.vue            → /dashboard
    simulation.vue       → /dashboard/simulation
```

### 5. Create Layouts
```vue
<!-- layouts/default.vue -->
<template>
  <div>
    <header>Navigation</header>
    <slot />
    <footer>Footer</footer>
  </div>
</template>
```

### 6. Use Layout in Pages
```vue
<script setup>
definePageMeta({ layout: 'dashboard' })
</script>
```

### 7. Install Additional Packages
```bash
npm install @nuxt/ui          # UI components
npm install @pinia/nuxt       # State management
npm install @supabase/supabase-js  # Backend
```

### 8. Configure nuxt.config.ts
```typescript
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  }
})
```

### 9. Run Development Server
```bash
npm run dev
```

### 10. Build for Production
```bash
npm run build
npm run preview
```

---

## 🤝 Contributing

This is a portfolio project, but feedback and suggestions are welcome! Feel free to:
- Open an issue for bugs or feature requests
- Fork the repository and submit pull requests
- Share your thoughts and improvements

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Contact

**Jesus Daniel**
- 📧 Email: [your.email@example.com](mailto:your.email@example.com)
- 💼 LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- 🐙 GitHub: [@Jdaniel-tech](https://github.com/Jdaniel-tech)
- 🌐 Portfolio: [yourportfolio.com](https://yourportfolio.com)

---

<div align="center">

**⭐ If you find this project interesting, please consider giving it a star!**

Made with ❤️ and ⚛️ quantum computing

</div>

