"use server"

import { BASE_URL } from "@/lib/settings";

export async function createUser (username: string, password: string) {
  const response = await ( await fetch(new URL("/api/users/create", BASE_URL).toString(),
  {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "username": username, "password":password })
  }));

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.message || "Failed to create User");
  }

  console.log(response.text())
}