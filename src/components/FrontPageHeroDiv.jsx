import React from "react";
import { Link } from "react-router-dom";
import backgroundImg from "@/assets/home_page_photo.jpg";
import { FaRocket, FaHandshake, FaUserTie } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { useState } from "react";
import "@fontsource/roboto-slab"; // defaults to 400
import "@fontsource/roboto-slab/900.css"; // for bold if needed


// Cards Data
const cards = [
  {
    icon: <FaRocket size={30} />,
    title: "Pvt. Ltd.",
    desc: "Perfect for fast-growing businesses.",
  },
  {
    icon: <FaHandshake size={30} />,
    title: "LLP",
    desc: "Ideal for collaborative partnerships.",
  },
  {
    icon: <FaUserTie size={30} />,
    title: "OPC",
    desc: "Best for solo entrepreneurs.",
  },
];

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_1 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_1;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const FrontPageHeroDiv = () => {
  // const form = useRef();
  // 🔹 CHANGE 1: Desktop aur Mobile ke liye alag-alag refs banaye
  const formDesktop = useRef();
  const formMobile = useRef();

  // const [isLoading, setIsLoading] = useState(false);
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true); 
  //   toast.success("Thank you for contacting Legafin!"); 
  const [isLoading, setIsLoading] = useState(false);

  // 🔹 CHANGE 2: sendEmail me formType parameter add kiya
  const sendEmail = (e, formType) => {
    e.preventDefault();
    setIsLoading(true);
    toast.success("Thank you for contacting Legafin!");

    // 🔹 CHANGE 3: Submit hua form select karna
    const currentForm = formType === "desktop" ? formDesktop.current : formMobile.current;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_1, currentForm, PUBLIC_KEY)
  .then(
    (result) => {
      console.log(result.text);
      currentForm.reset(); // Sirf wahi form clear hoga jo submit hua
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
    <>
    <div
      className="w-full bg-cover bg-center text-white relative px-4 sm:px-6 lg:px-8 py-16 "
      style={{
        backgroundImage: `url(${backgroundImg})`,
        fontFamily: "Roboto Slab, serif",
        fontWeight: "200",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-800/40 z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full mx-auto flex flex-col lg:flex-row items-start gap-10 p-6">
        {/* LEFT: Heading + Cards */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Heading */}
          <h1
            className="text-5xl sm:text-5xl md:text-6xl font-extrabold leading-tight animate-fadeInLeft"
            style={{ fontFamily: "Roboto Slab, serif", fontWeight: 900 }}
          >
            Start Your <span className="text-blue-400">Business</span> <br />
            with 3 Smart Options
          </h1>

          {/* Subtext */}
          <p className="text-white/90 text-lg max-w-2xl animate-fadeInLeft">
            Choose the right business type for your growth, book your FREE
            expert consultation today.
          </p>

          {/* Button */}
          <div className="animate-fadeInLeft">
            <Link to="/contact">
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-3xl shadow-lg transition focus:outline-none focus:ring-blue-600">
                Book Free Consultation
              </button>
            </Link>
          </div>

          {/* Business Type Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white/10 px-6 py-4 rounded-xl border border-white/10 backdrop-blur-md hover:shadow-lg transition flex flex-col justify-between min-h-[170px] animate-fadeInLeft"
              >
                <div>
                  <div className="flex items-center gap-3 text-white mb-1">
                    <span className="text-blue-300">{card.icon}</span>
                    <h3
                      className="text-xl"
                      style={{
                        fontFamily: "Roboto Slab, serif",
                        fontWeight: 600,
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm ml-9">{card.desc}</p>
                </div>
                <Link to="/contact">
                  <button
                    className="mt-2 bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-blue-600"
                    style={{
                      fontFamily: "Roboto Slab, serif",
                      fontWeight: 500,
                    }}
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="hidden lg:block w-full lg:w-1/3 mx-auto bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-2xl animate-fadeInRight font-lato">

          <h2 className="text-lg font-medium mb-4 text-white">
            Get Started{" "}
            <span className="line-through text-red-500 font-semibold">₹499</span>{" "}
            <span className="text-blue-300 font-semibold">₹0.00</span> for
            Consultation
          </h2>
          {/* <form ref={form} onSubmit={sendEmail} className="space-y-4"> */}
          <form ref={formDesktop} onSubmit={(e) => sendEmail(e, "desktop")} className="space-y-4">

            <input
              type="text"
              name="full_name"
              placeholder="Your Name"
              required
              className="w-full p-2 bg-white/30 text-gray-600 rounded-lg placeholder-white focus:outline-none border border-white/10 focus:border-blue-400 transition duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-2 bg-white/30 text-gray-600 rounded-lg placeholder-white focus:outline-none border border-white/10 focus:border-blue-400 transition duration-200"
            />
            <input
              type="tel"
              name="contact_number"
              placeholder="Contact No."
              required
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="w-full p-2 bg-white/30 text-gray-600 rounded-lg placeholder-white focus:outline-none border border-white/10 focus:border-blue-400 transition duration-200"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="3"
              className="w-full p-2 bg-white/30 text-gray-600 rounded-lg placeholder-white focus:outline-none border border-white/10 focus:border-blue-400 transition duration-200"
            />
            <div className="mb-4 text-sm text-white font-lato">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className=" w-4 h-4 mt-0.5 accent-blue-500"
                />
                <span className="leading-snug whitespace-nowrap">
                  I agree to the{" "}
                  <Link to="/terms-of-use#terms" className="text-blue-300 underline mx-1">
                    Terms & Conditions
                  </Link>
                  and{" "}

                  <Link to="/terms-of-use#privacy" className="text-blue-300 underline mx-1">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              className={`w-full ${isLoading
                ? "bg-blue-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
                } text-white py-2 px-4 rounded-2xl focus:outline-none focus:ring-blue-600 transition duration-300`}
              disabled={isLoading}
              style={{ fontFamily: "Roboto Slab, serif", fontWeight: 500 }}
            >
              {isLoading ? "Loading..." : "Get Started Now"}
            </button>
          </form>
        </div>    
      </div>      
    </div>






    {/* Mobile Form (below cards, after background section) */}
<div className="block lg:hidden w-full mx-auto bg-[#c7dfff]/80 p-6 animate-fadeInUp font-lato">
  <h2 className="text-lg font-medium mb-4 text-gray-800">
    Get Started{" "}
    <span className="line-through text-red-500 font-semibold">₹99</span>{" "}
    <span className="text-blue-600 font-semibold">₹0.00</span> for Consultation
  </h2>
  {/* <form ref={form} onSubmit={sendEmail} className="space-y-4"> */}
  <form ref={formMobile} onSubmit={(e) => sendEmail(e, "mobile")} className="space-y-4">
    <input
      type="text"
      name="full_name"
      placeholder="Your Name"
      required
      className="w-full p-2 bg-white/80 text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none border border-gray-100 focus:border-blue-400 transition duration-200"
    />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      className="w-full p-2 bg-white/80 text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none border border-gray-100 focus:border-blue-400 transition duration-200"
    />
    <input
      type="tel"
      name="contact_number"
      placeholder="Contact No."
      required
      pattern="[0-9]{10}"
      title="Please enter a valid 10-digit phone number"
      className="w-full p-2 bg-white/80 text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none border border-gray-100 focus:border-blue-400 transition duration-200"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="3"
      className="w-full p-2 bg-white/80 text-gray-800 rounded-lg placeholder-gray-400 focus:outline-none border border-gray-100 focus:border-blue-400 transition duration-200"
    />
    <div className="mb-4 text-sm text-gray-700 font-lato">
      <label className="flex items-start gap-2">
        <input
          type="checkbox"
          required
          className="w-4 h-4 mt-0.5 accent-blue-600"
        />
        <span className="leading-snug">
          I agree to the{" "}
          <Link to="/terms-of-use#terms" className="text-blue-600 underline mx-1">
            Terms & Conditions
          </Link>
          and{" "}
          <Link to="/terms-of-use#privacy" className="text-blue-600 underline mx-1">
            Privacy Policy
          </Link>
          .
        </span>
      </label>
    </div>

    <button
      type="submit"
      className={`w-full ${isLoading
        ? "bg-blue-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700"
        } text-white py-2 px-4 rounded-2xl focus:outline-none focus:ring-blue-600 transition duration-300`}
      disabled={isLoading}
      style={{ fontFamily: "Roboto Slab, serif", fontWeight: 500 }}
    >
      {isLoading ? "Loading..." : "Get Started Now"}
    </button>
  </form>
</div>


    </>
  );
};

export default FrontPageHeroDiv;
