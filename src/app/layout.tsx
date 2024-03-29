import type { Metadata } from "next";

// fonts
import { Inter, Archivo } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const campton = localFont({
  src: [
    {
      path: "../../public/fonts/campton/CamptonThin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/campton/CamptonExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/campton/CamptonLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/campton/CamptonBook.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/campton/CamptonMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/campton/CamptonSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/campton/CamptonBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/campton/CamptonExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/campton/CamptonBlack.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-campton",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          "font-inter h-full bg-white flex flex-col",
          inter.variable,
          archivo.variable,
          campton.variable
        )}
      >
        <div className="absolute px-[80px] mt-[64px] w-full">
          <Navbar />
        </div>
        <div className="grow">{children}</div>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
