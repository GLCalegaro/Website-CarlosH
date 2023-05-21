import { Box, Divider, Fade, SimpleGrid, Text } from "@chakra-ui/react";
import StatsYoutubeEmbed from "./components/StatsYoutubeEmbed/StatsYoutubeEmbed";

const Stats = () => {
  return (
    <Fade in>
      <Box
        position="relative"
        minHeight={{ base: "118vh", sm: "100vh" }}
        backgroundImage={`url('./galeria/i13.JPG')`}
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
          <Box width={{ base: "100%", sm: "50%" }}>
            <Divider marginTop="1rem" marginBottom="1rem" />
            <Text
              fontWeight="medium"
              lineHeight="shorter"
              color="whiteAlpha.700"
              paddingX="2rem"
              textAlign={{ base: "center", sm: "initial" }}
              fontSize={{ base: "1.3rem", sm: "2rem" }}
              marginBottom="2rem"
            >
              O MELHOR CONTEÚDO NO MELHOR FORMATO. ®
            </Text>
            <SimpleGrid columns={2} minChildWidth="250px" spacing={6}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="whiteAlpha.800"
                fontWeight="bold"
                marginBottom="0.8rem"
                textAlign="center"
                borderRadius="2xl"
                bgGradient="linear-gradient(180deg, rgb(255 255 255 / 22%), rgba(255, 255, 255, 0))"
                height="7rem"
              >
                Mais de 3,5 milhões de pessoas já compartilharam a experiência.
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="whiteAlpha.800"
                fontWeight="bold"
                marginBottom="0.8rem"
                textAlign="center"
                borderRadius="2xl"
                bgGradient="linear-gradient(180deg, rgb(255 255 255 / 22%), rgba(255, 255, 255, 0))"
                height="7rem"
              >
                Mais de 3,5 milhões de pessoas já compartilharam a experiência.</Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="whiteAlpha.800"
                fontWeight="bold"
                marginBottom="0.8rem"
                textAlign="center"
                borderRadius="2xl"
                bgGradient="linear-gradient(180deg, rgb(255 255 255 / 22%), rgba(255, 255, 255, 0))"
                height="7rem"
              >
                Mais de 3,5 milhões de pessoas já compartilharam a experiência.</Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="whiteAlpha.800"
                fontWeight="bold"
                marginBottom="0.8rem"
                textAlign="center"
                borderRadius="2xl"
                bgGradient="linear-gradient(180deg, rgb(255 255 255 / 22%), rgba(255, 255, 255, 0))"
                height="7rem"
              >
                Mais de 3,5 milhões de pessoas já compartilharam a experiência.</Box>
            </SimpleGrid>
          </Box>

          <Box
            width={{ base: "100%", sm: "40%" }}
            marginTop={{ base: "2rem", sm: "0" }}
          >
            <StatsYoutubeEmbed />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
};

export default Stats;
