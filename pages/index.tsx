import useMasterLandingPage from "@/hooks/use-master-landing-page";
import { HomeLanding, HomeAbout } from "@/modules/home";
import { mainHomeWrapper } from "@/modules/home/styles";

export default function Home() {
  const { heroText, aboutSection } = useMasterLandingPage();
  const { landingRefBottom, landingRefTop } = heroText;
  const { aboutRef } = aboutSection;

  return (
    <section id="home" aria-label="home" css={mainHomeWrapper}>
      <HomeLanding ref={landingRefTop} />
      <HomeAbout ref={aboutRef} />
      <div css={{ height: "300vh" }}></div>
      <HomeLanding ref={landingRefBottom} atBottom />
    </section>
  );
}
