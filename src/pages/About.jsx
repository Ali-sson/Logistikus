
import { useEffect } from "react";

import {
  Target,
  Eye,
  Heart,
  MapPin,
} from "lucide-react";

import Navbar from "../components/Navbar";
import AboutHero from "../assets/AboutHero.jpeg";
import SiteFooter from "../components/SiteFooter";


function About() {

  useEffect(() => {
    document.title = "About Logistikus";
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "Deliver every package safely and on time, every time.",
    },

    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the most trusted urban logistics brand in West Africa.",
    },

    {
      icon: Heart,
      title: "Values",
      description:
        "Speed, integrity, care, and clear communication.",
    },
  ];

  const trustItems = [
    "Vetted, uniformed riders",
    "Real-time WhatsApp updates",
    "Transparent pricing",
    "Insured high-value transfers",
    "24/7 customer support",
    "Friendly, professional service",
  ];

  return (
    <>
      {/* Header */}
      <Navbar />

          {/* HERO */}
          <section className="relative overflow-hidden">
       {/* Background Image */}
       <div className="absolute inset-0 lg:hidden ">
         <img
           src={AboutHero}
           alt="Delivery background"
           className="h-full w-full object-cover"
         />
     
         {/* Dark Overlay */}
         <div className="absolute inset-0 bg-primary/80"></div>
       </div>
     
         <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#0A3D78] via-[#1565C0] to-[#1E88E5]" />
     
       {/* Content */}
       <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
         
         {/* Left Content */}
         <div className="text-white ">
           <h1 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-4xl md:text-5xl font-bold leading-tight ">
            Your Trusted Delivery Partner
           </h1>
     
           <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-lg text-lg text-white/90">
             From urgent dispatches to everyday errands — Logistikus keeps your city moving with speed, safety, and reliability..
           </p>
         </div>
       </div>
     </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">

        {/* Story */}
        <div>
          <h2 className="text-3xl font-bold text-primary">
            Our Story
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Logistikus started with a single rider and a simple
            idea — that getting something across town should not
            be a stressful, full-day project.

            Today, we run a fleet of trained dispatch riders
            helping businesses and individuals move packages,
            run errands, and meet deadlines with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-primary">
            Why Customers Trust Us
          </h2>

          <ul className="mt-6 grid gap-4 text-gray-600 sm:grid-cols-2">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#1E88E5]" />

                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Coverage */}
        <div className="mt-16 rounded-2xl bg-gray-100 p-8">
          <div className="flex items-center gap-3 text-[#1E88E5]">
            <MapPin className="h-5 w-5" />

            <h3 className="text-2xl font-bold text-secondary">
              Service Coverage
            </h3>
          </div>

          <p className="mt-3 leading-relaxed text-gray-600">
            We currently serve Kaduna metropolis and surrounding
            areas, with expansion to Zaria and Kafachan.
          </p>
        </div>
      </section>
      <SiteFooter/>
    </>
  );
}

export default About