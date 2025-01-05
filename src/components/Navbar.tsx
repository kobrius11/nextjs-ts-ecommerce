import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-transparent text-slate-950 dark:text-slate-300 w-screen">

      <Link href={"#"} className="px-5 xl:px-12 py-6 flex w-1/3 item-center">LOGO</Link>

      <ul className="hidden md:flex px-4 mx-auto items-center font-semibold space-x-12">
        <li><Link href="/products/" className="hover:text-gray-200">Products</Link></li>
        <li><Link href="/checkout/" className="hover:text-gray-200">Checkout</Link></li>
        <li><Link href="/cart/" className="hover:text-gray-200">Cart</Link></li>
      </ul>
    </nav>
  );
}
