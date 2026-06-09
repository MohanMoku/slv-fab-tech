import Footer from "@/components/custom-components/footer"
import Navbar from "@/components/custom-components/navbar"
import { aboutData } from "@/lib/data"

export default function About() {
    return (
        <>
            <Navbar color={""} />
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center">
                <div className="relative z-10 max-w-5xl px-6 text-center py-20">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
                        {aboutData.pageTitle}
                    </h1>
                    <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto">
                        {aboutData.whoWeAre.description}
                    </p>
                    <p className="mt-6 text-lg md:text-2xl max-w-6xl mx-auto">
                        {aboutData.whoWeAre.note}
                    </p>
                </div>

                <div className="flex justify-between items-center">
                    <img src="/assets/certificate.png" alt="certificate" />
                    <div className="max-w-3xl h-full mx-auto px-4 py-8 text-gray-800 flex flex-col gap-5 items-center">

                        <h1 className="text-5xl font-bold text-gray-800">Our Quality Commitment</h1>

                        <p className="text-3xl font-semibold text-blue-600">
                            {aboutData.qualityCommitment.isoCertified}
                        </p>

                        <p className="mt-3 text-xl leading-relaxed text-gray-700 text-center">
                            {aboutData.qualityCommitment.systemDescription}
                        </p>

                        <p className="mt-4 text-xl leading-relaxed text-gray-700 text-center">
                            {aboutData.qualityCommitment.statutoryCompliance}
                        </p>
                    </div>
                </div>

                <div className="relative z-10 max-w-5xl px-6 text-center my-20">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">Our Facilities</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                        {aboutData.facilities.map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                                <h3 className="text-lg font-semibold text-gray-800">{item.unit}</h3>

                                <p className="text-sm text-blue-600 font-medium mt-1">
                                    {item.type}
                                </p>

                                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                                    {item.address}
                                </p>
                            </div>
                        ))}
                    </div>
                    <span className="text-center max-w-5xl mt-10">{aboutData.infrastructure}</span>
                </div>

                <div className="flex justify-between items-center my-20">
                    <div className="max-w-3xl h-full mx-auto px-4 py-8 text-gray-800 flex flex-col gap-5 items-center">

                        <h1 className="text-5xl font-bold text-gray-800">Our Team</h1>
                        <p className="mt-3 text-xl max-w-xl leading-relaxed text-gray-700 text-center">
                            {aboutData.team.strength + " " + aboutData.team.description}
                        </p>

                    </div>
                    <img src="/assets/team.png" alt="certificate" />
                </div>

                <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800 my-20">
                    <h1 className="text-5xl font-bold text-gray-800 text-center">Our Values</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                        {aboutData.values.map((value, index) => (
                            <div
                                key={index}
                                className="border-l-4 border-blue-600 pl-4"
                            >
                                <h3 className="font-semibold text-gray-900">
                                    {value.name}
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
            <Footer color={""} />
        </>
    )
}