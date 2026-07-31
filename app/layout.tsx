import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/globals.css";
import DesktopBookImage from "@/app/assets/DesktopNoteBook.png";
import MobileBookImage from "@/app/assets/MobileNotebook.png";
import Image from "next/image";
import { DrawerNavigation } from "./components/DrawerNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joel Atwood | Resume",
  description: "Resume and portfolio for Joel Atwood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <DrawerNavigation />
        <div className="layoutBackground">
          <Image
            src={DesktopBookImage}
            alt="Desktop Book Background Image"
            className="layoutBackgroundImage desktopBookImage"
          />
          <Image
            src={MobileBookImage}
            alt="Mobile Book Background Image"
            className="layoutBackgroundImage mobileBookImage"
          />
          <div className="layoutContent">
            <div className="layoutContentInner">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
