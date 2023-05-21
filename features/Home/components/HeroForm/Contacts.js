import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  GridItem,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import HeroForm from "../../../../features/common/modules/Forms/HeroForm";
import TextContentBox from "../../../../features/common/modules/TextContentBox/TextContentBox";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Contacts = () => {
  return (
    <Box backgroundColor="gray.800" paddingY="3rem">
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap="5"
        maxWidth="1280px"
        minHeight={{ base: "93vh", sm: "93vh" }}
        margin="0 auto"
      >
        <GridItem colSpan={{ base: 6, sm: 4 }}>
          <TextContentBox
            title="Receba gratuitamente material especialmente
desenvolvido para você!"
          >
            <HeroForm />
          </TextContentBox>
        </GridItem>
        <GridItem colSpan={{ base: 6, sm: 2 }}>
          <TextContentBox title="Contatos:">
            <Text
              display="flex"
              alignItems="center"
              gap="2"
              fontSize="1.2rem"
              marginTop="1rem"
              fontWeight="light"
              color="gray.600"
              marginBottom="1rem"
              textAlign="center"
            >
              <GrMail />
              contato@carloshilsdorf.com.br <br />
            </Text>
            <Divider />
            <Text
              display="flex"
              alignItems="center"
              gap="2"
              fontSize="1.2rem"
              marginTop="1rem"
              fontWeight="light"
              color="gray.600"
              marginBottom="1rem"
              textAlign="center"
            >
              <FaPhoneAlt />
              +55 16 34167842
            </Text>
            <Divider />
            <Text
              display="flex"
              alignItems="center"
              gap="2"
              as="span"
              fontSize="1.1rem"
              marginTop="1rem"
              fontWeight="light"
              color="gray.600"
              marginBottom="1rem"
              textAlign="justify"
            >
              <ImLocation2 fontSize="2.2rem" />
              Rua Sete de Setembro, 1353, Centro CEP: 13560-180 São Carlos - SP
            </Text>
          </TextContentBox>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contacts;
