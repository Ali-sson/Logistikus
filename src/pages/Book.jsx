import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import ErrandHero from "../assets/ErrandHero.jpeg";
import { Helmet } from "react-helmet-async";

const SITE = {
  name: "Logistikus",
  whatsapp: "2349112149392",
};

const PRICING = {
  "Barnawa": 1500,
  "Central Market": 2000,
  "U/Pama": 2000,
  "Mando": 4000,
  "Afaka": 4000,
  "Kawo": 3500,
  "U/Dosa": 3000,
  "Karji": 2000,
  "Kurmi Mashi": 3000,
  "Maigero": 1500,
  "Unguwan Rimi": 2500,
  "Stadium Round-About": 1500,
  "ByePass": 2500,
  "Kamazou": 2500,
  "Nepa Round-About": 1500,
  "Gonin-Gora": 3000,
  "Hayin Banki": 3000,
  "Buwaya": 3000,
  "Yakubu Gowon Way": 2000,
  "Janruwa": 2000,
  "Constitution Road": 1500,
  "Kudenden": 3000,
   "Airforce Base" : 4000,
   "Command" : 2000,
   "Tudun Wada" : 3000,
   "Malali" : 2500,
   "Refinery Junction" : 2500,
   "Kasuwan Barci" : 3000,
   "Bayan Dutse" : 2000,
   "UTC" : 1500,
   "Premium Trust" : 2000,
   "Station Roundabout" : 1000,
   "Narayi Junction" : 1500,
   "Naf Club" : 2500,
   "Naf Base" : 3000,
   "ST. Gerald" : 1500,
   "Agwa" : 3000,
   "Alkali Road" : 2500,
   "Romi" : 2500,
   "NDC" : 3500,
   "Gbayi Villa" : 2500,
   "Firs Market" : 1500,
   "Barnawa Highcost" : 1500,
   "Kinkino" : 3000,
   "Jaji" : 8000,
   "Zaria" : 10000,
   "Abuja Road" : 3000,
   "Millenium City" : 3000,
   "Mahuta" : 2500,
   "Unguwan Sunday" : 2000,
   "Kigo Road" : 2000,
   "Sardauna Cresent" : 1500,
   "Kasu" : 2000,
   "Arochukwu Road" : 1500,
   "Maraba Rido" : 3000,
   "Rigasa" : 3500,
   "Unguwan Gimbiya" : 2500,
   "Kakuri": 2000,
   "44 Hospital" : 2500,
   "Trikania" : 2500,
   "Nasarawa" : 2500,
   "Unguwan Sarki" : 3000,
};

