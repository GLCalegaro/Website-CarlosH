import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { navigationLinks } from "../../navigationConsts";
import React from "react";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const NavigationDesktop = () => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="blur(8px) hue-rotate(20deg)"
      backdropInvert="90%"
      backdropBlur="5px"
    />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    //Display base breakpoint para versão mobile
    <Box
      color="white"
      background="rgba(250,250,250,0.15)"
      paddingY="2rem"
      display={{ base: "none", md: "block" }}
      zIndex="100"
      left="0"
      right="0"
      position="absolute"
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <Image
              position="relative"
                src={"/logo2 (2).png"}
                
                width="17.5rem" h="2.8rem"
                top="0"
              />
            </Box>
          </Link>
          <Flex gap="12" alignItems="center">
          {navigationLinks.map((item) => (
            <NavigationLink key={item.title} {...item} />
          ))}
          <Button
            padding="1.5rem"
            colorScheme="white"
            fontSize="1rem"
            fontWeight="md"
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            Contato
          </Button>
          </Flex>
          <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
            {overlay}
            <ModalContent>
              <ModalHeader color="yellow.300" fontWeight="medium">
                Entre em contato pelos canais:
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text
                  display="flex"
                  alignItems="center"
                  gap="2"
                  fontSize="1.2rem"
                  marginTop="1rem"
                  color="#000080"
                >
                  <GrMail />
                  contato@carloshilsdorf.com.br
                </Text>
                <Text
                  display="flex"
                  alignItems="center"
                  gap="2"
                  fontSize="1.2rem"
                  marginTop="1rem"
                  color="#000066"
                >
                  <FaPhoneAlt />
                  +55 16 34167842
                </Text>
                <ModalHeader
                  color="yellow.300"
                  fontWeight="medium"
                  marginRight="0"
                >
                  Localização:
                </ModalHeader>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <ImLocation2 fontSize="1.5rem" color="#0000a0" />{" "}
                  <Text fontSize="1.2rem" marginTop="1rem" color="#0000a0">
                    Rua Sete de Setembro, 1353, Centro CEP: 13560-180 São Carlos
                    - SP
                  </Text>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavigationDesktop;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
};
