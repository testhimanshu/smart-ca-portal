// import React from "react";
// import { FaWpforms, FaChevronDown } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useRef } from "react";
// import emailjs from "emailjs-com";
// import { toast } from "sonner";

// const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
// const TEMPLATE_ID_2 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2;
// const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// const Career = () => {
//   const form = useRef();
//   const formSectionRef = useRef();
//   const [isLoading, setIsLoading] = useState(false);

//   // Scroll to form section
//   const scrollToForm = () => {
//     formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
//   };
//   // const sendEmail = (e) => {
//   //   e.preventDefault();
//   //   setIsLoading(true); // Start loading immediately
//   //   toast.success("Thanks! We'll get back to you soon."); // Show toast immediately

//   //   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_2, form.current, PUBLIC_KEY).then(
//   //     (result) => {
//   //       console.log(result.text);
//   //       e.target.reset();
//   //       setIsLoading(false); // Stop loading after success
//   //     },
//   //     (error) => {
//   //       console.log(error.text);
//   //       toast.error("Something went wrong. Please try again later.");
//   //       setIsLoading(false); // Stop loading after failure
//   //     }
//   //   );
//   // };
//   const sendEmail = (e) => {
//   e.preventDefault();
//   setIsLoading(true); // Start loading immediately
//   toast.success("Thanks! We'll get back to you soon."); // Show toast immediately

//   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_2, form.current, PUBLIC_KEY).then(
//     (result) => {
//       console.log(result.text);
//       e.target.reset(); // Form fields reset
//       setSelected("Select an option"); // ✅ Dropdown reset
//       setIsLoading(false); // Stop loading after success
//     },
//     (error) => {
//       console.log(error.text);
//       toast.error("Something went wrong. Please try again later.");
//       setIsLoading(false); // Stop loading after failure
//     }
//   );
// };



//   const [isOpen, setIsOpen] = useState(false);
//   const [selected, setSelected] = useState("Select an option");

//   const options = ["Training/Internship", "Employment"];

//   const container = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.2 } },
//   };

//   return (
//     <section className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-200 py-20 px-4 sm:px-8 md:px-12 lg:px-20 text-center">
//       <div className="w-full mx-auto space-y-12">
//         {/* Header */}
//         {
//           <div className="text-center space-y-6 animate-fadeIn">
//             <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-blue-900 leading-tight mt-12 animate-fadeInBottom">
//               Careers
//             </h1>
//             <p className="text-gray-500 max-w-2xl mx-auto text-m hover:text-blue-600 animate-fadeInBottom">
//               At Legafin, we believe exceptional work begins with hiring and
//               nurturing the best people from all walks of life. Explore
//               Opportunities, Join our team.
//             </p>
//           </div>
//         }

//         {/* Cards */}
//         <div className="flex flex-col md:flex-row justify-center gap-6 animate-fadeInTop">
//           {/* Training/Internship Card */}
//           <div
//             className="bg-white/90 hover:bg-white shadow-md rounded-lg p-8 w-full md:w-1/2 hover:shadow-lg transition hover:shadow-lg' hover:-translate-y-1 hover:scale-[1.02] 
               
//               text-center border border-blue-200 hover:border-blue-600"
//           >
//             {/* bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition border border-blue-200 hover:border-blue-600 text-left */}
//             <h3 className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300 mb-4">
//               Training/Internship
//             </h3>
//             <p className="text-gray-600 mb-6 text-justify">
//               Kickstart your career with Legafin by enrolling in our training
//               and internship programs. Gain hands-on experience and collaborate
//               with industry experts to build a solid foundation for your
//               professional journey.
//             </p>
//             <button
//               onClick={scrollToForm}
//               className="font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-2"
//             >
//               Application Form <FaWpforms />
//             </button>
//           </div>

//           {/* Employment Card */}
//           <div
//             className="bg-white/90 hover:bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 w-full md:w-1/2 hover:shadow-lg transition hover:shadow-lg' hover:-translate-y-1 hover:scale-[1.02] 
               
//               text-center border border-blue-200 hover:border-blue-600"
//           >
//             <h3 className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300 mb-4">
//               Employment
//             </h3>
//             <p className="text-gray-600 mb-6 text-justify">
//               Join our dynamic team at Legafin and contribute to delivering
//               high-quality consultancy services across various sectors. We are
//               always on the lookout for talented professionals who are
//               passionate about making a difference.
//             </p>
//             <button
//               onClick={scrollToForm}
//               className="font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-2"
//             >
//               Application Form <FaWpforms />
//             </button>
//           </div>
//         </div>

