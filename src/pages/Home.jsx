

import { Link } from "react-router-dom";
import WhatsAppFloat from "../components/WhatsAppFloat";

import {
  Zap,
  PackageCheck,
  ShieldCheck,
  Home as HomeIcon,
  ShoppingBag,
  Building2,
  Clock,
  Wallet,
  Lock,
  UserCheck,
  MessageSquare,
  CalendarClock,
  ArrowRight,
  Star,
  MessageCircle,
} from "lucide-react";

// import HeroImage from "../assets/HeroIm.png";
import HeroImage from "../assets/Hero3.jpeg";
import SiteFooter from "../components/SiteFooter";
import Navbar from "../components/Navbar"


function Home() {
  const SITE = {
    name: "Logistikus",
  };

  const waLink = (message) => {
    return `https://wa.me/2347012345678?text=${encodeURIComponent(message)}`;
  };

  const services = [
    {
      icon: Zap,
      title: "Fast Deliveries",
      desc: "Same-day package movement across the city.",
    },
    {
      icon: PackageCheck,
      title: "Pickup Services",
      desc: "We pick up from stores, parks, or homes.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Transfers",
      desc: "Secure movement of valuable items.",
    },
    {
      icon: HomeIcon,
      title: "Door-to-Door",
      desc: "Pickup & delivery without you moving.",
    },
    {
      icon: ShoppingBag,
      title: "Personal Errands",
      desc: "Shopping, bills, item collection & more.",
    },
    {
      icon: Building2,
      title: "Business Logistics",
      desc: "Reliable B2B routes for your operations.",
    },
  ];

  const why = [
    {
      icon: Clock,
      title: "Fast response",
      desc: "Riders dispatched within minutes.",
    },
    {
      icon: Wallet,
      title: "Affordable pricing",
      desc: "Transparent rates with no surprises.",
    },
    {
      icon: Lock,
      title: "Secure handling",
      desc: "Every item tracked and accounted for.",
    },
    {
      icon: UserCheck,
      title: "Professional riders",
      desc: "Vetted, uniformed, and trained.",
    },
    {
      icon: MessageSquare,
      title: "Real-time updates",
      desc: "Stay in the loop via WhatsApp.",
    },
    {
      icon: CalendarClock,
      title: "Same-day delivery",
      desc: "Drop today, delivered today.",
    },
  ];

   const steps = [
    {
      number: "01",
      title: "Create Request",
      description:
        "Fill the quick form or send a WhatsApp message with your pickup details.",
    },
    {
      number: "02",
      title: "We Pick Up",
      description:
        "Our rider arrives at your pickup point fast — confirmed via WhatsApp.",
    },
    {
      number: "03",
      title: "We Deliver Safely",
      description:
        "Tracked door-to-door drop-off with confirmation when complete.",
    },
  ];

  const stats = [
    { n: "500+", l: "Deliveries" },
    { n: "200+", l: "Happy Customers" },
    { n: "24/7", l: "Support" },
    { n: "99%", l: "Successful Drops" },
  ];

  const testimonials = [
    {
      name: "Anthony O.",
      role: "Boutique Owner",
      quote:
        "Logistikus moves my parcels across town faster than I can. My customers are happy, and so am I.",
    },
    {
      name: "James A.",
      role: "Pharmacy Manager",
      quote:
        "Reliable, professional, and always on time. They've become an extension of our business.",
    },
    {
      name: "Grace O.",
      role: "Frequent Sender",
      quote:
        "I just send a WhatsApp message and it's done. Best errand service in the city, hands down.",
    },
  ];

  return (
    <>

    <Navbar />
      {/* HERO */}
     <section className="relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 lg:hidden ">
    <img
      src={HeroImage}
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
      <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
        <Zap className="h-3.5 w-3.5" />
        Same-day delivery
      </span>

      <h1 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl ">
        Fast & Reliable
        <br />
        <span className="text-[#1E88E5]">Delivery</span> Across
        <br />
        Your City
      </h1>

      <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-lg text-lg text-white/90">
        From urgent packages to everyday errands — Logistikus delivers
        quickly, safely, and right on time.
      </p>

      {/* Buttons */}
      <div data-aos="zoom-in" data-aos-delay="100" className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/book"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:text-[#0A3D78]"
        >
          Book an Errand
          <ArrowRight className="h-4 w-4" />
        </Link>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          Contact Us
        </Link>
      </div>

      {/* Reviews */}
      <div className="mt-10 flex items-center gap-5">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#0A3D78] text-xs font-bold"
            >
              {i}
            </div>
          ))}
        </div>

        <div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="text-sm text-white/80">
            Rated 4.9 by 200+ customers
          </p>
        </div>
      </div>
    </div>

    {/* Right Image Card */}
    <div className="relative hidden lg:block">
      <div data-aos="zoom-in" data-aos-delay="300" className="overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={HeroImage}
          alt="Logistikus rider"
          className="h-[500px] w-full object-cover"
        />
      </div>

      {/* Floating Card */}
      <div className="absolute -bottom-6 left-8 rounded-2xl bg-white p-5 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-[#0A3D78] text-white">
            <PackageCheck className="h-6 w-6" />
          </div>

          <div>
            <p className="text-lg font-bold text-black">
              99% On-Time.
            </p>

            <p className="text-sm text-gray-500">
              Tracked deliveries this month
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* SERVICES */}
      <section data-aos="fade-up" data-aos-delay="100" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 ">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What we do
          </p>

          <h2 className="mt-2 text-4xl font-bold text-primary sm:text-5xl">
            Trusted Services
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl text-secondary transition-colors group-hover:bg-accent group-hover:text-white">
                <s.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-black">
                {s.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* why */}
      <section data-aos="fade-up" data-aos-delay="100" className="py-16 text-white bg-secondary/10">
          <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Why Us
          </p>

          <h2 className="mt-2 text-4xl font-bold text-primary sm:text-5xl">
            Why Choose Logistikus
          </h2>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
            {why.map((w) => (
              <div key={w.title} className="flex gap-3 items-center text-center border rounded-2xl p-4 bg-white backdrop-blur transition hover:bg-white/20">
                <div className="grid h-12 w-12 place-items-center rounded-full text-secondary">
                  <w.icon className="h-6 w-6" />
                </div>
                 <div className="flex flex-col items-left text-left">
                <h3 className="mt-0 text-xl font-bold text-black">
                  {w.title}
                </h3>

                <p className="mt-0 text-gray-500">
                  {w.desc}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}

    <section data-aos="fade-up" data-aos-delay="100" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#1E88E5]">
          How it works
        </p>

        <h2 className="mt-2 text-4xl font-bold text-primary sm:text-5xl">
          Three Simple Steps
        </h2>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Big Number */}
            <span className="text-6xl font-bold text-[#1E88E5]/10">
              {step.number}
            </span>

            {/* Title */}
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  



      {/* STATS */}
      <section data-aos="fade-up" data-aos-delay="100" className="bg-primary py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center text-white">
              <p className="text-4xl font-bold text-white">
                {s.n}
              </p>

              <p className="mt-2 text-sm uppercase tracking-widest text-white/70">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section data-aos="zoom-in" data-aos-delay="100" className="px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-secondary p-10 text-center text-white sm:p-16">
          <h2 className="text-4xl font-bold sm:text-6xl">
            Need Something Delivered Today?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-white/90">
            Book in 30 seconds and we'll handle the rest.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-black hover:scale-105 transition-transform"
            >
              Create Errand
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={waLink(
                `Hello ${SITE.name}, I'd like to book a delivery.`
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white hover:scale-105 transition-transform"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
        <section data-aos="fade-up" data-aos-delay="100" className="px-4 py-20 sm:px-6 lg:px-8 bg-secondary/10"> 
            <div className="mb-12 text-center mx-auto">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#1E88E5]">
                    Testimonials
                </p>

                <h2 className="mt-2 text-4xl font-bold text-primary">
                    What Our Customers Say
                </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mx-auto max-w-7xl ">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.name}
                        className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                    >
                        <p className="text-lg italic text-gray-600">
                            "{testimonial.quote}"
                        </p>

                        <div className="mt-6">
                            <h4 className="font-bold text-gray-900">
                                {testimonial.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        <WhatsAppFloat />

        <SiteFooter />
    </>
  );
}

export default Home;
