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
        top="2rem"
        right="4rem"
        align="center"
        bg="brand.bg"
      >
        {/* Desktop */}
        <Flex display={["none", "none", "flex", "flex"]}>
          <Link href="/">
            <Button
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
          aria-label="Open Menu"
          size="lg"
          mr={2}
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
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <Link href="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link href="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              About
            </Button>
          </Link>

          <Link href="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Contact
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
export default Navbar;
