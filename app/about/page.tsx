import Footer from "@/components/custom-components/footer";
import Navbar from "@/components/custom-components/navbar";
import { aboutData } from "@/lib/data";

export default function About() {
  return (
    <>
      <Navbar color={""} />

      <section className="relative w-full min-h-screen flex flex-col items-center justify-center">

        {/* HERO */}
        <div className="relative z-10 max-w-5xl px-6 text-center py-20">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-pre-line">
            {aboutData.pageTitle}
          </h1>

          <p className="mt-6 text-base md:text-xl lg:text-2xl max-w-3xl mx-auto">
            {aboutData.whoWeAre.description}
          </p>

          <p className="mt-4 text-base md:text-xl max-w-5xl mx-auto">
            {aboutData.whoWeAre.note}
          </p>
        </div>

        {/* QUALITY COMMITMENT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 max-w-6xl mx-auto w-full">

          <img
            src="/assets/certificate.png"
            alt="certificate"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />

          <div className="flex flex-col gap-5 items-center text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">
              Our Quality Commitment
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-blue-600">
              {aboutData.qualityCommitment.isoCertified}
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
              {aboutData.qualityCommitment.systemDescription}
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
              {aboutData.qualityCommitment.statutoryCompliance}
            </p>
          </div>
        </div>

        {/* FACILITIES */}
        <div className="relative z-10 max-w-5xl px-6 text-center my-20 w-full">
          <h1 className="text-3xl md:text-5xl font-bold">
            Our Facilities
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10">
            {aboutData.facilities.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.unit}
                </h3>

                <p className="text-sm text-blue-600 font-medium mt-1">
                  {item.type}
                </p>

                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                  {item.address}
                </p>
              </div>
            ))}
          </div>

          <span className="block text-sm md:text-base text-gray-600 mt-10">
            {aboutData.infrastructure}
          </span>
        </div>

        {/* TEAM */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-20 px-6 max-w-6xl mx-auto w-full">

          <div className="flex flex-col gap-5 items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold">
              Our Team
            </h1>

            <p className="text-base md:text-lg max-w-xl text-gray-700 leading-relaxed">
              {aboutData.team.strength + " " + aboutData.team.description}
            </p>
          </div>

          <img
            src="/assets/team.png"
            alt="team"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>

        {/* VALUES */}
        <div className="max-w-5xl mx-auto px-6 py-8 text-gray-800 my-20 w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Our Values
          </h1>

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
  );
}