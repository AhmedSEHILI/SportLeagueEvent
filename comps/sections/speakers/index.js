import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation } from "swiper";
import Speaker from "./speaker";

export default function Speakers() {
  return (
    <div id="speakerssec" className="bg-[#EFF7FB] py-[10%] ">
            <div className="lg:w-[900px] w-[600px] mx-auto bg-[#EFF7FB]">
            <h3 className="lg:text-[40px] md:text-[32px] sm:text-[24px] text-[20px] text-[#FFC600] lg:mb-7 md:mb-5 sm:mb-3 mb-1 font-bold text-center mb-8">Our Speakers </h3>
        <Swiper
            rewind={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><Speaker/></SwiperSlide>
            <SwiperSlide><Speaker /></SwiperSlide>
            <SwiperSlide><Speaker /></SwiperSlide>
        </Swiper>
            </div>
    </div>
   
  );
}


/*const Speakers = () => {
    return (
        <div className="bg-[#EFF7FB] h-screen w-screen">
            
        </div>
    );
}
 
export default Speakers;*/