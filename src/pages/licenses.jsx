import React from "react";
import { Link } from "react-router-dom";
import startImage3 from "@/assets/License_image.jpg";
import {
  FaCertificate,
  FaIndustry,
  FaLeaf,
  FaHospitalAlt,
  FaHandshake,
} from "react-icons/fa";
import { RiContactsLine, RiGovernmentLine } from "react-icons/ri";
import {
  MdLiquor,
  MdOutlineFoodBank,
  MdSecurity,
  MdAttachMoney,
} from "react-icons/md";
import { GiFactory, GiMoneyStack } from "react-icons/gi";
import { HiOutlineIdentification } from "react-icons/hi2";
import { BsBank } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import "@fontsource/roboto-slab/900.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// ✅ Licenses List with Icons relevant to content
const LicensesTitle = [
  {
    title: "Trade License",
    desc: "Acquire a trade license.",
    icon: <FaHandshake />,
  }, // 🤝 Trade/business license
  {
    title: "IEC",
    desc: "Get an Import Export Code.",
    icon: <HiOutlineIdentification />,
  }, // 🆔 IEC ID
  {
    title: "Liquor License",
    desc: "Obtain a liquor license.",
    icon: <MdLiquor />,
  }, // 🍷 Liquor
  {
    title: "Environmental Clearances",
    desc: "Secure necessary environmental clearances.",
    icon: <FaLeaf />,
  }, // 🌿 Environment/green
  {
    title: "Industry/Factory License",
    desc: "Get an industry or factory license.",
    icon: <FaIndustry />,
  }, // 🏭 Factory/industry
  {
    title: "License from Local Authorities",
    desc: "Obtain licenses from local authorities.",
    icon: <RiGovernmentLine />,
  }, // 🏛️ Government/local
  {
    title: "Hospital Registration",
    desc: "Register your hospital.",
    icon: <FaHospitalAlt />,
  }, // 🏥 Hospital
  {
    title: "OSP",
    desc: "Other Service Provider license.",
    icon: <FaHandshake />,
  }, // 🤝 Service provider
  {
    title: "FSSAI License",
    desc: "Obtain a food safety license.",
    icon: <MdOutlineFoodBank />,
  }, // 🍴 Food safety
  {
    title: "ISO Certification",
    desc: "Get ISO certified.",
    icon: <FaCertificate />,
  }, // ✅ Certification
  {
    title: "PSARA License",
    desc: "Acquire a Private Security Agency Regulation Act license.",
    icon: <MdSecurity />,
  }, // 🔐 Security
  {
    title: "RBI License for Forex Company",
    desc: "Obtain an RBI license for a forex company.",
    icon: <BsBank />,
  }, // 🏦 RBI/bank
  {
    title: "Money Changer Company",
    desc: "Set up a money changer company.",
    icon: <GiMoneyStack />,
  }, // 💰 Money exchange
  {
    title: "Co-Operative Company",
    desc: "Register a co-operative company.",
    icon: <FaHandshake />,
  }, // 🤝 Cooperation
  {
    title: "NBFC License",
    desc: "Obtain an NBFC license.",
    icon: <MdAttachMoney />,
  }, // 💵 NBFC/finance
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

const Licenses = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pt-20">
        {/* ✅ Background Image */}
        <div
          className="min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${startImage3})` }}
        >
          {/* ✅ Overlay */}
          <div className="absolute inset-0 bg-gray-100 backdrop-blur-xs bg-opacity-50 z-0 animate-fadeIn" />

          {/* ✅ Heading and CTA */}
          <div className="relative z-10 text-center max-w-5xl w-full px-4 text-gray-900">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-900 leading-tight animate-fadeInBottom"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Secure Your Business
            </h1>

            <h2
              className="mt-2 sm:mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-blue-900 animate-fadeInBottom"
              style={{ fontFamily: "Roboto Slab, serif" }}
            >
              Future with{" "}
              <span className="text-blue-600 font-bold">
                <Typewriter
                  words={["Essential Licenses"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <p className="mt-5 sm:mt-8 font-serif sm:text-lg md:text-xl text-gray-700 font-medium max-w-3xl mx-auto animate-fadeInBottom">
              From trade licenses to environmental clearances, we provide expert
              assistance in obtaining all necessary permits and approvals for
              your business.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 sm:space-y-0 space-y-4">
              <Link
                to="/Contact"
                className="bg-indigo-700 text-white px-6 py-3 text-base font-Semibold rounded-md shadow-md hover:scale-105 transition transform duration-300 animate-fadeInBottom"
              >
                Essential Licenses
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

            <div className="pt-4 pb-2 px-4 sm:px-8 md:px-16 lg:px-20 ">
              <div className="w-full mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {LicensesTitle.map((item, index) => (
                    <ScrollFadeUp key={index} delay={index * 0.1}>
                      <div
                        key={index}
                        className="w-full min-h-[200px] bg-white border border-blue-100 border-t-4 border-t-blue-800 rounded-xl shadow-md hover:shadow-2xl transition duration-300 ease-in-out flex flex-col items-center text-center p-6"
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

          {/* ✅ CTA Button */}
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

export default Licenses;
