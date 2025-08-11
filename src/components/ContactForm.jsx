import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white/30 backdrop-blur-xl p-6 rounded-2xl shadow-lg w-full max-w-sm border border-white/30">
      <p className="text-sm text-blue-900 font-semibold mb-4">
        <span className="line-through text-red-600 font-medium">Get Started @Rs.99</span>
        <span className="ml-2 text-black">Rs.00</span> for Consultation
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="tel"
          placeholder="Contact No."
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <textarea
          placeholder="Message"
          rows="3"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white font-semibold py-3 w-full rounded-lg hover:opacity-90 transition-opacity"
        >
          Get Started Now
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
