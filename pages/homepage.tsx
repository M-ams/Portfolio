import Link from "next/link";

import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { Box, Button, Container, Flex, HStack, Stack, Text } from "@chakra-ui/react";

function Homepage() {
  return (
    <Box className=" min-h-screen flex" bg={"brand.bg"}>
      <Navbar />

      <Stack mt={["20vh", "20vh", "35vh", "35vh"]} w={'100%'} marginLeft={'5vh'}>
        <Text fontSize="7xl" color={'brand.text2'}>Hey, I&apos;m Mamadou Sy</Text>
        <Text fontSize="5xl" color={'brand.text2'}>Full Stack Developer, But you can call me Mams</Text>
        <HStack>
  <Button bg="black" color={'white'} leftIcon={<FaGithub />}>
    Github
  </Button>
  <Button colorScheme='linkedin' leftIcon={<FaLinkedin />}>
    Linkedin
  </Button>
</HStack>
      </Stack>
    </Box>
  );
}

export default Homepage;
