import Lottie from "lottie-react";
import constructionLottie from "@public/assets/lottie/construction.json";

export function ConstructionLottie(props: any) {
  return <Lottie animationData={constructionLottie} {...props}></Lottie>;
}
