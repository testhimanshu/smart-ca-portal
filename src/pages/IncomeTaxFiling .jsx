import React from "react";
import backgroundImg from "../assets/Incometax.jpg"; // apni background image ka path
import { Link } from "react-router-dom";

const IncomeTaxFiling = () => {
  return (
    <section
      className="w-full bg-cover bg-center text-white relative px-6 py-12 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        fontFamily: "Roboto Slab, serif",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 z-0" />

      {/* Content */}
      <div className="relative z-10 space-y-4 text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
          Online <span className="text-blue-300">Income Tax Return</span> Filing
        </h1>

        {/* Subheading */}
        <p className="text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato text-gray-100">
          File Income Tax Return online from our expert assisted service — fast
          and hassle-free
        </p>

        {/* Highlights */}
        {/* <div className="flex flex-col md:flex-row justify-center gap-4 text-sm md:text-base font-semibold">
          <span className="bg-white/20 px-3 py-1 rounded-lg">
            ✅ Expert CA Assistance
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-lg">
            💰 Maximum Tax Savings
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-lg">
            ⚡ Quick & Hassle-Free Filing
          </span>
        </div> */}
        <div className="flex flex-col md:flex-row justify-center gap-4 text-sm md:text-base font-semibold mt-4">
          {[
            { text: "Expert CA Assistance", color: "from-blue-400 to-blue-600" },
            { text: "Maximum Tax Savings", color: "from-blue-400 to-blue-600" },
            { text: "Quick & Hassle-Free Filing", color: "from-blue-400 to-blue-600" }
          ].map((item, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white shadow-md hover:scale-105 transform transition-all duration-300 hover:shadow-lg`}
            >
              {item.text}
            </span>
          ))}
        </div>


        {/* Description */}
        {/* <p className="text-sm md:text-base text-gray-200">
          The Income Tax Return filing due date is fast approaching. Start early
          to avoid last-minute congestion, server slowdowns, and submission
          errors. Filing in advance ensures accuracy, timely processing, and
          peace of mind. Don’t wait until the deadline — complete your ITR
          filing smoothly with{" "}
          <span className="font-bold text-blue-200">Legafin</span>.
        </p> */}
        {/* <p className="text-sm md:text-base text-gray-200">
  The Income Tax Return filing due date is fast approaching. Start early to avoid last-minute congestion, server slowdowns, and submission errors. Filing in advance ensures accuracy, timely processing, and peace of mind. 
  With proper documentation and expert guidance, you can also maximize eligible deductions and claim refunds faster. 
  Don’t wait until the deadline — complete your ITR filing smoothly with{" "}
  <span className="font-bold text-blue-200">Legafin</span> and stay worry-free.
</p> */}

        <h1 className="text-3xl md:text-3xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent drop-shadow-md">
          Hassle-free Online Income Tax Return Filing
        </h1>



        <p className="text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato text-gray-200">

          The Income Tax Return filing due date is fast approaching. Start early to avoid last-minute congestion, server slowdowns, and submission errors. Filing in advance ensures accuracy, timely processing, and peace of mind. Don’t wait until the deadline—complete your ITR filing smoothly with legafin
          {/* Don’t wait until the deadline — complete your ITR filing smoothly with{" "}
  <span className="font-bold text-blue-200">Legafin</span> and stay worry-free. */}
        </p>



        {/* CTA */}
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition">
          File My ITR Now
        </button> */}
        {/* <Link to="/contact">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 mt-6 rounded-lg shadow-md transition inline-block">
                    File My ITR Now
 
                  </button>
                </Link> */}

        <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 mt-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 inline-block">
            File My ITR Now
          </button>
        </Link>

      </div>
    </section>
  );
};

export default IncomeTaxFiling;
