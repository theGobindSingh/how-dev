import { type Ref, forwardRef } from "react";
import { homeLandingTexts } from "@/common/common-data";
import getid from "@/common/getid";
import { landingHeading, landingWrapper } from "./styles";

function HL(_: unknown, ref: Ref<HTMLDivElement>) {
  return (
    <main css={landingWrapper} ref={ref}>
      <h1
        css={landingHeading}
        title={homeLandingTexts.join(" ")}
        aria-label={homeLandingTexts.join(" ")}
      >
        <span>
          {homeLandingTexts[0].split("").map((char) => {
            const key = getid();
            return <span key={key}>{char}</span>;
          })}
        </span>
        <span>{homeLandingTexts[1]}</span>
      </h1>
    </main>
  );
}
const HomeLanding = forwardRef<HTMLDivElement, unknown>(HL);
export default HomeLanding;
