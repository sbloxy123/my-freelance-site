import Image from "next/image";
import blur from "@/public/blur.png";
import HeroCTA from "./HeroCTA";

const NewHero = () => {
  return (
    <div className="md:h-screen max-h-full bg-[#ecf0f3] relative">
      <Image
        src={blur}
        alt="blur"
        fill
        style={{ objectFit: "cover", position: "absolute" }}
        quality={10}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="animate-pulse"
        priority
        // placeholder="blur"
        // blurDataURL="/blur-placeholder.png"
      />
      {/* Main Text */}
      <div className="flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-28 md:pt-28">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-normal z-20 w-[90vw]">
          Freelance Web Designer and Developer building incredibly fast, smooth
          & performant websites with{" "}
        </h1>
        <h1 className="text-4xl sm:text-6xl tracking-normal z-20 w-[70vw]">
          <span className="bg-gradient-to-r from-hero_dark_orange-900 to-hero_light_orange-900 text-transparent bg-clip-text font-bold">
            Next.js
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-hero_dark_orange-900 to-hero_light_orange-900 text-transparent bg-clip-text font-bold">
            React
          </span>
        </h1>
        <HeroCTA />
      </div>
    </div>
  );
};

export default NewHero;
