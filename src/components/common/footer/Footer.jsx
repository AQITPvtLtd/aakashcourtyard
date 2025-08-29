'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaWhatsapp,
} from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" text-white pt-12 pb-4 px-6 md:px-12">
      <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-10">
        {/* Logo & Description */}
        <div>
          <Link href="/">
            <Image src='/logo/whitelogo.png' width={200} height={200} alt='Logo' className='w-52 h-auto' />
          </Link>
          <p className='mt-5'>Aakash Cinema – Where Movies Come Alive
                    At Aakash Cinema, we aim to provide more than just a movie experience—we create memories.</p>
          <div className="flex gap-4 text-3xl text-white mt-5">
            <Link href="https://www.linkedin.com/in/dr-amit-badola-b41b772a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="__blank"><FaLinkedin className="hover:text-white cursor-pointer transition-transform duration-500 hover:scale-125" /></Link>
            <Link href="https://wa.me/919286471180" target="__blank"><FaWhatsapp className="hover:text-white cursor-pointer transition-transform duration-500 hover:scale-125" /></Link>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <div className="space-y-2 text-sm text-white">
            <Link href="/" className="block hover:text-gray-300 transition-colors">Home</Link>
            <Link href="/about" className="block hover:text-gray-300 transition-colors">About</Link>
            <Link href="/blogs" className="block hover:text-gray-300 transition-colors">Blogs</Link>
            <Link href="/media/gallery" className="block hover:text-gray-300 transition-colors">Photo Gallery</Link>
            <Link href="/media/certificates" className="block hover:text-gray-300 transition-colors">Certificates</Link>
            <Link href="/contact" className="block hover:text-gray-300 transition-colors">Book Appointment</Link>
          </div>

        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Treatments</h4>
          <div className="space-y-2 text-sm text-white">
            <Link href="/treatments/chemotherapy" className="block hover:text-gray-300 transition-colors">Chemotheray</Link>
            <Link href="/treatments/targeted-therapy" className="block hover:text-gray-300 transition-colors">Targeted Therapy</Link>
            <Link href="/treatments/immunotherapy" className="block hover:text-gray-300 transition-colors">Immunotherapy</Link>
            <Link href="/treatments/stem-cell-transplant" className="block hover:text-gray-300 transition-colors">Stem Cell Transplant</Link>
            <Link href="/treatments/supportive-care" className="block hover:text-gray-300 transition-colors">Supportive Care</Link>
            <Link href="/treatments/radiation-therapy" className="block hover:text-gray-300 transition-colors">Radiation Therapy</Link>
            <Link href="/treatments/clinical-trials" className="block hover:text-gray-300 transition-colors">Clinical Trials</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className='lg:-ml-10'>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white">
            <Link href="https://share.google/imifG2l0Qruhh7ZgH" target='_blank'>
              <li className="flex items-start gap-3 mb-5">
                <IoLocationSharp className="text-white text-xl mt-1" />
                <div className='hover:text-gray-300 cursor-pointer'>
                  Race Course Rd, East Rest Camp,
                  <br /> Guru Nanak Vihar, Dehradun – 248001
                </div>
              </li>
            </Link>
            <Link href="tel:9286471180" target='_blank'>
              <li className="flex items-start gap-3 mb-5">
                <IoIosCall className="text-white text-xl" />
                <div className='hover:text-gray-300 cursor-pointer'>
                  +91 92864 71180
                </div>
              </li>
            </Link>
            <Link href="mailto:dramitoncology@gmail.com" target='_blank'>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-white text-xl" />
                <div className='hover:text-gray-300 cursor-pointer'>
                  dramitoncology@gmail.com
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex justify-center items-center text-sm font-semibold text-white text-center">
        <Link href="https://tekbooster.com/" target='_blank' className="hover:text-[#D1D5DB]" style={{ fontFamily: "Roboto Slab, serif" }}>
          Design & Developed By <br className='lg:hidden' /> Tek Booster (Digital Marketing Company)
        </Link>
      </div>
    </footer>
  );
};

export default Footer;