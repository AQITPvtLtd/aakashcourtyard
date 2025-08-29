"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="relative">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-black z-40 py-3 shadow-md">
                <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                    {/* Left (Logo + CTA for mobile) */}
                    <div className="flex w-full items-center justify-between md:w-auto md:justify-start gap-3">
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

                        {/* CTA Button (always beside logo on small, goes right on large) */}
                        <Link
                            href="https://in.bookmyshow.com/cinemas/delhi-ncr/miraj-cinemas-azadpur-delhi/buytickets/MCAZ/20250826"
                            className="text-white font-semibold text-xl sm:text-base md:text-lg px-3 sm:px-5 py-2 rounded-xl border border-yellow-400 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black lg:hidden block"
                            style={{ fontFamily: "Roboto Slab, serif" }}
                        >
                            Book Ticket Now
                        </Link>
                    </div>

                    {/* Right side: Social Links */}
                    <div className="flex items-center justify-center gap-4 md:justify-end">
                        {/* Facebook */}

                         <Link
                            href="https://in.bookmyshow.com/cinemas/delhi-ncr/miraj-cinemas-azadpur-delhi/buytickets/MCAZ/20250826"
                            className="text-white font-semibold text-xl sm:text-base md:text-lg px-3 sm:px-5 py-2 rounded-xl border border-yellow-400 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black lg:block hidden"
                            style={{ fontFamily: "Roboto Slab, serif" }}
                        >
                            Book Ticket Now
                        </Link>
                        <Link
                            href="https://www.facebook.com/people/Aakash-Courtyard/61579223978235/"
                            role="button"
                            target="_blank"
                            className="transition-transform duration-500 hover:scale-125"
                        >
                            <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#1877f2]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                </svg>
                            </span>
                        </Link>

                        {/* Instagram */}
                        <Link
                            href="https://www.instagram.com/aakashcourtyard/"
                            role="button"
                            target="_blank"
                            className="transition-transform duration-500 hover:scale-125"
                        >
                            <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#c13584]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </span>
                        </Link>
                    </div>
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
