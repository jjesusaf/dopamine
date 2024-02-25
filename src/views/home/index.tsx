import { FC } from "react";
import { useAutoConnect } from "contexts/AutoConnectProvider";
import NetworkSwitcher from "components/NetworkSwitcher";
import dynamic from "next/dynamic";
import Image from "next/image";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export const HomeView: FC = ({}) => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  return (
    <div className=" flex mt-[86px] mr-[40px] ml-[40px] justify-between">
      <div className=" flex w-[30%] flex-col gap-[30px] ">
        <div className=" rounded-[100%] w-[108px] h-[108px] relative">
          <Image
            className=" rounded-[20px]"
            src="/Switch.png"
            alt="Descripción de la imagen"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex items-center gap-[75px]">
          <div>
            <h1 className="text-[#FFFFFF] font-bold text-[24px]">@remarmarea</h1>
            <span className="text-[#93989A] text-[16px] font-normal">
              0x9b3E...7a5Bc <i className="ri-checkbox-multiple-blank-line"></i>
            </span>
          </div>
          <i className="ri-more-fill"></i>
        </div>
        <p className="text-[14px] text-[#FFFFFF] font-normal">
          Somos partidarios y creemos en los principios criptopunks así como en
          la criptoeconomia, el blockchain y la descentralización. ⛓ 
        </p>
        <div className="flex gap-[40px] p-[16px] justify-center border-t-[1px] border-b-[1px]">
          <div className="flex flex-col items-center">
            <span className="text-[16px] font-bold text-[#FFFFFF]">96</span>
            <span className="text-[#93989A] font-medium text-[14px] ">Buyers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className=" text-[16px] font-bold text-[#FFFFFF]">247</span>
            <span className="text-[#93989A] font-medium text-[14px]">Following</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[16px] font-bold text-[#FFFFFF]">1,542</span>
            <span className="text-[#93989A] font-medium text-[14px]">items</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <label className="flex w-full justify-between items-center">
            <a>Autoconnect</a>
            <input
              type="checkbox"
              checked={autoConnect}
              onChange={(e) => setAutoConnect(e.target.checked)}
              className="toggle bg-[#E4FF3F]"
            />
          </label>
          <NetworkSwitcher />
          <WalletMultiButtonDynamic className="btn-ghost btn-sm rounded-btn text-lg mr-6 " />
        </div>
      </div>
      <div className=" flex flex-col gap-[40px]">
        <div className="flex gap-[60px] font-bold text-[14px]">
          <button disabled>All items</button>
          <button disabled>Caps</button>
          <button disabled>T-shirts</button>
          <button disabled>Artworks</button>
          <button disabled>Collabs</button>
        </div>
        <div className="grid grid-cols-2 gap-[34px] justify-evenly mb-[60px]">
          <div className=" w-[304.36px] h-[397px]  rounded-[20px] relative">
            <Image
              className=" rounded-[20px]"
              src="/imagen1.png"
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
            />
            <div className="p-4 absolute bottom-0 w-[304.36px] h-[117px] rounded-b-20 xbg-black bg-opacity-20 backdrop-blur-67 ">
              <h3 className="text-[16px] font-bold">T-shirt - Pizza Day</h3>
              <div className="flex items-center justify-between my-2">
                <div className="rounded-full bg-[#F8F9C1] w-[32px] h-[32px]"></div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    Collection
                  </span>
                  <span className="text-[14px] font-medium text-[#F5F7FA]">
                    Pizza Day
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    MXN
                  </span>
                  <span className="text-[16px] font-bold text-[#F5F7FA]">
                    $399.00
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between"></div>
            </div>
          </div>
          <div className=" w-[304.36px] h-[397px]  rounded-[20px] relative">
            <Image
              className=" rounded-[20px]"
              src="/imagen1.png"
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
            />
            <div className="p-4 absolute bottom-0 w-[304.36px] h-[117px] rounded-b-20 xbg-black bg-opacity-20 backdrop-blur-67 ">
              <h3 className="text-[16px] font-bold">T-shirt - Pizza Day</h3>
              <div className="flex items-center justify-between my-2">
                <div className="rounded-full bg-[#F8F9C1] w-[32px] h-[32px]"></div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    Collection
                  </span>
                  <span className="text-[14px] font-medium text-[#F5F7FA]">
                    Pizza Day
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    MXN
                  </span>
                  <span className="text-[16px] font-bold text-[#F5F7FA]">
                    $399.00
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between"></div>
            </div>
          </div>
          <div className=" w-[304.36px] h-[397px]  rounded-[20px] relative">
            <Image
              className=" rounded-[20px]"
              src="/imagen1.png"
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
            />
            <div className="p-4 absolute bottom-0 w-[304.36px] h-[117px] rounded-b-20 xbg-black bg-opacity-20 backdrop-blur-67 ">
              <h3 className="text-[16px] font-bold">T-shirt - Pizza Day</h3>
              <div className="flex items-center justify-between my-2">
                <div className="rounded-full bg-[#F8F9C1] w-[32px] h-[32px]"></div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    Collection
                  </span>
                  <span className="text-[14px] font-medium text-[#F5F7FA]">
                    Pizza Day
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    MXN
                  </span>
                  <span className="text-[16px] font-bold text-[#F5F7FA]">
                    $399.00
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between"></div>
            </div>
          </div>
          <div className=" w-[304.36px] h-[397px]  rounded-[20px] relative">
            <Image
              className=" rounded-[20px]"
              src="/imagen1.png"
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
            />
            <div className="p-4 absolute bottom-0 w-[304.36px] h-[117px] rounded-b-20 xbg-black bg-opacity-20 backdrop-blur-67 ">
              <h3 className="text-[16px] font-bold">T-shirt - Pizza Day</h3>
              <div className="flex items-center justify-between my-2">
                <div className="rounded-full bg-[#F8F9C1] w-[32px] h-[32px]"></div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    Collection
                  </span>
                  <span className="text-[14px] font-medium text-[#F5F7FA]">
                    Pizza Day
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    MXN
                  </span>
                  <span className="text-[16px] font-bold text-[#F5F7FA]">
                    $399.00
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between"></div>
            </div>
          </div>
          <div className=" w-[304.36px] h-[397px]  rounded-[20px] relative">
            <Image
              className=" rounded-[20px]"
              src="/imagen1.png"
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
            />
            <div className="p-4 absolute bottom-0 w-[304.36px] h-[117px] rounded-b-20 xbg-black bg-opacity-20 backdrop-blur-67 ">
              <h3 className="text-[16px] font-bold">T-shirt - Pizza Day</h3>
              <div className="flex items-center justify-between my-2">
                <div className="rounded-full bg-[#F8F9C1] w-[32px] h-[32px]"></div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    Collection
                  </span>
                  <span className="text-[14px] font-medium text-[#F5F7FA]">
                    Pizza Day
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    MXN
                  </span>
                  <span className="text-[16px] font-bold text-[#F5F7FA]">
                    $399.00
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between"></div>
            </div>
          </div>
          <div className=" w-[304.36px] h-[397px]  rounded-[20px] relative">
            <Image
              className=" rounded-[20px]"
              src="/imagen1.png"
              alt="Descripción de la imagen"
              layout="fill"
              objectFit="cover"
            />
            <div className="p-4 absolute bottom-0 w-[304.36px] h-[117px] rounded-b-20 xbg-black bg-opacity-20 backdrop-blur-67 ">
              <h3 className="text-[16px] font-bold">T-shirt - Pizza Day</h3>
              <div className="flex items-center justify-between my-2">
                <div className="rounded-full bg-[#F8F9C1] w-[32px] h-[32px]"></div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    Collection
                  </span>
                  <span className="text-[14px] font-medium text-[#F5F7FA]">
                    Pizza Day
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-medium text-[#F5F7FA]">
                    MXN
                  </span>
                  <span className="text-[16px] font-bold text-[#F5F7FA]">
                    $399.00
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

