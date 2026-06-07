// import { Link } from "react-router-dom";

import {
  // Zap,
  // PackageCheck,
  // ShieldCheck,
  // Home as HomeIcon,
  // ShoppingBag,
  // ArrowRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import ServicesHero from "../assets/ServicesHero.jpeg";
import SiteFooter from "../components/SiteFooter";
import { Helmet } from "react-helmet-async";


function Services() {

    
const services = [
//   {
//     icon: Zap,
//     title: "Fast Deliveries",
//     description:
//       "Same-day package movement anywhere in the city. Ideal for documents, parcels, and urgent orders.",
//     price: "From ₦1,500",
//   },

//   {
//     icon: PackageCheck,
//     title: "Pickups",
//     description:
//       "We pick items from stores, parks, motor parks, and homes — and bring them straight to you.",
//     price: "From ₦1,200",
//   },

//   {
//     icon: ShieldCheck,
//     title: "Safe Transfers",
//     description:
//       "Secure movement of valuable items including electronics, jewellery, and important documents.",
//     price: "From ₦2,500",
//   },

//   {
//     icon: HomeIcon,
//     title: "Door-to-Door",
//     description:
//       "Full pickup and delivery service — we handle every step from origin to destination.",
//     price: "From ₦1,800",
//   },

//   {
//     icon: ShoppingBag,
//     title: "Personal Errands",
//     description:
//       "Shopping, bill payments, item collection, and queue services handled for you.",
//     price: "From ₦2,000",
//   },
 {
    title: "Delivery",
    desc: "Fast and secure parcel delivery across cities and states.",
    icon: "📦",
  },
  {
    title: "Logistics",
    desc: "End-to-end logistics solutions for individuals and businesses.",
    icon: "🚚",
  },
  {
    title: "Car Hire",
    desc: "Affordable and reliable vehicle rental services.",
    icon: "🚗",
  },
  {
    title: "Movers",
    desc: "Stress-free home and office relocation services.",
    icon: "🏠",
  },
  {
    title: "Freight",
    desc: "Safe transportation of bulk goods and cargo.",
    icon: "📦",
  },
  {
    title: "Haulage",
    desc: "Heavy-duty transport for industrial and commercial goods.",
    icon: "🚛",
  },
  {
    title: "Car Imports",
    desc: "We help you import and deliver vehicles hassle-free.",
    icon: "🚢",
  },
];

  return (
    <>

      <Navbar />
                
      {/* Meta tags Helmet */}

      <Helmet>
        <title>Our Services | Logistiskus</title>
        <meta
          name="description"
          content="Explore our errand, courier, and delivery services."
        />
      </Helmet>


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
             <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28 ">
               
               {/* Left Content */}
               <div className="text-white">
                 <h1 data-aos="fade-up" data-aos-delay="100" className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                From Delivery to Heavy Haulage, We Handle It All
                 </h1>

           
                 <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-lg text-lg text-white/90">
                 From delivery and freight to car hire, movers, haulage, and car imports, we handle every service with care and professionalism.
                 </p>
               </div>
             </div>
           </section>
{/* 
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">

      <div className="grid gap-4">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="grid items-center gap-4 rounded-3xl border border-gray-200 bg-soft p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[1fr_2fr_auto] md:p-10"
            >

              {/* Icon *
              <div className="grid h-20 w-20 place-items-center rounded-2x text-secondary">
              <Icon className="h-6 w-6 md:h-20 md:w-20" />
              </div>

              {/* Content *
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

              {/* Button *
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
    </section> */}




    <section data-aos="fade-up" data-aos-delay="100" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-primary">
          Our Services
        </h2>
        <p className="mt-3 text-gray-600">
          At Logistikus, we provide reliable and efficient logistics solutions designed to meet all your transportation needs. From fast deliveries and secure freight to car hire, moving services, haulage, and vehicle imports, we handle every job with care, precision, and professionalism. Our goal is to make movement simple, safe, and stress-free—whether you’re an individual or a business. With a strong focus on speed, trust, and customer satisfaction, 
          we ensure your goods and vehicles get to their destination without delay or compromise
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="text-3xl">{service.icon}</div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              {service.title}
            </h3>

            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>



    {/* “Contact Logistikus today for any logistics service—we deliver with speed, care, and trust.” */}

       {/* CTA */}
        <div data-aos="zoom-in" data-aos-delay="100" className="md:m-16 mb-10 text-center border border-gray-200 bg-secondary mx-6 p-10 rounded-3xl shadow-lg max-w-4xl md:mx-auto">
          <h2 className="text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-white">
            Contact Logistikus today for any logistics service—we deliver with speed, care, and trust.
          </p>
          <button className="mt-6 rounded-md bg-white px-6 py-3 text-primary hover:scale-105 transition-transform font-semibold">
            Contact Us
          </button>
        </div>
  
    <SiteFooter/>
    </>
  );
}

export default Services;



// const services = [
 
// ];

// export default function ServicesSection() {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
//       {/* Header */}
//       <div className="text-center max-w-2xl mx-auto">
//         <h2 className="text-4xl font-bold text-primary">
//           Our Services
//         </h2>
//         <p className="mt-3 text-gray-600">
//           Reliable logistics solutions designed to move your goods, vehicles, and business forward.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
//         {services.map((service) => (
//           <div
//             key={service.title}
//             className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
//           >
//             <div className="text-3xl">{service.icon}</div>

//             <h3 className="mt-4 text-xl font-bold text-gray-900">
//               {service.title}
//             </h3>

//             <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//               {service.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
