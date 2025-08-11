import React, { useEffect, useRef, useState } from "react";
import {
  FaWpforms,
  FaPhoneAlt,
  FaUserTie,
  FaLock,
  FaUpload,
  FaMoneyBillWave,
  FaRegBuilding,
  FaIdCard,
  FaUserCheck,
  FaUniversity,
  FaClock,
  FaClipboardCheck,
} from "react-icons/fa";

const steps = [
  { icon: <FaWpforms size={30} className="text-2xl" />, title: "Fill Form", desc: "Start by filling a simple online form." },
  { icon: <FaPhoneAlt size={30} className="text-2xl" />, title: "Call to Discuss", desc: "Our team will connect with you for a brief discussion." },
  { icon: <FaUserTie size={30} className="text-2xl" />, title: "Assign CA/CS", desc: "You get a dedicated professional for your task." },
  { icon: <FaLock size={30} className="text-2xl" />, title: "Get Secure ID", desc: "Receive a password-protected client ID." },
  { icon: <FaUpload size={30} className="text-2xl" />, title: "Upload Docs", desc: "Upload required documents securely." },
  { icon: <FaMoneyBillWave size={30} className="text-2xl" />, title: "Pay Fees", desc: "Complete payment via secure gateway." },
  { icon: <FaRegBuilding size={30} className="text-2xl" />, title: "Company Registered", desc: "We'll register your company officially." },
  { icon: <FaIdCard size={30} className="text-2xl" />, title: "Get All Docs", desc: "Receive all incorporation docs in your ID." },
  { icon: <FaUserCheck size={30} className="text-2xl" />, title: "Post Incorporation", desc: "Support continues after incorporation." },
  { icon: <FaUniversity size={30} className="text-2xl" />, title: "Bank Account Help", desc: "Get help opening a business account." },
  { icon: <FaClock size={30} className="text-2xl" />, title: "Due Date Alerts", desc: "Get alerts for compliance & deadlines." },
  { icon: <FaClipboardCheck size={30} className="text-2xl" />, title: "Compliance Support", desc: "We handle post-incorporation compliance." },
];

const StepByStepJourney = () => {
  const scrollAmount = 280;
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % steps.length;
        const container = scrollRef.current;
        container.scrollTo({ left: nextIndex * scrollAmount, top: 0, behavior: "smooth" });
        return nextIndex;
      });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-8">
      <div className="w-full mx-auto text-center mb-10 mt-6">
        <h2 className="text-blue-900 text-3xl md:text-4xl font-extrabold mb-4">
          Step by Step{" "}
          <span className="text-blue-500 ">
            Journey
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
          </span>
           ?
        </h2>
        <p className="text-green-800/60 max-w-2xl mx-auto">
          One step business solution provider
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-hidden grid grid cols-2 sm:grid cols-2 md:grid cols-2 lg:grid cols-3 xl:grid cols-4">
        <div
          ref={scrollRef}
          className="flex gap-4 w-full mx-auto px-4 overflow-x-scroll no-scrollbar  snap-x snap-mandatory scrollbar-hide pb-2 mb-12"
           // Pause/resume on hover
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative group snap-center shrink-0 w-[280px] min-w-[280px] py-6 px-4 rounded-xl text-center transition-all duration-300 transform
              ${index === activeIndex ? "scale-115 bg-gradient-to-br from-[blue-200 via-blue-100 to-blue-300]/90 hover:bg-blue-100" : "bg-gradient-to-br from-[blue-200 via-blue-50 to-blue-300]/90 scale-100"}
          
            `}
            >
              {/* Animated SVG Border */}
              <svg className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none">
                <rect
                  x="2"
                  y="2"
                  width="calc(100% - 4px)"
                  height="calc(100% - 4px)"
                  rx="12"
                  ry="12"
                  fill="none"
                  className={`stroke-[2] stroke-dasharray-[6] ${
  index === activeIndex
    ? "stroke-blue-400 "
    : "stroke-blue-200"
}`}
                />
              </svg>

              {/* Number badge */}
              <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold shadow-md">
                {index + 1}
              </div>

              {/* ICON */}
              <div className={`flex items-center justify-center mb-1 text-4xl h-12 ${
  index === activeIndex ? "text-blue-900" : "text-blue-600"
}`}>
  {step.icon}
</div>

              <h3 className="text-blue-900 font-semibold text-xl mb-2 group-hover:text-blue-700">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2 group-hover:text-gray-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar & Add border animation */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }

        .animated-border {
          stroke-width: 3;
          stroke-dasharray: 6;
          stroke-dashoffset: 0;
          animation: dash 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default StepByStepJourney;
