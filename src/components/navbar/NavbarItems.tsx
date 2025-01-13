"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import UserCard from "./UserCard";
import { BASE_URL } from "@/lib/settings";



export default function NavbarItems() {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (!storedUserId) return;
    const fetchUser = async () => {
      const user = await (await fetch(new URL(`/api/users/${storedUserId}`, BASE_URL))).json()
      setUsername(user.username)
    } 
    fetchUser()
  }, []);

  return (
    <Navbar>
      <Link href={"#"} className="px-5 xl:px-12 py-6 flex w-1/3 item-center">
        LOGO
      </Link>

      <ul className="hidden md:flex px-4 mx-auto items-center font-semibold space-x-12">
        <li>
          <Link href="/products/" className="hover:text-gray-200">
            Products
          </Link>
        </li>
        <li>
          <Link href="/checkout/" className="hover:text-gray-200">
            Checkout
          </Link>
        </li>
        <li>
          <Link href="/cart/" className="hover:text-gray-200">
            Cart
          </Link>
        </li>
      </ul>

      <div className="space-x-4 flex p-4 items-center">
        {username ? (
          <UserCard />
        ) : (
          <>
            <Link href="/login" className="text-gray-600 hover:text-blue-500 font-medium">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Register
            </Link>
          </>
        )}
      </div>
    </Navbar>
  );
}