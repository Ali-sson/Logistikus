import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpeg";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok
} from "react-icons/fa";

function SiteFooter() {
  const SITE = {
    name: "Logistikus",
    phone: "+234 911 214 9392",
    email: "logistikuslogisticsltd@gmail.com",
    address: "Shop 7, third floor, EL Gibbor plaza Aliyu Makama Barnawa Kaduna",
    hours: "Mon - Sat | 8AM - 5PM",

    social: {
      instagram: "https://www.instagram.com/logistikusltd?igsh=MXR2ZDVycmE2ZGc4cQ==",
      facebook: "https://web.facebook.com/profile.php?id=61588283313289",
      tiktok: "https://vm.tiktok.com/ZS9jansSkgwKP-9b1uV/"
    },
  };

  return (
    <footer className="border-t border-gray-200 bg-[#0A3D78] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-white text-[#0A3D78]">
                <img src={Logo} alt={SITE.name} />
              </span>

              <span className="text-2xl font-bold">
                {SITE.name}
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Same-day deliveries, pickups, and personal errands
              handled with speed and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3 text-sm text-white/70">

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="transition hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/pricing"
                  className="transition hover:text-white"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="/book"
                  className="transition hover:text-white"
                >
                  Book Errand
                </Link>
              </li>

              <li>
                <Link
                  to="/faq"
                  className="transition hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold">
              Contact
            </h4>

            <ul className="mt-4 space-y-4 text-sm text-white/70">

              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-[#1E88E5]" />

                <span>{SITE.phone}</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-[#1E88E5]" />

                <span>{SITE.email}</span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[#1E88E5]" />

                <span>{SITE.address}</span>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-[#1E88E5]" />

                <span>{SITE.hours}</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-lg font-semibold">
              Follow Us
            </h4>

            <div className="mt-4 flex gap-4">

              {/* Instagram */}
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition duration-300 hover:bg-[#1E88E5]"
                aria-label="Instagram"
              >
                <FaInstagram className="h-4 w-4" />
              </a>

              {/* Facebook */}
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition duration-300 hover:bg-[#1E88E5]"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>

              {/* TikTok */}
              <a
                href={SITE.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition duration-300 hover:bg-[#1E88E5]"
                aria-label="TikTok"
              >
                <FaTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;