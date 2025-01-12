"use client";

import { useEffect } from "react";
import { useState } from "react";

export default function UserCard() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  if (!username) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-64 mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Card</h2>
      {username ? (
        <p className="text-xl text-gray-600">Welcome, {username}!</p>
      ) : (
        <p className="text-xl text-gray-600">No user logged in</p>
      )}
    </div>
  );
}
