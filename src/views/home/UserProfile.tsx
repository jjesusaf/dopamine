// src/views/home/UserProfile.tsx
import { FC } from "react";
import Image from "next/image";
import { useAutoConnect } from "../../contexts/AutoConnectProvider";
import dynamic from "next/dynamic";
import NetworkSwitcher from "../../components/NetworkSwitcher";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const UserProfile: FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();

  return (
    <div className="flex w-full items-center md:items-start md:w-[30%] flex-col gap-[30px]">
      <div className="rounded-[100%] w-[108px] h-[108px] relative">
        <Image
          src="/Switch.png"
          alt="Descripción de la imagen"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-[75px]">
        <div>
          <h1 className="text-[#FFFFFF] font-bold text-[24px]">@remarmarea</h1>
          <span className="text-[#93989A] text-[16px] font-normal">
            0x9b3E...7a5Bc <i className="ri-checkbox-multiple-blank-line"></i>
          </span>
        </div>
        <i className="text-[#FFFFFF] ri-more-fill"></i>
      </div>
      <p className="flex text-[14px] w-[300px] md:w-full text-[#FFFFFF] font-normal text-center md:text-left">
        Somos partidarios y creemos en los principios criptopunks así como en la
        criptoeconomia, el blockchain y la descentralización. ⛓
      </p>
      <div className="flex gap-[40px] p-[16px] justify-center border-t-[1px] border-b-[1px]">
        <div className="flex flex-col items-center">
          <span className="text-[16px] font-bold text-[#FFFFFF]">96</span>
          <span className="text-[#93989A] font-medium text-[14px]">Buyers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[16px] font-bold text-[#FFFFFF]">247</span>
          <span className="text-[#93989A] font-medium text-[14px]">
            Following
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[16px] font-bold text-[#FFFFFF]">1,542</span>
          <span className="text-[#93989A] font-medium text-[14px]">items</span>
        </div>
      </div>
      <div className="flex flex-col text-[#F5F7FA] items-center gap-[30px]">
        <label className="flex w-full justify-between items-center">
          <span>Autoconnect</span>
          <input
            type="checkbox"
            checked={autoConnect}
            onChange={(e) => setAutoConnect(e.target.checked)}
            className="toggle"
          />
        </label>
        <NetworkSwitcher />
        <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6" />
      </div>
    </div>
  );
};

export default UserProfile;
