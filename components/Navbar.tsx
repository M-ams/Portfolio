import { useState } from "react";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  return (
    <Flex>
      <Flex
        position="fixed"
        paddingTop={4}
        paddingRight={10}
        align="center"
        bg="brand.bg"
        w={["100vw", "100vw", "100vw", "100vw"]}
      >
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]} ml={"auto"}>
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
          bg={"brand.bg"}
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
        bgColor="brand.bg"
        zIndex={20}
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
            bg={"brand.bg"}
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
              bg={"brand.bg"}
              color={"brand.text2"}
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button
              as="a"
              _hover={{ bg: "brand.componentbghover" }}
              bg={"brand.bg"}
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
              bg={"brand.bg"}
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
              bg={"brand.bg"}
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
