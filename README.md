# CS2503-TicTacToe-Project

## 📘 Project Overview
This project is part of **CS2503 – Software Engineering Fundamentals**.  
It implements a simple **Tic Tac Toe game** using pure HTML, CSS, and JavaScript.  
The goal of this project is to practice Agile teamwork using Scrum methodology, GitHub collaboration, and front-end project organization.

---

## 👥 Team Composition
| Role | Name | Description |
|------|------|-------------|
| Scrum Master / Product Owner | **Jianhao Deng** | Responsible for sprint planning, progress tracking, and overall coordination |
| Developer | – | Handled implementation of game logic and user interface |
| Developer | – | Assisted in styling, testing, and documentation |

> *Due to limited team activity, the initial version of this project was completed individually.*

---

## 🧩 Features
- Classic **3x3 Tic Tac Toe** gameplay
- Responsive and clean user interface
- Displays **turn status**, **winner**, or **draw**
- Includes **restart button**
- Highlight winning combination
- Accessible via mouse or keyboard (Enter/Space)

---

## 🧠 Technologies Used
| Category | Technology |
|-----------|-------------|
| Front-End | HTML5, CSS3, JavaScript (ES6) |
| Tools | PyCharm, Git, GitHub |
| Version Control | Git (branch: `development`) |

---

## 📂 Project Structure
flowchart LR
  U[User]
  U --> UI[UI Components (Board/Square/StatusBar)]
  UI --> GS[GameService (use cases)]
  GS --> R[Rules (judgeWinner/applyMove)]
  GS --> LS[LocalStorageRepo]
  LS -->|save/load| Storage[(localStorage)]
