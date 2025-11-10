import { CoverImage } from "./ui/cover-image";
import { Intro } from "./ui/intro";

export function LandingPage() {
  return (
    <div>
      <Intro />
      <div className="mb-8 md:mb-16">
        <CoverImage />
      </div>
    </div>
  );
}
