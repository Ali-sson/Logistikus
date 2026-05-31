import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import FaqHero from "../assets/FaqHero.jpeg";


const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Most local deliveries are completed within 1–3 hours. City-wide deliveries are same-day if booked before 4 PM.",
  },

  {
    question: "What areas do you cover?",
    answer:
      "We currently serve Kaduna metropolis and surrounding areas. Expansion to Zaria and Kafachan.",
  },

  {
    question: "Are fragile items accepted?",
    answer:
      "Yes. Just mention it in the booking form and our rider will handle it with extra care and proper padding.",
  },

  {
    question: "How do payments work?",
    answer:
      "You can pay by cash, bank transfer, or card. You choose whether the sender or receiver covers the delivery fee.",
  },

  {
    question: "Can I track my order?",
    answer:
      "Yes. We send live WhatsApp updates from pickup to delivery, including confirmation when your package arrives.",
  },

  {
    question: "Do you deliver at night?",
    answer:
      "We operate from 8 AM to 5 PM. Emergency deliveries outside these hours are available at an extra charge.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>

    <Navbar />


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
                    Your Questions, Clearly Answered
                     </h1>
               
                     <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-lg text-lg text-white/90">
                     From delivery times to payment options — everything you need to know about Logistikus in one place.
                     </p>
                   </div>
                 </div>
               </section>
     

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">

        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-base font-semibold text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#1E88E5] transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {open === index && (
                <div className="border-t border-gray-100 p-5 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export default FAQ;