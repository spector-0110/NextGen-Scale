"use client";
import { useScrollToSection } from "@/app/lib/scrollToSection";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3 items-start md:items-center">
        
        {/* Brand Section */}
        <div>
          <Link href="/" className="flex items-center space-x-2 hover:cursor-pointer">
            <img
              src="/NextGen.png"
              alt="NextGen Scale Logo"
              className="h-10 w-auto transition-transform duration-300 hover:scale-105"
            />
            <div className="flex items-center space-x-1">
              <span className="text-lg font-semibold text-black dark:text-white">NextGen</span>
              <span className="text-lg font-bold text-[#FDE047]">Scale</span>
            </div>
          </Link>
          <p className="mt-3 text-sm text-gray-500 dark:text-neutral-400">
            Empowering digital transformation from the heart of India.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-gray-700 dark:text-neutral-200">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <button
                onClick={() => useScrollToSection("services")}
                className="hover:text-[#FFCF06] transition-colors duration-200"
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => useScrollToSection("process")}
                className="hover:text-[#FFCF06] transition-colors duration-200"
              >
                Process
              </button>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4 text-sm text-gray-500 dark:text-neutral-400">
          <div>
            <h4 className="text-base font-semibold text-gray-700 dark:text-neutral-200">Contact</h4>
            <p>
              Lucknow, India<br />
              <a href="tel:+919696415586" className="hover:text-[#FFCF06] transition-colors duration-200">
                +91 9696415586
              </a>
              <br />
              <a href="mailto:infonextgenscale@gmail.com" className="hover:text-[#FFCF06] transition-colors duration-200">
                infonextgenscale@gmail.com
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-1">
            <a href="https://x.com/NextgenScale" target="_blank" aria-label="Twitter">
              <IconBrandTwitter className="w-5 h-5 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/company/nextgen-scale" target="_blank" aria-label="LinkedIn">
              <IconBrandLinkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://www.instagram.com/nextgen_scale/" target="_blank" aria-label="Instagram">
              <IconBrandInstagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-400 pt-2">
            © {new Date().getFullYear()} NextGen Scale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;