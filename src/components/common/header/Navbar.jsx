"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="relative overflow-x-hidden"> {/* overflow-x fix */}
            <nav
                className="fixed top-0 left-0 w-full bg-black z-40 py-2"
                style={{ boxShadow: "0px 25px 20px -20px rgba(0,0,0,0.45)" }}
            >
                <div
                    className="
            max-w-screen-xl mx-auto px-4 md:px-6 py-3
            flex flex-col items-center justify-center gap-2
            md:flex-row md:justify-between md:gap-0
          "
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center justify-center">
                        <Image
                            src="/logo/whitelogo.png"
                            alt="Logo"
                            width={150}   // thoda chhota mobile ke liye
                            height={80}
                            priority
                            className="object-contain max-w-[150px] md:max-w-[180px] h-auto"
                        />
                    </Link>

                    {/* CTA Button */}
                    <Link
                        href="https://in.bookmyshow.com/cinemas/delhi-ncr/miraj-cinemas-azadpur-delhi/buytickets/MCAZ/20250826"
                        className="text-white font-semibold text-base md:text-2xl px-4 py-2 rounded-2xl border border-yellow-400 transition duration-300 hover:scale-105 text-center"
                        style={{ fontFamily: "Roboto Slab, serif" }}
                    >
                        Book Your Ticket
                    </Link>
                </div>
            </nav>

            {/* Gradient overlay below navbar */}
            <div className="fixed top-[70px] md:top-[90px] left-0 w-full h-12 z-30 pointer-events-none overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
            </div>
        </div>
    );
};

export default Navbar;
