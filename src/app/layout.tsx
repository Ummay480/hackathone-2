'use client'; // Ensure this is only for the client-side component

import { usePathname } from "next/navigation"; // Import usePathname hook
import ReduxProvider from '../providers/ReduxProvider';
import ThemeProvider from '../providers/ThemeProvider';
import { ClerkProvider } from "@clerk/nextjs";
import Cart from "@/components/Cart";
import { Inter, Great_Vibes } from "next/font/google"; // Import fonts
import "./globals.css";
import Footer from "@/components/Footer";

// Inter Font
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Prevents font flickering
  variable: "--font-inter",
  weight: ["400", "500", "700"], // Adjust weights as needed
});

// Great Vibes Font
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-great-vibes",
  weight: "400", // Great Vibes only supports 400 weight
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current pathname

  return (
    <html lang="en" className={`${inter.variable} ${greatVibes.variable} antialiased`} dir="ltr">
      <body>
        {/* Wrapping ReduxProvider and ThemeProvider */}
        <ClerkProvider>
        <ReduxProvider>
          <ThemeProvider>
             <div className="overflow-x-hidden min-h-screen flex flex-col">
              {/* Conditionally render Cart component only on the /cart page */}
              {pathname === '/cart' && <Cart />}

              {/* Main content area */}
              <main className="flex-grow">
                {children} {/* This is where your pages will render */}
              </main>

              {/* Footer component at the bottom */}
              <Footer />
            </div>
          </ThemeProvider>
        </ReduxProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
