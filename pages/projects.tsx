import Link from "next/link";
import {
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiPrisma,
  SiExpress,
} from "react-icons/si";
import { FaSymfony } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import {
  Box,
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

function Projects() {
  const { currentLanguage, translations } = useLanguage();
  const { projectDescription1, projectPurpose1 } = translations[currentLanguage];
  const { actadatDescription, internshipDescription } = translations[currentLanguage];

  return (
    <Box className=" min-h-screen flex flex-col optima" bg={"brand.bg"}>
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
         {currentLanguage === 'fr' ? 'Mes projets' : 'Some of my Works'}
        
      </Heading>

      <Flex flexDirection={"column"} textAlign={"center"} mt={"10vh"}>
        <Link href={"https://dc.gg"} target="_blank">
          <Text
            color={"brand.text2"}
            as={"b"}
            className="cssanimation sequence fadeInBottom"
            fontSize={{ base: "20px", md: "35px", lg: "50px", xl: "50px" }}
            mt={["10vh", "10vh", "15vh", "15vh"]}
            margin={"auto"}
            w={{ base: "30vw", md: "30vw", lg: "20vw", xl: "20vw" }}
            _hover={{ color: "#6f4cf9" }}
          >
            DC.GG
          </Text>
        </Link>

        <Flex
          flexDirection={{
            base: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          textAlign={{ base: "center", md: "center", lg: "left", xl: "left" }}
          mt={["2vh", "2vh", "4vh", "4vh"]}
          m={"auto"}
          mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
          className="cssanimation sequence fadeInBottom"
          w={"90vw"}
        >
          <Flex flexDirection={"column"}>
            <Box
              fontSize={{ base: "17px", md: "23px", lg: "1.2vw", xl: "2vw" }}
              color={"brand.text1"}
              mt={["2vh", "2vh", "3vh", "3vh"]}
              mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
              className="cssanimation sequence fadeInBottom font-semibold"
            >
              <Text
                dangerouslySetInnerHTML={{ __html: projectDescription1 }}
                mt={["2vh", "2vh", "3vh", "3vh"]}
              />
              <Text
                dangerouslySetInnerHTML={{ __html: projectPurpose1 }}
                mt={["2vh", "2vh", "3vh", "3vh"]}
              />
            </Box>

            <Flex flexDirection={"column"} mt={["2vh", "2vh", "3vh", "3vh"]}>
              <Grid flexDirection={"column"} gap={5}>
                <Box
                  alignItems="center"
                  flexDirection={{
                    base: "column",
                    md: "column",
                    lg: "row",
                    xl: "row",
                  }}
                  textAlign="center"
                  m={"auto"}
                >
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
                      as={SiTypescript}
                      boxSize={{
                        base: "9vw",
                        md: "10vw",
                        lg: "6vw",
                        xl: "6vw",
                      }}
                      className="float2"
                    />
                    <Icon
                      as={SiExpress}
                      boxSize={{
                        base: "9vw",
                        md: "10vw",
                        lg: "6vw",
                        xl: "6vw",
                      }}
                      className="float1"
                    />

                    <Icon
                      as={SiPrisma}
                      boxSize={{
                        base: "9vw",
                        md: "10vw",
                        lg: "6vw",
                        xl: "6vw",
                      }}
                      className="float4"
                    />
                    <Icon
                      as={TbBrandNextjs}
                      boxSize={{
                        base: "8vw",
                        md: "10vw",
                        lg: "6vw",
                        xl: "6vw",
                      }}
                      className="float3"
                    />
                  </SimpleGrid>
                </Box>
              </Grid>
            </Flex>
          </Flex>
          <Box m={["auto", "auto", "auto", "auto"]}>
            <Image
              src="/assets/images/dcgg.png"
              width={{ base: "50vw", md: "60vw", lg: "80vw", xl: "100vw" }}
              height={"auto"}
              alt="Me"
              mt={["5vh", "5vh"]}
            />
          </Box>
        </Flex>
      </Flex>

      <Flex
        flexDirection={"column"}
        textAlign={"center"}
        mt={"10vh"}
        mb={"5vh"}
      >
        <Link href={"https://www.actadat.fr"} target="_blank">
          <Text
            color={"brand.text2"}
            as={"b"}
            className="cssanimation sequence fadeInBottom"
            fontSize={{ base: "20px", md: "35px", lg: "50px", xl: "50px" }}
            mt={["10vh", "10vh", "15vh", "15vh"]}
            margin={"auto"}
            w={{ base: "30vw", md: "30vw", lg: "20vw", xl: "20vw" }}
            _hover={{ color: "#02b0de" }}
          >
            ACTADAT
          </Text>
        </Link>
        <Flex
          flexDirection={{
            base: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          textAlign={{ base: "center", md: "center", lg: "left", xl: "left" }}
          mt={["2vh", "2vh", "4vh", "4vh"]}
          className="cssanimation sequence fadeInBottom"
          m={"auto"}
          w={"90vw"}
        >
          <Flex flexDirection={"column"}>
            <Box
              fontSize={{ base: "17px", md: "23px", lg: "1.2vw", xl: "2vw" }}
              color={"brand.text1"}
              mt={["2vh", "2vh", "3vh", "3vh"]}
              className="cssanimation sequence fadeInBottom font-semibold"
            >
              <Text dangerouslySetInnerHTML={{ __html: actadatDescription }} />
      <Text mt={["2vh", "2vh", "3vh", "3vh"]} dangerouslySetInnerHTML={{ __html: internshipDescription }} />
    
            </Box>

            <Flex flexDirection={"column"} mt={["2vh", "2vh", "3vh", "3vh"]}>
              <Grid flexDirection={"column"} gap={5}>
                <Box
                  alignItems="center"
                  flexDirection={{
                    base: "column",
                    md: "column",
                    lg: "row",
                    xl: "row",
                  }}
                  textAlign="center"
                  m={"auto"}
                >
                  <SimpleGrid
                    templateColumns={{
                      base: "repeat(4, 1fr)",
                      md: "repeat(4, 1fr)",
                      lg: "repeat(4, 1fr)",
                      xl: "repeat(4, 1fr)",
                    }}
                    gap={10}
                    ml={{ base: 0, md: 0, lg: "5vh", xl: "5vh" }}
                    mt={{ base: "2vh", md: "2vh" }}
                    color={"brand.text2"}
                  >
                    <Icon
                      as={SiPhp}
                      boxSize={{
                        base: "9vw",
                        md: "10vw",
                        lg: "6vw",
                        xl: "6vw",
                      }}
                      className="float3"
                    />
                    <Icon
                      as={FaSymfony}
                      boxSize={{
                        base: "9vw",
                        md: "10vw",
                        lg: "6vw",
                        xl: "6vw",
                      }}
                      className="float1"
                    />

                    <Icon
                      as={SiJavascript}
                      boxSize={{
                        base: "9vw",
                        md: "10vw",
                        lg: "6vw",
                        xl: "6vw",
                      }}
                      className="float2"
                    />
                    <Icon
                      as={SiMysql}
                      boxSize={{
                        base: "8vw",
                        md: "10vw",
                        lg: "6vw",
                        xl: "6vw",
                      }}
                      className="float5"
                    />
                  </SimpleGrid>
                </Box>
              </Grid>
            </Flex>
          </Flex>
          <Box m={["auto", "auto", "auto", "auto"]}>
            <Image
              src="/assets/images/actadat.png"
              width={{ base: "50vw", md: "60vw", lg: "80vw", xl: "100vw" }}
              height={"auto"}
              alt="Me"
              mt={["5vh", "5vh"]}
            />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Projects;
