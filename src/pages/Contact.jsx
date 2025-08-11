import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaHeadset,
  FaLock,
  FaUserTie,
} from "react-icons/fa";
import { toast } from "sonner";
import { useState } from "react";
import AgreementBox from "../components/AgreementBox";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_1 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_1;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading immediately
    toast.success("Thank you for contacting Legafin!"); // Show toast immediately

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_1, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        setIsLoading(false); // Stop loading after success
      },
      (error) => {
        console.log(error.text);
        toast.error("Something went wrong. Please try again later.");
        setIsLoading(false); // Stop loading after failure
      }
    );
  };
  return (
    <section className="bg-gradient-to-br from-white to-blue-300 py-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="w-full mx-auto animate-fadeInBottom">
        {/* Header */}
        <div className="text-center space-y-6 animate-fadeInBottom">
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-blue-900 leading-tight mt-14">
            Get in Touch
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-m hover:text-blue-600 animate-fadeInBottom">
            Let us help you grow <br />
            Whether you have questions, feedback, or a project in mind, we're
            all ears!
          </p>
        </div>

        {/* Contact Section Grid */}
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 grid md:grid-cols-2 gap-16 items-start mt-8 animate-fadeInBottom">
          {/* Left: Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-900">
              Send Us a Message
            </h2>
            <p className="text-sm text-blue-500">
              We usually reply within 1 business day.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  Full Name
                </label>
                <input
                  name="full_name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full p-3 border border-blue-100 text-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  Email Address*
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full p-3 border border-blue-100 text-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  Contact Number*
                </label>
                <input
                  name="contact_number"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                  placeholder="123-456-7890"
                  className="w-full p-3 border border-blue-100 text-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  Service Interested In
                </label>
                <input
                  name="service"
                  type="text"
                  placeholder="e.g. Accounting and Audit Services"
                  className="w-full p-3 border border-blue-100 text-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-800 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
                className="w-full p-3 border border-blue-100 text-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <AgreementBox />

            <button
              type="submit"
              className={`w-full ${
                isLoading
                  ? "bg-blue-700 cursor-not-allowed"
                  : "bg-blue-800 hover:bg-blue-900"
              } text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring-blue-600`}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>

          {/* Right: Office Info & Map */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-blue-900">
                Our Corporate Office
              </h3>
              <ul className="space-y-3 text-gray-700 text-[1rem] leading-relaxed">
                <li className="flex items-start gap-5">
                  <FaMapMarkerAlt className="text-blue-800 mt-1" />
                  <span className="text-gray-500">
                    D3, 29, 2nd Floor, DDA Golf Link, Dwarka Sec 23B Delhi
                    110077
                  </span>
                </li>
                <li className="flex items-start gap-5">
                  <FaPhoneAlt className="text-blue-800 mt-1" />
                  <span className="text-gray-500">+91 9990295002</span>
                </li>
                <li className="flex items-start gap-5">
                  <FaEnvelope className="text-blue-800 mt-1" />
                  <span className="text-gray-500">contact@legafin.org</span>
                </li>
                <li className="flex items-start gap-5">
                  <FaClock className="text-blue-800 mt-1" />
                  <span className="text-gray-500">Mon – Sat: 10 AM – 6 PM</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 w-full h-[250px] md:h-[300px]">
              <iframe
                title="Legafin Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2820740438344!2d77.045!3d28.609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05358c3aefbd%3A0x6d7557a7a17d18c8!2sDwarka%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1652231948767!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 pt-12 px-4 md:px-8 lg:px-12 xl:px-16 mt-4 animate-fadeInBottom">
          {[
            { icon: <FaHeadset />, label: "24/7 Support" },
            { icon: <FaLock />, label: "100% Confidential" },
            { icon: <FaMapMarkerAlt />, label: "PAN India Presence" },
            { icon: <FaUserTie />, label: "Expert Team" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-[200px] h-[120px] bg-blue-100 p-4 rounded-2xl border-2 border-blue-300 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center space-y-3"
            >
              <div className="text-blue-800/80 text-4xl">{item.icon}</div>
              <p className="text-blue-900 text-base">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-600 pt-2 mt-2 animate-fadeInBottom">
          Thank you for choosing{" "}
          <span className="text-blue-800 font-semibold">Legafin,</span> Your
          trusted partner in success.
        </p>
      </div>
      {/* Toast container for notifications */}
    </section>
  );
};

export default Contact;
