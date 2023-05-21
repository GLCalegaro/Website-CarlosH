import {
    Box,
    Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const HeroForm = () => {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const isError = input === "";

  return (
    <Box
    width="100%"
    padding="2rem"
    borderRadius="md"
    backgroundColor="white"
    color="gray.600"
    fontWeight="light"
    fontSize="sm"
    >
    <Text marginBottom="1.1rem" fontSize="md" fontWeight="bold">Receba gratuitamente material especialmente
desenvolvido para você!</Text>
    <FormControl isRequired isInvalid={isError}>
      <FormLabel>Nome</FormLabel>
      <Input type="nome" value={input} onChange={handleInputChange} placeholder="Nome"/>
      {!isError ? (
        <FormHelperText>
          Insira o seu nome.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
      )}
      <FormLabel>Email</FormLabel>
      <Input type="email" value={input} onChange={handleInputChange} placeholder="Email"/>
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
      )}
      <FormLabel>Telefone</FormLabel>
      <Input type="text" value={input} onChange={handleInputChange} placeholder="(00) 00000-0000"/>
      {!isError ? (
        <FormHelperText>
          Insira o seu número de telefone.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Campo obrigatório.</FormErrorMessage>
      )}
      <Button
            type="submit"
            colorScheme="facebook"
            width="100%"
            fontSize="lg"
            padding="1.8rem"
            marginTop='2rem'
          >
            Enviar
          </Button>
    </FormControl>
    </Box>
  );
};

export default HeroForm;
