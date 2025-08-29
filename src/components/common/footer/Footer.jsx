'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-white pb-4 px-6 md:px-12">
      <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-10">
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