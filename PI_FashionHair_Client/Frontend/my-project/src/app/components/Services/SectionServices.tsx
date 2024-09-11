"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardServices from "./CardServices";

export default function SectionServices() {
    return (
        <section className="flex justify-center items-center py-[10%] w-full">
            <Swiper className="flex justify-center items-center w-[90%]"
                modules={[Navigation]}
                navigation
            >
                <SwiperSlide>
                    <CardServices />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}