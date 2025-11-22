# 📘 User Management App (React)

A clean and basic **User Management System** built using **React**.\
It supports listing, creating, editing, deleting, and searching users
using local state.

------------------------------------------------------------------------

## 🚀 Features

### ✔ 1. List Users

-   Fetch users from: `https://jsonplaceholder.typicode.com/users`\
-   Display them in a responsive table\
-   Columns: Name, Email, Phone, Company, Actions

### ✔ 2. Create User

-   Add user via a modal or form\
-   Form validation:
    -   **Name:** required\
    -   **Email:** required + valid format\
-   Newly created users are added to state (not API)

### ✔ 3. Edit User

-   Edit button in each row\
-   Prefilled modal form\
-   Updated locally

### ✔ 4. Delete User

-   Confirmation popup\
-   Delete from local state

### ✔ 5. Search / Filter

-   Search bar filters by
    -   Name\
    -   Email

### ✔ 6. Component-Based Architecture

-   App.js\
-   UserTable.js\
-   UserForm.js\
-   SearchBar.js

### ✔ 7. Clean UI

-   Minimal white + grey theme\
-   Responsive layout\
-   Loading + error states included

------------------------------------------------------------------------

## 📂 Folder Structure

    /src
    │── App.js
    │── App.css
    │── components/
    │     ├── UserTable.js
    │     ├── UserForm.js
    │     ├── SearchBar.js
    │
    └── index.js

------------------------------------------------------------------------

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/your-username/user-management-app.git
cd user-management-app
```

### 2️⃣ Install dependencies

``` bash
npm install
```

### 3️⃣ Run the project

``` bash
npm start
```

------------------------------------------------------------------------

## 📸 Screenshots

### 🖼️ Home Page (Users List)

![Users List](./screenshots/users-list.png)

### 🖼️ Create User Modal

![Create Modal](./screenshots/create-user.png)

### 🖼️ Edit User Modal

![Edit Modal](./screenshots/edit-user.png)

------------------------------------------------------------------------

## 📌 Technologies Used

-   React (JS or TS)
-   Functional components + hooks\
-   Basic CSS (white/grey theme)

------------------------------------------------------------------------

## 🤝 Contributions

Pull requests are welcome!\
For major changes, open an issue first to discuss what you'd like to
modify.

------------------------------------------------------------------------

## 📝 License

This project is **open source** and available under the MIT License.
