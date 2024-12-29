'use client';
import Hero from "@/components/HeroBanner";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Hero title="Checkout" />

        <div className="container mx-auto px-4 py-8 my-[120px]">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Forms */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  {/* Additional form fields */}

                  <div>
                    <label
                      htmlFor="address1"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Address 1
                    </label>
                    <input
                      type="text"
                      id="address1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-4">Billing Address</h2>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sameAsShipping"
                    className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                    Same as shipping address
                  </label>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between pt-4 gap-4">
                <button className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-full sm:w-72">
                  Back to cart
                </button>
                <button className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-full sm:w-72">
                  Proceed to shipping
                </button>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="p-4 sm:p-6 rounded-lg border-2 border-gray-300">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="relative h-16 w-16">
                      <Image
                        src="/images/image-113.png"
                        alt="Chicken Tikka Kebab"
                        width={100}
                        height={100}
                        fill
                        className="rounded-md object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">Chicken Tikka Kebab</h3>
                      <p className="text-sm text-gray-500">150</p>
                      <p className="text-sm text-gray-500">50</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">130</span>
                </div>
              </div>

              <button className="w-full mt-4 px-6 py-3 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Place an order
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
