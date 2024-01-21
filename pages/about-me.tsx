import { FaSymfony } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPhp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";

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

function AboutMe() {
  return (
    <Stack className=" min-h-screen flex flex-col" bg={"brand.bg"}>
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
        What about me ?
      </Heading>
      <Flex
        flexDirection={{
          base: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        mt={["2vh", "2vh", "4vh", "4vh"]}
        ml={{ base: 0, md: 0, lg: "10vh", xl: "10vh" }}
        mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
        className="cssanimation sequence fadeInBottom"
      >
        <Flex flexDirection={"column"}>
          <Text
            fontSize={{ base: "17px", md: "23px", lg: "20px", xl: "30px" }}
            color={"brand.text1"}
            mt={["2vh", "2vh", "3vh", "3vh"]}
            ml={{ base: 0, md: 0, lg: "8vh", xl: "8vh" }}
            mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
            className="cssanimation sequence fadeInBottom font-semibold"
          >
            <Text>
              Since childhood I have always had an attraction towards computers.
              After some adventures, back in 2021 where I found myself doing a
              web development school for a period of 2 years.
            </Text>
            <Text mt={["2vh", "2vh", "3vh", "3vh"]}>
              During which I was able to discover the world of work in this
              field. My main goal these days is to improve my web skills by
              integrating a company with a passionate team that will make me a
              better developer.
            </Text>
            <Text mt={["2vh", "2vh", "3vh", "3vh"]}>
              Here is some languages that I have discovered and have been able
              to practice
            </Text>
          </Text>

          <Flex flexDirection={"column"} mt={["2vh", "2vh", "3vh", "3vh"]}>
            <Grid flexDirection={"column"} gap={5}>
              <Flex
                alignItems="center"
                border={"1px solid"}
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
                    md: "20px",
                    lg: "20px",
                    xl: "25px",
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
                    base: "repeat(3, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(3, 1fr)",
                    xl: "repeat(3, 1fr)",

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
                  />
                  <Icon
                    as={SiJavascript}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                  />
                  {/* Ajoutez la troisième icône pour la section "Languages" */}
                  <Icon
                    as={SiTypescript}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                  />
                  {/* Fin des icônes */}
                </SimpleGrid>
              </Flex>
              <Flex
                alignItems="center"
                border={"1px solid"}
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
                    xl: "25px",
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
                  />
                  <Icon
                    as={FaSymfony}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                  />
                  <Icon
                    as={FaNodeJs}
                    boxSize={{ base: "15vw", md: "10vw", lg: "6vw", xl: "6vw" }}
                  />
                  {/* Fin des icônes */}
                </SimpleGrid>
              </Flex>
            </Grid>
          </Flex>
        </Flex>
        <Box m={["auto", "auto", "auto", "auto"]}>
          <Image
            src="/assets/images/boy.png"
            width={{ base: "30vw", md: "30vw", lg: "80vw", xl: "90vw" }}
            height={"auto"}
            alt="Me"
            mt={["5vh", "5vh"]}
          />
        </Box>
      </Flex>

      <p className="text-white text-[3vw] xs:text-[5vw] xs:text-center md:text-center m-20 font-bold cssanimation sequence fadeInBottom">
        Where I&apos;ve worked ?
      </p>
      <div className="xl:flex flex-col 2xl:flex lg:flex xl:ml-40 2xl:ml-40 lg:ml-40 xs:m-auto md:m-auto xs:text-center md:text-center  gg">
        <p className="text-gray-500 text-[2vw] xs:text-[5vw] md:text-[5vw] bb">
          Full Stack Web Developer at{" "}
          <Link
            href="https://www.uptodo.fr"
            target="_blank"
            className="text-gray-200 effect-shine"
          >
            UPTODO
          </Link>
        </p>
        <p className="text-gray-200 xl:text-[2vw] 2xl:text-[2vw] lg:text-[2vw] 2xl:ml-[1vw] xl:ml-[1vw] lg:ml-[1vw]">
          Sep 2022 - Nov 2023
        </p>
      </div>
      <div className="xl:flex 2xl:flex lg:flex xl:ml-60 2xl:ml-60 lg:ml-60 xs:m-auto md:m-auto gg">
        <div className="flex flex-col text-gray-500 h-auto xs:w-[80vw] md:w-[80vw]  2xl:w-[40vw] xl:w-[40vw] lg:w-[40vw] xl:text-left 2xl:text-left lg:text-left xs:text-center md:text-center">
          <div className="text-[2vw] xs:text-[5vw] mt-8">
            At uptodo I participated in the development of the{" "}
            <span className="text-gray-200">Actadat </span>
            software. The languages were{" "}
            <span className="text-gray-200">Symfony</span> and{" "}
            <span className="text-gray-200">Javascript</span>
          </div>
          <div className="text-[2vw] xs:text-[5vw] mt-4">
            My missions were to develop{" "}
            <span className="text-gray-200">new features</span> based on
            customer feedback and update them. I also participated in the
            meetings to reflect on the application evolution perspectives.
          </div>
          <div className="text-[2vw] xs:text-[5vw] mt-4">
            This very <span className="text-gray-200">enriching</span> first
            experience allowed me to develop my skills, see how{" "}
            <span className="text-gray-200">software development</span> works
            with production etc ... and prepare myself for the professional
            world.
          </div>
        </div>
      </div>
    </Stack>
  );
}

export default AboutMe;
