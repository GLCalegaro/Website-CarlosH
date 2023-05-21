import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import { testimonials } from "./testimonialsConsts";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";

const Testimonials = () => {
  
  return (
    <Box
      position="relative"
      minHeight={{ base: "195vh", sm: "106vh" }}
      backgroundImage={`url('./galeria/i12.JPG')`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      objectFit="cover"
    >
      <Box
        position="absolute"
        width="100%"
        height="100%"
        opacity="0.80"
        backgroundColor="gray.900"
      />
      <Box
        maxWidth="1280px"
        margin="0 auto"
        paddingY={{ base: "2rem", sm: "4rem" }}
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        top="0"
      >
        <Text
          fontWeight="bold"
          lineHeight="shorter"
          color="whiteAlpha.700"
          fontSize={{ base: "2xl", sm: "3xl" }}
          paddingX="2rem"
          textAlign="center"
        >
          DEPOIMENTOS
        </Text>
        <Divider marginTop="1rem" marginBottom="1rem" />
        <Text
          fontWeight="light"
          lineHeight="shorter"
          color="whiteAlpha.700"
          paddingX="2rem"
          textAlign="center"
          fontSize={{ base: "1rem", sm: "1rem" }}
          marginBottom="2rem"
        >
          Conheça aqui alguns dos mais de 800 clientes já atendidos pela
          excelência do trabalho de Carlos Hilsdorf. Em cada evento de cada um
          destes clientes Hilsdorf deixou sua marca: momentos inesquecíveis
          através da apresentação do melhor conteúdo no melhor formato! Uma
          experiência única!
        </Text>
        <SimpleGrid columns={3} minChildWidth="250px" gap={{base:"0.5rem", sm:"2,5rem"}}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial}/>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Testimonials;
