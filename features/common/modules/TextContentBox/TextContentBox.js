import { Box, Divider, Text } from "@chakra-ui/react";

const TextContentBox = ({ title, children }) => {
  return (
    <Box backgroundColor="white" padding="1.5rem" marginBottom="1rem" borderTopRadius="base">
      <Text
        fontSize="1.5rem"
        fontWeight="semibold"
        color="gray.600"
        marginBottom="0.5rem"
      >
        {title}
      </Text>
      <Divider marginY="0.7rem" borderColor="#fcbf0db8"/>
      {children}
    </Box>
  );
};

export default TextContentBox;