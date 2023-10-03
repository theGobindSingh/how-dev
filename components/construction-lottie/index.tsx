import Lottie from "lottie-react";
import constructionLottie from "@public/assets/lottie/construction.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ConstructionLottie(props: any) {
  return <Lottie animationData={constructionLottie} {...props}></Lottie>;
}
