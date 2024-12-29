"use client";

import Hero from "@/components/HeroBanner";
import Image from "next/image";

export default function CheckoutPage() {
  return (
    <>
      <div>
        <Hero title="Checkout" />

        <div className="container mx-auto px-4 py-8 my-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Column - Forms */}
            <div className="space-y-6">
              {/* Shipping Address Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid gap-4">
                  {/* Add your form inputs here */}
                </div>
              </div>

              {/* Billing Address Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sameAsShipping"
                    className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <label
                    htmlFor="sameAsShipping"
                    className="text-sm text-gray-700"
                  >
                    Same as shipping address
                  </label>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex-1 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  Back to cart
                </button>
                <button className="flex-1 py-2 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  Proceed to shipping
                </button>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="p-6 rounded-lg border border-gray-300">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={`/images/item-${index + 1}.png`}
                        alt={`Order Item ${index + 1}`}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">Order Item {index + 1}</h3>
                      <p className="text-sm text-gray-500">Description</p>
                      <p className="text-sm text-gray-500">$50</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">$150</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">$10</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$15</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-base font-semibold">
                  <span>Total</span>
                  <span>$175</span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                Place an order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
