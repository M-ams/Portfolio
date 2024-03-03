import Link from "next/link";

import {
  Badge,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

import axios from "axios";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

function Projects() {
  const { currentLanguage, translations } = useLanguage();
  const [project, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const generateRandomLightColor = () => {
    const randomColor = () => Math.floor(Math.random() * 200) + 55; // Valeurs entre 55 et 255 incluses

    const r = randomColor();
    const g = randomColor();
    const b = randomColor();

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:8000/api/works");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Simulez un délai de chargement (vous devrez utiliser votre logique de chargement réelle ici)
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Nettoie le timeout lors du démontage du composant
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <Box
      className=" min-h-screen flex flex-col optima"
      bg={"brand.bg"}
      paddingBottom={"30px"}
    >
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
        {currentLanguage === "fr" ? "Mes projets" : "Some of my Works"}
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 1, lg: 3 }}
        spacingX="4vw"
        spacingY="4vh"
        mt="10"
        mx="auto"
        className="cssanimation sequence fadeInBottom"
        w={{ base: "90vw", md: "90vw", lg: "80vw", xl: "80vw" }}
        justifyItems={"center"}
      >
        {project.map(
          (
            project: {
              image: string;
              title: string;
              description: string;
              description_en: string;
              link: string;
              stacks: { name: string }[];
            },
            index: number
          ) => (
            <Card
              maxW="sm"
              key={index}
              h={"auto"}
              bg={"brand.componentbg"}
              w={"100%"}
            >
              <CardBody>
                {isLoading ? (
                  <Spinner size="xl" color="brand.text2" />
                ) : (
                  <>
                    <Image
                      src={`http://localhost:8000/storage/images/${project.image}`}
                      alt={project.title}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Link
                        href={`${project.link}`}
                        target="_blank"
                        className="linkContainer"
                      >
                        <Heading
                          size={["md", "md", "xl", "xl"]}
                          color={"brand.text2"}
                        >
                          {project.title}
                          <span className="ml-2 arrow">➔</span>
                        </Heading>
                      </Link>
                      <Text
                        color={"brand.text1"}
                        whiteSpace="pre-line"
                        fontSize={["sm", "md", "xl", "xl"]}
                      >
                        {currentLanguage === "fr"
                          ? project.description
                          : project.description_en}
                      </Text>
                    </Stack>
                    <Stack mt="6" spacing="3" direction="row" flexWrap="wrap">
                      {project.stacks.map((stack, index) => (
                        <Badge
                          key={index}
                          color={generateRandomLightColor()}
                          border={"2px solid"}
                          borderColor={"brand.border3"}
                          fontSize="sm"
                          rounded={10}
                          w={"auto"}
                          bg={"brand.componentbgonclck"}
                          paddingY={"1"}
                          paddingX={"2"}
                        >
                          {stack.name}
                        </Badge>
                      ))}{" "}
                    </Stack>
                  </>
                )}
              </CardBody>
            </Card>
          )
        )}
      </SimpleGrid>
    </Box>
  );
}

export default Projects;
