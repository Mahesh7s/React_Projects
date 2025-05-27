import React from "react";

import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Settings() {
  const { user, updateUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
    alert("User info updated!");
  };

  return (
    <>
      <h2>⚙️ Settings</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
