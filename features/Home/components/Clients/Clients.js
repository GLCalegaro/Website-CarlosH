import { Box, Divider, Text } from "@chakra-ui/react";
import ClientsSlider from "./components/ClientsSlider/ClientsSlider";

const Clients = ({conteudo}) => {
  return (
    // <Box
    // position="relative"
    //     minHeight={{ base: "110vh", sm: "60vh" }}
    //   backgroundImage={`url('./Imagens/logo/bkg cartoon.jpg')`}
    //   backgroundPosition="center"
    //   backgroundSize="cover"
    //   backgroundAttachment="fixed"
    // ></Box>
    <Box backgroundColor="#ded9cea6" >
      <Divider />
      <Box
        maxWidth="1280px"
        margin="0 auto"
        color="#395690cc"
        h={{base:"22.5rem", sm:"28rem"}}
      >
        <Text
          fontSize={{ base: "4xl", sm: "5xl" }}
          paddingY="1.5rem"
          fontWeight="bold"
          marginBottom={{base:"0", sm:"1rem"}}
          paddingX="2rem"
          textAlign="justify"
        >
          ALGUNS CLIENTES:
        </Text>
        <ClientsSlider conteudo={conteudo}/>
      </Box>
    </Box>
  );
};

export default Clients;