//         {/* Added ref to Form Section */}

//         {/* Application Form Section */}
//         <div
//           ref={formSectionRef}
//           className="scroll-mt-24 max-w-9xl mx-auto bg-white shadow-md rounded-lg p-8 md:w-3/4 lg:w-2/3 animate-fadeInBottom"
//         >
//           <h2 className="text-3xl font-bold text-blue-900 text-center mb-2">
//             Join Our Team Today!
//           </h2>
//           <p className="text-blue-700 text-center mb-8">
//             We're always looking for passionate people. Submit your application
//             below.
//           </p>

//           <div className="">
//             <form
//               ref={form}
//               onSubmit={sendEmail}
//               className="space-y-6 text-left"
//             >
//               {/* Grid Fields */}
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-blue-800 mb-1">
//                     Name*
//                   </label>
//                   <input
//                     name="name"
//                     type="text"
//                     placeholder="Your Name"
//                     required
//                     className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-blue-800 mb-1">
//                     Email*
//                   </label>
//                   <input
//                     name="email"
//                     type="email"
//                     placeholder="email@example.com"
//                     required
//                     className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-blue-800 mb-1">
//                     Phone*
//                   </label>
//                   <input
//                     name="phone"
//                     type="tel"
//                     placeholder="123-456-7890"
//                     required
//                     className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-blue-800 mb-1">
//                     Qualification*
//                   </label>
//                   <input
//                     name="qualification"
//                     type="text"
//                     placeholder="Your Qualification"
//                     required
//                     className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-blue-800 mb-1">
//                     Address*
//                   </label>
//                   <textarea
//                     name="address"
//                     rows="3"
//                     placeholder="Your Address"
//                     required
//                     className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-blue-800 mb-1">
//                     Description of Job Profile*
//                   </label>
//                   <textarea
//                     name="job_profile"
//                     rows="3"
//                     placeholder="Description of Job Profile"
//                     required
//                     className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
//                   />
//                 </div>
//               </div>

//               {/* Current Experience */}
//               <div>
//                 <label className="block text-sm font-medium text-blue-800 mb-1">
//                   Current Experience*
//                 </label>
//                 <textarea
//                   name="experience"
//                   rows="3"
//                   placeholder="Your Current Experience"
//                   required
//                   className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
//                 />
//               </div>

//               {/* Applying For */}
//               <div className="sm:w-1/2">
//                 <label className="block text-sm font-medium text-blue-800 mb-1">
//                   Applying For*
//                 </label>
//                 <div className="relative w-full max-w-xs">
//                   <div
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="border border-blue-100 text-blue-900 rounded-md px-3 py-2 bg-white cursor-pointer flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
//                   >
//                     <span>{selected}</span>
//                     <FaChevronDown className="text-blue-900" />
//                   </div>
//                   {isOpen && (
//                     <ul className="absolute w-full border border-blue-400 rounded-md bg-white mt-1 shadow-lg z-10">
//                       {options.map((option) => (
//                         <li
//                           key={option}
//                           onClick={() => {
//                             setSelected(option);
//                             setIsOpen(false);
//                           }}
//                           className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-blue-900"
//                         >
//                           {option}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//                 {/* Hidden input to send the dropdown value */}
//                 <input type="hidden" name="applying_for" value={selected} />
//               </div>

//               {/* Submit Button */}
//               <div className="mt-6">
//                 <button
//                   type="submit"
//                   className={`w-full ${
//                     isLoading
//                       ? "bg-blue-700 cursor-not-allowed"
//                       : "bg-blue-800 hover:bg-blue-900"
//                   } text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring-blue-600`}
//                   disabled={isLoading}
//                 >
//                   {isLoading ? "Loading..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Career;

