import React, { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import {
  FaBriefcase,
  FaUsers,
  FaClipboardCheck,
  FaShoppingBag,
  FaGlobe,
  FaLock,
  FaIdCard,
  FaBullseye,
  FaEye,
  FaCompass,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import StartImage23 from "@/assets/Business_potential_image.jpg";
import StartImage24 from "@/assets/about_1.jpg";

const stats = [
  { icon: <FaBriefcase size={36} />, label: "Clients Served", value: 46 },
  {
    icon: <FaClipboardCheck size={36} />,
    label: "Projects Completed",
    value: 65,
  },
  { icon: <FaGlobe size={36} />, label: "Industries Covered", value: 10 },
  { icon: <FaUsers size={36} />, label: "Expert Consultants", value: 14 },
];

const fadeInUp = {
  hidden: { opacity: 1, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const fadeInLeft = {
  hidden: { opacity: 1, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeInRight = {
  hidden: { opacity: 1, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AnimatedSection = ({ children, direction = "left" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  let animation =
    direction === "right"
      ? fadeInRight
      : direction === "up"
      ? fadeInUp
      : fadeInLeft;

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

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [activeTab, setActiveTab] = useState("mission");

  const data = [
    {
      id: "mission",
      icon: <FaBullseye className="text-3xl text-blue-800" />,
      title: "Our Mission",
      description:
        "At Legafin, our mission is to empower businesses with unparalleled expertise and innovative solutions. We are dedicated to providing comprehensive advisory services across finance, legal, tax consultancy, accounting, and audit, ensuring our clients achieve their goals with efficiency and excellence.",
    },
    {
      id: "vision",
      icon: <FaEye className="text-3xl text-blue-800" />,
      title: "Our Vision",
      description:
        "Our vision is to become the leading consultancy firm, recognized for exceptional service quality and an unwavering commitment to client success. We aim to build long-lasting relationships founded on trust, professionalism, and exceptional outcomes.",
    },
    {
      id: "values",
      icon: <FaCompass className="text-3xl text-blue-800" />,
      title: "Our Values",
      description: (
        <ul className="list-disc pl-6 space-y-2 text-left">
          <li>
            <strong>Integrity:</strong> Upholding honesty and transparency in
            all our dealings.
          </li>
          <li>
            <strong>Excellence:</strong> Delivering top-notch services that
            exceed expectations.
          </li>
          <li>
            <strong>Innovation:</strong> Embracing creativity and modern
            solutions.
          </li>
          <li>
            <strong>Collaboration:</strong> Building strong partnerships for
            mutual growth.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <>
     <style>
      {`
        .justify-and-center-last {
          text-align: justify;
          text-align-last: center;
        }
      `}
      </style>
      <section className="w-full bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100/50 py-16 px-4 sm:px-6 lg:px-10 ">
        {/* Hero Section */}
        <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mt-12 ml-4">
          <div className="flex-1 space-y-6 animate-fadeInLeft">
            <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-blue-900 leading-tight">
              About <span className="text-blue-600">Legafin</span>
            </h1>
            <p className="text-gray-600 text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato mr-2">
              Discover the story behind Legafin and our commitment to delivering
              exceptional services in finance, legal, tax consultancy,
              accounting, and audit. We're not just solving problems; we're
              shaping smarter, stronger businesses for tomorrow.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-block bg-blue-800 text-white text-lg mt-2 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-900 mb-2"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="flex space-x-6 text-blue-800 text-2xl ml-2">
              <FaBriefcase />
              <FaUsers />
              <FaClipboardCheck />
              <FaShoppingBag />
            </div>
          </div>

          <div className="flex-1 animate-fadeInRight p-4 mt-2 mr-8 w-full md:w-1/2">
            <img
              src={StartImage24}
              alt="About 1"
              className="rounded-xl shadow-2xl object-cover w-full max-w-5xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Meet Legafin Section */}
      <AnimatedSection direction="up">
        <section className="w-full bg-white/80 mt-0 py-16 px-6 sm:px-8 lg:px-12 shadow-md text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-12 font-bold">
            Meet Legafin
          </h2>
          <p className="justify-and-center-last text-gray-600 text-base sm:text-md md:text-lg lg:text-lg xl:text-lg leading-relaxed mb-6 font-lato">
            Legafin is a professional brand powered by OS Consulting Services
            LLP, a firm incorporated under the Companies Act, 2013. We are
            committed to delivering excellence across a broad spectrum of
            services, including Audit & Assurance, Accounting, Tax Consultancy,
            Management Consultancy, and Secretarial Functions. Driven by a team
            of experienced professionals, we operate with fully digitized
            systems that ensure fast, reliable, and high-quality service
            delivery. Our long-standing client relationships are built on trust,
            consistency, and measurable results; leading to high levels of client
            retention and satisfaction. At Legafin, we embrace technological
            advancements to stay ahead in an ever-evolving business landscape.
            Our focus on timely execution and service excellence continues to
            expand our reach and strengthen our reputation year after year.
          </p>
          

          <div
            ref={ref}
            className="flex flex-wrap justify-center gap-8 sm:gap-8 pt-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group w-[180px] sm:w-[200px] p-6 bg-gray-50/20 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl border border-gray-200 hover:shadow-gray-300 transition duration-300 mt-2 mb-8"
              >
                <div className="flex items-center justify-center text-blue-600 mb-4 text-3xl group-hover:text-blue-800">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-blue-900">
                  {inView ? <CountUp end={stat.value} duration={2} /> : "0"}+
                </h3>
                <p className="text-sm text-blue-700 mt-2 group-hover:text-blue-800">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Business Potential Section */}
      <section className="w-full bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100/50 mt-0 py-16 px-4 sm:px-6 lg:px-10 rounded-xl shadow-md">
        <div className="w-full mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left Section: Text Content */}
          <AnimatedSection direction="left" className="w-full md:w-1/2">
            <div className="space-y-6">
              <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
                Unlock Your Business Potential with Our Expertise
              </h1>
              <p className="text-gray-800 text-md sm:text-md md:text-md lg:text-md xl:text-lg font-lato hover:text-gray-900 mr-2 mb-8">
                Discover how Legafin can drive your business forward with our
                comprehensive range of services. Whether you're starting out or
                scaling up, we equip you with the right tools, insights, and
                support to grow with confidence and clarity.
              </p>
              <div>
              <Link
                to="/Startyourbusiness"
                className="inline-block bg-blue-800 text-white text-lg mt-2 px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-900 mb-2"
              >
                  ➤ Discover all services
              </Link>
            </div>
            <div className="flex space-x-6 text-blue-800 text-2xl ml-2">
              <FaGlobe />
                <FaLock />
                <FaIdCard />
            </div>
            </div>
          </AnimatedSection>

          {/* Right Section: Image */}
          <AnimatedSection direction="right" className="w-full md:w-1/2">
            <div className="w-full">
              <img
                src={StartImage23}
                alt="Business potential"
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission, Vision & Values Section */}
      <section className="w-full py-20 bg-white text-center">
        <AnimatedSection direction="up">
          <div className="mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 font-bold mb-16">
              Our Mission, Vision & Values
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition border border-blue-200 hover:border-blue-600 text-left"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                    {item.title}
                  </h3>
                  <div className="text-gray-600 text-base leading-relaxed">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export default About;
