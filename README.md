# 🎓 Student Profile Dashboard (React Class Component Based)

This project was created as part of my **Phase 1 Frontend Assignment** with the Minders group. It’s my very first React project—set up with **Vite**—and focuses entirely on using **class components**, **JSX**, **props**, **state**, and **component composition**.

## 🛠️ Project Overview

The goal of this project was to build a small dashboard that displays a list of students and allows user interaction through buttons and state. It includes reusable components and basic interactivity.

### ✅ Requirements Implemented:
- Built using **5 class components**:
  - `App`
  - `Header`
  - `StudentList`
  - `StudentCard`
  - `Footer`
- Each component uses valid **JSX** with at least 3 HTML elements
- Included an image with proper JSX `img` syntax
- Props passed to each `StudentCard`:  
  `name`, `university`, `track`, `grade`
- Implemented **state and events**:
  - Each card has a **"Like" button** that increments a counter
- Used **component composition**:
  - `App` renders the layout with `Header`, `StudentList`, and `Footer`
  - `StudentList` maps and renders multiple `StudentCard` components

### 🌟 Bonus Feature:
- A dropdown in `App` to **filter students by track** (e.g., Frontend, Backend)

---

## 🚀 Technologies Used

- [React](https://reactjs.org/) (Class Components only)
- [Vite](https://vitejs.dev/) for project setup and fast dev server
- JSX, Props, State, Events
- Vanilla CSS

---

## 📷 Demo (Optional)
*Add screenshots or a short GIF showing the dashboard UI and interaction if you’d like!*

---

## 📦 Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/Mariam-Amro-2005/Student-Profile-Dashboard.git

# Navigate into the folder
cd Student-Profile-Dashboard/vite-project

# Install dependencies
npm install

# Start the development server
npm run dev
```
Then open your browser at http://localhost:5173

## 📚 What I Learned
- How to set up a React project using Vite
- How to structure a React app with class components
- Working with props, state, and event handlers
- Composing a page from reusable components