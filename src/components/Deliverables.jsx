import React, { useRef } from "react";
import {
  FaIdCard,
  FaCertificate,
  FaFileAlt,
  FaBuilding,
  FaUniversity,
  FaFolderOpen,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const deliverables = [
  {
    icon: <FaIdCard className="text-3xl" />,
    title: "2 DIN & DSC",
    desc: "For Two Directors",
  },
  {
    icon: <FaCertificate className="text-3xl" />,
    title: "Incorporation Certificate",
    desc: "Legal Entity Registration",
  },
  {
    icon: <FaFileAlt className="text-3xl" />,
    title: "PAN + TAN / TDS",
    desc: "Issued by Govt. of India",
  },
  {
    icon: <FaBuilding className="text-3xl" />,
    title: "PF + ESIC + Prof. Tax",
    desc: "All Govt. Compliances",
  },
  {
    icon: <FaUniversity className="text-3xl" />,
    title: "Bank Account Support",
    desc: "Guidance for Opening",
  },
  {
    icon: <FaFolderOpen className="text-3xl" />,
    title: "MOA + AOA",
    desc: "Foundational Documents",
  },
];

// Animation variants
const bounceIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.17, 0.67, 0.83, 0.67] }, // Slower & smoother
  },
};

const DeliverablesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      
      className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#c7dfff] via-[#9dbefc] to-[#6659B8]/80 relative"
    >
      <motion.div
        variants={bounceIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full mx-auto text-center"
      >
        <h2 className="text-blue-900 text-3xl md:text-4xl font-extrabold mb-4">
          Register Your Private Limited {" "}
          <span className="text-blue-500 ">
            Company, LLP, or OPC
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </span>
          <span className="text-blue-900 text-3xl md:text-4xl font-extrabold mb-4">
            {" "}
            Registration{" "}
          </span>
          ?
        </h2>
        <p className="text-base sm:text-lg text-blue-700 mb-6">
          Get started at just {" "}
          <span className="text-blue-900 font-bold text-4xl">
                <Typewriter
                  words={["₹4999/-*"]}
                  loop={true}
                  cursor
                  cursorStyle=""
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>{" "}
            in as little as 14 days!

        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 mt-10 items-center">
        {deliverables.map((item, index) => (
          <motion.div
            key={index}
            variants={bounceIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 + index * 0.2 }}
            className="group p-8 w-full min-h-[150px] md:text-base truncate bg-white/90 hover:bg-white border border-transparent hover:border-blue-500 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col items-center text-center"
          >
            <div className="mb-3 flex justify-center text-blue-700 group-hover:text-blue-900 transition-colors duration-300">
              {item.icon}
            </div>
            <h3 className="text-blue-900 font-semibold mt-1 text-xl">
              {item.title}
            </h3>
            <p className="text-blue-700 text-sm mt-2 group-hover:text-blue-800 transition-colors duration-300">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        variants={bounceIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay: 1 }}
        className="text-md text-white italic mt-8 text-center"
      >
        * This is our professional service fee. Government charges and stamp duties are additional as applicable.
      </motion.p>
    </div>
  );
};

export default DeliverablesSection;
