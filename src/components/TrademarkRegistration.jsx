


import React from "react";
import backgroundImg from "../assets/trademark.jpg";
import { Link } from "react-router-dom";


const TrademarkRegistration = () => {
  return (

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
          filter: "blur(3px)",
          zIndex: 0,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 z-0" />

      {/* Content */}
      <div className="relative z-10 space-y-4 text-center">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
          Looking to Register {" "}
          <span className="text-blue-300"> Your Trademark? </span> 
        </h1>

        {/* Subheading */}
        <p className="text-lg font-medium text-gray-100">
          Get it done hassle-free by the experts at {" "}
          <span className="font-semibold">Legafin</span>
        </p>

        {/* Description */}
        {/* <p className="text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato text-gray-200">
          No need to visit Trademark Register Office. Easy & quick process of
          online TM application by sitting at your place.
        </p> */}

        {/* Offer */}

        <div>
          {/* <p className="text-lg font-semibold">
    Just pay only{" "}
    
  </p> */}
          <div className="flex justify-center">
            <p className="text-lg md:text-xl font-semibold flex items-center gap-2 mt-2">
              Starting at just {" "}
              <span className="bg-white/20 px-3 py-1 rounded-lg   font-extrabold shadow-md transition-transform duration-300">
                ₹1999*
              </span>
            </p>
          </div>


          {/* <p className="text-sm text-gray-100">
            Avail <span className="font-bold">50% discount</span> on Govt fee
            for Trademark Registration
          </p> */}
        </div>



        {/* <p className="text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato text-gray-300">
          For trademark registration, you need to pay Rs. 9000/- as Government fees. But if you own a MSME/SSI/Udyog Aadhar certificate, this Government fee is reduced to 50%.</p> */}



        {/* CTA */}
        {/* <h2 className="text-blue-400">Book Your Free Consultation Today</h2> */}

        <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 mt-6 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 inline-block">
            Book Your Free Consultation Today
          </button>
        </Link>


      </div>
    </section>
  );
};

export default TrademarkRegistration;
