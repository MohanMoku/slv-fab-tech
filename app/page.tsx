import Link from "next/link";
import { homeData } from "@/lib/data";
import Navbar from "@/components/custom-components/navbar";
import Footer from "@/components/custom-components/footer";
import React from "react";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar color="" />

      <div className="fixed inset-0 -z-10 bg-white/10" />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
            {homeData.headline}
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-2xl opacity-80 max-w-3xl mx-auto">
            {homeData.subHeading}
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-xl max-w-4xl mx-auto opacity-90">
            {homeData.desc}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-6 sm:px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Explore Our Services
            </Link>

            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 border border-white font-semibold rounded-full hover:bg-white hover:text-black transition"
            >
              Get a Quote
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {homeData.stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base opacity-70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="w-full px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-10">
          What We Do
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {homeData?.whatWeDo?.map((service, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition border"
            >
              <img
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                src={service.img}
                alt={service.title}
              />
              <div className="p-4 text-left">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Why Choose Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl opacity-80 max-w-2xl">
            All services under one roof. No vendor juggling, no quality gaps —
            just consistent output, shorter lead times, and a team that takes ownership.
          </p>
        </div>

        <div className="flex-1">
          <img
            src="/assets/why-us-home.png"
            alt="Why choose us"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="w-full px-4 sm:px-6 py-16 sm:py-24 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-10">
          Industries We Serve
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-5xl mx-auto">
          {homeData?.industriesWeServe?.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white/20 hover:shadow-md transition"
            >
              {React.createElement(service.icon, {
                className: "w-8 h-8 sm:w-10 sm:h-10",
              })}

              <h1 className="font-medium text-sm sm:text-base">
                {service.title}
              </h1>
            </div>
          ))}
        </div>
      </section>

      <Footer color="" />
    </div>
  );
}