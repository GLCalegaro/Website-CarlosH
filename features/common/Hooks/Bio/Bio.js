import { Box, Text, chakra, shouldForwardProp } from "@chakra-ui/react";
import bio from "../../../../public/logo/Biografia Branca.png";
import Image from "next/image";
import { isValidMotionProp, motion } from "framer-motion";
import Link from "next/link";

const Bio = () => {
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  return (
    <Box
      position="relative"
      left={{ base: "0", sm: "4" }}
      bottom={{ base: "13", sm: "16" }}
      display="flex"
      alignItems="flex-end"
      justifyContent="flex-end"
      overflow="hidden"
    >
      <ChakraBox
        as={motion.div}
        animate={{
          scale: [1, 1.3, 1.3, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "25%", "25%", "20%"],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        width="48"
        height="auto"
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
        position="relative"
        animation="spin 1s linear infinite"
      >
        <Image src={bio} />
        </ChakraBox>
        <Box
          as={motion.div}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          left="8"
          right="8"
          top="1"
          translateX="-1/2"
          translateY="-1/2"
          color="blue.200"
          fontWeight="bold"
          bottom="11"
          fontSize="1.2rem"
        >
          Acessar
        </Box>
      
    </Box>
  );
};

export default Bio;
