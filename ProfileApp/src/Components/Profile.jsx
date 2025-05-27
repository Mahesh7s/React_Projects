import React from "react";

import { useContext } from "react";
import { UserContext } from "./UserContext";


export default function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h2>👤 User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </>
  );
}
