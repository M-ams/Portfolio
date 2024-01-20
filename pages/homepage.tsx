import Link from "next/link";

import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

function Homepage() {
  return (
    <Box className=" min-h-screen flex" bg={"brand.bg"}>
      <Navbar />

      <Stack
        mt={["20vh", "20vh", "35vh", "35vh"]}
        w={"100%"}
        marginLeft={"5vh"}
      >
        <Text
          fontSize={{ base: "50px", md: "80px", lg: "80px", xl: "80px" }}
          color={"brand.text2"}
        >
          Hey, I&apos;m Mamadou Sy
        </Text>
        <Text
          fontSize={{ base: "40px", md: "40px", lg: "40px", xl: "40px" }}
          color={"brand.text2"}
        >
          Full Stack Developer, But you can call me Mams
        </Text>
        <HStack>
          <Link href={"https://github.com/Mams-sy"} target="_blank">
            <Button bg="black" color={"white"} leftIcon={<FaGithub />}>
              Github
            </Button>
          </Link>
          <Link href={"https://www.linkedin.com/in/mamadou-sy/"} target="_blank">
            <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              Linkedin
            </Button>
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
}

export default Homepage;
