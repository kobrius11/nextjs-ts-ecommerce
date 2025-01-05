import { productData } from "@/data/products-data";

export async function GET() {
  return new Response(JSON.stringify(productData), {
    headers: {
        'Content-Type': 'application/json'
    }
  });
}
