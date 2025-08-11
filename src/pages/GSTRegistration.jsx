import React from "react";
import backgroundImg from "../assets/gst-registration.jpg"; // apni background image ka path
import { Link } from "react-router-dom";

const GSTRegistration = () => {
  return (
    // <section
    //   className="w-full bg-cover bg-center text-white relative px-6 py-12 rounded-lg overflow-hidden"
    //   style={{
    //     backgroundImage: `url(${backgroundImg})`,
    //     fontFamily: "Roboto Slab, serif",
    //   }}
    // >
      <section
  className="w-full relative text-white px-6 py-12 rounded-lg overflow-hidden"
  style={{
    fontFamily: "Roboto Slab, serif",
  }}
>
  {/* Background image with blur */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${backgroundImg})`,
      filter: "blur(3px)",  // blur amount yahan control karo
      zIndex: 0,
    }}
  ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 z-0" />

      {/* Content */}
      <div className="relative z-10 space-y-4 text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
          GST Registration Online |{" "}
          <span className="text-blue-300">
            Entire Process Will Be Done in Same Day
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato text-gray-100">
          Get Online Assistance from India’s recommended Business Taxation
          Experts in GST Registration to Filing the Mandatory GST Returns
          Annually
        </p>

        {/* Highlights */}
        <div className="flex flex-col md:flex-row justify-center gap-4 text-sm md:text-base font-semibold">
          <span className="bg-white/20 px-3 py-1 rounded-lg">
            📄 GST Registration in 1 Day
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-lg">
            🏆 Trusted Tax Experts
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-lg">
            📅 Annual GST Return Filing Support
          </span>
        </div>
        {/* <div className="flex flex-col md:flex-row justify-center gap-4 text-sm md:text-base font-semibold mt-4">
          {[
            { text: "GST Registration in 1 Day", color: "from-blue-400 to-blue-600" },
            { text: "Trusted Tax Experts", color: "from-blue-400 to-blue-600" },
            { text: "Annual GST Return Filing Support", color: "from-blue-400 to-blue-600" }
          ].map((item, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white shadow-md hover:scale-105 transform transition-all duration-300 hover:shadow-lg`}
            >
              {item.text}
            </span>
          ))}
        </div> */}


        {/* Description */}
        {/* <p className="text-sm md:text-base text-gray-200">
          From quick GST registration to seamless annual GST return filing —
          Legafin ensures your compliance is handled professionally and without
          stress. We make the process simple, fast, and completely online so you
          can focus on growing your business.
        </p> */}
        {/* <p className="text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato text-gray-200 leading-relaxed">
          From quick GST registration to annual return filing — Legafin makes compliance simple, fast, and fully online, so you can focus on growing your business.
          Our expert team guides you at every step, ensuring accuracy, timely submissions, and hassle-free service tailored to your needs.
          With Legafin, experience seamless digital filing, proactive reminders, and dedicated customer support available whenever you need assistance.
          We prioritize your peace of mind by staying updated with the latest tax regulations, so you never miss a deadline or important update.
        </p> */}
        <p className="text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato text-gray-200 leading-relaxed">
  From quick GST registration to annual return filing — Legafin makes compliance simple, fast, and fully online, so you can focus on growing your business.
  Our expert team guides you at every step, ensuring accuracy, timely submissions, and hassle-free service tailored to your needs.
  With Legafin, experience seamless digital filing, proactive reminders, and dedicated customer support available whenever you need assistance.
  We prioritize your peace of mind by staying updated with the latest tax regulations, so you never miss a deadline or important update.
  
</p>





        {/* CTA */}
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition">
          Register for GST Now
        </button> */}

        <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 mt-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 inline-block">
            Register for GST Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default GSTRegistration;
