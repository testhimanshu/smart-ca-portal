import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const FloatingContactIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

      {/* Chat Now Button with Tooltip */}
      <div className="relative group">
      <a
        href="https://wa.me/919990295002"  
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-green-600 hover:text-white transition-all duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
       <div className="absolute right-full top-1 -translate-y-1/2 bg-blue-100 text-gray-500 text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat Now
        </div>
        </div>

       {/* Call Now Button with Tooltip */}
      <div className="relative group">
      <a
        href="tel:9990295002" 
        className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-indigo-700 hover:text-white transition-all duration-300"
      >
        <FaPhoneAlt size={22} />
      </a>
      <div className="absolute right-full top-1 -translate-y-1/2 bg-blue-100 text-gray-500 text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Call Now
        </div>
</div>
    </div>
  );
};

export default FloatingContactIcons;
