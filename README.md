# REMWaste

**REMWaste** is a modern React-based web application designed to facilitate skip bin selection and booking for waste management services. Built with TypeScript and Vite, the application provides a responsive and maintainable frontend architecture for interacting with waste disposal service APIs.

---

## 🚀 Features

- 🔍 **Skip Bin Selection** – Browse and select skip bin types suited for various waste needs.
- 🧩 **Component-Driven UI** – Built with reusable and modular components such as `SkipCard`.
- ⚙️ **Typed API Integration** – Robust API handling using Axios and TypeScript interfaces.
- 🎨 **Theming Support** – Custom theme configurations with consistent styling across components.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Linting**: ESLint
- **Styling**: CSS / Theme Modules

---

## 📁 Project Structure

```
src/
├── assets/             # Static images and SVGs
├── components/         # Reusable UI components
├── http/               # API configuration and service modules
├── model/              # TypeScript interfaces and models
├── pages/              # Main pages including SelectSkip
├── theme/              # Theme configuration
├── App.tsx             # Root component
└── main.tsx            # Application entry point
```

---

## 📦 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/flavioalibeaj/REMWaste
cd remwaste

# Install dependencies
npm install
# or
yarn install
```

### Run Development Server

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173/` by default.

---

## 🧪 Linting and Formatting

```bash
npm run lint
```
