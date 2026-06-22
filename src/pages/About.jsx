
import { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Target,
  Eye,
  // Heart,
  // MapPin,
} from "lucide-react";

import Navbar from "../components/Navbar";
import AboutHero from "../assets/AboutHero.jpeg";
import SiteFooter from "../components/SiteFooter";
import Team from "../assets/Team.jpeg";
import { Helmet } from "react-helmet-async";


function About() {

  useEffect(() => {
    document.title = "About Logistikus";
  }, []);

  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To provide fast, safe, and reliable logistics solutions across Kaduna State—delivering goods, vehicles, and cargo with precision, care, and a strong commitment to customer satisfaction.",
    },

    {
      icon: Eye,
      title: "Vision",
      description:
        "To become the leading logistics company in Northern Nigeria, known for innovation, trust, and reliable delivery of goods, vehicles, and cargo.",
    },

    // {
    //   icon: Heart,
    //   title: "Values",
    //   description:
    //     "Speed, integrity, care, and clear communication.",
    // },
  ];

  const trustItems = [
    "Door-to-Door Service",
    "On-Time Riders",
    "Safe & Secure Handling",
    "Vetted, uniformed riders",
    "Fast, affordable, and dependable",
    "24/7 customer support",
  ];


  return (
    <>
      {/* Header */}
      <Navbar />


      {/* Meta tags Helmet */}

      <Helmet>
        <title>About Logistikus | Your Trusted Delivery Partner</title>
        <meta
          name="description"
          content="Learn more about Logistikus and our commitment to fast, reliable delivery services."
        />
      </Helmet>

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
<section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
  <div className="grid items-center gap-12 lg:grid-cols-2">

    {/* Left Image */}
    <div>
      <img
        src={Team}
        alt="Logistics team"
        className="h-full w-full  object-cover shadow-lg"
      />
    </div>

    {/* Right Content */}
    <div>
      <h2 data-aos="fade-up" data-aos-delay="100" className="text-3xl font-bold text-primary">
        Our Story
      </h2>

      <p data-aos="fade-up" data-aos-delay="100" className="mt-4 leading-relaxed text-gray-600">
        At our core, we are more than just a logistics company—we are a trusted
        partner committed to helping individuals and businesses move forward.
        From local deliveries and freight transportation to vehicle hire,
        haulage, moving services, and car imports, we provide reliable solutions
        designed to make transportation simple, safe, and efficient.
      </p>

      <p data-aos="fade-up" data-aos-delay="100" className="mt-4 leading-relaxed text-gray-600">
        We understand the value of time, trust, and dependability. That's why
        every delivery, shipment, and transportation service we handle is backed
        by a commitment to excellence, professionalism, and customer
        satisfaction. Our team works tirelessly to ensure that your goods,
        vehicles, and cargo reach their destination safely and on schedule.
      </p>

      <p data-aos="fade-up" data-aos-delay="100" className="mt-4 leading-relaxed text-gray-600">
        With a strong presence in Kaduna State and a vision to lead the
        logistics industry across Northern Nigeria, we continue to invest in
        innovative solutions, quality service, and lasting relationships.
        Whether you're an individual with a personal delivery or a business
        with complex logistics needs, we're here to deliver confidence every
        mile of the journey.
      </p>
    </div>

  </div>

    </section>

        {/* Cards */}
        <section className="bg-soft px-4 py-20 sm:px-6 lg:px-8">
        <div  data-aos="fade-up" data-aos-delay="100"  className="mx-auto grid gap-6 items-center md:grid-cols-2 md:px-16">
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
           </section>
      

        {/* Trust */}
        <div className="mt-6 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 bg-white rounded-2xl ">
          <h2  data-aos="fade-up" data-aos-delay="100"  className="mb-12 text-3xl text-center font-bold text-primary">
            Why Customers Trust Us
          </h2>

          <ul  data-aos="fade-up" data-aos-delay="100"  className="mt-6  grid gap-4 text-gray-600 sm:grid-cols-2 md:justify-items-start justify-items-center lg:grid-cols-3">
            {trustItems.map((item) => (
              <li
                key={item}
                 className="flex w-full items-center gap-3 sm:justify-start md:justify-center justify-start  pl-10"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#1E88E5]" />

                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div data-aos="zoom-in" data-aos-delay="100" className="md:m-16 mb-10 text-center border border-gray-200 bg-secondary mx-6 p-10 rounded-3xl shadow-lg max-w-4xl md:mx-auto">
          <h2 className="text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <p className="mt-4 mb-6 text-white">
            Contact us today to learn more about our logistics solutions.
          </p>
          <Link to="/contact" className="mt-20 rounded-md bg-white px-6 py-3 text-primary hover:scale-105 transition-transform font-semibold">
            Get In Touch
          </Link>
        </div>

      
   
      <SiteFooter/>
    </>
  );
}

export default About