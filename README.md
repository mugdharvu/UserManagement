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

<img width="1871" height="883" alt="Screenshot 2025-11-22 141113" src="https://github.com/user-attachments/assets/26426a3f-6f79-4837-8f15-54fed8c0e705" />


### 🖼️ Create User Modal

<img width="1890" height="870" alt="Screenshot 2025-11-22 141409" src="https://github.com/user-attachments/assets/d44e85ab-e21a-4ed0-af10-bcf866695443" />
<img width="1882" height="186" alt="Screenshot 2025-11-22 141843" src="https://github.com/user-attachments/assets/e0ec9833-b73a-4fe7-a9e8-4e4ebc5c18a6" />



### 🖼️ Edit User Modal

<img width="1869" height="455" alt="Screenshot 2025-11-22 141551" src="https://github.com/user-attachments/assets/98555167-40b0-4ca5-a77a-32f30b6d9802" />

<img width="1884" height="834" alt="Screenshot 2025-11-22 141602" src="https://github.com/user-attachments/assets/b959cfdd-0344-48f9-ab30-988cfa7be989" />

<img width="1888" height="462" alt="Screenshot 2025-11-22 141618" src="https://github.com/user-attachments/assets/5cbeb7bc-457c-488a-8d2d-251110c01371" />




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

