import { Box, Fade, Text } from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";
import HeroForm from "./HeroForm/HeroForm";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position="relative"
        maxHeight={{ base: "110vh", sm: "130vh" }}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
        // backgroundImage={`url('./Imagens/logo/audience.jpg')`}
      >
        {/* Quando trabalhar com positions absolute/relatives, definir top, right, bottom e left */}
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity="0.70"
          backgroundColor="gray.800"
        />
        <Box
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          alignItems="center"
          justifyContent={{ base: "flex-start", sm: "space-between" }}
          maxWidth="1280px"
          position="absolute"
          color="white"
          fontWeight="light"
          left="0"
          right="0"
          bottom="0"
          top="0"
          margin="0 auto"
          padding="2rem"
        >
          <Box
            as={motion.div}
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 60,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 8,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              },
            }}
            width={{ base: "100%", sm: "50%" }}
            display="flex"
            gap="3"
            alignItems="flex-start"
            fontSize={{ base: "4xl", sm: "6xl" }}
          >
            
            <Text
              as={motion.p}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 4.1,
                },
              }}
              fontSize={{ base: "3xl", sm: "5xl" }}
              lineHeight="shorter"
              marginBottom="1.5rem"
            ><FaQuoteLeft />
              {" "}
              Um dos <strong>5 melhores palestrantes do brasil...</strong>
            </Text>
          </Box>
          <Box width={{ base: "100%", sm: "auto" }}>{/* <HeroForm /> */}</Box>
        </Box>
        <video
          autoPlay
          loop
          muted
          left="0"
          right="0"
          width="100%"
          src={"/Video1.mp4"}
          type="video/mp4"
        />
      </Box>
    </Fade>
  );
};

export default HeroBanner;
