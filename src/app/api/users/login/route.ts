import { NextRequest } from "next/server";
import { connectToDb } from "@/lib/db";

interface userDetails {
  username: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const body: userDetails = await request.json();
  const { username, password } = body;
  const user = await (await connectToDb()).db
    .collection("users")
    .findOne({ username: username });

  if (!user) {
    return Response.json(
      { message: "User does not exist" },
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  if (password !== user.password) {
    return Response.json(
      { message: "Incorrect password" },
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return Response.json(
    { message: "Login successful" },
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
