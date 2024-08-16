import { Card, Heading, CardBody, Text } from "@chakra-ui/react";
import CountUp from "react-countup";

const RealtorStatisticCard = () => {
  return (
    <>
      <Card className=" flex w-72 justify-center items-center bg-forestGreen p-10 rounded-lg text-white">
        <Heading className="text-2xl font-bold font-serif" size="md">
          {" "}
          Total Listings
        </Heading>
        <CardBody>
          <Text className="text-2xl mt-5 font-semibold">
            <CountUp end={50} />
          </Text>
        </CardBody>
      </Card>
      <Card className="w-72 flex justify-center items-center bg-forestGreen p-10 rounded-lg text-white">
        <Heading className="text-2xl font-bold font-serif" size="md">
          {" "}
          Total Sold
        </Heading>
        <CardBody>
          <Text className="text-2xl mt-5 font-semibold">
            <CountUp end={20} />
          </Text>
        </CardBody>
      </Card>
      <Card className=" w-72 flex justify-center items-center bg-forestGreen p-10 rounded-lg text-white">
        <Heading className="text-2xl font-bold font-serif" size="md">
          {" "}
          Total Revenue
        </Heading>
        <CardBody>
          <Text className="text-2xl mt-5 font-semibold">
            <CountUp end={500000} />
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default RealtorStatisticCard;
