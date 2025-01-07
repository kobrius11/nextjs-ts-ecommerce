import { NextRequest } from "next/server";
import { connectToDb } from "../../db";

interface props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: props) {
  const { id } = await params;
  const { db } = await connectToDb();
  const product = await db.collection('products').findOne({ id: id });

    if (!product) {
        return new Response('Not Found', {
            status: 404
        }) 
    }

  return new Response(JSON.stringify(product), {
    headers: {
        'Content-Type': 'application/json'
    }
  });
}
