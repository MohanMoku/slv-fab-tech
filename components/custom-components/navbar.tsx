"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar: React.FC<{ color?: string }> = ({ color = "" }) => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 50) {
                setVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const glassStyle: React.CSSProperties = {
        width: "95%",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid #ffffff20",
        borderRadius: "20px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    };

    const navLinks = (
        <>
            <Link
                href="/"
                className={`text-lg md:text-xl ${pathname === "/" ? "underline underline-offset-4" : ""}`}
            >
                Home
            </Link>

            <Link
                href="/about"
                className={`text-lg md:text-xl ${pathname === "/about" ? "underline underline-offset-4" : ""}`}
            >
                About
            </Link>

            <Link
                href="/services"
                className={`text-lg md:text-xl ${pathname === "/services" ? "underline underline-offset-4" : ""}`}
            >
                Services
            </Link>

            <Link
                href="/projects"
                className={`text-lg md:text-xl ${pathname === "/projects" ? "underline underline-offset-4" : ""}`}
            >
                Projects
            </Link>

            <Link
                href="/gallery"
                className={`text-lg md:text-xl ${pathname === "/gallery" ? "underline underline-offset-4" : ""}`}
            >
                Gallery
            </Link>

            <Link
                href="/contact"
                className={`text-lg md:text-xl ${pathname === "/contact" ? "underline underline-offset-4" : ""}`}
            >
                Contact
            </Link>
        </>
    );

    return (
        <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{
                y: visible ? 0 : -120,
                opacity: visible ? 1 : 0,
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={glassStyle}
            className={`fixed top-2 left-1/2 -translate-x-1/2 z-50 h-16 px-4 md:px-10 flex items-center justify-between ${color ? `text-${color}` : ""}`}
        >
            <img
                src="/assets/rec logo.png"
                alt="logo"
                className="w-28 md:w-40 object-contain"
            />

            <div className="hidden md:flex gap-6 lg:gap-8 items-center">
                {navLinks}
            </div>

            <button
                className="md:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {menuOpen && (
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-md rounded-xl p-5 flex flex-col gap-4 md:hidden text-center">
                    {navLinks}
                </div>
            )}
        </motion.div>
    );
};

export default Navbar;