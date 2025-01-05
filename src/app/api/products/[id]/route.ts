import { NextRequest } from "next/server";
import { productData } from "@/data/products-data";

interface props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: props) {
  const productId = params.id;
  const product = productData.find((p) => p.id === productId);

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
