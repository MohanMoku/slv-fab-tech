import Link from "next/link";
import { homeData } from "@/lib/data";
import Navbar from "@/components/custom-components/navbar";
import Footer from "@/components/custom-components/footer";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Navbar color='white' />
      <video
        className="fixed inset-0 -z-10 h-screen w-full object-cover blur-sm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/assets/home-bg.mp4" type="video/mp4" />
      </video>

      <div className="fixed inset-0 -z-8 bg-white/10" />


      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 max-w-5xl px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight whitespace-pre-line">
            {homeData.headline}
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white/80 max-w-3xl mx-auto">
            {homeData.subHeading}
          </p>

          <p className="text-xl max-w-5xl mx-auto">
            {homeData.desc}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
            >Explore Our Services</Link>

            <Link
              href="/contact"
              className="px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition"
            >Get a Quote</Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {homeData.stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10 whitespace-pre-line text-white">What We Do</h1>

        <div className="grid grid-cols-3 gap-4">
          {
            homeData?.whatWeDo?.map((service, index) => (
              <div key={index} className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <img
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  src={service.img}
                  alt={service.title}
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="relative w-full flex items-center justify-between p-30">

        <div className="text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10 whitespace-pre-line">Why Choose Us</h1>
          <p className="mt-6 text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">All services under one roof. No vendor juggling, no quality gaps — just consistent output, shorter lead times, and a team that takes ownership.</p>
        </div>
        <img src="/assets/why-us-home.png" alt="image" className="w-100 h-150" />
      </section>

      <section className="relative w-full flex flex-col items-center justify-center p-30 text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10 whitespace-pre-line">Industries We Serve</h1>

        <div className="grid grid-cols-2 gap-10">
          {homeData?.industriesWeServe?.map((service, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-3 p-4 border rounded-lg shadow-sm bg-white/20 hover:shadow-md transition"
            >
              {React.createElement(service.icon, {
                className: "w-10 h-10",
              })}

              <h1 className="font-medium">
                {service.title}
              </h1>
            </div>
          ))}
        </div>
      </section>
      <Footer color="white" />
    </div>
  );
}
