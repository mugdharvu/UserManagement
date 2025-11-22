import React, { useState } from "react";

function UserForm({ onClose, onSubmit, existingUser }) {
  const [name, setName] = useState(existingUser?.name || "");
  const [email, setEmail] = useState(existingUser?.email || "");
  const [phone, setPhone] = useState(existingUser?.phone || "");
  const [company, setCompany] = useState(existingUser?.company?.name || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Name is required");
    if (!email.match(/^\S+@\S+\.\S+$/)) return alert("Enter a valid email");

    const newUser = {
      id: existingUser?.id,
      name,
      email,
      phone,
      company: { name: company }
    };

    onSubmit(newUser);
    onClose();
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>{existingUser ? "Edit User" : "Create User"}</h3>

        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />

          <label>Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Phone:</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} />

          <label>Company:</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} />

          <br /><br />
          <button type="submit">{existingUser ? "Save Changes" : "Add User"}</button>
          <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const modalStyle = {
  background: "#fff",
  padding: "20px",
  minWidth: "350px",
  borderRadius: "8px"
};

export default UserForm;
