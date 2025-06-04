import { Box, Image, Text } from "@chakra-ui/react";

const CoffeeCard = ({ name, image, price }) => {
  return (
    <Box border="1px solid gray" p="4" borderRadius="md">
      <Image src={image} alt={name} w="100%" h="200px" objectFit="cover" />
      <Text mt="2" fontWeight="bold">{name}</Text>
      <Text>₹ {price}</Text>
    </Box>
  );
};

export default CoffeeCard;
