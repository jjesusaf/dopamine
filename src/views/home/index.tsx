import { FC } from "react";
import { useAutoConnect } from "contexts/AutoConnectProvider";
import NetworkSwitcher from "components/NetworkSwitcher";
import dynamic from "next/dynamic";
import Image from "next/image";
import ProductGallery from "./ProductGallery";
import UserProfile from "./UserProfile";

export const HomeView: FC = ({}) => {

  return (
    <div className="flex mt-[86px] mr-[40px] ml-[40px] justify-between">
     <UserProfile/>
     <ProductGallery/>
    </div>
  );
};

