import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRocket, FaBullseye, FaLightbulb, FaUserCheck } from "react-icons/fa";
import transformbusinessimage from "@/assets/Transform_your_business.jpeg";
import laptopimage from "@/assets/Finance_home_image.jpg";

const features = [
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    desc: "Cutting-edge technology to enhance your success.",
  },
  {
    icon: <FaUserCheck />,
    title: "Reliable Support",
    desc: "Dedicated assistance for seamless management.",
  },
];

const featureCards = [
  {
    icon: <FaRocket />,
    title: "Strategic Guidance",
    desc: "Expert advice to maximize financial performance.",
  },
  {
    icon: <FaBullseye />,
    title: "Tailored Solutions",
    desc: "Custom financial strategies for your unique needs.",
  },
];

const fadeInLeft = {
  hidden: { opacity: 1, x: -20 },   // bas halki si movement
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
const fadeInRight = {
  hidden: { opacity: 1, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
const fadeInUp = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AnimatedSection = ({ children, direction = "left" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  let animation;
  if (direction === "left") animation = fadeInLeft;
  else if (direction === "right") animation = fadeInRight;
  else if (direction === "up") animation = fadeInUp;
  else animation = fadeInUp; // default up
  return (
    <motion.div
      ref={ref}
      variants={animation}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const ITandFinanceConsultancy = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#c7dfff] via-[#9dbefc] to-[#6659B8]/80 py-16 px-4 sm:px-6 lg:px-8 relative">
  {/* Main Section: Image + Text */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Image */}
    <AnimatedSection direction="left">
      <img
        src={laptopimage}
        alt="Financial Strategy"
        className="rounded-xl shadow-xl w-full max-h-[400px] object-cover"
      />
    </AnimatedSection>

    {/* Right Content */}
   <AnimatedSection direction="right">
      <div className="w-full text-white">
        <p className="text-blue-900 text-4xl md:text-5xl font-extrabold mb-10">
          Finance Consultancy
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight mb-3 tracking-tight text-blue-700">
          Optimize Your
          Financial Strategy
          with Our Expertise
        </h2>
        <p className="text-blue-900 text-base sm:text-lg leading-relaxed mb-4">
          Comprehensive finance services to ensure your business thrives.
        </p>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-sm sm:text-base mb-5">
          <div className="flex items-start gap-3 font-medium bg-white/20 backdrop-blur rounded-lg px-3 py-2">
            <span className="text-indigo-700 text-lg font-bold">✓</span>
            <p className="text-gray-800">Strategic Budget Planning & Forecasting</p>
          </div>
          <div className="flex items-start gap-3 font-medium bg-white/20 backdrop-blur rounded-lg px-3 py-2">
            <span className="text-indigo-700 text-lg font-bold">✓</span>
            <p className="text-gray-800">Regulatory Compliance & Tax Efficiency</p>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/financing"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <button className="bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg transition duration-300 w-full sm:w-auto mt-2">
            Discover More
          </button>
        </Link>
      </div>
    </AnimatedSection>
  </div>

  {/* Cards Section */}
  <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-2 sm:px-0">
    {featureCards.map((item, index) => (
      <AnimatedSection direction="up" key={index}>
        <div className="group p-6 flex items-start gap-4 bg-white/90 hover:bg-white border border-transparent hover:border-blue-500 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02]">
        
          <div className="text-blue-700 group-hover:text-blue-900 mt-2 text-2xl transition-colors duration-300">
            {item.icon}
          </div>
          <div>
            <h4 className="text-blue-900 font-semibold text-md sm:text-md md:text-lg  mb-1">
              {item.title}
            </h4>
            <p className="text-blue-700 text-sm mt-1 group-hover:text-blue-800 transition-colors duration-300">
              {item.desc}
            </p>
          </div>
        </div>
      </AnimatedSection>
    ))}
  </div>
</div>



    </>
  );
};

export default ITandFinanceConsultancy;
