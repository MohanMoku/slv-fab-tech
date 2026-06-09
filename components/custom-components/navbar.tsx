"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC<{ color: string }> = ({ color = "" }) => {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const glassStyle: React.CSSProperties = {
        width: "95%",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid #ffffff20",
        borderRadius: "20px",
    };

    return (
        <motion.div
            initial={{ y: 0, opacity: 1 }}
            animate={{
                y: visible ? 0 : -120,
                opacity: visible ? 1 : 0,
            }}
            transition={{
                duration: 0.35,
                ease: "easeInOut",
            }}
            style={glassStyle}
            className={`fixed top-2 left-1/2 -translate-x-1/2 z-50
             h-16 px-10 flex items-center justify-between ${color !== "" ? `text-${color}` : ""}`}
        >
            <img
                src="/assets/rec logo.png"
                alt="logo"
                className="w-45 object-contain"
            />

            <div className="flex gap-8 items-center">
                <Link href="/" className="text-xl leading-none">Home</Link>
                <Link href="/about" className="text-xl leading-none">About</Link>
                <Link href="/services" className="text-xl leading-none">Services</Link>
                <Link href="/projects" className="text-xl leading-none">Projects</Link>
                <Link href="/contact" className="text-xl leading-none">Contact</Link>
            </div>
        </motion.div >
    );
};

export default Navbar;