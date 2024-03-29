import { SiTypescript, SiJavascript, SiPhp, SiMysql } from "react-icons/si";
import { FaReact, FaNode, FaSymfony } from "react-icons/fa";

import Link from "next/link";
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
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

import { useLanguage } from "../LanguageContext";

function AboutMe() {
  const { currentLanguage, translations } = useLanguage();
  const { aboutme1, aboutme2, aboutme3 } = translations[currentLanguage];
  const { uptodo1, uptodo2, uptodo3 } = translations[currentLanguage];

  return (
    <Stack className=" min-h-screen flex flex-col optima" bg={"brand.bg"}>
      <Navbar />
      <Heading
        fontSize={{ base: "20px", md: "35px", lg: "50px", xl: "50px" }}
        color={"brand.text2"}
        as={"b"}
        mt={["10vh", "10vh", "15vh", "15vh"]}
        ml={{ base: 0, md: 0, lg: "10vh", xl: "10vh" }}
        mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
        className="cssanimation sequence fadeInBottom"
      >
        {currentLanguage === "fr" ? "À propos de moi ?" : "What about me ?"}
      </Heading>
      <Flex
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        textAlign={{ base: "center", md: "center", lg: "left", xl: "left" }}
        mt={["2vh", "2vh", "4vh", "4vh"]}
        ml={{ base: 0, md: 0, lg: "10vh", xl: "10vh" }}
        mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
        className="cssanimation sequence fadeInBottom"
        w={"90vw"}

      >
        <Flex flexDirection={"column"}>
          <Box
            fontSize={{ base: "17px", md: "23px", lg: "1.5vw", xl: "2.5vw" }}
            color={"brand.text1"}
            mt={["2vh", "2vh", "3vh", "3vh"]}
            ml={{ base: 0, md: 0, lg: "8vh", xl: "8vh" }}
            mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
            className="cssanimation sequence fadeInBottom font-semibold"
          >
            <Text dangerouslySetInnerHTML={{ __html: aboutme1 }}></Text>
            <Text
              mt={["2vh", "2vh", "3vh", "3vh"]}
              dangerouslySetInnerHTML={{ __html: aboutme2 }}
            ></Text>
            <Text
              mt={["2vh", "2vh", "3vh", "3vh"]}
              dangerouslySetInnerHTML={{ __html: aboutme3 }}
            ></Text>
          </Box>

          <Flex flexDirection={"column"} mt={["2vh", "2vh", "3vh", "3vh"]}>
            <Grid flexDirection={"column"} gap={5}>
              <Flex
                alignItems="center"
                flexDirection={{
                  base: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                }}
                textAlign="center"
              >
                <Text
                  fontSize={{
                    base: "15px",
                    md: "30px",
                    lg: "20px",
                    xl: "40px",
                  }}
                  mt={["3vh", "3vh", "5vh", "5vh"]}
                  ml={{ base: 0, md: 0, lg: "12vh", xl: "12vh" }}
                  color={"brand.text2"}
                  className="font-semibold"
                >
                  Languages :
                </Text>
                <SimpleGrid
                  templateColumns={{
                    base: "repeat(4, 1fr)",
                    md: "repeat(4, 1fr)",
                    lg: "repeat(4, 1fr)",
                    xl: "repeat(4, 1fr)",

                    // Trois colonnes pour les écrans moyens et supérieurs
                  }}
                  gap={10}
                  ml={{ base: 0, md: 0, lg: "5vh", xl: "5vh" }}
                  mt={{ base: "2vh", md: "2vh" }}
                  color={"brand.text2"}
                >
                  <Icon
                    as={SiPhp}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                    className="float2"
                  />
                  <Icon
                    as={SiJavascript}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                    className="float1"
                  />

                  <Icon
                    as={SiTypescript}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                    className="float4"
                  />
                  <Icon
                    as={SiMysql}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                    className="float3"
                  />
                </SimpleGrid>
              </Flex>
              <Flex
                alignItems="center"
                flexDirection={{
                  base: "column",
                  md: "column",
                  lg: "row",
                  xl: "row",
                }}
                textAlign="center"
              >
                <Text
                  fontSize={{
                    base: "18px",
                    md: "30px",
                    lg: "20px",
                    xl: "40px",
                  }}
                  mt={["3vh", "3vh", "5vh", "5vh"]}
                  ml={{ base: 0, md: 0, lg: "12vh", xl: "12vh" }}
                  color={"brand.text2"}
                  className="font-semibold"
                >
                  Frameworks :
                </Text>
                <SimpleGrid
                  templateColumns={{
                    base: "repeat(3, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(3, 1fr)",
                  }}
                  gap={10}
                  ml={{ base: 0, md: 0, lg: "5vh", xl: "5vh" }}
                  mt={{ base: "2vh", md: "2vh" }}
                  color={"brand.text2"}
                >
                  <Icon
                    as={FaReact}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                    className="float3"
                  />
                  <Icon
                    as={FaSymfony}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                    className="float5"
                  />
                  <Icon
                    as={FaNode}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                    className="float2"
                  />
                  {/* Fin des icônes */}
                </SimpleGrid>
              </Flex>
            </Grid>
          </Flex>
        </Flex>
        <Box m={["auto", "auto", "auto", "auto"]}>
          <Image
            src="/assets/images/avatar.png"
            width={{ base: "30vw", md: "30vw", lg: "80vw", xl: "80vw" }}
            height={"auto"}
            alt="Me"
            mt={["5vh", "5vh"]}
          />
        </Box>
      </Flex>

      <Heading
        fontSize={{ base: "20px", md: "35px", lg: "50px", xl: "50px" }}
        color={"brand.text2"}
        as={"b"}
        mt={["10vh", "10vh", "15vh", "15vh"]}
        ml={{ base: 0, md: 0, lg: "10vh", xl: "10vh" }}
        mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
        className="cssanimation sequence fadeInBottom"
      >
        {currentLanguage === "fr"
          ? "Où ai-je travaillé ?"
          : "Where I have worked ?"}
      </Heading>

      <Flex
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        textAlign={{ base: "center", md: "center", lg: "left", xl: "left" }}
        mt={["2vh", "2vh", "4vh", "4vh"]}
        ml={{ base: 0, md: 0, lg: "10vh", xl: "10vh" }}
        mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
        mb={["5vh", "5vh", "10vh", "10vh"]}
        className="cssanimation sequence fadeInBottom"
        w={"90vw"}

      >
        <Box
          fontSize={{ base: "17px", md: "23px", lg: "1.5vw", xl: "2.5vw" }}
          textAlign={{ base: "center", md: "center", lg: "left", xl: "left" }}
          color={"brand.text1"}
          mt={["2vh", "2vh", "3vh", "3vh"]}
          ml={{ base: 0, md: 0, lg: "8vh", xl: "8vh" }}
          mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
          className="cssanimation sequence fadeInBottom font-semibold"
        >
          <Flex flexDirection={"column"}>
            <Text>
              {currentLanguage === "fr"
                ? "Développeur Full-Stack chez "
                : "Full-Stack Develepor At "}

              <Link
                href={"https://www.uptodo.fr/"}
                target="_blank"
                className="text-white"
              >
                Uptodo
              </Link>
            </Text>

            <Text>Sep 2022 - Nov 2023 </Text>
          </Flex>
          <Text
            mt={["3vh", "3vh", "4vh", "4vh"]}
            dangerouslySetInnerHTML={{ __html: uptodo1 }}
          ></Text>
          <Text
            mt={["2vh", "2vh", "3vh", "3vh"]}
            dangerouslySetInnerHTML={{ __html: uptodo2 }}
          ></Text>
          <Text
            mt={["2vh", "2vh", "3vh", "3vh"]}
            dangerouslySetInnerHTML={{ __html: uptodo3 }}
          ></Text>
        </Box>
        <Box m={["auto", "auto", "auto", "auto"]}>
          <Image
            src="/assets/images/work.png"
            width={{ base: "30vw", md: "30vw", lg: "80vw", xl: "80vw" }}
            height={"auto"}
            alt="Me"
            mt={["5vh", "5vh"]}
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export default AboutMe;
