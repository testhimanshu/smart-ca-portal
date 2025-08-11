import React from 'react';

const options = [
  { title: 'Private Limited', desc: 'Perfect for growing' },
  { title: 'LLP', desc: 'Ideal for partnerships' },
  { title: 'OPC', desc: 'Best for solo entrepreneurs' },
];

const Options = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {options.map((opt, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-teal-400 to-teal-600 text-white rounded-xl shadow-xl p-6 flex flex-col justify-between items-center text-center transition-transform hover:scale-105"
        >
          <div>
            <h3 className="text-xl font-bold mb-2">{opt.title}</h3>
            <p className="text-sm mb-6">{opt.desc}</p>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-200">
            Get Started
          </button>
        </div>
      ))}
    </div>
  );
};

export default Options;
