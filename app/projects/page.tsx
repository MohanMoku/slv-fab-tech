"use client"

import Footer from "@/components/custom-components/footer";
import Navbar from "@/components/custom-components/navbar";
import { projectPage } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function Project() {

    const [loading, setLoading] = useState(false)
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchProjects = async () => {
            setLoading(true)
            try {
                const { data, error } = await supabase
                    .from("projects")
                    .select("*");
                if (error) {
                    throw error;
                }
                if (data) {
                    const shuffled = [...data].sort(() => Math.random() - 0.5);
                    setProjects(shuffled as any || []);
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

        fetchProjects();
    }, [])

    return (
        <>
            <Navbar color={""} />
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
                <div className="relative z-10 max-w-5xl px-6 text-center py-20">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
                        {projectPage.title}
                    </h1>
                    <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto">
                        {projectPage.intro}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
                    {projects.map((project: any, index: any) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 border">
                            <Carousel className="w-full max-w-sm mx-auto">
                                <CarouselContent>
                                    {project.images.map((img: any, index: any) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full h-72 rounded-xl overflow-hidden">
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} ${index + 1}`}
                                                    fill
                                                    priority={index === 0}
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>

                                <CarouselPrevious className="left-3" />
                                <CarouselNext className="right-3" />
                            </Carousel>

                            <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                        </div>
                    ))}
                </div>

                <div className="relative z-10 max-w-5xl px-6 text-center py-20">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
                        {projectPage.cta.heading}
                    </h1>
                    <p className="my-6 text-lg md:text-2xl max-w-3xl mx-auto">
                        {projectPage.cta.subtext}
                    </p>
                    <Link
                        href="/contact"
                        className="px-8 py-3 border border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition"
                    >Get a Quote</Link>

                </div>

            </section >
            <Footer color={""} />
            {
                loading && <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
                    <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
                </div>
            }
        </>
    )
}