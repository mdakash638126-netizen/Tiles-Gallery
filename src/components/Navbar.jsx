
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Layers3,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Tiles", href: "/all-tiles" },
    { name: "My Profile", href: "/my-profile" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#e8e5da]">
      <div className="container-custom">
        <div className="flex items-center justify-between h-[82px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#7b8060] text-white flex items-center justify-center rounded-sm">
              <Layers3 size={23} />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                tileora<span className="text-[#7b8060]">.</span>
              </h1>
              <p className="text-[9px] tracking-[3px] text-[#77776e] uppercase">
                Surface Gallery
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#55554e] hover:text-[#7b8060] transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/login"
              className="text-sm font-semibold hover:text-[#7b8060]"
            >
              Login
            </Link>

            <Link href="/all-tiles" className="primary-btn !py-3 !px-5">
              Explore Gallery
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#e8e5da] py-5 space-y-5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-[#55554e]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-semibold"
            >
              Login
            </Link>

            <Link
              href="/all-tiles"
              onClick={() => setMenuOpen(false)}
              className="primary-btn w-full"
            >
              Explore Gallery
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
