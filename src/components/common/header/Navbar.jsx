"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="relative">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-black z-40 py-3 shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo/whitelogo.png"
                            alt="Logo"
                            width={150}
                            height={80}
                            priority
                            className="object-contain max-h-[50px] md:max-h-[70px] w-auto"
                        />
                    </Link>

                    {/* CTA Button */}
                    <Link
                        href="https://in.bookmyshow.com/cinemas/delhi-ncr/miraj-cinemas-azadpur-delhi/buytickets/MCAZ/20250826"
                        className="text-white font-semibold text-sm sm:text-base md:text-lg px-3 sm:px-5 py-2 rounded-xl border border-yellow-400 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        Book Ticket Now
                    </Link>
                </div>
            </nav>

            {/* Gradient overlay below navbar (optional) */}
            <div className="fixed top-[60px] md:top-[80px] left-0 w-full h-10 z-30 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
            </div>
        </div>
    );
};

export default Navbar;
