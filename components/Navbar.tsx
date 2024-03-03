"use client";

import { useState, useEffect } from "react";
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import { useRouter } from "next/router";

import Link from "next/link";
import React from "react";
import { redirect } from "next/dist/server/api-utils";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");
  const { currentLanguage, changeLanguage } = useLanguage();
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(false);

  const flagImages: Record<string, string> = {
    fr: "/assets/images/flagfr.png",
    en: "/assets/images/flagen.png",
    // Ajoutez d'autres langues au besoin
  };

  useEffect(() => {
    // Check if window is defined to ensure it's running on the client side
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken || "");
    }
  }, []);

  const removeToken = () => {
    setToken("");
    localStorage.removeItem("token");
    setRedirect(true);
  };
  const router = useRouter();

  if (redirect) {
    router.push("/login");
  }

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
        <Flex alignItems={"center"}>
          <Menu
          >
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                marginLeft="2vw"
                size={"md"}
                src="/assets/images/avatar.png"
                className="gg"
              />
            </MenuButton>
            {token ? (
              <MenuList
                bg="brand.componentbg"
                color="brand.text2"
                border="2px solid"
                borderColor="brand.border3"
              >
                <MenuItem
                  bg="brand.componentbg"
                  _hover={{ bg: "brand.componentbghover" }}
                >
                  <Link href="/admin/dashboard">Dashboard</Link>
                </MenuItem>
                <MenuItem
                  bg="brand.componentbg"
                  _hover={{ bg: "brand.componentbghover" }}
                >
                  <Link href="/admin/create">Create a new project</Link>
                </MenuItem>
                <MenuItem
                  bg="brand.componentbg"
                  _hover={{ bg: "brand.componentbghover" }}
                  onClick={removeToken}
                >
                  Logout
                </MenuItem>
              </MenuList>
            ) : (
              <MenuList>
                <Link href="/login">
                  <MenuItem>Login</MenuItem>
                </Link>
              </MenuList>
            )}
          </Menu>
        </Flex>
        <Box display="flex" alignItems="center" ml={10} 
        className="gg2"
        >
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
