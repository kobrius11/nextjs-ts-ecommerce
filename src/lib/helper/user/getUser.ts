import { ObjectId } from "mongodb";
import { connectToDb } from "@/lib/db";

export async function getUserById(userId: string) {
  const user = await (await connectToDb()).db
    .collection("users")
    .findOne({ _id: new ObjectId(userId) });
  return user;
}

export async function getUserByUsername(username: string) {
  const user = await (await connectToDb()).db
    .collection("users")
    .findOne({ username: username });
  return user;
}
