import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import FaqHero from "../assets/FaqHero.jpeg";

function Contact() {
  const SITE = {
    name: "Logistikus",
    phone: "+234 911 214 9392",
    email: "logistikuslogisticsltd@gmail.com",
    address: "Kaduna, Nigeria",
    hours: "Mon - Sat | 8AM - 5PM",
    whatsapp: "2349112149392",
  };

  const waLink = (message) => {
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
      message
    )}`;
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello ${SITE.name},

Name: ${form.name}
Email: ${form.email}

${form.message}`;

    window.open(waLink(text), "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: SITE.phone,
    },

    {
      icon: Mail,
      title: "Email",
      value: SITE.email,
    },

    {
      icon: MapPin,
      title: "Office",
      value: SITE.address,
    },

    {
      icon: Clock,
      title: "Hours",
      value: SITE.hours,
    },
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section
      <section className="bg-[#0A3D78] py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1E88E5]">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Let’s Talk
          </h1>

          <p className="mt-6 text-lg text-white/80">
            WhatsApp is the fastest way to reach us — but
            we’re available by phone, email, and office visits too.
          </p>
        </div>
      </section> */}


                          {/* HERO */}
                          <section className="relative overflow-hidden">
                       {/* Background Image */}
                       <div className="absolute inset-0 lg:hidden ">
                         <img
                           src={FaqHero}
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
                           <h1 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                          Let's Talk
                           </h1>
                     
                           <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-lg text-lg text-white/90">
                           WhatsApp is the fastest way to reach us — but
                            we’re available by phone, email, and office visits too.
                           </p>
                         </div>
                       </div>
                     </section>
           

      {/* Contact Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-5">

            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#1E88E5]/10 text-[#1E88E5]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-600">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* WhatsApp Button */}
            <a
              href={waLink("Hello Logistikus!")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-4 font-semibold text-white transition hover:scale-[1.01]"
            >
              <MessageCircle className="h-5 w-5" />

              Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Kaduna&output=embed"
                className="h-72 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Send a Message
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              We’ll reply on WhatsApp within minutes.
            </p>

            <div className="mt-8 space-y-5">

              {/* Name */}
              <input
                required
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#1E88E5] focus:ring-2 focus:ring-[#1E88E5]/20"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address (Optional)"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#1E88E5] focus:ring-2 focus:ring-[#1E88E5]/20"
              />

              {/* Message */}
              <textarea
                required
                rows={6}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#1E88E5] focus:ring-2 focus:ring-[#1E88E5]/20"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-md bg-[#0A3D78] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1E88E5]"
              >
                Send via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

        <SiteFooter />
    </>
  );
}

export default Contact;