import CartItems from "./CartItems";

export default function CartPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="container max-w-7xl h-screen bg-gray-800 flex flex-col">
        <div className="grid grid-cols-3 bg-slate-600 p-8 text-center">
          <h1 className="uppercase text-2xl font-bold tracking-wider whitespace-nowrap">
            User, {"Placeholder"} shopping cart
          </h1>
        </div>
        <CartItems />
        <div className="grid grid-cols-5 mt-auto p-5 bg-slate-700">
            <button className="rounded-md col-start-5 p-2 mx-10 bg-red-600 hover:bg-red-700">
              Checkout
            </button>
        </div>
      </div>
    </div>
  );
}
