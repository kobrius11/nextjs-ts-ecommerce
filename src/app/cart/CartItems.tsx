"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { BASE_URL } from "@/lib/settings";
import { product } from "@/data/products-data";



export default function CartItems() {
    const [ userCart, setUserCart ] = useState<null | product[]>(null);

    const getUserCart = async () => {
        const userId = localStorage.getItem("userId");
        const cart = await (await fetch(new URL(`api/users/${userId}/cart`, BASE_URL))).json()
        setUserCart(cart)
    }
    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (!userId) return;
        getUserCart()
    }, []);


    const updateCart = async (productId: string) => {
        const userId = localStorage.getItem("userId");
        await fetch(new URL(`api/users/${userId}/cart`, BASE_URL), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'productId': productId })
        })
        getUserCart()
    }

    if (!userCart || userCart.length === 0) return <div>USER CART IS EMPTY</div>
    
    return (
        <div className={`grid grid-rows-${userCart.length}`}>{
            userCart.map((item) => (
                <div className="m-5 items-center grid grid-cols-6" key={item.id}>
                    <Image 
                        src={item.imageUrl}
                        alt={item.alt}
                        width={100}
                        height={1}
                    />
                    <p className="uppercase text-2xl tracking-wide">{item.name}</p>
                    <h1 className="col-start-5 text-2xl uppercase font-bold ">{item.price} $</h1>
                    <button onClick={() => updateCart(item.id)} className="rounded-md p-2 m-15 bg-red-600 hover:bg-red-800">Remove</button>
                </div>
            ))
        
        }</div>
    );
}