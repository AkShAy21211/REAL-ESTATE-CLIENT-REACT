import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Image,
  Button,
  ButtonGroup,
  CardFooter,
  Divider,
  Text,
} from "@chakra-ui/react";


type PropertyTypesProp={

    image:string;
    type:string;
}
const PropertyTypes = ({image,type}:PropertyTypesProp) => {
  return (
    <Card maxW="sm" className="w-full md:w-80 cursor-pointer ">
        <CardBody>
          <Image
            src={image}
            className="h-72 shadow-md hover:shadow-gray-600  rounded-lg w-full bg-cover bg-center bg-no-repeat"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Text className="text-black text-xl font-semibold font-serif">
             {type}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
    
      </Card>
      
  
  );
};

export default PropertyTypes;
