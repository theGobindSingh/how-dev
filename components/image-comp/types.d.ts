import type { ImageProps } from "next/image";
import { SerializedStyles } from "@emotion/react";
export interface ImageContainerProps extends ImageProps {
  containerClassName?: string;
  containerCss?: SerializedStyles;
}
