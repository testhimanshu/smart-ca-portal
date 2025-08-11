// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

// import IncomeTaxFiling from "@/pages/IncomeTaxFiling";
// import GSTRegistration from "@/pages/GSTRegistration";
// import TrademarkRegistration from "./TrademarkRegistration";
// import "./sliderStyles.css"; // custom css import

// const Slider = () => {
//   return (
//     <div className="w-[98%] mx-auto py-4 relative">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={10}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         className="custom-swiper"
//       >
//         <SwiperSlide className="!flex justify-center items-center">
//           <div className="w-full">
//             <TrademarkRegistration />
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="!flex justify-center items-center">
//           <div className="w-full">
//             <IncomeTaxFiling />
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="!flex justify-center items-center">
//           <div className="w-full">
//             <GSTRegistration />
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import IncomeTaxFiling from "@/pages/IncomeTaxFiling ";
import GSTRegistration from "@/pages/GSTRegistration";
import TrademarkRegistration from "./TrademarkRegistration";

const Slider = () => {
  return (
    // <div className="-[98%] mx-auto pt-4 pb-0 -mb-2">
    //   <Swiper
    //     modules={[Navigation, Pagination, Autoplay]}
    //     spaceBetween={10}
    //     slidesPerView={1}
    //     navigation
    //     pagination={{ clickable: true }}
    //     autoplay={{ delay: 3000 }}
    //     style={{
    //       "--swiper-pagination-bottom": "5px" // dots ke niche ka gap kam kiya
    //     }}
    //   >
    //     <SwiperSlide className="!flex justify-center items-center">
    //       <div className="w-full">
    //         <TrademarkRegistration />
    //       </div>
    //     </SwiperSlide>

    //     <SwiperSlide className="!flex justify-center items-center">
    //       <div className="w-full">
    //         <IncomeTaxFiling />
    //       </div>
    //     </SwiperSlide>

    //     <SwiperSlide className="!flex justify-center items-center">
    //       <div className="w-full">
    //         <GSTRegistration />
    //       </div>
    //     </SwiperSlide>
    //   </Swiper>
    // </div>
    <div className="-[98%] mx-auto pt-4 pb-0 -mb-2">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={10}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
    style={{
      "--swiper-pagination-bottom": "5px" // dots ke niche ka gap kam kiya
    }}
  >
    <SwiperSlide className="!flex justify-center items-center">
      <div className="w-full">
        <TrademarkRegistration />
      </div>
    </SwiperSlide>

    <SwiperSlide className="!flex justify-center items-center">
      <div className="w-full">
        <IncomeTaxFiling />
      </div>
    </SwiperSlide>

    <SwiperSlide className="!flex justify-center items-center">
      <div className="w-full">
        <GSTRegistration />
      </div>
    </SwiperSlide>
  </Swiper>
</div>

  );
};

export default Slider;


// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// //import TrademarkRegistration from "@/pages/TrademarkRegistration";
// import IncomeTaxFiling from "@/pages/IncomeTaxFiling ";
// import GSTRegistration from "@/pages/GSTRegistration";
// import TrademarkRegistration from "./TrademarkRegistration";

// const Slider = () => {
//   return (
//     <div className=" max-w-6xl  py-4">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1} // ek slide me ek hi page
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//       >
       
//         <SwiperSlide className="!h-auto flex justify-center">
//   <div className="w-full max-w-5xl">
//     <TrademarkRegistration />
//   </div>
// </SwiperSlide>

//         <SwiperSlide >
//           <div className="bg-gray-100 rounded-lg p-8 text-center">
//            <IncomeTaxFiling/>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="bg-gray-100 rounded-lg p-8 text-center">
//             <GSTRegistration/>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import TrademarkRegistration from "@/pages/TrademarkRegistration";

// const Slider = () => {
//   return (
//     <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1} // Mobile by default
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         className="max-w-6xl mx-auto"
//         style={{ paddingBottom: "2rem" }}
//       >
//         <SwiperSlide className="flex justify-center">
//           <TrademarkRegistration />
//         </SwiperSlide>

//         <SwiperSlide className="flex justify-center">
//           <div className="bg-gray-100 rounded-lg shadow-lg p-6 sm:p-8 text-center w-full sm:w-10/12 lg:w-8/12">
//             <h2 className="text-lg sm:text-xl font-bold">Page 2</h2>
//             <p className="text-sm sm:text-base">Yaha apna dusra content daalna hai.</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide className="flex justify-center">
//           <div className="bg-gray-100 rounded-lg shadow-lg p-6 sm:p-8 text-center w-full sm:w-10/12 lg:w-8/12">
//             <h2 className="text-lg sm:text-xl font-bold">Page 3</h2>
//             <p className="text-sm sm:text-base">Yaha apna teesra content daalna hai.</p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;

