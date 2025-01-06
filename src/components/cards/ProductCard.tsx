import Link from "next/link";
import Image from "next/image";
import BaseCard from "./BaseCard";
import { product } from "@/data/products-data";

interface productCardProps {
    product: product;
}

export default function ProductCard({ product }: productCardProps) {
  return (
    <BaseCard className="flex flex-wrap text-pretty justify-center">
      <Link href={"products/" + product.id} key={product.id} className="py-2 flex flex-col">
        <Image
          src={product.imageUrl}
          alt={product.alt}
          width="100"
          height="1"
          className="mx-auto"
        />
        <h1 className="uppercase tracking-wide mt-2 text-xl text-center font-semibold">{product.name}</h1>
        <p className="p-2 text-wrap">{product.description}</p>
        <p className=" p-2 mt-auto font-bold">Price: {product.price} €</p>
      </Link>
    </BaseCard>
  );
}
