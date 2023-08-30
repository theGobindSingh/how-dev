import { useCallback, useEffect, useRef } from "react";

export default function useMasterLandingPage() {
  const landingRefTop = useRef<HTMLDivElement>(null);
  const landingRefBottom = useRef<HTMLDivElement>(null);

  const landingTopCallback = useCallback((scrollPos: number) => {
    const spans: HTMLSpanElement[] = Array.from(
      landingRefTop.current?.querySelectorAll(
        ".landing-heading > .main-span-wrapper"
      ) ?? []
    );
    const spanOne = spans[0];
    const spanTwo = spans[1];
    if (spanOne && spanTwo) {
      spanOne.style.transform = `translateX(${scrollPos * 0.5}px)`;
      spanTwo.style.transform = `translateX(-${scrollPos * 0.5}px)`;
    }
  }, []);

  const landingBottomCallback = useCallback((scrollPos: number) => {
    const spans: HTMLSpanElement[] = Array.from(
      landingRefBottom.current?.querySelectorAll(
        ".landing-heading > .main-span-wrapper"
      ) ?? []
    );
    const spanOne = spans[0];
    const spanTwo = spans[1];
    const percentMove = (document.body.scrollHeight / scrollPos - 1.25) * 100;
    if (spanOne && spanTwo) {
      spanOne.style.transform = `translateX(-${percentMove}%)`;
      spanTwo.style.transform = `translateX(${percentMove}%)`;
    }
  }, []);

  const scrollCallback = useCallback<EventListener>(() => {
    const scrollPos = window.scrollY;
    landingTopCallback(scrollPos);
    landingBottomCallback(scrollPos);
  }, [landingTopCallback, landingBottomCallback]);

  const wheelCallback = useCallback((e: WheelEvent) => {
    const bodyHeight = document.body.scrollHeight;
    const delta = e.deltaY;
    const currentScrollPos = window.scrollY;
    if (currentScrollPos === 0 && e.deltaY < 0) {
      window.scrollTo({ top: bodyHeight, behavior: "instant" });
      window.scrollTo({ top: bodyHeight + delta, behavior: "smooth" });
      return;
    }
    if (currentScrollPos === bodyHeight - window.innerHeight && e.deltaY > 0) {
      window.scrollTo({ top: 0, behavior: "instant" });
      window.scrollTo({ top: Math.abs(delta), behavior: "smooth" });
      return;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollCallback);
    window.addEventListener("wheel", wheelCallback);
    return () => {
      window.removeEventListener("scroll", scrollCallback);
      window.removeEventListener("wheel", wheelCallback);
    };
  }, [scrollCallback, wheelCallback]);

  return [landingRefTop, landingRefBottom];
}
