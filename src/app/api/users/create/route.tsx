import { NextRequest } from "next/server";
import { connectToDb } from "@/lib/db";

interface userDetails {
  username: string;
  password: string;
}

export async function POST(request: NextRequest) {
  const body: userDetails = await request.json();
  const { username, password } = body;
  const isDuplicate = await (await connectToDb()).db
    .collection("users")
    .findOne({ username: username });

  if (isDuplicate) {
    return Response.json("This user already exists", {
      status: 409,
    });
  }

  if (username.length < 3 || password.length < 3) {
    return Response.json("invalid password or username", {
      status: 401,
    });
  }

  (await connectToDb()).db.collection("users").insertOne({
    username: username,
    password: password,
    cart: {},
  });

  return Response.json("New user created succesfully", {
    status: 201,
  });
}
