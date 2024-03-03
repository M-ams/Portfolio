import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Grid,
  Heading,
  Icon,
  SimpleGrid,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

import { useLanguage } from '../LanguageContext';


function Contact() {

  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <Flex className=" min-h-screen flex flex-col optima" bg={"brand.bg"}>
      <Navbar />
      <Flex
        className="cssanimation sequence fadeInBottom"
        flexDirection={"column"}
        textAlign={"center"}
        m={"auto"}
      >
        <Text
          fontSize={{ base: "20px", md: "35px", lg: "5w", xl: "8vw" }}
          color={"brand.text2"}
          as={"b"}
          mt={["10vh", "10vh", "15vh", "15vh"]}
          className="cssanimation sequence fadeInBottom"
          m={"auto"}
        >
         {currentLanguage === 'fr' ? 'Salut.' : 'Hello.'}
          
        </Text>
        <Text
          fontSize={{ base: "20px", md: "35px", lg: "2vw", xl: "3vw" }}
          color={"brand.text2"}
          as={"b"}
          mt={"10vh"}
          className="cssanimation sequence fadeInBottom"
          textAlign={"center"}
          
        >
         {currentLanguage === 'fr' ? 'Intéressé pour travailler ensemble ? Contactez-moi !' : 'Interested in working together? Get in touch!'}

        </Text>

        <Flex textAlign={"center"} m={"auto"}
        flexDirection={["column", "column", "row", "row"]}
        

        >
          <Text
            fontSize={{ base: "20px", md: "35px", lg: "2vw", xl: "3vw" }}
            color={"brand.text2"}
            as={"b"}
            className="cssanimation sequence fadeInBottom"
            textAlign={"center"}
          >
         {currentLanguage === 'fr' ? 'Envoyez un mail à:' : 'Email me at:'}
          
          </Text>
          <Link href={"mailto:mamadou.sy143@gmail.com"} target="_blank">
            <Text
              fontSize={{ base: "20px", md: "35px", lg: "2vw", xl: "3vw" }}
              color={"brand.text2"}
              as={"b"}
              mt={"10vh"}
              className="cssanimation sequence fadeInBottom"
              textDecoration={"underline"}
              
            >
              mamadou.sy143@gmail.com
            </Text>
          </Link>
        </Flex>

        <Text
          fontSize={{ base: "20px", md: "35px", lg: "2vw", xl: "3vw" }}
          color={"brand.text2"}
          as={"b"}
          mt={"10vh"}
          className="cssanimation sequence fadeInBottom"
          textAlign={"center"}
        >
         {currentLanguage === 'fr' ? 'Ou trouvez moi sur:' : 'Or find me on:'}

          
        </Text>
        <HStack className="cssanimation sequence fadeInBottom" m={"auto"}>
          <Link href={"https://github.com/M-ams"} target="_blank">
            <Button
              bg="black"
              color={"white"}
              leftIcon={<FaGithub />}
              _hover={{ bg: "brand.componentbghover" }}
            >
              Github
            </Button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mamadou-sy/"}
            target="_blank"
          >
            <Button colorScheme="linkedin" leftIcon={<FaLinkedin />}>
              Linkedin
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Contact;
