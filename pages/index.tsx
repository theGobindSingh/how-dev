import useMasterLandingPage from "@/hooks/use-master-landing-page";
import { HomeLanding } from "@/modules/home";
import { mainHomeWrapper } from "@/modules/home/styles";

export default function Home() {
  const [landingRefTop, landingRefBottom] = useMasterLandingPage();

  return (
    <section id="home" aria-label="home" css={mainHomeWrapper}>
      <HomeLanding ref={landingRefTop} />
      <div css={{ height: "300vh" }}></div>
      <HomeLanding ref={landingRefBottom} atBottom />
    </section>
  );
}
