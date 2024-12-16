// Import necessary modules
import React from 'react';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Images Section */}
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
        import Image from 'next/image';

<div className="flex flex-col space-y-4">
  <Image
    src="/images/tacos.jpg"
    alt="Tacos"
    width={600} // Explicit width
    height={192} // Explicit height (h-48 = 192px)
    className="rounded-lg object-cover"
  />
  <Image
    src="/images/chicken.jpg"
    alt="Fried Chicken"
    width={600}
    height={192}
    className="rounded-lg object-cover"
  />
</div>

<div className="flex flex-col space-y-4">
  <Image
    src="/images/burger.jpg"
    alt="Burger"
    width={600}
    height={192}
    className="rounded-lg object-cover"
  />
  <Image
    src="/images/cheeseburger.jpg"
    alt="Cheese Burger"
    width={600}
    height={192}
    className="rounded-lg object-cover"
  />
  <Image
    src="/images/salad.jpg"
    alt="Salad"
    width={600}
    height={192}
    className="rounded-lg object-cover"
  />
</div>

        </div>

        {/* Text Section */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-6">
          <h2 className="text-orange-500 font-semibold text-xl">Why Choose Us</h2>
          <h1 className="text-4xl font-bold leading-snug">
            Extra <span className="text-orange-500">ordinary taste</span> <br />
            And Experienced
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus.
          </p>

          {/* Icon Section */}
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 p-4 rounded-full mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 19.364L19.364 5.121M5 13v6h6m8-6h-6v6"
                  />
                </svg>
              </div>
              <p className="text-gray-300">Fast Food</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 p-4 rounded-full mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 17l4 4m0 0l4-4m-4 4V3"
                  />
                </svg>
              </div>
              <p className="text-gray-300">Lunch</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 p-4 rounded-full mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 10h16M10 6h6M6 16l3 3m-3-3l3-3m7 3l3-3m-3 3l3 3"
                  />
                </svg>
              </div>
              <p className="text-gray-300">Dinner</p>
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h1 className="text-4xl font-bold text-orange-500">30+</h1>
            <p className="text-gray-300">Years of Experienced</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
