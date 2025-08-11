import React from "react";
import { Link } from "react-router-dom";
import startImage7 from "@/assets/Financing_image.jpg";

// ✅ Updated icons relevant to each financing service
import {
  FaPiggyBank,        // Fund Formation (Savings/Fund)
  FaRegLightbulb,     // Strategic Planning (Ideas/Strategy)
  FaHandsHelping,     // Mobilization of Resources (Support/Help)
  FaChartLine , // Raising Funds (Growing Capital)
  FaProjectDiagram,   // Building Financial Models (Project & Connections)
  FaSearchDollar,     // Identifying the Finance Needs (Searching Finance)
  FaFileAlt           // Project Report (Document/Report)
} from "react-icons/fa";

import { RiContactsLine } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import "@fontsource/roboto-slab/900.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// ✅ Financing services data with icons
const FinancingTitle = [
  { title: "Fund Formation", desc: "Formulate investment funds.", icon: <FaPiggyBank /> },
  { title: "Strategic Planning", desc: "Develop strategic financial plans.", icon: <FaRegLightbulb /> },
  { title: "Mobilization of Resources", desc: "Mobilize financial resources.", icon: <FaHandsHelping /> },
  { title: "Raising Funds", desc: "Raise funds for your business.", icon: <FaChartLine/> },
  { title: "Building Financial Models", desc: "Build robust financial models.", icon: <FaProjectDiagram /> },
  { title: "Identifying the Finance Needs", desc: "Identify your finance needs.", icon: <FaSearchDollar /> },
  { title: "Project Report", desc: "Prepare detailed project reports.", icon: <FaFileAlt /> },
];

// ✅ Animation variants
const fadeUp = {
  hidden: { opacity: 1, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const ScrollFadeUp = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: delay },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0.2, y: 30 }} animate={controls}>
      {children}
    </motion.div>
  );
};


// ✅ Reusable animation wrapper
const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// ✅ Main Component
const Financing = () => {
  return (
    <>
      {/* ✅ Hero Section */}
      <section className="relative z-10 overflow-hidden pt-20">
        <div
          className="min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${startImage7})` }}
        >
          {/* ✅ Background Overlay */}
          <div className="absolute inset-0 bg-gray-100 backdrop-blur-xs bg-opacity-70 z-0 animate-fadeIn" />

          {/* ✅ Heading + Typewriter Effect */}
          <div className="relative z-10 text-center max-w-5xl w-full px-4 text-gray-900">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 leading-tight animate-fadeInBottom"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Expert Finance and Corporate
            </h1>

            <h2
              className="mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 animate-fadeInBottom"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Compliance Services{" "}
              <span className="text-blue-600 font-bold">
                <Typewriter
                  words={["for Business Success"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            {/* ✅ Description */}
            <p className="mt-5 sm:mt-8 font-serif sm:text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto animate-fadeInBottom">
              Comprehensive financial planning and corporate compliance
              solutions to ensure smooth business operations and sustainable
              growth.
            </p>

            {/* ✅ CTA Button */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 sm:space-y-0 space-y-4">
              <Link
                to="/Contact"
                className="bg-indigo-700 text-white px-6 py-3 text-base font-Semibold rounded-md shadow-md hover:scale-105 transition transform duration-300 animate-fadeInBottom"
              >
                Schedule Your Audit Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Financing Services Section */}
      <AnimatedSection direction="up">
        <section className="mt-10">
          <div className="w-full mx-auto my-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-blue-900 mb-10"
              style={{ fontFamily: "Roboto Slab, serif", fontWeight: 700 }}
            >
              Business Structures We Help With
            </h2>

            <div className="pt-4 pb-2 px-4 sm:px-8 md:px-16 lg:px-20">
              <div className="w-full mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {FinancingTitle.map((item, index) => (
                    <ScrollFadeUp key={index} delay={index * 0.1}>
                    <div
                      key={index}
                      className="w-full  min-h-[190px] bg-white border border-blue-100 border-t-4 border-t-blue-800 rounded-xl shadow-md hover:shadow-2xl transition duration-300 ease-in-out flex flex-col items-center text-center p-6"
                    >
                      {/* ✅ Specific Icon for Each Service */}
                      <div className="mb-4 flex items-center justify-center">
                        <div className="bg-blue-800 text-white rounded-full p-3 text-xl sm:text-2xl shadow-md">
                          {item.icon}
                        </div>
                      </div>

                      {/* ✅ Title & Description */}
                      <h3 className="text-lg font-bold text-blue-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-normal">
                        {item.desc}
                      </p>
                    </div>
                    </ScrollFadeUp>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ✅ Final CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
          <div className="w-full flex justify-center mt-0">
            <Link
              to="/contact"
              className="bg-indigo-600 text-white px-6 py-3 text-lg rounded-md shadow hover:shadow-lg hover:bg-indigo-700 transition flex items-center gap-2 mb-12"
            >
              <RiContactsLine size={22} />
              Get in Touch Today
            </Link>
          </div>
          </motion.div>
        </section>
      </AnimatedSection>
    </>
  );
};

export default Financing;
