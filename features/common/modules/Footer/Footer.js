import { Box, Divider, Flex, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { services, about, events, privacy } from "./footerConsts";
import { BsGithub} from "react-icons/bs";
import {SiInstagram} from "react-icons/si"

const Footer = () => {
  return (
    <Box bgImage={`url('./logo/blue.jpg')`}>
      <Box
        maxWidth="1280px"
        margin="0 auto"
        paddingY="1.5rem"
        paddingX={{ base: "2rem", sm: "0" }}
      >
        <SimpleGrid
          columns="4"
          color="whiteAlpha.800"
          gap="1.7rem"
          minChildWidth="150px"
        >
          <Flex flexDirection="column">
            <FooterHeader title="Serviços" />
            {services.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Sobre" />
            {about.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Eventos" />
            {events.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Privacidade" />
            {privacy.map((item) => (
              <FooterLink key={item.name} {...item} />
            ))}
          </Flex>
        </SimpleGrid>
      </Box>
      <Divider/>
      <Box
        backgroundColor="#204569"
        display="flex"
        padding="1.5rem"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        color="#aeb7c0"
      >
        © Hilsdorf Aprimoramento Humano e Empresarial 2023 - Todos os direitos
        reservados.
        <Text
          display="flex"
          gap="3"
          marginTop="1rem"
          fontSize="xs"
          textAlign="center"
          alignItems="center"
        >
          Desenvolvido por Giovanna
          <a href="https://github.com/GLCalegaro">
            <BsGithub fontSize="1.1rem" />
          </a>
          Design de Marcelo Calegaro
          <a href="https://www.instagram.com/rigormortis.t/">
            <SiInstagram fontSize="1.1rem" />
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

const FooterLink = ({ name, link }) => {
  return (
    <Text>
      <Link href={link}>{name}</Link>
    </Text>
  );
};

const FooterHeader = ({ title }) => {
  return (
    <Text as="h4" fontWeight="bold" fontSize="xl" marginBottom="1rem">
      {title}
    </Text>
  );
};
