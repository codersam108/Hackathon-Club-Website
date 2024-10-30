"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const FloatingNav = ({ navItems = [], className }) => {
  const location = useLocation();

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex items-center justify-center rounded-full border dark:border-white/[0.2] border-transparent dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] py-2 px-8 space-x-8",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          to={navItem.link}
          className={cn(
            "relative dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
            location.pathname === navItem.link ? "font-semibold" : "font-normal"
          )}
        >
          {navItem.name}
          {location.pathname === navItem.link && (
            <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-blue-500 rounded" />
          )}
        </Link>
      ))}
    </motion.div>
  );
};

const Header = () => {
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "Hackathons", link: "/hackathons" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" }
  ];

  return (
    <div className="fixed w-full top-0 z-50 bg-white dark:bg-black shadow-md py-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        {/* Centered Navigation Links with Rounded Border */}
        <FloatingNav navItems={navItems} />

        {/* Register and Login Buttons */}
        <div className="flex space-x-4">
          <Link to="/register">
            <button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
