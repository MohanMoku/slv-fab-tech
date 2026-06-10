import Footer from "@/components/custom-components/footer";
import Navbar from "@/components/custom-components/navbar";
import { servicesPage } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Service = {
    id: string;
    title: string;
    description: string;
    imgUri: string;
    specifications?: Record<string, any>;
    processes?: string[];
};

interface ServicesSectionProps {
    services: Service[];
}

const renderSpecs = (specs: Record<string, any>) => {
    return (
        <div className="space-y-3">
            {Object.entries(specs).map(([key, value]) => (
                <div key={key}>
                    {typeof value === "object" ? (
                        <>
                            <p className="font-medium text-gray-900">
                                {key.replace(/([A-Z])/g, " $1")}
                            </p>

                            <div className="ml-4 mt-1 space-y-1 text-sm text-gray-600">
                                {Object.entries(value).map(([subKey, subValue]) => (
                                    <p key={subKey}>
                                        <span className="font-medium capitalize">
                                            {subKey.replace(/([A-Z])/g, " $1")}:
                                        </span>{" "}
                                        {String(subValue)}
                                    </p>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="text-gray-700">
                            <span className="font-medium">
                                {key.replace(/([A-Z])/g, " $1")}:
                            </span>{" "}
                            {String(value)}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default function Services() {
    return (
        <>
            <Navbar color={"white"} />
            <video
                className="fixed inset-0 -z-10 h-screen w-full object-cover blur-sm"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source src="/assets/service-bg.mp4" type="video/mp4" />
            </video>

            <div className="fixed inset-0 -z-10 bg-white/10" />
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
                <div className="relative z-10 max-w-5xl px-6 text-center py-20 text-white">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
                        {servicesPage.pageTitle}
                    </h1>
                    <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto">
                        {servicesPage.intro}
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6">
                    <div className="space-y-24">
                        {servicesPage.services.map((service, index) => (
                            <section key={index}>
                                <div
                                    className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                        }`}
                                >
                                    <div className="relative overflow-hidden rounded-3xl shadow-lg">
                                        <Image
                                            src={service.imgUri}
                                            alt={service.title}
                                            width={800}
                                            height={600}
                                            className="h-[450px] w-full object-cover transition duration-500 hover:scale-105"
                                        />
                                    </div>

                                    <div className="text-white">
                                        <span className="text-sm font-semibold uppercase tracking-wider text-purple-500">
                                            Service
                                        </span>

                                        <h2 className="mt-2 text-4xl font-bold">
                                            {service.title}
                                        </h2>

                                        <p className="mt-5 text-lg leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* <Link
                                        href={`/services/${service.id}`}
                                        className="mt-6 inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                                        >
                                        Learn More →
                                        </Link> */}

                                        {service.specifications && (
                                            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                                                <h3 className="mb-4 text-lg font-semibold text-black">
                                                    Specifications
                                                </h3>

                                                {renderSpecs(service.specifications)}
                                            </div>
                                        )}

                                        {service.processes && (
                                            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
                                                <h3 className="mb-4 text-lg font-semibold text-black">
                                                    Processes Available
                                                </h3>

                                                <ul className="space-y-3">
                                                    {service.processes.map((process) => (
                                                        <li
                                                            key={process}
                                                            className="flex items-center gap-3"
                                                        >
                                                            <span className="h-2 w-2 rounded-full bg-blue-600" />
                                                            <span className="text-gray-800">{process}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <hr className="m-20" />
                            </section>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 max-w-5xl px-6 text-center py-20 text-white">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
                        {servicesPage.callout.title}
                    </h1>
                    <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto">
                        {servicesPage.callout.description}
                    </p>
                </div>

            </section>
            <Footer color={"white"} />
        </>
    )
}