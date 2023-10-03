import type { AppProps } from "next/app";
// eslint-disable-next-line camelcase
import {
  Press_Start_2P as PressStart2P,
  Syne_Mono as SyneMono,
} from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const headFont = PressStart2P({
  display: "swap",
  weight: "400",
  style: "normal",
  fallback: ["cursive"],
  subsets: ["latin", "latin-ext"],
});
const bodyFont = SyneMono({
  display: "swap",
  weight: ["400"],
  style: "normal",
  fallback: ["monospace"],
  subsets: ["latin", "latin-ext"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style id="fonts" global={"true" as unknown as boolean}>
          {`
            :root {
              --font-header: ${headFont.style.fontFamily};
              --font-mono: ${bodyFont.style.fontFamily};
            }
          `}
        </style>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
