import { FC } from "react";
import Image from "next/image";
import { useAutoConnect } from "contexts/AutoConnectProvider";
import dynamic from "next/dynamic";
import NetworkSwitcher from "./NetworkSwitcher";

const WalletMultiButtonDynamic = dynamic(
  async () => (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

interface UserProfileProps {
  autoConnect: boolean;
  setAutoConnect: (autoConnect: boolean) => void;
}

export const UserProfile: FC<UserProfileProps> = ({ autoConnect, setAutoConnect }) => (
  <div className="flex w-full md:w-2/5 lg:w-1/3 flex-col gap-8 md:gap-10">
    {/* Contenido de UserProfile omitido por brevedad */}
  </div>
);
