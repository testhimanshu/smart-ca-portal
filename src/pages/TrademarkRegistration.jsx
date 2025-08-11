


import React from "react";
import backgroundImg from "../assets/trademark.jpg"; // apni image ka path

const TrademarkRegistration = () => {
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
          Are You Looking for{" "}
          <span className="text-blue-300">Trademark® Registration</span> Online?
        </h1>

        {/* Subheading */}
        <p className="text-lg font-medium text-gray-100">
          Get it done By the Experts of{" "}
          <span className="font-semibold">Legafin</span>
        </p>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-200">
          No need to visit Trademark Register Office. Easy & quick process of
          online TM application by sitting at your place.
        </p>

        {/* Offer */}
        <div className="bg-white/20 p-4 rounded-lg">
          <p className="text-lg font-semibold">
            Just pay only{" "}
            <span className="text-yellow-300 font-bold">₹1999*</span>
          </p>
          <p className="text-sm text-gray-100">
            Avail <span className="font-bold">50% discount</span> on Govt fee
            for Trademark Registration
          </p>
        </div>

        {/* Govt Fee Info */}
        <p className="text-xs md:text-sm text-gray-300">
          For trademark registration, you need to pay Rs. 9000/- as Government
          fees. But if you own a MSME/SSI/Udyog Aadhar certificate, this
          Government fee is <span className="font-bold">reduced to 50%</span>.
        </p>

        {/* CTA */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition">
          Book Free Consultation
        </button>
      </div>
    </section>
  );
};

export default TrademarkRegistration;
// src/pages/TrademarkRegistration.jsx
// src/pages/TrademarkRegistration.jsx
// import React from "react";

// const TrademarkRegistration = () => {
//   return (
//     <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-5xl mx-auto text-center">
//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl font-bold mb-4">
//           Are You Looking for Trademark® Registration Online?
//         </h1>
//         <h2 className="text-xl sm:text-2xl font-semibold mb-6">
//           Get it done By the Experts of <span className="text-yellow-300">Legafin</span>
//         </h2>

//         {/* Description */}
//         <p className="text-base sm:text-lg leading-relaxed mb-4">
//           No need to visit Trademark Register Office. Easy & quick process of
//           online TM application by sitting at your place.
//         </p>

//         {/* Price Highlight */}
//         <p className="text-lg sm:text-xl font-semibold mb-6">
//           Just pay only <span className="text-red-300 text-2xl">₹1999*</span>
//         </p>

//         {/* Offer Info (No Yellow Box) */}
//         <p className="text-sm sm:text-base leading-relaxed">
//           For trademark registration, you need to pay ₹9000/- as Government fees.
//           But if you own a MSME/SSI/Udyog Aadhar certificate, this Government fee
//           is reduced to <span className="font-bold">50%</span>.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default TrademarkRegistration;



