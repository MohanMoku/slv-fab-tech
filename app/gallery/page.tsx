"use client"

import Navbar from "@/components/custom-components/navbar";
import Masonry from "@/components/ui/Masonry";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Gallery() {

    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchGallery = async () => {
            setLoading(true)
            try {
                const {data, error} = await supabase
                .from("gallery")
                .select("*");
                if(error) {
                    throw error;
                }
                if(data) {
                    const shuffled = [...data].sort(() => Math.random() - 0.5);
                    setGallery(shuffled as any || []);
                }
            } catch (error: any) {
                toast.error("Failed to fetch", {
                    description: error.message || "Something went wrong",
                    duration: 5000,
                })
            } finally {
                setLoading(false)
            }
        };

        fetchGallery();
    }, [])

    return (
        <>
            <Navbar color={""} />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line text-center">Gallery</h1>

            {!loading && gallery.length === 0 && (
                <div className="flex items-center justify-center h-96">
                    <p className="text-gray-500">No images found</p>
                </div>
            )}

            <Masonry
                items={gallery}
                ease="power1.out"
                duration={0.6}
                stagger={0.09}
                animateFrom="bottom"
                scaleOnHover
                hoverScale={0.95}
                blurToFocus
                colorShiftOnHover
            />
            {
                loading && <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
                </div>
            }
        </>
    )
}