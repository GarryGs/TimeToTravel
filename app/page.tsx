import { Features } from "@components/features";
import { CarouselComponent } from "../components/CarouselComp";
import { GuideComp } from "../components/GuideComp";
import { ServiceComp } from "../components/ServicesComp";

export default function Home() {

  return (
    <div>
      <CarouselComponent></CarouselComponent>
      <ServiceComp></ServiceComp>
      <GuideComp></GuideComp>
      <Features></Features>
    </div>
  );
}
