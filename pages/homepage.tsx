import Link from "next/link";

import { useLanguage } from '../LanguageContext';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import {
  Box,
  Button,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

function Homepage() {

  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <Box className=" min-h-screen flex optima" bg={"brand.bg"}>
      <Navbar />
      <Stack 
      className="cssanimation sequence fadeInBottom"
        mt={["30vh", "30vh", "35vh", "35vh"]}
        w={"100%"}
        marginLeft={{base: "2vh", md:"2vh", lg:"5vh", xl:"5vh"}}
      >
        <Text
          fontSize={{ base: "40px", md: "80px", lg: "80px", xl: "80px" }}
          color={"brand.text2"}
        >
         {currentLanguage === 'fr' ? 'Salut, je suis Mamadou SY' : 'Hey, I am Mamadou SY'}
        </Text>
        <Text
          fontSize={{ base: "30px", md: "40px", lg: "40px", xl: "40px" }}
          color={"brand.text2"}
        >
         {currentLanguage === 'fr' ? "Développeur Full Stack, mais vous pouvez m'\appeler Mams" : 'Full Stack Developer, But you can call me Mams'}

          
        </Text>
        <HStack>
          <Link href={"https://github.com/M-ams"} target="_blank">
            <Button bg="black" color={"white"} leftIcon={<FaGithub />}
          _hover={{ bg: "brand.componentbghover" }}
             >
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
