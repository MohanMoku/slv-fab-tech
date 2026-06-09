import Footer from "@/components/custom-components/footer"
import Navbar from "@/components/custom-components/navbar"
import ContactForm from "@/components/custom-components/query-form"
import { contactPage } from "@/lib/data"

export default function Contact() {
    return (
        <>
            <Navbar color={""} />
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center">

                <div className="relative z-10 max-w-5xl px-6 text-center py-20">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
                        {contactPage.pageTitle}
                    </h1>
                    <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto">
                        {contactPage.intro}
                    </p>
                </div>

                <section className="py-16 flex flex-col">
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="mb-10">
                            <h2 className="text-3xl font-bold">Contact Us</h2>

                            <div className="mt-4 space-y-2">
                                <a
                                    href={`mailto:${contactPage.contactDetails.email}`}
                                    className="block text-blue-600 hover:underline text-2xl"
                                >
                                    {contactPage.contactDetails.email}
                                </a>

                                <a
                                    href={`tel:${contactPage.contactDetails.phone.replace(/\s/g, "")}`}
                                    className="block text-blue-600 hover:underline text-2xl"
                                >
                                    {contactPage.contactDetails.phone}
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {contactPage.contactDetails.locations.map((unit) => (
                                <div
                                    key={unit.name}
                                    className="rounded-2xl border border-gray-200 p-6 shadow-sm"
                                >
                                    <h3 className="text-xl font-semibold">{unit.name}</h3>

                                    <p className="mt-1 text-sm text-blue-600">
                                        {unit.location}
                                    </p>

                                    <p className="mt-4 text-gray-600">
                                        {unit.address}
                                    </p>

                                    <a
                                        href={unit.uri}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 inline-flex items-center gap-2 text-blue-600 hover:underline"
                                    >View Location →</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <ContactForm contactForm={contactPage.contactForm} />

                <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">Our Locations</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-10 px-4 sm:px-8 lg:px-20">

                    <div className="w-full">
                        <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-10 text-center">
                            Unit-1
                        </h3>

                        <div className="w-full aspect-video">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.6379359362822!2d77.50412837513132!3d13.006116314120527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d002deacd3d%3A0x4eecf4713097659c!2sSLV%20FAB%20TECH!5e1!3m2!1sen!2sin!4v1781012562144!5m2!1sen!2sin"
                                className="w-full h-full rounded-2xl border border-gray-200 shadow-sm"
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-10 text-center">
                            Unit-2
                        </h3>

                        <div className="w-full aspect-video">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6036.600114820664!2d77.49372324581671!3d13.013675976656266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d001fda7b97%3A0x80ecf5a9df188faf!2sSLV%20FAB%20TECH%20unit-2!5e1!3m2!1sen!2sin!4v1781012468012!5m2!1sen!2sin"
                                className="w-full h-full rounded-2xl border border-gray-200 shadow-sm"
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>
                    </div>

                </div>

            </section>
            <Footer color={""} />
        </>
    )
}