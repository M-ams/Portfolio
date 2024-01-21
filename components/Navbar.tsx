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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Link from "next/link";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex
        position="fixed"
        paddingRight={10}
        align="center"
        bg="brand.componentbg"
        w={["100vw", "100vw", "100vw", "100vw"]}
        zIndex={1}
      >
        {/* Desktop */}
        <Flex align="center" justify="center" ml={"3vh"}>
          <Avatar size={{base:"sm", md:"md", lg:"lg", xl:"xl"  }} src={"assets/images/avatar.png"} mr={2} />
          <Text className="font-semibold" color={"brand.text2"}
            fontSize={{ base: "1vw", md: "1vw", lg: "1vw", xl: "2vw" }}
          >
            Mams
          </Text>
        </Flex>

        {/* <Flex
          display={["none", "none", "flex", "flex"]}
          ml={"auto"}
          mr={"3vh"}
          align="center"
          justify="center"
          m={"auto"}
        >
          <Link href={"https://github.com/Mams-sy"} target="_blank"
          >
            <Icon as={FaGithub} w={10} h={10} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mamadou-sy/"}
            target="_blank"
          >
            <Icon as={FaLinkedin} w={10} h={10} />
          </Link>
        </Flex>  */}
        
        <Flex display={["none", "none", "flex", "flex"]}
          ml={"auto"}
        >
          <Link href="/">
            <Button
              className="gg"
              bg="bg"
              _hover={{ bg: "brand.componentbghover" }}
              color="brand.text2"
              as="a"
              my={5}
              w="100%"
              size={"lg"}
            >
              Home
            </Button>
          </Link>
          <Link href="/about-me">
            <Button
              className="gg2"
              as="a"
              bg="bg"
              _hover={{ bg: "brand.componentbghover" }}
              color="brand.text2"
              my={5}
              w="100%"
              size={"lg"}
            >
              About me
            </Button>
          </Link>

          <Link href="/projects">
            <Button
              className="gg3"
              as="a"
              bg="bg"
              _hover={{ bg: "brand.componentbghover" }}
              color="brand.text2"
              my={5}
              w="100%"
              size={"lg"}
            >
              Projects
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              className="gg4"
              as="a"
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
        </Flex>

        {/* Mobile */}

        <IconButton
          ml={"auto"}
          aria-label="Open Menu"
          size="lg"
          bg="brand.componentbg"
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
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link href="/" passHref>
            <Button
              as="a"
              _hover={{ bg: "brand.componentbghover" }}
              bg="brand.componentbg"
              color={"brand.text2"}
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </Link>

          <Link href="/about-me" passHref>
            <Button
              as="a"
              _hover={{ bg: "brand.componentbghover" }}
              bg="brand.componentbg"
              color={"brand.text2"}
              aria-label="About"
              my={5}
              w="100%"
            >
              About Me
            </Button>
          </Link>

          <Link href="/projects" passHref>
            <Button
              as="a"
              _hover={{ bg: "brand.componentbghover" }}
              bg="brand.componentbg"
              color={"brand.text2"}
              aria-label="About"
              my={5}
              w="100%"
            >
              Projects
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button
              as="a"
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
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Navbar;
