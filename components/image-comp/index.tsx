/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { imgContainerWrapper } from "./styles";
import type { ImageContainerProps } from "./types";

export default function ImageComp(props: ImageContainerProps) {
  const { containerClassName, containerCss, ...allOtherProps } = props;
  return (
    <div
      className={
        "img-container" + (containerClassName ? " " + containerClassName : "")
      }
      css={[imgContainerWrapper, containerCss]}
    >
      <Image {...allOtherProps} fill sizes="100%" />
    </div>
  );
}
