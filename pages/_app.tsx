import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style id="fonts" global={"true" as unknown as boolean}>
          {`
            :root {
              --font-primary: ${poppins.style.fontFamily};
            }
          `}
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
