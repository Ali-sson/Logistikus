import safif from "../assets/safif.png";
import pullus from "../assets/pullus.png";


const partners = [
  { id: 1, logo: safif, name: "SAFIF" },
  { id: 2, logo: pullus , name: "PULLUS" },

];

export default function PartnersSponsors() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        {/* <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent font-semibold uppercase tracking-wider">
            Partners & Sponsors
          </span>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-primary">
            Trusted By Industry Leaders
          </h2>

          <p className="mt-4 text-gray-600">
            We collaborate with reputable organizations and businesses
            to provide reliable logistics and delivery solutions across
            Nigeria.
          </p>
        </div> */}

        <div  data-aos="fade-up" data-aos-delay="100"  className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-primary text-3xl md:text-5xl font-bold">
            Partners & Sponsors
          </span>
          </div>

        {/* Logo Grid */}
       <div  data-aos="fade-up" data-aos-delay="150" className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
  {partners.map((partner) => (
    <img
      key={partner.id}
      src={partner.logo}
      alt={partner.name}
      className="h-20 object-contain"
              />
          ))}
        </div>
      </div>
    </section>
  );
}