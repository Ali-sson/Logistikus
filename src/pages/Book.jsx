import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import ErrandHero from "../assets/ErrandHero.jpeg";


const SITE = {
  name: "Logistikus",
  whatsapp: "2349112149392",
};

const waLink = (message) => {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
};

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "Fast Delivery",
  pickup: "",
  delivery: "",
  date: "",
  time: "",
  item: "",
  size: "",
  fragile: "No",
  notes: "",
  payMethod: "Cash",
  payer: "Sender",
};

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-500">
        {label}
      </span>

      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#1E88E5] focus:ring-2 focus:ring-[#1E88E5]/20";

function Book() {
  const [formData, setFormData] = useState(initialForm);

  const updateField = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.pickup.trim() ||
      !formData.delivery.trim()
    ) {
      return;
    }

    const message = [
      "*NEW ERRAND REQUEST*",
      "",

      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : null,

      "",
      `*Service:* ${formData.service}`,

      "",
      `*Pickup:* ${formData.pickup}`,
      `*Delivery:* ${formData.delivery}`,

      "",
      `*Date:* ${formData.date || "ASAP"}`,
      `*Time:* ${formData.time || "ASAP"}`,

      "",
      `*Item:* ${formData.item}`,
      formData.size
        ? `*Weight/Size:* ${formData.size}`
        : null,

      `*Fragile:* ${formData.fragile}`,

      formData.notes
        ? `*Notes:* ${formData.notes}`
        : null,

      "",
      `*Payment Method:* ${formData.payMethod}`,
      `*Delivery Fee Paid By:* ${formData.payer}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(waLink(message), "_blank");
  };

  return (
    <>
      {/* Header */}

      <Navbar />


                      {/* HERO */}
                      <section className="relative overflow-hidden">
                   {/* Background Image */}
                   <div className="absolute inset-0 lg:hidden ">
                     <img
                       src={ErrandHero}
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
                       From Books to Errands
                       </h1>
                 
                       <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-lg text-lg text-white/90">
                        Logistikus delivers what matters, Fast and Safely.
                       </p>
                     </div>
                   </div>
                 </section>
    

      {/* Form Section */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">

        <form
          onSubmit={handleSubmit}
          className="space-y-10 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm sm:p-10"
        >

          {/* Customer Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Customer Information
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <Field label="Full Name *">
                <input
                  required
                  type="text"
                  className={inputClass}
                  value={formData.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                />
              </Field>

              <Field label="Phone Number *">
                <input
                  required
                  type="text"
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value)
                  }
                />
              </Field>

              <Field label="Email Address">
                <input
                  type="email"
                  className={inputClass}
                  value={formData.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                />
              </Field>
            </div>
          </div>

          {/* Service Details */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Service Details
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <Field label="Service Type">
                <select
                  className={inputClass}
                  value={formData.service}
                  onChange={(e) =>
                    updateField("service", e.target.value)
                  }
                >
                  <option>Fast Delivery</option>
                  <option>Pickup</option>
                  <option>Personal Errand</option>
                  <option>Door-to-Door</option>
                  <option>Safe Transfer</option>
                </select>
              </Field>

              <div />

              <Field label="Pickup Address *">
                <input
                  required
                  type="text"
                  className={inputClass}
                  value={formData.pickup}
                  onChange={(e) =>
                    updateField("pickup", e.target.value)
                  }
                />
              </Field>

              <Field label="Delivery Address *">
                <input
                  required
                  type="text"
                  className={inputClass}
                  value={formData.delivery}
                  onChange={(e) =>
                    updateField("delivery", e.target.value)
                  }
                />
              </Field>

              <Field label="Pickup Date">
                <input
                  type="date"
                  className={inputClass}
                  value={formData.date}
                  onChange={(e) =>
                    updateField("date", e.target.value)
                  }
                />
              </Field>

              <Field label="Pickup Time">
                <input
                  type="time"
                  className={inputClass}
                  value={formData.time}
                  onChange={(e) =>
                    updateField("time", e.target.value)
                  }
                />
              </Field>
            </div>
          </div>

          {/* Package Details */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Package Details
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <Field label="Item Description *">
                <input
                  required
                  type="text"
                  className={inputClass}
                  value={formData.item}
                  onChange={(e) =>
                    updateField("item", e.target.value)
                  }
                />
              </Field>

              <Field label="Weight / Size">
                <input
                  type="text"
                  placeholder="e.g. 2kg, small box"
                  className={inputClass}
                  value={formData.size}
                  onChange={(e) =>
                    updateField("size", e.target.value)
                  }
                />
              </Field>

              <Field label="Fragile?">
                <select
                  className={inputClass}
                  value={formData.fragile}
                  onChange={(e) =>
                    updateField("fragile", e.target.value)
                  }
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
              </Field>

              <Field label="Extra Notes">
                <input
                  type="text"
                  className={inputClass}
                  value={formData.notes}
                  onChange={(e) =>
                    updateField("notes", e.target.value)
                  }
                />
              </Field>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Payment Details
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <Field label="Payment Method">
                <select
                  className={inputClass}
                  value={formData.payMethod}
                  onChange={(e) =>
                    updateField("payMethod", e.target.value)
                  }
                >
                  <option>Cash</option>
                  <option>Bank Transfer</option>
                  <option>Card</option>
                </select>
              </Field>

              <Field label="Who Pays Delivery Fee?">
                <select
                  className={inputClass}
                  value={formData.payer}
                  onChange={(e) =>
                    updateField("payer", e.target.value)
                  }
                >
                  <option>Sender</option>
                  <option>Receiver</option>
                </select>
              </Field>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition hover:scale-[1.01]"
          >
            <MessageCircle className="h-5 w-5" />

            Send to {SITE.name} via WhatsApp
          </button>

          <p className="text-center text-xs text-gray-500">
            After submitting, you’ll be redirected to WhatsApp with your pre-filled message.
          </p>
        </form>
      </section>

      <SiteFooter />
    </>
  );
}

export default Book;