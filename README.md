# Personal Portfolio & Developer Showroom

An interactive, high-performance developer portfolio built to showcase my technical skills, software engineering experience, and architectural philosophy as a Full Stack Web Developer.

[!["Vercel Deployment"](https://img.shields.io/badge/Vercel-Deployed-success?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-hbhqtan29-santiilorenzo9499-7380s-projects.vercel.app/)
[!["pnpm Version"](https://img.shields.io/badge/pnpm-v11.13.0-blue?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[!["React Version"](https://img.shields.io/badge/React-v19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)

---

## ⚡ Tech Stack & Tools

* **Frontend Framework:** Next.js (App Router) using React 19.
* **Styling:** Tailwind CSS (custom modern dark theme with micro-interactions).
* **Package Manager:** pnpm v11 (configured with workspace-style overrides resolution).
* **Hosting & CI/CD:** Vercel (automated production deployments synced with GitHub).

---

## 🏗️ Architectural Decisions

This portfolio is designed with performance, scalability, and clean code principles in mind:

### 1. Component Modularity
Built with a highly modular architecture where each section (Hero, Projects, Contact) is treated as an independent component. This ensures high maintainability and keeps the Next.js App Router structure clean and easy to navigate.

### 2. Dependency Efficiency (Why pnpm?)
To optimize local storage and build performance, this project utilizes **pnpm**'s unique global content-addressable store. 
* Prevents deep nested duplication of dependencies in the `node_modules` folder.
* Enforces strict dependency mapping, successfully eliminating the risk of using "phantom dependencies" common in flat npm architectures.

### 3. Production Readiness
Asset optimization, responsive layouts designed strictly from a mobile-first approach, and an efficient deployment lifecycle on Vercel ensuring near-instant loading times.

---

## 🚀 Getting Started Locally

Follow these simple steps to run the portfolio on your local machine.

### Prerequisites

Ensure you have **Node.js** and **pnpm v11** installed:
```bash
# Verify your installations
node -v
pnpm -v
```

## Installation & Run

1. Clone the repository:

```bash
git clone https://github.com/santil99/portfolio.git
cd portfolio-website
```

2. Install dependencies (uses the lockfile configured for this repo):

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open your browser at http://localhost:3000 to view the site.

---

### Troubleshooting

- If you see errors during install or build, ensure your Node.js version is compatible with the project (Node 18+ recommended).
- If `pnpm` is not recognized, install it globally:

```bash
npm install -g pnpm
```

---
