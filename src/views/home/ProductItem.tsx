// src/views/home/ProductItem.tsx
import { FC } from "react";
import Image from "next/image";
interface ProductItemProps {
  id: number;
  name: string;
  src: string;
  collection: string;
  price: string;
}

const ProductItem: FC<ProductItemProps> = ({
  id,
  name,
  src,
  collection,
  price,

}) => {
  const isPriority = true;
  return (
    <div key={id} className="w-[304.36px] h-[397px] rounded-[20px] relative" >
      <Image
        className="rounded-20"
         src={src}
         alt={name}
         fill // Usando 'fill' para cubrir el área del contenedor
         style={{ objectFit: "cover" }}
         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
         priority={isPriority}
      />
      <div className="p-4 absolute bottom-0 w-full h-[117px] rounded-b-20 bg-black bg-opacity-20 backdrop-blur-67">
        <h3 className="text-[16px] text-[#F5F7FA] font-bold">{name}</h3>
        <div className="flex items-center justify-between my-2">
          <div className="rounded-full bg-[#F8F9C1] w-[32px] h-[32px]"></div>
          <div className="flex flex-col">
            <span className="text-[12px] font-medium text-[#F5F7FA]">
              Collection
            </span>
            <span className="text-[14px] font-medium text-[#F5F7FA]">
              {collection}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] font-medium text-[#F5F7FA]">MXN</span>
            <span className="text-[16px] font-bold text-[#F5F7FA]">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
