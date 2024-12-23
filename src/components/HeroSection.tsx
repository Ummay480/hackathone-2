import Image from "next/image";
import Link from "next/Link"
import { IoSearchOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";

const HeroSection = () => {
  return (
    <div className="relative bg-black text-white px-10">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center px-10 py-6">
      <h3 className="text-2xl font-semibold text-orange-400 ml-4">Food</h3>
      <h3 className="flex text-2xl font-semibold text-white -ml-32">tuck</h3>
        <nav className="flex gap-6">
          {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-orange-400"
              >
                {item}
              </Link>
            )
          )}
        </nav>
        <div className="flex gap-4 items-center">
  {/* Input with Search Icon */}
  <div className="relative w-full max-w-xs">
    <input
      type="text"
      placeholder="Search..."
      className="bg-transparent border-2 border-orange-400 rounded-full px-4 py-2 w-full placeholder:text-white placeholder:italic"
    />
    <IoSearchOutline className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-2xl" />
  </div>

  {/* Bag Icon and Label */}
  <button className="text-white text-lg flex items-center gap-2">
    <PiHandbag className="text-2xl" />
    
  </button>
</div>
      </header>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start px-10 lg:px-20 py-16">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-orange-400 font-great-vibes text-2xl font-normal leading-10 text-left underline underline-offset-2 decoration-orange-400 mb-4">
            It&apos;s Quick & Amusing!
          </h2>


          <h2 className="text-4xl font-bold mb-6">
            The Art of Speed <br /> Food Quality
          </h2>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Varius
            sed pharetra dictum neque massa congue.
          </p>
          <button className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-yellow-600">
            See Menu
          </button>
        </div>

        {/* Image Content */}
        <div className="relative lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src="/images/image-84.png"
            alt="Food Dish"
            width={500}
            height={500}
            className="rounded-lg"
          />
          
           
          </div>
        </div>
      </div>
    
  );
};

export default HeroSection;
