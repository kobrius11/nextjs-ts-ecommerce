import { product } from "@/data/products-data";
import Image from "next/image";
import Link from "next/link";

interface ProductsListProps {
  products: product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map(product => {
        return (
            <Link href={'products/' + product.id} key={product.id} className="flex flex-col max-w-sm m-2 border border-emerald-600 bg-sky-700 p-2 text-center">
                <Image
                    src={product.imageUrl}
                    alt={product.alt}
                    width={100}
                    height={100}
                    className="mx-auto"/>
                <h1 className="mt-2 text-lg font-semibold">{product.name}</h1>
                <p>{product.description}</p>
                <p className="font-bold mt-auto">Price: {product.price} €</p>
            </Link>

        );
      })}
    </div>
  );
}
