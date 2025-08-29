import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/header/Navbar";
import Footer from "@/components/common/footer/Footer";
import SocialLinks from "@/components/SocialLinks";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aakash Courtyard",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black`}
      >
        <Navbar />
        {children}
        <SocialLinks />
        <Footer />
      </body>
    </html>
  );
}
