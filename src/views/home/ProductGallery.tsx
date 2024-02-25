// src/views/home/ProductGallery.tsx
import { FC } from "react";
import Link from "next/link";
import ProductItem from "./ProductItem";
import productsData from "../../data/productsData";

const ProductGallery: FC = () => {
  return (
    <div className="flex flex-col gap-[40px]">
      {/* ...otros elementos... */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[34px] justify-evenly mb-[60px]">
        {productsData.map((product) => (
          <Link href={`/product/${product.id}`} passHref key={product.id}>        
              <ProductItem {...product} />      
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
