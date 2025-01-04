import ProductsList from "@/components/ProductsList";
import { productData } from "@/data/products-data";


export default function ProductsPage () {
    return (
        <div className="flex justify-center items-center">
            <ProductsList products={productData}/>
        </div>
    );
}