const waLink = (message) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "Fast Delivery",
  pickup: "",
  delivery: "",
  date: "",
  time: "",
  phone1: "",
  phone2: "",
  item: "",
  size: "",
  fragile: "No",
  notes: "",
  payMethod: "Cash",
  payer: "Sender",
  location: "",
  price: "",
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

  // ✅ LOCATION HANDLER (FIXED)
  const handleLocationChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      location: value,
      price: PRICING[value] || "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "*NEW ERRAND REQUEST*",
      "",
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      // formData.email ? `*Email:* ${formData.email}` : null,
      "",
      `*Service:* ${formData.service}`,
      "",
      `*Pickup:* ${formData.pickup}`,
      `*Delivery:* ${formData.delivery}`,
      "",
      `*Phone1:* ${formData.phone1}`,
      `*Item Description:* ${formData.item}`,
      "",
      formData.location ? `*Location:* ${formData.location}` : null,
      formData.price ? `*Delivery Fee:* ₦${formData.price}` : null,
      "",
      `*Date:* ${formData.date || "ASAP"}`,
      // `*Time:* ${formData.time || "ASAP"}`,
      "",
      `*Item:* ${formData.item}`,
      formData.size ? `*Weight/Size:* ${formData.size}` : null,
      `*Fragile:* ${formData.fragile}`,
      formData.notes ? `*Notes:* ${formData.notes}` : null,
      "",
      `*Payment Method:* ${formData.payMethod}`,
      `*Delivery Fee Paid By:* ${formData.payer}`,
    ]
      .filter(Boolean)
      .join("\n\n");

    window.open(waLink(message), "_blank");
  };

  return (
    <>
      <Navbar />

      {/* Meta tags Helmet */}

        <Helmet>
        <title>Book an Errand | Logistiskus Delivery Services</title>

        <meta
          name="description"
          content="Book a fast and reliable errand service with Logistiskus. Schedule pickups, deliveries, and courier services quickly and securely."
        />

        <meta
          name="keywords"
          content="book errand, delivery service, courier service, pickup and delivery, same day delivery, logistics, errands, Nigeria"
        />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 lg:hidden">
          <img
            src={ErrandHero}
            alt="Delivery background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#0A3D78] via-[#1565C0] to-[#1E88E5]" />

        <div  data-aos="fade-up" data-aos-delay="100"  className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div className="text-white">
            <h1 className="mt-6 text-4xl md:text-5xl font-bold">
              From Books to Errands
            </h1>
            <p  data-aos="fade-up" data-aos-delay="200" className="mt-2 text-lg text-white/90">
              Logistikus delivers what matters, Fast and Safely.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <form
          onSubmit={handleSubmit}
          className="space-y-10 rounded-3xl border bg-white p-7 shadow-sm sm:p-10"
        >
          {/* CUSTOMER */}
          <div>
            <h3 className="text-2xl font-bold">Customer Information</h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *">
                <input
                  className={inputClass}
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                />
              </Field>

              <Field label="Phone *">
                <input
                  className={inputClass}
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  required
                />
              </Field>

            

              <Field label="Date">
                <input
                  type="date"
                  className={inputClass}
                  value={formData.date}
                  onChange={(e) => updateField("date", e.target.value)}
                />
              </Field>

              <Field label="Time">
                <input
                  type="time"
                  className={inputClass}
                  value={formData.time}
                  onChange={(e) => updateField("time", e.target.value)}
                />
              </Field>

            </div>
          </div>


          {/* SERVICE */}
          <div>
            <h3 className="text-2xl font-bold">Service Details</h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {/* LOCATION */}

                <Field label="Service Type">
                <select
                  className={inputClass}
                  value={formData.service}
                  onChange={(e) => updateField("service", e.target.value)}
                >
                  <option>Fast Delivery</option>
                  <option>Scheduled Delivery</option>
                  <option>Heavy Haulage</option>
                  <option>Car Import</option>
                  <option>Moving Services</option>
                </select>
              </Field>

              <Field label="Delivery Location *">
                <select
                  className={inputClass}
                  value={formData.location}
                  onChange={(e) => handleLocationChange(e.target.value)}
                  required
                >
                  <option value="">Select Location</option>
                  {Object.keys(PRICING).map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </Field>

              {/* PRICE DISPLAY */}
              {formData.price && (
                <div className="sm:col-span-2 rounded-xl bg-blue-50 p-4 border border-blue-200">
                  <p className="text-sm text-gray-600">Estimated Delivery Fee</p>
                  <p className="text-2xl font-bold text-[#1E88E5]">
                    ₦{formData.price}
                  </p>
                </div>
              )}

              <Field label="Item Description">
                <input
                  className={inputClass}
                  value={formData.item}
                  onChange={(e) => updateField("item", e.target.value)}
                  placeholder="Please Descript item "
                />
              </Field>

              <Field label="Weight/Size">
                <input
                  className={inputClass}
                  value={formData.size}
                  onChange={(e) => updateField("size", e.target.value)}
                  placeholder="E.g., 2kg or 30x30x30cm"
                />
              </Field>

              <Field label="fragile">
                <select
                  className={inputClass}
                  value={formData.fragile}
                  onChange={(e) => updateField("fragile", e.target.value)}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>

              </Field>

              <Field label="Pickup Address *">
                <input
                  className={inputClass}
                  value={formData.pickup}
                  onChange={(e) => updateField("pickup", e.target.value)}
                  required
                />
              </Field>

              <Field label="Delivery's Address *">
                <input
                  className={inputClass}
                  value={formData.delivery}
                  onChange={(e) => updateField("delivery address", e.target.value)}
                  required
                />
              </Field>

            

               <Field label="Delivery Phone Number">
                <input
                  className={inputClass}
                  value={formData.phone1}
                  onChange={(e) => updateField("phone1", e.target.value)}
                />
                </Field>
            </div>
          </div>

            <div>
            <h3 className="text-2xl font-bold">Payments</h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

             <Field label="Payment Method *">
                <select
                  className={inputClass}
                  value={formData.payment}
                  onChange={(e) => updateField("payment", e.target.value)}
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="cash">Cash</option>
                  <option value="card">Credit Card</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </Field>

              
               <Field label="Delivery Fee Paid By">
               <select
                  className={inputClass}
                   value={formData.payer}
                    onChange={(e) => updateField("payer", e.target.value)}
                    required
                    >
    <option value="">Select payer</option>
    <option value="Sender">Sender</option>
    <option value="Receiver">Receiver</option>
  </select>
</Field>

              </div>
              </div>

                <div>
            <h3 className="text-2xl font-bold">Payments</h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">

              <Field label="Additional Notes">
                <textarea
                  className={inputClass}
                  value={formData.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                  placeholder="Any additional information about the delivery..."
                />
              </Field>

            </div>
            </div>





          {/* SUBMIT */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] py-4 font-semibold text-white"
          >
            <MessageCircle className="h-5 w-5" />
            Send to Logistikus via WhatsApp
          </button>
        </form>
      </section>

      <SiteFooter />
    </>
  );
}

export default Book;