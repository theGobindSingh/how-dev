import { useCallback, useEffect, useRef } from "react";
import { HomeLanding } from "@/modules/home";
import { mainHomeWrapper } from "@/modules/home/styles";

export default function Home() {
  const landingRef = useRef<HTMLDivElement>(null);
  const landingCallback = useCallback((scrollPos: number) => {
    const spans = Array.from(
      landingRef.current?.querySelectorAll("span") ?? []
    );
  }, []);
  const scrollCallback = useCallback<EventListener>(() => {
    const scrollPos = window.scrollY;
    landingCallback(scrollPos);
  }, [landingCallback]);
  useEffect(() => {
    window.addEventListener("scroll", scrollCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, [scrollCallback]);
  return (
    <section id="home" aria-label="home" css={mainHomeWrapper}>
      <HomeLanding ref={landingRef} />
    </section>
  );
}
