import React from "react";

const Advertisement = () => {
  return (
    
<div className="overflow-hidden whitespace-nowrap bg-blue-400 z-40 py-1 fixed top-[64px] left-0 w-full">
    <div className="overflow-hidden whitespace-nowrap  text-white">
  <div className="flex animate-marquee">
    <p className="mx-8 tracking-wide text-sm sm:text-base' sm:text-lg font-sans">
       Start Your Private Limited Company in Just 14 Days at ₹4999/- Only! Fast, Affordable & Hassle-Free Business Registration with Legafin — Don't Wait, Book Now!  
    </p>
    <p className="mx-8 tracking-wide text-sm sm:text-base' sm:text-lg font-sans">
      Start Your Private Limited Company in Just 14 Days at ₹4999/- Only! Fast, Affordable & Hassle-Free Business Registration with Legafin — Don't Wait, Book Now!  
    </p>
  </div>
</div>




      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 28s linear infinite;
          }
            .animate-marquee:hover {
            animation-play-state: paused;
          }

        `}
      </style>
   
    </div>

     );
};

export default Advertisement;