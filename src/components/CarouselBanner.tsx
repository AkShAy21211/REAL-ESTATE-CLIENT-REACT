import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselBannerPro = {
  images: { src: string; text: string }[];
  isBlog?: boolean;
};

const CarouselBanner = ({ images, isBlog }: CarouselBannerPro) => {
  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      showStatus={false}
      infiniteLoop
      autoPlay
    >
      {images.map((image, index) => (
        <Box
          key={index}
          position="relative"
          className="md:h-[78vh] bg-cover bg-center bg-no-repeat "
        >
          <Image src={image.src} className={`h-full ${isBlog?"rounded-lg md:h-full h-64 bg-cover bg-center bg-no-repeat":""}  w-full object-cover `} />
          <Text
            position="absolute"
            top="40%"
            left="20px"
            transform="translateY(-50%)"
            className={` ${isBlog?"text-3xl":" text-xl md:text-7xl"}  text-white    `}
            fontWeight="bold"
            padding="10px"
            borderRadius="md"
          >
            {image.text}
          </Text>
        </Box>
      ))}
    </Carousel>
  );
};

export default CarouselBanner;
