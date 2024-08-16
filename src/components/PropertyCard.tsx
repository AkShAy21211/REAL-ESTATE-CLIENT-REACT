import {
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { IoPricetagSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { FcCancel } from "react-icons/fc";

type PropertyCardPro = {
  title: string;
  image: string;
  location: string;
  price: number;
  sold?: boolean;
};
const PropertyCard = ({
  title,
  image,
  location,
  price,
  sold,
}: PropertyCardPro) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      maxW="sm"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <CardBody>
        <Image
          src={image}
          className={` h-52 rounded-lg  ${
            hover ? "  opacity-70" : ""
          } cursor-pointer w-full  bg-cover bg-center bg-no-repeat`}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <div className="flex mt-3 gap-5 items-center justify-between">
          <Heading className="font-semibold text-nowrap">{title}</Heading>
          <div className=" flex  justify-center items-center gap-1">
            <FaLocationDot />
            <p className="text-nowrap">{location}</p>
          </div>
        </div>
        <div className=" flex   items-center justify-between mt-3 gap-1">
          <div className=" flex justify-center items-center gap-1">
            <IoPricetagSharp />
            <p className=" font-bold">{price}</p>
          </div>
          {sold ? (
            <p className="flex jc items-center gap-1 font-bold text-red-600">
              <FcCancel size={20} />SOLD
            </p>
          ) : null}
        </div>
      </CardBody>
      <Divider />

      {hover ? (
        <ButtonGroup
          className=" absolute  top-20 left-0 right-0  flex justify-center gap-5 w-full mt-2"
          spacing="2"
        >
          <Button variant="solid" colorScheme="blue">
            <FaRegHeart
              size={35}
              className=" text-white relative cursor-pointer z-50"
            />
          </Button>
          <Button variant="ghost" colorScheme="blue">
            <FaEye
              size={35}
              className=" text-white relative  cursor-pointer z-50"
            />
          </Button>
        </ButtonGroup>
      ) : null}
    </Card>
  );
};

export default PropertyCard;
