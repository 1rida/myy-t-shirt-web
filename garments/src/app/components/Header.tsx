"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export const Header = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-orange-500 h-auto px-3 py-3 font-extrabold flex items-center fixed w-full z-50">
      <h1 className="text-6xl">
        <i className="text-yellow-300 text-7xl">g</i>alaxy
      </h1>

      {/* Hamburger Menu Button (Visible only on small screens) */}
      <button
        className="lg:hidden text-4xl ml-auto text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state when clicked
      >
        {isMenuOpen ? (
          <i className="fas fa-times text-2xl">❌</i>  // Cross icon when menu is open
        ) : (
          <i className="fas fa-bars text-3xl">=</i>  // Hamburger icon when menu is closed
        )}
      </button>

      {/* Desktop Navigation (Visible on large screens) */}
      <ul className="hidden  lg:flex gap-9 mr-6  font-serif mt-2">
        <li className="hover:text-white">
          <Link href="/">New Collections</Link>
        </li>
        <li className="hover:text-white">
          <Link href="/males">Male Collections</Link>
        </li>
        <li className="hover:text-white">
          <Link href="/females">Female Collections</Link>
        </li>
        <li className="hover:text-white">
          <Link href="/kids">Kids Collections</Link>
        </li>
        <li className="hover:text-white text-yellow-200 text-lg">
          <Link href="/contact">GET IN TOUCH</Link>
        </li>
      </ul>

      {/* Mobile Navigation (Visible when the menu is open) */}
      {isMenuOpen && (
        <ul className="lg:hidden absolute top-20 left-0 w-full bg-orange-300 text-center py-6 transition-all  ease-in-out">
          <li className="hover:text-white py-2">
            <Link href="/">New Collections</Link>
          </li>
          <li className="hover:text-white py-2">
            <Link href="/males">Male Collections</Link>
          </li>
          <li className="hover:text-white py-2">
            <Link href="/females">Female Collections</Link>
          </li>
          <li className="hover:text-white py-2">
            <Link href="/kids">Kids Collections</Link>
          </li>
          <li className="hover:text-white text-yellow-200 underline text-lg py-2">
            <Link href="/contact">GET IN TOUCH</Link>
          </li>
        </ul>
      )}
    </div>
  );
};
