import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Avatar,
  Text,
  Icon,
  Box,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

import Link from "next/link";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const { currentLanguage, changeLanguage } = useLanguage();

  const flagImages: Record<string, string> = {
    fr: "/assets/images/flagfr.png",
    en: "/assets/images/flagen.png",
    // Ajoutez d'autres langues au besoin
  };

  return (
    <Flex>
      <Flex
        position="fixed"
        paddingRight={10}
        align="center"
        bg="rgba(17,17,17,0.1)"
        className="backdrop-filter backdrop-blur-[8px]"
        w={["100vw", "100vw", "100vw", "100vw"]}
        zIndex={1}
      >
        <Box display="flex" alignItems="center" ml={10}>
          <Image
            src="/assets/images/flagfr.png"
            alt={currentLanguage}
            boxSize="20px"
            mr={2}
            borderRadius="full"
          />
          <Switch
            colorScheme="red"
            onChange={changeLanguage}
            isChecked={currentLanguage === "en"}
            
          />
          <Image
            src="/assets/images/flagen.png"
            alt={currentLanguage}
            boxSize="20px"
            ml={2}
            borderRadius="full"
          />
        </Box>
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]} ml={"auto"}>
          <Link href="/">
            <Button
              bg="bg"
              _hover={{ bg: "brand.componentbghover" }}
              color="brand.text2"
              my={5}
              w="100%"
              size={"lg"}
              className="gg"
            >
              {currentLanguage === "fr" ? "Acceuil" : "Home"}
            </Button>
          </Link>
          <Link href="/about-me">
            <Button
              className="gg2"
              bg="bg"
              _hover={{ bg: "brand.componentbghover" }}
              color="brand.text2"
              my={5}
              w="100%"
              size={"lg"}
            >
              {currentLanguage === "fr" ? "À propos" : "About Me"}
            </Button>
          </Link>

          <Link href="/projects">
            <Button
              className="gg3"
              bg="bg"
              _hover={{ bg: "brand.componentbghover" }}
              color="brand.text2"
              my={5}
              w="100%"
              size={"lg"}
            >
              {currentLanguage === "fr" ? "Projets" : "Works"}
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              className="gg4"
              bg="bg"
              _hover={{ bg: "brand.componentbghover" }}
              color="brand.text2"
              my={5}
              w="100%"
              size={"lg"}
            >
              Contact
            </Button>
          </Link>
          <Link href="/assets/cv/cv.pdf" target="_blank">
            <Button
              className="gg4"
              bg="#045468"
              _hover={{ bg: "brand.border1" }}
              color="brand.text2"
              my={5}
              w="100%"
              size={"lg"}
              border={"2px solid"}
              borderColor={"brand.border3"}
            >
              CV
            </Button>
          </Link>
        </Flex>

        {/* Mobile */}

        <IconButton
          ml={"auto"}
          aria-label="Open Menu"
          size="lg"
          bg="rgba(17,17,17,0.1)"
          className="backdrop-filter backdrop-blur-[8px]"
          color={"brand.text2"}
          _hover={{ bg: "brand.componentbghover" }}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bg="brand.componentbg"
        zIndex={1}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex">
          <IconButton
            ml={"auto"}
            bg="brand.componentbg"
            color={"brand.text2"}
            _hover={{ bg: "brand.componentbghover" }}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
            role="button"
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link href="/" passHref>
            <Button
              _hover={{ bg: "brand.componentbghover" }}
              bg="brand.componentbg"
              color={"brand.text2"}
              aria-label="Home"
              my={5}
              w="100%"
            >
              {currentLanguage === "fr" ? "Acceuil" : "Home"}
            </Button>
          </Link>

          <Link href="/about-me" passHref>
            <Button
              _hover={{ bg: "brand.componentbghover" }}
              bg="brand.componentbg"
              color={"brand.text2"}
              aria-label="About"
              my={5}
              w="100%"
            >
              {currentLanguage === "fr" ? "À propos" : "About Me"}
            </Button>
          </Link>

          <Link href="/projects" passHref>
            <Button
              _hover={{ bg: "brand.componentbghover" }}
              bg="brand.componentbg"
              color={"brand.text2"}
              aria-label="About"
              my={5}
              w="100%"
            >
              {currentLanguage === "fr" ? "Projets" : "Works"}
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button
              _hover={{ bg: "brand.componentbghover" }}
              bg="brand.componentbg"
              color={"brand.text2"}
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
            </Button>
          </Link>
          <Link href="/assets/cv/cv.pdf" target="_blank" passHref>
            <Button
              _hover={{ bg: "brand.componentbghover" }}
              bg="#045468"
              color={"brand.text2"}
              aria-label="Contact"
              my={5}
              w="100%"
              border={"2px solid"}
              borderColor={"brand.border3"}
              
            >
              CV
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Navbar;
