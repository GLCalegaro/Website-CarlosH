import { Box, Button, Divider, Stack, Text } from "@chakra-ui/react";
import { VscNote } from "react-icons/vsc";
import { GiWhiteBook } from "react-icons/gi";
import {GrGallery} from "react-icons/gr";
import Bio from "../../../../features/common/Hooks/Bio/Bio";

const Biography = () => {
  return (
    <Box
      position="relative"
      minHeight={{ base: "93vh", sm: "101vh" }}
      backgroundImage={`url('./galeria/i9.JPG')`}
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
        <Divider marginTop="1rem" marginBottom="1rem" />
        <Text
          fontWeight="medium"
          lineHeight="shorter"
          color="whiteAlpha.700"
          paddingX="2rem"
          textAlign={{ base: "center", sm: "initial" }}
          fontSize={{ base: "1.3rem", sm: "2.3rem" }}
          marginBottom="2rem"
        >
          Reconhecido pelo mercado como um dos cinco melhores e mais
          requisitados palestrantes do Brasil.
        </Text>
        <Text
          fontWeight="light"
          lineHeight="shorter"
          color="whiteAlpha.700"
          paddingX="2rem"
          textAlign="justify"
          fontSize={{ base: "1.1rem", sm: "1.4rem" }}
          marginBottom="2rem"
        >
          Economista, Pós-Graduado em Marketing pela FGV, autor e consultor de
          empresas e profundo pesquisador do Comportamento Humano.
        </Text>
        <Text
          fontWeight="light"
          lineHeight="shorter"
          color="whiteAlpha.700"
          paddingX="2rem"
          textAlign="justify"
          fontSize={{ base: "1.1rem", sm: "1.4rem" }}
          marginBottom="2rem"
        >
          Suas palestras são sucesso frente aos públicos da América Latina,
          Estados Unidos e Europa.
        </Text>
        <Text
          fontWeight="light"
          lineHeight="shorter"
          color="whiteAlpha.700"
          paddingX="2rem"
          textAlign="justify"
          fontSize={{ base: "1.1rem", sm: "1.4rem" }}
          marginBottom="2rem"
        >
          Palestrante preferido pelas mais exigentes empresas nacionais e
          multinacionais, Hilsdorf apresenta o maior índice de resultados e de
          recontratação do mercado.
        </Text>
        <Stack paddingX="2rem" direction="row" spacing={4}>
          <Button leftIcon={<VscNote />} colorScheme="yellow" variant="solid">
            Curriculo
          </Button>
          <Button
            rightIcon={<GiWhiteBook />}
            colorScheme="blue"
            variant="outline"
          >
            Livros
          </Button>
          <Button leftIcon={<GrGallery />} colorScheme="cyan" variant="solid">
            Palestras
          </Button>
        </Stack>
        <Box display="flex" alignItems="flex-end" justifyContent="flex-end" color="white">
            <Bio />
        </Box>
      </Box>
    </Box>
  );
};

export default Biography;
