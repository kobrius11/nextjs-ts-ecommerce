"use client";

import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UserCard() {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  if (!username) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-64 mx-auto text-center">
      {username ? (
        <>
          <p className="text-xl text-gray-600">Welcome, {username}!</p>
          <button 
          onClick={() => { localStorage.removeItem("username");localStorage.removeItem("userId"); router.refresh()}}
          className="p-2 mt-1 rounded rounded-md hover:bg-red-800 bg-red-700">Log out</button>
        </>
      ) : (
        <p className="text-xl text-gray-600">No user logged in</p>
      )}
    </div>
  );
}