import React from "react";
import { FaWpforms, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_2 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Career = () => {
  const form = useRef();
  const formSectionRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to form section
  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading immediately
    toast.success("Thanks! We'll get back to you soon."); // Show toast immediately

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_2, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
        setIsLoading(false); // Stop loading after success
      },
      (error) => {
        console.log(error.text);
        toast.error("Something went wrong. Please try again later.");
        setIsLoading(false); // Stop loading after failure
      }
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select an option");

  const options = ["Training/Internship", "Employment"];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-200 py-20 px-4 sm:px-8 md:px-12 lg:px-20 text-center">
      <div className="w-full mx-auto space-y-12">
        {/* Header */}
        {
          <div className="text-center space-y-6 animate-fadeIn">
            <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-blue-900 leading-tight mt-12 animate-fadeInBottom">
              Careers
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-m hover:text-blue-600 animate-fadeInBottom">
              At Legafin, we believe exceptional work begins with hiring and
              nurturing the best people from all walks of life. Explore
              Opportunities, Join our team.
            </p>
          </div>
        }

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 animate-fadeInTop">
          {/* Training/Internship Card */}
          <div
            className="bg-white/90 hover:bg-white shadow-md rounded-lg p-8 w-full md:w-1/2 hover:shadow-lg transition hover:shadow-lg' hover:-translate-y-1 hover:scale-[1.02] 
               
              text-center border border-blue-200 hover:border-blue-600"
          >
            {/* bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition border border-blue-200 hover:border-blue-600 text-left */}
            <h3 className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300 mb-4">
              Training/Internship
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              Kickstart your career with Legafin by enrolling in our training
              and internship programs. Gain hands-on experience and collaborate
              with industry experts to build a solid foundation for your
              professional journey.
            </p>
            <button
              onClick={scrollToForm}
              className="font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-2"
            >
              Application Form <FaWpforms />
            </button>
          </div>

          {/* Employment Card */}
          <div
            className="bg-white/90 hover:bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 w-full md:w-1/2 hover:shadow-lg transition hover:shadow-lg' hover:-translate-y-1 hover:scale-[1.02] 
               
              text-center border border-blue-200 hover:border-blue-600"
          >
            <h3 className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition-colors duration-300 mb-4">
              Employment
            </h3>
            <p className="text-gray-600 mb-6 text-justify">
              Join our dynamic team at Legafin and contribute to delivering
              high-quality consultancy services across various sectors. We are
              always on the lookout for talented professionals who are
              passionate about making a difference.
            </p>
            <button
              onClick={scrollToForm}
              className="font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-2"
            >
              Application Form <FaWpforms />
            </button>
          </div>
        </div>

        {/* Added ref to Form Section */}

        {/* Application Form Section */}
        <div
          ref={formSectionRef}
          className="scroll-mt-24 max-w-9xl mx-auto bg-white shadow-md rounded-lg p-8 md:w-3/4 lg:w-2/3 animate-fadeInBottom"
        >
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-2">
            Join Our Team Today!
          </h2>
          <p className="text-blue-700 text-center mb-8">
            We're always looking for passionate people. Submit your application
            below.
          </p>

          <div className="">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 text-left"
            >
              {/* Grid Fields */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">
                    Name*
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">
                    Email*
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">
                    Phone*
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="123-456-7890"
                    required
                    className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">
                    Qualification*
                  </label>
                  <input
                    name="qualification"
                    type="text"
                    placeholder="Your Qualification"
                    required
                    className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">
                    Address*
                  </label>
                  <textarea
                    name="address"
                    rows="3"
                    placeholder="Your Address"
                    required
                    className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-800 mb-1">
                    Description of Job Profile*
                  </label>
                  <textarea
                    name="job_profile"
                    rows="3"
                    placeholder="Description of Job Profile"
                    required
                    className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                  />
                </div>
              </div>

              {/* Current Experience */}
              <div>
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  Current Experience*
                </label>
                <textarea
                  name="experience"
                  rows="3"
                  placeholder="Your Current Experience"
                  required
                  className="w-full p-3 border border-blue-100 text-gray-600 placeholder-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                />
              </div>

              {/* Applying For */}
              <div className="sm:w-1/2">
                <label className="block text-sm font-medium text-blue-800 mb-1">
                  Applying For*
                </label>
                <div className="relative w-full max-w-xs">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="border border-blue-100 text-blue-900 rounded-md px-3 py-2 bg-white cursor-pointer flex justify-between items-center focus:outline-none focus:ring-1 focus:ring-blue-400 transition duration-200"
                  >
                    <span>{selected}</span>
                    <FaChevronDown className="text-blue-900" />
                  </div>
                  {isOpen && (
                    <ul className="absolute w-full border border-blue-400 rounded-md bg-white mt-1 shadow-lg z-10">
                      {options.map((option) => (
                        <li
                          key={option}
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                          }}
                          className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-blue-900"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* Hidden input to send the dropdown value */}
                <input type="hidden" name="applying_for" value={selected} />
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className={`w-full ${
                    isLoading
                      ? "bg-blue-700 cursor-not-allowed"
                      : "bg-blue-800 hover:bg-blue-900"
                  } text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring-blue-600`}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Career;

