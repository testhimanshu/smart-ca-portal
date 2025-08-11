import React from "react";
import { Link } from "react-router-dom";
import startImage4 from "@/assets/Intellectual_property_right_image.jpg";
import {
  FaRegCopyright,
  FaTrademark,
  FaSearch,
  FaClipboardCheck,
  FaHandshake,
  FaFileSignature,
  FaLightbulb,
} from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import '@fontsource/roboto-slab/900.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// ✅ Intellectual Property Rights List with Relevant Icons
const IntellectualpropertyrightsTitle = [
  { title: "Copyright", desc: "Secure copyright for your work.", icon: <FaRegCopyright /> }, // © Copyright
  { title: "Trademark", desc: "Register your trademark.", icon: <FaTrademark /> }, // ™ Trademark
  { title: "IP Search", desc: "Conduct an intellectual property search.", icon: <FaSearch /> }, // 🔍 Search
  { title: "IP Audit", desc: "Perform an intellectual property audit.", icon: <FaClipboardCheck /> }, // ✅ Audit/checklist
  { title: "Identification & Acquisition", desc: "Identify and acquire IP.", icon: <FaHandshake /> }, // 🤝 Acquisition/partnership
  { title: "IP Licensing & Assignment", desc: "License and assign intellectual property.", icon: <FaFileSignature /> }, // ✍️ Signing documents
  { title: "Advisory on Patents", desc: "Get advice on patents.", icon: <FaLightbulb /> }, // 💡 Patent/innovation
];

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


const AnimatedSection = ({ children, direction = "up" }) => {
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

const Intellectualpropertyrights = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-20">
        {/* ✅ Background Image */}
        <div
          className="min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${startImage4})` }}
        >
          {/* ✅ Overlay */}
          <div className="absolute inset-0 bg-gray-100 backdrop-blur-xs bg-opacity-70 z-0 animate-fadeIn" />

          {/* ✅ Heading */}
          <div className="relative z-10 text-center max-w-5xl w-full px-4 text-gray-900">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-900 leading-tight animate-fadeInBottom"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Protect Your Innovations
            </h1>

            <h2
              className="mt-2 sm:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-900 animate-fadeInBottom"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              with{" "}
              <span className="text-blue-600 font-bold">
                <Typewriter
                  words={["Comprehensive IP Services"]}
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
            <p className="mt-5 sm:mt-8 font-serif sm:text-lg md:text-xl text-gray-600 font-medium max-w-3xl mx-auto animate-fadeInBottom">
              From patents to trademarks, our expert team ensures your
              intellectual property is protected, allowing your innovations to
              thrive.
            </p>

            {/* ✅ CTA Button */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 sm:space-y-0 space-y-4">
              <Link
                to="/Contact"
                className="bg-indigo-700 text-white px-6 py-3 text-base font-Semibold rounded-md shadow-md hover:scale-105 transition transform duration-300 animate-fadeInBottom"
              >
                Safeguard Your Creations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection direction="up">
        <section className="mt-10">
          <div className="w-full mx-auto my-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl sm:text-4xl font-bold text-blue-900 mb-10"
              style={{ fontFamily: "Roboto Slab, serif", fontWeight: 700 }}
            >
              Business Structures We Help With
            </h2>

            {/* ✅ IP Services Cards */}
            <div className="pt-4 pb-2 px-4 sm:px-8 md:px-16 lg:px-20">
              <div className="w-full mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {IntellectualpropertyrightsTitle.map((item, index) => (
                    <ScrollFadeUp key={index} delay={index * 0.1}>
                    <div
                      key={index}
                      className="w-full min-h-[190px] bg-white border border-blue-100 border-t-4 border-t-blue-800 rounded-xl shadow-md hover:shadow-2xl transition duration-300 ease-in-out flex flex-col items-center text-center p-6"
                    >
                      {/* ✅ Updated Icon */}
                      <div className="mb-4 flex items-center justify-center">
                        <div className="bg-blue-800 text-white rounded-full p-3 text-xl sm:text-2xl shadow-md">
                          {item.icon}
                        </div>
                      </div>

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

          {/* ✅ Bottom CTA */}
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

export default Intellectualpropertyrights;
