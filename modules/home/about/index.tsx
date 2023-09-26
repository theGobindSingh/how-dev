import { type Ref, forwardRef } from "react";
import { aboutTextRibbon } from "@common-data";
import { aboutWrapper } from "./styles";

function A(_: unknown, ref: Ref<HTMLDivElement>) {
  const { count, text } = aboutTextRibbon;
  const ribbonSpans = Array(count)
    .fill(text)
    .map((text, index) => {
      return <span key={index}>{text}</span>;
    });
  return (
    <div ref={ref} css={aboutWrapper}>
      <div className="text-ribbon">{ribbonSpans}</div>
      About
    </div>
  );
}
const About = forwardRef(A);
export default About;
