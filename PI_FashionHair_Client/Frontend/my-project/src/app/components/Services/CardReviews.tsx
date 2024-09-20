import Image, { StaticImageData } from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

type CardReviewsProps = {
    image: StaticImageData,
    width?: number,
    height?: number,
    name: string,
    review: string | React.ReactNode
}

export default function CardReviews({ image, width, height, name, review }: CardReviewsProps) {
    return (
        <>
            <div>
                <Image
                    src={image}
                    alt={`Image de ${name}`}
                    quality={100}
                    width={width}
                    height={height}
                />
            </div>
            <div>
                <FaQuoteLeft />
                <h3>{name}</h3>
                <p>{review}</p>
                <FaQuoteRight />
            </div>
        </>
    );
}