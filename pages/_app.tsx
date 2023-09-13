import type { AppProps } from "next/app";
import { Poppins, Nova_Mono as NovaMono } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";
import Header from "@/modules/header";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

const novaMono = NovaMono({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style id="fonts" global={"true" as unknown as boolean}>
          {`
            :root {
              --font-primary: ${poppins.style.fontFamily};
              --font-mono: ${novaMono.style.fontFamily};
            }
          `}
        </style>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
