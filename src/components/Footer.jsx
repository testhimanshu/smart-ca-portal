import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/Legafin-logo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="font-lato bg-gray-50 text-white pt-12 pb-8 px-4 md:px-8 shadow-inner">
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
 
  {/* <div className="flex flex-col items-center text-center ">
  
  <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center">
    <img
      src={logo}
      alt="Legafin Logo"
      className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300"
    />
  </div>


  <h1 className="mt-3 text-2xl md:text-3xl font-serif font-extrabold text-blue-900 tracking-wide drop-shadow-sm">
    Legafin
  </h1>
</div> */}
 <div className="flex flex-col items-center text-center">
  
  <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center mt-4">
    <img
      src={logo}
      alt="Legafin Logo"
      className="w-full h-full object-contain drop-shadow-lg transition-transform duration-300"
    />
  </div>

  
  <h1 className="mt-3 text-2xl md:text-3xl font-serif font-extrabold text-blue-900 tracking-wide drop-shadow-sm">
    Legafin
  </h1>
</div> 





        {/* Quick Links */}
        <div className="ml-2 md:ml-6 font-serif">
          <h2 className="text-xl font-serif mb-4 text-blue-900 border-b border-blue-800 pb-1 inline-block">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm text-white font-lato">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Contact Us", path: "/contact" },
              { label: "Careers", path: "/career" },
              { label: "Terms & Conditions ", path: "/terms-of-use" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  className="text-blue-700 font-medium transition-all duration-200 hover:text-blue-900 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div className="ml-1 md:ml-6">
          <h2 className="text-xl mb-4 font-serif text-blue-900 border-b border-blue-800 pb-1 inline-block">
            Our Services
          </h2>
          <ul className="space-y-2 text-sm text-white">
            {[
              { label: "Start Your Business", path: "/Startyourbusiness" },

              {
                label: "GST Registration and Filing",
                path: "/taxandgstcompliance",
              },

              { label: "Income Tax Filing", path: "/taxandgstcompliance" },

              { label: "MCA Services", path: "/companysecretarialservices" },

              {
                label: "Accounting and Financial Services",
                path: "/accountingandaudit",
              },
            ].map((service, idx) => (
              <li key={idx}>
                <Link
                  to={service.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "auto" });
                  }}
                  className="text-blue-700 font-medium transition-all duration-200 hover:text-blue-900 hover:underline"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + CTA Buttons */}
        <div className="ml-1 md:ml-6">
          <h2 className="text-xl font-serif font-semibold mb-4 text-blue-900 border-b border-blue-800 pb-1 inline-block">
            Follow Us
          </h2>
          <div className="flex gap-3 mb-5">
            {[
              {
                icon: <FaFacebookF />,
                color: "text-blue-800",
                link: "https://www.facebook.com/legafinconsulting/",
              },
              {
                icon: <FaInstagram />,
                color: "text-pink-600",
                link: " https://www.instagram.com/legafin.consulting/",
              },
              {
                icon: <BsTwitterX />,
                color: "text-black",
                link: "https://x.com/legafin?t=DuUwi3vE7_J_2GBVrNQKkw&s=08",
              },
              {
                icon: <FaLinkedinIn />,
                color: "text-blue-900",
                link: "https://www.linkedin.com/company/legafin/about/?viewAsMember=true",
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-white ${item.color} p-2 rounded-full shadow-md hover:scale-125 transition duration-200`}
                aria-label="social"
              >
                {item.icon}
              </a>
            ))}
          </div>
          {/* <div className="flex gap-3 mt-4">
            <a
              href="tel:+919990295002"
              className="flex-1 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-1 px-2 rounded-md transition shadow-sm"
            >
              Call Now!
            </a>
            <a
              href="https://wa.me/919990295002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center text-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium text-sm py-1 px-2 rounded-md transition shadow-sm"
            >
              WhatsApp Now!
            </a>
          </div> */}
          <div className="flex gap-3 mt-4">
  <a
    href="tel:+919990295002"
    className="flex-1 flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2 px-2 rounded-md transition shadow-sm"
  >
    Call Now!
  </a>
  <a
    href="https://wa.me/919990295002"
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 flex items-center text-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium text-sm py-2 px-2 rounded-md transition shadow-sm"
  >
    WhatsApp Now!
  </a>
</div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800/30 mt-8 pt-4 text-center text-sm text-blue-900 font-medium">
        © {new Date().getFullYear()} <strong>Legafin</strong>. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
