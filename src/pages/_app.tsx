import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import "remixicon/fonts/remixicon.css";
import { ContextProvider } from "contexts/ContextProvider";
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Dopamine</title>
      </Head>
      <ContextProvider>
        <div className="flex justify-around">
          <Component {...pageProps} />
        </div>
      </ContextProvider>
    </>
  );
};

export default App;
