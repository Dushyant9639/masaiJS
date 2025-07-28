# 📝 Enhanced Todo List Application

This is a modern, visually enhanced Todo List web application built using **HTML, CSS, and JavaScript**.

It allows users to manage tasks efficiently, track completion status, and persist data using `localStorage`.

---

## 🚀 Features

### ✅ Task Management
- Add tasks with a simple form
- Mark tasks as **completed** or **pending** (toggle)
- Delete individual tasks

### ✅ Real-Time Search
- Filter tasks instantly as you type in the search bar

### ✅ Smart Stats
- **Total** tasks
- **Completed** tasks
- **Pending** tasks

### ✅ Persistent Storage
- Tasks are saved in `localStorage` as a **JSON array**
- Data is preserved across page reloads

---

## 💾 Data Format in `localStorage`

```json
[
  {
    "id": "1690450023456",
    "text": "Learn JavaScript",
    "completed": false
  }
]
