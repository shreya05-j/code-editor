# Web-Based Code Editor

A lightweight, web-based code editor inspired by modern IDEs such as VS Code.  
This project is built to demonstrate strong frontend architecture, state management, and editor tooling concepts using React.

---

## Project Overview

This application simulates the core behavior of a real code editor, including file management, tab navigation, and an interactive editing environment. The focus is on clean component design, predictable state flow, and scalability for future features such as code execution and persistence.

---

## Features Implemented

- Monaco Editor integration for rich code editing
- Multi-file support with file explorer
- Tab-based file navigation
- Active file state synchronization
- Dynamic file creation
- Run button interface
- Output panel integrated with application state
- Modular and maintainable component structure

---

## Tech Stack

- React (Vite)
- Monaco Editor
- JavaScript
- CSS (inline styles for layout control)

---

## Folder Structure

src/
├── components/
│ ├── CodeEditor.jsx
│ ├── FileExplorer.jsx
│ ├── Tabs.jsx
│ ├── TopBar.jsx
│ └── OutputPanel.jsx
├── App.jsx
└── main.jsx


---

## Architecture Explanation

- `App.jsx` acts as the central state manager
- Files are represented as objects containing id, name, language, and content
- A single active file controls the editor, tabs, and explorer state
- All child components are stateless and receive data via props
- The editor is fully controlled through React state

This design mirrors real-world editor architecture and ensures predictable behavior.

---

## Current Status

- Editor UI and layout completed
- File system logic implemented
- Output panel wired with Run action
- Code execution logic to be added next

---

## Planned Enhancements

- Safe JavaScript execution using sandboxed iframe
- Console output and error capturing
- Theme switching
- Autosave using localStorage
- Support for additional languages

---

## Author

Shreya Jaiswal  
B.Tech Computer Science and Engineering  
Jagran Lakecity University

---

## Purpose of This Project

This project demonstrates:
- Strong React fundamentals
- Clear state-driven design
- Component reusability
- Practical understanding of developer tools
