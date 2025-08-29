"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full px-6 md:px-12 lg:px-20 py-10 gap-10 items-center">

            {/* Left - Carousel (small pe niche, lg pe left) */}
            <div className="banner-carousel relative rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    interval={3000}
                    swipeable={false}
                    emulateTouch={false}
                    stopOnHover={false}
                    useKeyboardArrows
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

            {/* Right - Text (small pe upar, lg pe right) */}
            <div className="p-6 flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
                <h2
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    About <span className="text-yellow-400">Us</span>
                </h2>
                <p className="text-white text-base md:text-lg leading-relaxed lg:text-justify">
                    At Aakash Cinema, we believe movies are more than just entertainment, they’re experiences that stay with you. Since our beginning in [Year], our goal has been to bring people together and create lasting memories through cinema. With a warm, welcoming atmosphere and premium viewing comfort, every visit here feels special.
                </p>
            </div>
        </div>
    );
};

export default About;

