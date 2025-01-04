import Image from "next/image";
import { product, productData } from "@/data/products-data";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const prod: product | undefined = productData.find(
    (product) => product.id === id
  );

  return (
    <>
      {prod && (
        <div className="container mx-auto p-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
            <Image
              src={prod.imageUrl}
              alt={prod.alt}
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-8xl font-semibold p-2">{prod.name}</h1>
            <p className="text-4xl m-auto">{prod.description}</p>
            <p className="m-auto">Price: {prod.price}</p>
          </div>
        </div>
      )}
      {!prod && <p>Product Not Found</p>}
    </>
  );
}
