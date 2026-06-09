import { contactPage } from "@/lib/data";
import { Mail, Phone, Pin } from "lucide-react";
import Link from "next/link";

export default function Footer({ color }: { color: string }) {
    return (
        <footer className={`w-full px-4 md:px-16 py-10 ${color ? `text-${color}` : ""}`}>

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 pb-10 px-2 md:px-10">

                {/* LEFT */}
                <div className="pr-0 md:pr-10">
                    <img
                        src="/assets/rec logo.png"
                        alt="logo"
                        className="w-28 md:w-36 object-contain"
                    />

                    <p className="mt-4 text-sm md:text-base">
                        Precision Sheet Metal Fabrication <br />
                        ISO 9001:2015 Certified | Est. 2019 | Bengaluru
                    </p>

                    <p className="mt-4 font-medium">Contact</p>

                    <div className="flex gap-2 items-start mt-2 text-sm md:text-base">
                        <Pin size={18} className="shrink-0 mt-1" />
                        <span>Unit 1: Doddanna Industrial Estate, Hegganahalli, Bengaluru – 560091</span>
                    </div>

                    <div className="flex gap-2 items-start mt-2 text-sm md:text-base">
                        <Pin size={18} className="shrink-0 mt-1" />
                        <span>Unit 2: Thigalarapalya Main Road, Peenya, Bengaluru – 560058</span>
                    </div>
                    <a href={`tel:${contactPage.contactDetails.phone.replace(/\s/g, "")}`}
                        className="flex gap-2 items-center mt-2 text-sm md:text-base hover:underline"
                    >
                        <Phone size={18} className="shrink-0" />
                        {contactPage.contactDetails.phone}
                    </a>
                    <a
                        href={`mailto:${contactPage.contactDetails.email}`}
                        className="flex gap-2 items-center mt-2 text-sm md:text-base hover:underline"
                    >
                        <Mail size={18} className="shrink-0" />
                        {contactPage.contactDetails.email}
                    </a>
                </div>

                {/* MIDDLE */}
                <div className="flex flex-col md:items-center">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3">
                        Quick Links
                    </h2>
                    <ul className="space-y-2 text-sm md:text-base">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/about" className="hover:underline">About us</Link></li>
                        <li><Link href="/services" className="hover:underline">Services</Link></li>
                        <li><Link href="/projects" className="hover:underline">Projects</Link></li>
                        <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
                        <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
                    </ul>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col md:items-center">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3">
                        Our Services
                    </h2>
                    <ul className="space-y-2 text-sm md:text-base">
                        <li><Link href="/services">Laser Cutting</Link></li>
                        <li><Link href="/services">Sheet Metal Bending</Link></li>
                        <li><Link href="/services">TIG / MIG / Laser Welding</Link></li>
                        <li><Link href="/services">Hydraulic Riveting</Link></li>
                        <li><Link href="/services">Product Assembly</Link></li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center text-center md:text-left pt-4 text-xs md:text-sm">
                <span>
                    © 2025 SLV Fab Tech. All rights reserved. | GST Registered | ISO 9001:2015 Certified
                </span>
                <span>Privacy Policy</span>
            </div>
        </footer >
    );
}