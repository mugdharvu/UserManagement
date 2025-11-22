// import React from "react";
// import UsersList from "../../UsersList";
// import "./styles.css";

// export default function App() {
//   return (
//     <div className="app-container">
//       <header>
//         <h1>User Manager — Step 1: List Users</h1>
//       </header>
//       <main>
//         <UsersList />
//       </main>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import SearchBar from "./components/SearchBar";
import "./App.css";


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to load users");
        setLoading(false);
      });
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));
  };

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2>User Management App</h2>

      <button
        onClick={() => { setEditingUser(null); setShowForm(true); }}
        style={{ marginBottom: "20px", padding: "8px 14px", cursor: "pointer" }}
      >
        ➕ Add User
      </button>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <UserTable
          users={filteredUsers}
          onEdit={(user) => { setEditingUser(user); setShowForm(true); }}
          onDelete={deleteUser}
        />
      )}

      {showForm && (
        <UserForm
          onClose={() => setShowForm(false)}
          onSubmit={editingUser ? updateUser : addUser}
          existingUser={editingUser}
        />
      )}
    </div>
  );
}

export default App;
