import Footer from "@/components/custom-components/footer";
import Navbar from "@/components/custom-components/navbar";
import { projectPage } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Project() {
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
                    {projectPage.projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 border">
                            <Carousel className="w-full max-w-sm mx-auto">
                                <CarouselContent>
                                    {project.images.map((img, index) => (
                                        <CarouselItem key={index}>
                                            <div className="relative w-full h-72 rounded-xl overflow-hidden">
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} ${index + 1}`}
                                                    fill
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
        </>
    )
}