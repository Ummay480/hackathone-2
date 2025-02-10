'use client'; // Ensure this is only for the client-side component

import { usePathname } from "next/navigation"; // Import usePathname hook
import ReduxProvider from '../providers/ReduxProvider';
import ThemeProvider from '../providers/ThemeProvider';
import Cart from "@/components/Cart";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes", 
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current pathname

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased`} dir="ltr">
      <body>
        {/* Wrapping ReduxProvider and ThemeProvider */}
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
      </body>
    </html>
  );
}
