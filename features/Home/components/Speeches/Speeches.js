import { Box, Button, Text, filter } from "@chakra-ui/react";
import SpeechesSlider from "./components/SpeechesSlider/SpeechesSlider";
import { motion } from "framer-motion";

const Speeches = ({ speeches }) => {
  const outerBoxStyles = {
    boxSize: "100%",
    p: "10",
  };
  const innerBoxStyles = {
    boxSize: "full",
    color: "white",
    textShadow: "0 0 20px black",
  };
  return (
    <Box
      position="relative"
      minHeight={{ base: "110vh", sm: "100vh" }}
      backgroundImage={`url('./logo/spotlight.jpg')`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundAttachment="fixed"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        opacity="0.80"
        backgroundColor="gray.900"
      />
      <Box
        alignItems="center"
        maxWidth="1280px"
        position="absolute"
        color="white"
        fontWeight="light"
        left="0"
        right="0"
        bottom="0"
        top="0"
        margin="0 auto"
        padding="1rem"
      >
        <Text
        as={motion.p}
        initial={{
          opacity:0,
          y:50
        }}
        animate={{
          opacity:1,
          y:0,
          transition:{
            delay:0.5
          }
        }}
        
          fontSize={{ base: "4xl", sm: "5xl" }}
          lineHeight="shorter"
          fontWeight="bold"
          marginBottom="1rem"
          paddingX="1rem"
          textAlign="justify"
          marginTop="1rem"
          color="whiteAlpha.800"
        >
          PALESTRAS
        </Text>
        <Text
          fontSize="1xl"
          lineHeight="shorter"
          fontWeight="light"
          marginBottom="1rem"
          paddingX="1rem"
          alignItems="center"
          textAlign="justify"
          color="whiteAlpha.700"
        >
          Palestras não podem ser tratadas como um acontecimento a parte e
          desconectado do contexto organizacional. Elas precisam ser tratadas
          dentro de critérios muito específicos que considerem o histórico da
          organização, sua visão, missão, valores e posicionamento.
        </Text>
        <Text
          fontSize="1xl"
          lineHeight="shorter"
          fontWeight="light"
          paddingX="1rem"
          alignItems="center"
          textAlign="justify"
          color="whiteAlpha.700"
          marginBottom="1.5rem"
        >
          O reconhecimento contínuo que recebemos do mercado reforça nossa
          responsabilidade em oferecer sempre o melhor conteúdo associado ao
          melhor formato de apresentação.
        </Text>
        <SpeechesSlider />
        <Text
          fontSize="1xl"
          lineHeight="shorter"
          fontWeight="light"
          marginBottom="3rem"
          alignItems="center"
          textAlign="center"
          color="whiteAlpha.700"
          marginTop="2rem"
        >
          Surpreenda-se com a experiência de uma palestra criada especialmente
          para o seu evento!
        </Text>
        {/* <Box
            as="button"
            height="3rem"
            lineHeight="1.5"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="1px"
            px="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="8px"
            fontSize={{ base: "1md", sm: "2md" }}
            fontWeight="semibold"
            bg="rgba(250,250,250,0.15)"
            borderColor="#ccd0d5"
            color="white"
            _hover={{ bg: "rgb(252, 191, 13)", color: "black" }}
            _active={{
              bg: "rgba(250,250,250,0.15)",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
          >
            Consulte-nos sobre soluções específicas para o seu público e evento
          </Box> */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          marginBottom="1rem"
          marginRight="auto"
          marginLeft="auto"
          padding="1rem"
          fontSize={{ base: "1md", sm: "2md" }}
          height="3rem"
          lineHeight="1.5"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
        >
          <Button
          as={motion.button}
      bgGradient="linear(to-l, #249cd3, #094c6b)"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition='0.5s linear'
            colorScheme="blackAlpha"
            _hover={{ bg: "rgb(252, 191, 13)", color: "black" }}
            _active={{
              bg: "rgba(250,250,250,0.15)",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            border="2px solid white"
          >
            Consulte-nos para mais informações
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Speeches;
