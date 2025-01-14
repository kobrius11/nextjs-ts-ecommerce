import { NextRequest } from "next/server";
import { usersCartData} from "@/data/usersCartsData";
import { productData } from "@/data/products-data";
import { BASE_URL } from "@/lib/settings";
import { connectToDb } from "@/lib/db";
import { ObjectId } from "mongodb";


interface props {
  params: Promise<{ userId: string }>;
}

export async function GET(request: NextRequest, { params }: props) {
  const { userId } = await params;
  const userData = await (await fetch(new URL(`/api/users/${userId}`, BASE_URL))).json()

  if (!userData.cart) {
    return new Response(JSON.stringify([]), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const userProducts = userData.cart.map((pId: string) =>
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
  const usersCollection = await (await connectToDb()).db.collection('users');
  const userData = await usersCollection.findOne(new ObjectId(userId));

  // const product = await (await fetch(`http:localhost:3000/api/products/${productId}`)).json()

  // const userCart = await (await fetch(`http://localhost:3000/api/users/${id}/cart`)).json()

  if (!userData) {
    return Response.json({ message: "Something went wrong" }, {
      status: 401,  
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const newUserCart = userData.cart.concat(productId);
  await usersCollection.updateOne({_id: new ObjectId(userId)}, { $set: { cart: newUserCart }})
  
  return Response.json({ message: "Cart updated successfully", cart: newUserCart }, {
    status: 201,  
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(request: NextRequest, { params }: props) {
  const { userId } = await params;
  const productId = (await request.json()).productId;
  const usersCollection = (await connectToDb()).db.collection('users');
  const userData = await usersCollection.findOne(new ObjectId(userId));

  if (!userData) {
    return Response.json({ message: "Something went wrong" }, {
      status: 401,  
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const newUserCart = userData.cart.filter((item: string) => productId !== item);
  await usersCollection.updateOne({_id: new ObjectId(userId)}, { $set: { cart: newUserCart }})

  return Response.json({ message: "Cart updated successfully", cart: newUserCart }, {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });

}
