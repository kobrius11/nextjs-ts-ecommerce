import { connectToDb } from "@/lib/db";

export async function GET() {
  const { db } = await connectToDb();
  const products = await db.collection('products').find({}).toArray();
  return new Response(JSON.stringify(products), {
    headers: {
        'Content-Type': 'application/json'
    }
  });
}
