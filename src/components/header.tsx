"use client"

import Image from "next/image";
import { User, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = ['Home', 'About', 'Products', 'Services', 'Publishing'];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16">
      <div className="w-full mx-auto flex py-1 px-4 sm:px-8 items-center justify-between bg-[#ffffff10] border-2 border-black rounded-xl shadow-[0px_0px_5px_rgba(255,255,255,0.33)]">
        <div className="flex items-center gap-3">
          <Image
            className="w-16 sm:w-20 md:w-24 h-auto"
            src="/logo.png"
            alt="logo"
            width={100}
            height={52.5}
            priority={false}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-around gap-8 lg:gap-12 text-base lg:text-xl text-white font-inky-body">
          {NAV_ITEMS.map((item) => (
            <a key={item} className="hover:text-red-600 cursor-pointer">
              {item}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center">
          <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors">
            <User className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 z-50 bg-black border border-[#333] rounded-b-xl mx-4 shadow-lg py-4">
          <nav className="flex flex-col items-center gap-4 text-lg text-white font-inky-body">
            {NAV_ITEMS.map((item) => (
              <a key={item} className="hover:text-red-600 cursor-pointer py-2">
                {item}
              </a>
            ))}
            <div className="w-full border-t border-[#333] mt-2 pt-4 flex justify-center">
              <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};