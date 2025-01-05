import { NextRequest } from "next/server";
import { usersCartData, usersCartDataType } from "@/data/usersCartsData";
import { productData } from "@/data/products-data";

interface props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: props) {
  const { id } = await params;

  const userCartData = usersCartData.find((user) => user.userId === id);

  if (!userCartData) {
    return new Response(JSON.stringify([]), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const userProducts = userCartData.cartItems.map((pId) =>
    productData.find((p) => p.id === pId)
  );

  if (!userProducts) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return new Response(JSON.stringify(userProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

interface cartBody {
  productId: string;
}

export async function POST(request: NextRequest, { params }: props) {
  const { id } = await params;

  const body: cartBody = await request.json();
  const productId = body.productId;
  // const product = await (await fetch(`http:localhost:3000/api/products/${productId}`)).json()

  // const userCart = await (await fetch(`http://localhost:3000/api/users/${id}/cart`)).json()

  const user = usersCartData.find((u) => u.userId === id);
  if (user) {
    user.cartItems = user.cartItems.concat(productId);
  }

  return Response.json(usersCartData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
