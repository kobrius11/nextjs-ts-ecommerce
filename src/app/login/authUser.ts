"use server";

import { BASE_URL } from "@/lib/settings";

export async function authUser(username: string, password: string) {
  const response = await fetch(
    new URL("/api/users/login", BASE_URL).toString(),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    }
  );

  if (!response.ok) {
    const errData = await response.json();
    console.log(errData)
    throw new Error(errData.message || "Failed to login");
  }

  console.log(response.text());
}
