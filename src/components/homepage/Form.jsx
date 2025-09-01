"use client";
import React, { useState } from 'react';
import { form } from '@/services/contact';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";
import { useRouter } from 'next/navigation';

const Form = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        location: "",
        message: "",
    });

    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("fullname", formData.fullname);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("message", formData.message);

        try {
            const response = await form(formDataToSend)
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setFormData({
                    fullname: "",
                    phone: "",
                    email: "",
                    location: "",
                    message: "",
                })
                router.push("/")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again later.",
                })
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Please check your network and try again.",
            })
        }
        finally {
            setLoading(false)
        }
    };
    return (
        <div className="mx-auto p-4 sm:p-6 shadow-xl shadow-yellow-400/30 rounded-lg border-2 border-yellow-400 bg-transparent">
            <h1
                className="text-2xl sm:text-3xl font-bold text-center mb-6 text-white"
                style={{ fontFamily: "Roboto Slab, serif" }}
            >
                Contact <span className="text-yellow-400"> Us</span>
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        className="bg-transparent text-white placeholder-gray-300 p-3 w-full rounded-md border border-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none text-sm sm:text-base"
                        placeholder="Your Name"
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handlechange}
                        required
                    />
                    <input
                        className="bg-transparent text-white placeholder-gray-300 p-3 w-full rounded-md border border-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none text-sm sm:text-base"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlechange}
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        className="bg-transparent text-white placeholder-gray-300 p-3 w-full rounded-md border border-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none text-sm sm:text-base"
                        placeholder="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handlechange}
                        required
                    />

                    <input
                        className="bg-transparent text-white placeholder-gray-300 p-3 w-full rounded-md border border-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none text-sm sm:text-base"
                        placeholder="Enter Your Location..."
                        type="location"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handlechange}
                        required
                    />
                </div>

                <textarea
                    className="bg-transparent text-white placeholder-gray-300 p-3 w-full rounded-md border border-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none text-sm sm:text-base"
                    placeholder="Message..."
                    rows="3"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handlechange}
                ></textarea>

                <div className="text-center mt-4">
                    {
                        loading ? (<div className="flex justify-center items-center w-full h-full fixed top-0 left-0 z-50 rounded-md" style={{ backgroundColor: "rgba(75, 0, 130, 0.5)" }}>
                            <ClipLoader width="60" height="60" color="#eb5f30" className="animate-spin" />
                        </div>) : (<button className="text-white cursor-pointer font-semibold text-sm sm:text-base md:text-lg px-3 sm:px-5 py-2 rounded-xl border border-yellow-400 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black">
                            Submit
                        </button>)
                    }
                </div>
            </form>
        </div>
    );
};

export default Form;
