"use client";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import Link from "next/link";


export default function CheckoutPage() {
  return (
    <div>
      <NavBar/>
      <HeroBanner title="Checkout" />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Forms */}
          <div className="space-y-6 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
            <div className="grid gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="123 Main St"
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="city"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    placeholder="New York"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    id="zip"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    placeholder="10001"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select
                  id="country"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                </select>
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Billing Address</h2>
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

            <div className="flex flex-wrap gap-2 pt-4">
              <Link href="/cart">
              <button className="flex-1 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500">
                Back to cart
              </button>
              </Link>
              <button className="flex-1 py-2 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">
                Proceed to shipping
              </button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src="/images/chicken-tikka.png"
                      alt="Chicken Tikka"
                      width={64}
                      height={64}
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">Chicken Tikka</h3>
                    <p className="text-sm text-gray-500">Delicious chicken tikka</p>
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
  );
}
