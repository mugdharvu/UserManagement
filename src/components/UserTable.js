import React from "react";

function UserTable({ users, onEdit, onDelete }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} style={{ textAlign: "center" }}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.company?.name}</td>
              <td>
                <button onClick={() => onEdit(user)} style={{ marginRight: "8px" }}>
                  ✏ Edit
                </button>
                <button onClick={() => onDelete(user.id)}>🗑 Delete</button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default UserTable;
