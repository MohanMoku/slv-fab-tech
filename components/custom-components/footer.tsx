import { Mail, Phone, Pin } from "lucide-react";
import Link from "next/link";

export default function Footer({ color }: { color: string }) {
    return (
        <footer className={`w-full px-16 py-10 ${color !== "" ? `text-${color}` : ""}`}>
            <div className="flex justify-between pb-10 px-10">
                <div className="pr-10">
                    <img src="/assets/rec logo.png" alt="logo" className="w-35 object-contain" />
                    <p className="mt-4">
                        Precision Sheet Metal Fabrication <br />
                        ISO 9001:2015 Certified | Est. 2019 | Bengaluru
                    </p>
                    <p>Contact</p>
                    <p className="flex gap-2 items-center"><Pin size={20} />Unit 1: Doddanna Industrial Estate, Hegganahalli, Bengaluru – 560091</p>
                    <p className="flex gap-2 items-center"><Pin size={20} />Unit 2: Thigalarapalya Main Road, Peenya, Bengaluru – 560058</p>
                    <p className="flex gap-2 items-center"><Phone size={20} />+91 86185 86276</p>
                    <p className="flex gap-2 items-center"><Mail size={20} />suresh@slvfabtech.com</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl">Quick Links</h2>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-2xl ">Our Services</h2>
                    <ul>
                        <li><Link href="/services">Laser Cutting</Link></li>
                        <li><Link href="/services">Sheet Metal Bending</Link></li>
                        <li><Link href="/services">TIG / MIG / Laser Welding</Link></li>
                        <li><Link href="/services">Hydraulic Riveting</Link></li>
                        <li><Link href="/services">Product Assembly</Link></li>
                    </ul>
                </div>

            </div>
            <hr />
            <div className="flex justify-between">
                <span>© 2025 SLV Fab Tech. All rights reserved. | GST Registered | ISO 9001:2015 Certified</span>
                <span>privacy policy</span>
            </div>
        </footer>
    )
}