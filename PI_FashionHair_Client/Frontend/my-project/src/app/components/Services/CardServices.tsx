import Image, { StaticImageData } from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button";

type CardServicesProps = {
    image: StaticImageData,
    width?: number,
    height?: number,
    note: string,
    reviews: string,
    service: string
}

export default function CardServices({ image, width, height, note, reviews, service }: CardServicesProps) {
    return (

        <div>
            <div>
                <Image
                    src={image}
                    alt={`Imagem de ${service}`}
                    quality={100}
                    width={width}
                    height={height}
                />
            </div>
                <div>
                    <span><FaRegStar /> {note}</span>
                    <span>{reviews} Reviews</span>
                </div>
            <div>
                <h2>{service}</h2>
            </div>
            <div>
                <Button className=""
                href={`/`}>Detalhes <FaArrowRight /></Button>
            </div>
        </div>
    );
}