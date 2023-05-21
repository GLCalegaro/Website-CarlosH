import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ name, company, image, testimonial }) => {
  return (
    <Box
      bgGradient="linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))"
      padding="3rem"
      display="flex"
      flexDirection="column"
      marginBottom={{ base: "1rem", sm: "0" }}
    >
      <Box>
        <FaQuoteLeft size="20" color="#fcee85e6" />
      </Box>
      <Text as='cite' fontSize="md" color="#ffffffa8" marginY="1.5rem">
        {testimonial}
      </Text>
      <Flex gap="1rem" alignItems="center">
        <Image src={image} boxSize='80px' width="9rem" h="7rem" objectFit="cover" borderRadius="2xl"/>
        <Box color="#ffffffa8">
          <Text as='samp' color="#ffffffa8" fontSize={{base:"sm", sm:"md"}}>{name}</Text>
          <Text fontWeight="light" fontSize={{base:"sm", sm:"md"}} fontStyle="italic">({company}).</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default TestimonialCard;
