// src/views/product/ProductDetailPage.tsx
import { useRouter } from "next/router";
import React, { useState, useMemo, useRef, useEffect, FC } from "react";
import productsData from "../../data/productsData";
import { Product } from "../../types/productTypes";
import Link from "next/link";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import BigNumber from "bignumber.js";
import { createQR, encodeURL, TransferRequestURLFields, findReference, validateTransfer, FindReferenceError, ValidateTransferError } from "@solana/pay";
import { PublicKey } from "@solana/web3.js"
import { clusterApiUrl, Connection, Keypair } from "@solana/web3.js";



const ProductDetailPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const shopAddress = new PublicKey('9DGH6yyCtjkYTM5fWX1e8933kuJz9txwRbNSuT2mR7he') 
  const usdcAddress = new PublicKey('Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr')
  const reference = useMemo(() => Keypair.generate().publicKey, []) // Unique address that we can listen for payments to
  const qrRef = useRef<HTMLDivElement>(null) // ref to a div where we'll show the QR code
  const [start, setStart] = useState(false);

  function upgradeData() {
    alert(qrRef)
    let new_amount = new BigNumber(10);
    //new_amount = new_amount.plus(+amount/+value)
    new_amount = new_amount.plus(0)

    const urlParams: TransferRequestURLFields = {
      recipient: shopAddress,
      splToken: usdcAddress,
      amount: new_amount,
      reference,
      label: "Dopamine",
      message: "Thank you for your purchase!",
    }

    const url = encodeURL(urlParams)
    const qr = createQR(url, 412, 'transparent')
    
    alert(qrRef)
    qrRef.current.innerHTML = ''
      qr.append(qrRef.current)
      setStart(true)

    if (qrRef.current && new_amount.isGreaterThan(0)) {
      
    }
  }

  useEffect(() => {
    // Encuentra el producto por ID desde los datos estáticos
    const productFound = productsData.find((p) => p.id === Number(id));
    if (productFound) {
      setProduct(productFound);
    }
  }, [id]);

  

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full h-screen p-[32px] justify-center gap-[35px] items-center bg-[#1E1E1E]">
      <div className="flex w-full justify-between border-solid border-b-[1px] border-[#FFFFFF]">
        <h1 className="text-[20px] font-medium text-[#FFFFFF] font-sans">
          {product.name}
        </h1>
        <Link href={"/"}>
          <i
            className="ri-close-line"
            style={{ fontSize: "24px", color: "#FFFFFF" }}
          ></i>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between">
        <div className="">
          <img
            src={product.src}
            alt={product.name}
            className="w-[426px] h-[397px] rounded-20"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-[18px]">
          <div className="flex flex-col gap-[18px]">
            <h2 className="text-[#FFFFFF] font-medium text-[32px]">
              {product.name}
            </h2>
            <p className="text-[#FFFFFF] font-medium text-[32px]">
              {" "}
              MXN{product.price}
            </p>
          </div>
          <div className="flex flex-col gap-[16px] items-center">
            <h1 className="text-[18px] font-medium text-[#FFFFFF]">Quantity</h1>
            <div className="flex w-[167px] h-[56px] border-[#FFFFFF] items-center justify-center border-solid border-[1px] text-[#FFFFFF] rounded-[10px]">
              <button
                onClick={() => updateQuantity(quantity - 1)}
                className="w-full"
              >
                -
              </button>
              <span className="text-[16px] font-bold">{quantity}</span>
              <button
                onClick={() => updateQuantity(quantity + 1)}
                className="w-full"
              >
                +
              </button>
            </div>
          </div>
          {product.colorOptions && (
            <div className="flex flex-col items-center gap-[16px]">
              <h1 className="text-[18px] font-medium text-[#FFFFFF]">Color</h1>
              <select
                id="color"
                className=" flex border bg-transparent text-[#FFFFFF] w-[300px] md:w-[424px] h-[56px] border-gray-300 rounded-[10px]  "
              >
                {product.colorOptions.map((color, index) => (
                  <option key={index}>{color}</option>
                ))}
              </select>
            </div>
          )}
          <Popup trigger=
                {<button
                  className="w-[424px] h-[56px] bg-[#E4FF3F] rounded-[50px] font-semibold text-[16px] text-[#000000] "
                  onClick={upgradeData}
                > Checkout test pop up</button>}
                position="right center">
                  
                <div ref={qrRef} >TEST DIV</div>
            </Popup>

          <button 
          className="w-[424px] h-[56px] bg-[#E4FF3F] rounded-[50px] font-semibold text-[16px] text-[#000000] "
          onClick={(e) => {
            e.preventDefault();
            window.location.href='../checkout';
            }}
          > Checkout </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
