// src/views/home/ProductGallery.tsx
import { FC } from "react";
import ProductItem from "./ProductItem";

const ProductGallery: FC = () => {
  const products = [
    { id: 1, name: 'T-shirt - Pizza Day', src: '/imagen1.png', collection: 'Pizza Day', price: '$399.00' },
    { id: 2, name: 'T-shirt - Pizza Day', src: '/imagen1.png', collection: 'Pizza Day', price: '$399.00' },
    { id: 3, name: 'T-shirt - Pizza Day', src: '/imagen1.png', collection: 'Pizza Day', price: '$399.00' },
    { id: 4, name: 'T-shirt - Pizza Day', src: '/imagen1.png', collection: 'Pizza Day', price: '$399.00' },
    { id: 5, name: 'T-shirt - Pizza Day', src: '/imagen1.png', collection: 'Pizza Day', price: '$399.00' },
    { id: 6, name: 'T-shirt - Pizza Day', src: '/imagen1.png', collection: 'Pizza Day', price: '$399.00' },
    // Agrega más productos según sea necesario
  ];

  return (
    <div className="flex flex-col gap-[40px]">
      {/* ...otros elementos... */}
      <div className="grid grid-cols-2 gap-[34px] justify-evenly mb-[60px]">
        {products.map((product) => (
          <ProductItem 
            key={product.id}
            id={product.id}
            name={product.name}
            src={product.src}
            collection={product.collection}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
