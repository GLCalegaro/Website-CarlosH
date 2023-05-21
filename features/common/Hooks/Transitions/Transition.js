import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      <Box
        as={motion.div}
        position="fixed"
        top="0"
        bottom="0"
        right="full"
        width="100vw"
        height="100vh"
        zIndex="30"
        background="blackAlpha.700"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%", transition: {
         duration: 1.8
          }, }}
      />
      <Box
        as={motion.div}
        position="fixed"
        top="0"
        bottom="0"
        right="full"
        width="100vw"
        height="100vh"
        zIndex="20"
        background="#204569"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%", transition: {
            delay: 0.2, duration: 1.8
          }, }}
      />
      <Box
        as={motion.div}
        position="fixed"
        top="0"
        bottom="0"
        right="full"
        width="120vw"
        height="120vh"
        zIndex="10"
        
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%", transition: {
            delay: 0.4, duration: 4.8
          }, }}
          
          backgroundRepeat="no-repeat"
          backgroundImage={`url('./logo1.png')`}
      />
    </>
  );
};

export default Transition;
