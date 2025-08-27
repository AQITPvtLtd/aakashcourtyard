"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    { question: 'How can I book tickets online?', answer: 'Visit our [Booking Page], select your movie, date, and seats, then pay securely online. Confirmation is instant.' },
    { question: 'Are there membership benefits?', answer: 'Yes, enjoy exclusive discounts, early ticket access, and reward points on every booking.' },
    { question: 'Can I cancel or reschedule tickets?', answer: 'Tickets can be canceled or rescheduled up to [X] hours before the show. Refer to our booking policy for details.' },
    { question: 'Do you serve food & beverages?', answer: 'Yes! Fresh popcorn, nachos, soft drinks, and combo deals are available at our concession counters.' },
    { question: 'Can I host private screenings?', answer: 'Yes, we offer private screenings and events with customizable packages. Contact us for details.' },
    { question: 'Is the cinema wheelchair accessible?', answer: 'Yes, Aakash Cinema is fully wheelchair accessible with ramps and reserved seating.' },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const faqRefs = useRef([]);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        faqRefs.current.forEach((el, i) => {
            gsap.fromTo(
                el,
                { autoAlpha: 0, y: 30 },
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                        toggleActions: "play none none reset", // repeat on scroll
                    },
                }
            );
        });
    }, []);

    return (
        <section className="lg:py-20 py-10 px-6 md:px-12 lg:px-24 lg:mx-15 mx-5">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Heading */}
                <div>
                    {/* <p className="text-amber-400 font-medium mb-2" style={{ fontFamily: "Roboto Slab, serif" }}>Everything You Need to Know</p> */}
                    <h2 className="lg:text-5xl text-3xl font-bold text-white leading-tight" style={{ fontFamily: "Roboto Slab, serif" }}>
                        Frequently Asked<br /> <span className="text-yellow-400">Questions</span>
                    </h2>
                </div>

                {/* Right Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            ref={(el) => (faqRefs.current[index] = el)}
                            className="border-b border-yellow-400 pb-4 opacity-0"
                        >
                            <button
                                className="w-full flex justify-between items-center text-left text-white font-semibold text-base focus:outline-none"
                                onClick={() => toggle(index)}
                            >
                                {faq.question}
                                <FaChevronDown
                                    className={`transform transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""
                                        } text-yellow-400`}
                                />
                            </button>
                            {activeIndex === index && (
                                <p className="mt-2 text-sm text-white">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
