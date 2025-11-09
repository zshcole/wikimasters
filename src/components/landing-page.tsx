import { HeroImage } from "./ui/hero-image";
import { Intro } from "./ui/intro";

export function LandingPage() {
  return (
    <div>
      <Intro />
      <div className="mb-8 md:mb-16">
        <HeroImage title={"cover"} src={"/"} />
      </div>
    </div>
  );
}
