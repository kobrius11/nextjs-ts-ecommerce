import { product } from "@/data/products-data";
import ProductCard from "./cards/ProductCard";

interface ProductsListProps {
  products: product[];
}

export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => {
        return (
          <ProductCard product={product} key={product.id}/>
        );
      })}
    </div>
  );
}
