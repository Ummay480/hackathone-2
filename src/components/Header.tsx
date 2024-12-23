// components/HeroSection.tsx
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-black">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-orange-500 text-lg font-semibold">
          It&apos;s Quick & Amusing!
        </h2>
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-snug">
          The Art of Speed <br /> Food Quality
        </h1>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-lg font-semibold">
          See Menu
        </button>
      </div>

      {/* Right Image */}
      <div className="relative lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src="/hero-main-dish.png" // Make sure to place your image in public folder
          alt="Main Dish"
          width={500}
          height={500}
          className="rounded-full shadow-lg"
        />
        {/* Circular smaller food images */}
        <div className="absolute top-0 left-12 lg:left-0 lg:top-0">
          <Image
            src="/food-small1.png" // Ensure these images are also in the public folder
            alt="Small Dish 1"
            width={70}
            height={70}
            className="rounded-full border-4 border-black"
          />
        </div>
        <div className="absolute top-1/3 right-0">
          <Image
            src="/food-small2.png"
            alt="Small Dish 2"
            width={70}
            height={70}
            className="rounded-full border-4 border-black"
          />
        </div>
        <div className="absolute bottom-0 left-16">
          <Image
            src="/food-small3.png"
            alt="Small Dish 3"
            width={70}
            height={70}
            className="rounded-full border-4 border-black"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
