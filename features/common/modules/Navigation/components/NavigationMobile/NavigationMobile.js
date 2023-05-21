import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationMobile = () => {
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
      color="blue.600"
      background="#204569"
      padding="2rem"
      display={{ base: "block", md: "none" }}
    >
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <Image
                src={"/estrela.png"}
                height="50px"
                width="30px"
                objectFit="cover"

              />
              <Text fontSize="1.5rem" fontWeight="extrabold" bgGradient='linear(to-l, blue.400, yellow.300)' bgClip='text' fontFamily="heading">Carlos Hilsdorf</Text>
            </Box>
          </Link>
          <Menu>
            <MenuButton as={IconButton} aria-label="Options" icon={<GiHamburgerMenu/>} variant="outline" border="1px solid #ffc10745" color="#ffff"/>
            <MenuList>
              {navigationLinks.map((item) => (
                <NavigationLink key={item.title} {...item} />
              ))}
            </MenuList>
          </Menu>
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
  );
};

export default NavigationMobile;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem" color="blue.700">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};
