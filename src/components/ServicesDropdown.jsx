import React from 'react';
import { Link } from 'react-router-dom';
import { serviceDropdown } from './NavItems';

function ServicesDropdown({ setDropdownOpen, closeMenu }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 p-6">
      {serviceDropdown.map((item, index) => (
        <Link 
          key={index}
          to={item.path}
          aria-label={`Go to ${item.title}`}
          onClick={() => {
            setDropdownOpen?.(false);
            closeMenu?.();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-semibold text-gray-700/70 hover:text-[#6659B8] transition-all duration-150"
        >
          <span className="text-[16px] group-text-gray-400 hover:text-[#6659B8]">{item.icon}</span>
          <span>{item.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default ServicesDropdown;
