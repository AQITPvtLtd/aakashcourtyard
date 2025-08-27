"use client";

import React from "react";
import { Film, Ticket, Star, Popcorn, Users } from "lucide-react"; // icons

const services = [
    {
        id: 1,
        title: "Movie Screenings",
        desc: "Latest Bollywood, Hollywood & regional films • 3D, IMAX & standard showings • Daily shows from morning to late night",
        icon: <Film size={40} />,
    },
    {
        id: 2,
        title: "Online Ticket Booking",
        desc: "Quick and secure booking • Real-time seat selection • Instant confirmation via SMS & email",
        icon: <Ticket size={40} />,
    },
    {
        id: 3,
        title: "Membership & Loyalty Programs",
        desc: "Earn points with every ticket purchase • Exclusive discounts & perks • Early access to new releases",
        icon: <Star size={40} />,
    },
    {
        id: 4,
        title: "Concessions & Snacks",
        desc: "Fresh popcorn, nachos, drinks, and combos • Hygienic preparation and packaging • Family and group deals",
        icon: <Popcorn size={40} />,
    },
    {
        id: 5,
        title: "Private Screenings & Events",
        desc: "Birthdays, corporate events, or private movie nights • Customizable seating and catering packages • Dedicated staff for smooth event management",
        icon: <Users size={40} />,
    },
];

export default function Services() {
    return (
        <section className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col items-center text-center">
            <h2
                className="mb-12 text-4xl font-bold text-white"
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Our <span className="text-yellow-400">Services</span>
            </h2>

            {/* First 3 Services */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center max-w-5xl">
                {services.slice(0, 3).map((service) => (
                    <div
                        key={service.id}
                        className="group relative rounded-2xl border border-yellow-400/40 p-6 transition duration-300 hover:scale-105"
                    >
                        <div className="mb-4 flex justify-center text-yellow-400 transition duration-300 group-hover:text-white">
                            {service.icon}
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-white" style={{ fontFamily: "Roboto Slab, serif" }}>
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {service.desc}
                        </p>
                        <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 blur-md transition duration-500 group-hover:opacity-100"></div>
                    </div>
                ))}
            </div>

            {/* Last 2 Services (centered) */}
            <div className="mt-8 grid gap-8 sm:grid-cols-2 justify-center max-w-4xl">
                {services.slice(3).map((service) => (
                    <div
                        key={service.id}
                        className="group relative rounded-2xl border border-yellow-400/40 p-6 transition duration-300 hover:scale-105"
                    >
                        <div className="mb-4 flex justify-center text-yellow-400 transition duration-300 group-hover:text-white">
                            {service.icon}
                        </div>
                        <h3 className="mb-3 text-xl font-semibold text-white" style={{ fontFamily: "Roboto Slab, serif" }}>
                            {service.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            {service.desc}
                        </p>
                        <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 blur-md transition duration-500 group-hover:opacity-100"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
