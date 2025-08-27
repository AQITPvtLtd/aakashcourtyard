"use client";
import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const About = () => {
    useEffect(() => {
        // har baar focus remove karo jab bhi carousel element focus ho jaye
        const handleFocus = (e) => {
            if (e.target.closest(".carousel")) {
                e.target.blur();
            }
        };
        window.addEventListener("focusin", handleFocus);
        return () => {
            window.removeEventListener("focusin", handleFocus);
        };
    }, []);

    return (
        <div className="lg:grid lg:grid-cols-2 w-full h-full px-6 md:px-12 lg:px-20 py-10 gap-10 items-center">
            {/* Left - Carousel */}
            <div className="banner-carousel relative rounded-2xl overflow-hidden shadow-lg">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={3000}
                    autoFocus={false}
                    useKeyboardArrows={false}
                    swipeable
                    emulateTouch
                >
                    {["/inner/miraj.jpg", "/inner/popcorner.jpg", "/inner/food.jpg", "/inner/seats.jpeg"].map(
                        (src, index) => (
                            <div
                                key={index}
                                className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src={src}
                                    alt={`About ${index + 1}`}
                                    fill
                                    priority
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                        )
                    )}
                </Carousel>
            </div>

            {/* Right - Text */}
            <div className="p-6 flex flex-col justify-center text-center lg:text-left">
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    About <span className="text-yellow-400">Us</span>
                </h2>
                <p className="text-white text-base md:text-lg leading-relaxed">
                    Aakash Cinema – Where Movies Come Alive
                    At Aakash Cinema, we aim to provide more than just a movie experience—we create memories. Established in [Year], our mission is to offer premium cinema experiences in a comfortable and friendly environment.
                </p>
            </div>
        </div>
    );
};

export default About;
