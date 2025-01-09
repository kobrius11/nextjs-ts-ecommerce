import ProductsList from "@/components/ProductsList";
import { BASE_URL } from "@/lib/settings";

export default async function ProductsPage () {
    const productsPath = new URL('/api/products', BASE_URL);
    const productData = await (await fetch(productsPath.toString())).json();
    
    return (
        <div className="flex justify-center items-center">
            <ProductsList products={productData}/>
        </div>
    );
}