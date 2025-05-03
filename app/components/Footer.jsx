"use client";

import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-2">
          <Link href="/" className="block">
            <img
                src="/NextGen.png" 
                alt="YourBrand Logo"
                className="h-10 w-auto transition-all duration-300 hover:scale-105"
            />
          </Link>
            
                <span className="text-lg font-semibold text-black dark:text-white">NextGen</span>
                <span className="text-lg font-bold text-[#FDE047]">Scale</span>

          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-neutral-400">
            A product by <a href="#" className="text-blue-500 hover:underline">NextGen Scale</a><br />
            Building in public at <a href="https://twitter.com/VatsaAditya1" className="text-blue-500 hover:underline">@VatsaAditya</a>
          </p>
        </div>

        {/* Info & Links */}
        <div className="text-sm text-gray-500 dark:text-neutral-400 space-y-4 md:text-right w-full md:w-auto">
          {/* Navigation */}
          <div className="space-y-1">
            <h4 className="font-semibold text-gray-700 dark:text-neutral-200">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="#home" className="hover:underline">Home</Link></li>
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-neutral-200">Contact</h4>
            <p>
              Lucknow, India<br />
              nextgenscale01@gmail.com
            </p>
          </div>

          {/* Social */}
          <div className="flex justify-start md:justify-end space-x-4 pt-2">
            <a href="https://twitter.com" target="_blank" rel="https://twitter.com/VatsaAditya1">
              <IconBrandTwitter className="w-5 h-5 hover:text-blue-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="https://www.linkedin.com/company/nextgen-scale">
              <IconBrandLinkedin className="w-5 h-5 hover:text-blue-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="https://www.instagram.com/nextgen_scale/">
              <IconBrandInstagram className="w-5 h-5 hover:text-pink-500" />
            </a>
          </div>

          {/* Copyright */}
          <p className="pt-4 text-xs text-gray-400">
            © {new Date().getFullYear()} YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;