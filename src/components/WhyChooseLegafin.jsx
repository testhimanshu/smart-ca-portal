import React, { useRef } from "react";
import { FaUserTie, FaUsersCog, FaBullseye, FaAward } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: <FaUserTie size={30} />,
    title: "Experienced Professionals",
    desc: "Seasoned experts delivering top-tier advice and solutions.",
  },
  {
    icon: <FaUsersCog size={30} />,
    title: "Comprehensive Services",
    desc: "Wide range of tailored services for diverse business needs.",
  },
  {
    icon: <FaBullseye size={30} />,
    title: "Personalized Attention",
    desc: "Customized solutions with dedicated client focus.",
  },
  {
    icon: <FaAward size={30} />,
    title: "Commitment to Excellence",
    desc: "High-quality, efficient, and detail-oriented services.",
  },
];

// Animation variants
const fadeTop = { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const fadeBottom = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

const WhyChooseLegafin = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Triggers only when seen

  return (
    <div ref={ref} className="w-full bg-white py-16 px-4 sm:px-8">
      
      <div className="w-full mx-auto text-center mb-4 mt-6 animate-fadeInBottom">
      
        
        <h2 className="text-blue-900 text-3xl md:text-4xl font-extrabold">
          Why Choose{" "}
          <span className="text-blue-500 ">
            LEGAFIN
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </span>
          ?
        </h2>
      </div>

      <div  className="text-green-800/60 max-w-2xl mx-auto text-center mb-8 animate-fadeInBottom">
        <p>Discover the reasons businesses trust us to help them grow.</p>
      </div>

      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 mb-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            variants={fadeBottom}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 + index * 0.4 }} // Cards staggered animation
            className="group p-6 rounded-xl bg-white border border-gray-100/40 shadow-xl hover:border border-blue-100 hover:border-t-8 border-t-[#6659B8] hover:rounded-2xl transition-all duration-300 shadow-sm  text-center min-h-[220px] max-w-[500px]"
          >  
            <div className="flex items-center justify-center text-blue-500 mb-4 text-3xl group-hover:text-blue-900">
              {reason.icon}
            </div>
            <h3 className="text-blue-900 font-semibold text-xl mb-2 group-hover:text-blue-900">
              {reason.title}
            </h3>
            <p className="text-gray-900 text-sm group-hover:text-gray-500">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseLegafin;
