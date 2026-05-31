import { Link } from "react-router-dom";

import {
  Zap,
  PackageCheck,
  ShieldCheck,
  Home as HomeIcon,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import ServicesHero from "../assets/ServicesHero.jpeg";
import SiteFooter from "../components/SiteFooter";


function Services() {

    
const services = [
  {
    icon: Zap,
    title: "Fast Deliveries",
    description:
      "Same-day package movement anywhere in the city. Ideal for documents, parcels, and urgent orders.",
    price: "From ₦1,500",
  },

  {
    icon: PackageCheck,
    title: "Pickups",
    description:
      "We pick items from stores, parks, motor parks, and homes — and bring them straight to you.",
    price: "From ₦1,200",
  },

  {
    icon: ShieldCheck,
    title: "Safe Transfers",
    description:
      "Secure movement of valuable items including electronics, jewellery, and important documents.",
    price: "From ₦2,500",
  },

  {
    icon: HomeIcon,
    title: "Door-to-Door",
    description:
      "Full pickup and delivery service — we handle every step from origin to destination.",
    price: "From ₦1,800",
  },

  {
    icon: ShoppingBag,
    title: "Personal Errands",
    description:
      "Shopping, bill payments, item collection, and queue services handled for you.",
    price: "From ₦2,000",
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
                 src={ServicesHero}
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
                 Reliable Services for a Fast-Moving City
                 </h1>
           
                 <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-lg text-lg text-white/90">
                  From urgent packages to personal errands — Logistikus delivers speed, security, and peace of mind every step of the way.
                 </p>
               </div>
             </div>
           </section>

    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">

      <div className="grid gap-4">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="grid items-center gap-4 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[1fr_2fr_auto] md:p-10"
            >

              {/* Icon */}
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-secondary text-white">
                <Icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <p className="mt-4 text-sm font-semibold text-[#1E88E5]">
                  {service.price}
                </p>
              </div>

              {/* Button */}
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#1E88E5]"
              >
                Book now

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>

    <SiteFooter/>
    </>
  );
}

export default Services;
