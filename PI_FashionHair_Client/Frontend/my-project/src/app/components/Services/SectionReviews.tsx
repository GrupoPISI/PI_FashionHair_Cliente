"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import CardReviews from "./CardReviews";
import Person from "../../../../public/images/persons/image-person.png";
import Person2 from "../../../../public/images/persons/image-person2.png";
import Person3 from "../../../../public/images/persons/image-person3.png";


export default function SectionReviews() {
    return (
        <section className="w-full h-[95vh]">
            <h2>Feedback de nossos clientes</h2>
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={1}
            >
                <SwiperSlide>
                    <CardReviews
                        image={Person}
                        name={`Ana Carolina Mendes`}
                        review={<>Tive uma experiência maravilhosa no salão! O atendimento foi impecável e o resultado final do meu penteado superou minhas expectativas. <br />
                        Com certeza voltarei. A equipe foi super profissional e conseguiu entender exatamente o que eu queria.</>}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardReviews 
                        image={Person2}
                        name={`Mariana Souza`}
                        review={<>Fiz uma maquiagem para um evento especial e fiquei encantada com o profissionalismo. <br />
                        O ambiente é muito aconchegante e a equipe super atenciosa. <br />
                        Recomendo a todos! Além disso, fiquei impressionada com a qualidade dos produtos utilizados.</>}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardReviews
                        image={Person3}
                        name={`Larissa Oliveira`}
                        review={<>Adorei o cuidado e a dedicação da equipe com os detalhes. <br />
                        Fiz as unhas e fiquei super satisfeita com o resultado. Voltarei sempre que puder! <br />
                        O atendimento foi rápido e, mesmo assim, o resultado foi impecável.</>}
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}