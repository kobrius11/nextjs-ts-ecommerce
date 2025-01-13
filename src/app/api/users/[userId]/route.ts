import { NextRequest } from "next/server";
import { getUserById } from "@/lib/helper/user/getUser";

interface props {
    params: Promise<{ userId: string }>;
}

export async function GET (request: NextRequest, { params }: props) {
    const { userId } = await params;
    const user = await getUserById(userId);
    if (user) return Response.json(user);
}