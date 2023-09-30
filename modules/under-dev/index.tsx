import { useEffect } from "react";
import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { ConstructionLottie } from "@/components/construction-lottie";
import { home } from "./styles";

export default function UnderDev() {
  useEffect(() => {
    const header = document.querySelector("#__next > header") as HTMLDivElement;
    if (header?.style) {
      header.style.display = "none";
    }
    return () => {
      const header = document.querySelector(
        "#__next > header"
      ) as HTMLDivElement;
      if (header?.style) {
        header.style.display = "flex";
      }
    };
  }, []);
  const number = "+919415507316";
  const message = "Hi, I would like to work with you";
  return (
    <section id="home" css={home}>
      <main>
        <h2>
          <span>Website Under Development</span>
        </h2>
        <h1>
          <span>Hymns</span>
          <span>Of</span>
          <span>Web</span>
        </h1>
        <p className="about">
          We are a group of passionate freelancers that build awesome and cool
          websites. We try to use the best and most efficient modern day
          practices to build your websites while also making your websites fun
          and interactive :)
        </p>
        <ConstructionLottie className="cons-lottie" />

        <p className="work">Want to work with us?</p>
        <Link
          href={`https://wa.me/${number}?text=${encodeURIComponent(message)}`}
          className="whatsapp"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsWhatsapp />
          <span>Whatsapp</span>
        </Link>
        <Link
          href="https://www.instagram.com/hymnsofweb/"
          className="insta"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsInstagram />
          <span>Instagram</span>
        </Link>
      </main>
    </section>
  );
}
