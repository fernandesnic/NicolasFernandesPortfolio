import { CvButton } from "../CvButton/CvButton";
import { HeroTitle } from "../HeroTitle/HeroTitle";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center text-center max-w-4xl w-full gap-10">
        {" "}
        <HeroTitle />
        <div className="mt-4 transition-transform hover:scale-105 duration-300">
          <CvButton />
        </div>
      </div>
    </section>
  );
};
