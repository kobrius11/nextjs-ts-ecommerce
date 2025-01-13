import { NextRequest } from "next/server";
import { usersCartData, usersCartDataType } from "@/data/usersCartsData";
import { productData } from "@/data/products-data";

interface props {
  params: Promise<{ userId: string }>;
}

export async function GET(request: NextRequest, { params }: props) {
  const { userId } = await params;

  const userCartData = usersCartData.find((user) => user.userId === userId);

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
  const { userId } = await params;

  const body: cartBody = await request.json();
  const productId = body.productId;
  // const product = await (await fetch(`http:localhost:3000/api/products/${productId}`)).json()

  // const userCart = await (await fetch(`http://localhost:3000/api/users/${id}/cart`)).json()

  const user = usersCartData.find((u) => u.userId === userId);
  if (user) {
    user.cartItems = user.cartItems.concat(productId);
  }

  return Response.json(usersCartData, {
    status: 201,  
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(request: NextRequest, { params }: props) {
  const { userId } = await params;
  const productId = (await request.json()).productId;
  

  const user = usersCartData.find(u => u.userId === userId);
  if (user) {
    user.cartItems = user.cartItems.filter(item => productId !== item)
  }

  return Response.json(usersCartData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })

}
