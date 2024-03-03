import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";

function Edit() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [image, setImage] = useState<any>();
  const [link, setLink] = useState("");
  const [selectedStacks, setSelectedStacks] = React.useState<any[]>([]);
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const toast = useToast();

  useEffect(() => {
    // Check if window is defined to ensure it's running on the client side
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken || "");

      // Redirect to login if no token is present
      if (!storedToken) {
        setRedirect(true);
      }
    }
  }, []);

  useEffect(() => {
    if (id) {
      // Fetch the project details based on the id
      const fetchProjectDetails = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8000/api/works/${id}/edit`
          );
          const project = response.data;
          setTitle(project.title);
          setDescription(project.description);
          setDescriptionEn(project.description_en);
          setLink(project.link);
          setImage(project.image);
          // Set selected stacks based on the project's stacks
          setSelectedStacks(
            project.stacks.map((stack: { name: string }) => stack.name)
          );
        } catch (error) {
          console.error("Error fetching project details:", error);
        }
      };

      fetchProjectDetails();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("description_en", descriptionEn);
    formData.append("link", link);
   

    // Append selected stacks to the form data
    selectedStacks.forEach((stack) => {
      formData.append("stacks[]", stack);
    });

    if (image instanceof File) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/api/works/${id}?_method=PUT`,
        
        formData
        ,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token}`,
          },
        }
      );

      console.log(response.data);
      toast({
        title: "Projet modifié avec succès",
        status: "success",
        duration: 7000,
        isClosable: true,
      });

      // Redirect to the project details page or any other page
      router.push("/admin/dashboard");
      
    } catch (error) {
      console.error("Error updating project:", error);
      toast({
        title: "Erreur lors de la modification du projet",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    }
  };

  const handleStackChange = (values: any[]) => {
    setSelectedStacks(values);
  };

  const hardcodedStacks = [
    "React",
    "Symfony",
    "PHP",
    "Javascript",
    "Typescript",
    "NodeJS",
    "NextJs",
    "MySQL",
  ];
  // Redirect to login if no token is present
  useEffect(() => {
    if (redirect) {
      router.push("/login"); // Replace with the actual path to your login page
    }
  }, [redirect, router]);

  if (redirect) {
    // You may also choose to render something or nothing while redirecting
    return null;
  }

  return (
    <Box className=" min-h-screen flex flex-col optima" bg={"brand.bg"}>
      <Navbar />
      <Heading
        fontSize={{ base: "20px", md: "35px", lg: "50px", xl: "50px" }}
        color={"brand.text2"}
        as={"b"}
        mt={["10vh", "10vh", "15vh", "15vh"]}
        ml={{ base: 0, md: 0, lg: "10vh", xl: "(vh" }}
        mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
        className="cssanimation sequence fadeInBottom"
      >
        Modifier le projet {title}
      </Heading>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Flex
          m="auto"
          mt="5vh"
          mb="5vh"
          alignItems="center"
          border={"2px solid"}
          borderColor={"brand.border3"}
          borderRadius={8}
          justifyContent="center"
          w="50vw"
          bg={"brand.componentbg"}
        >
          <Flex flexDirection="column" p={12} borderRadius={8} boxShadow="lg"
          className="cssanimation sequence fadeInBottom"
          >
            <FormLabel color={"brand.text2"}>Title</FormLabel>
            <Input
              placeholder="Title"
              type="text"
              mb={6}
              color={"brand.text2"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <FormLabel color={"brand.text2"}>Description</FormLabel>
            <Textarea
              placeholder="Description"
              mb={6}
              color={"brand.text2"}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormLabel color={"brand.text2"}>Description English</FormLabel>
            <Textarea
              placeholder="Description English"
              mb={6}
              color={"brand.text2"}
              value={descriptionEn}
              onChange={(e) => setDescriptionEn(e.target.value)}
            />
            <FormLabel color={"brand.text2"}>Image</FormLabel>
            <Input
              type="file"
              mb={6}
              color={"brand.text2"}
              onChange={(e) => {
                if (e.target.files) {
                  setImage(e.target.files[0]);
                }
              }}
            />
            <FormLabel color={"brand.text2"}>Link</FormLabel>
            <Input
              placeholder="Link"
              type="text"
              mb={6}
              color={"brand.text2"}
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <CheckboxGroup
              colorScheme="white"
              value={selectedStacks}
              onChange={(values) => handleStackChange(values)}
            >
              <SimpleGrid
                spacing={[1, 5]}
                columns={[1, 2, 2, 2]}
                color={"brand.text2"}
                m="auto"
              >
                {hardcodedStacks.map((stack) => (
                  <Checkbox key={stack} value={stack}>
                    {stack}
                  </Checkbox>
                ))}
              </SimpleGrid>
            </CheckboxGroup>
            <Button
              type="submit"
              bg={"brand.solidbg"}
              color={"brand.text2"}
              mb={8}
              mt="5vh"
            >
              Modifier
            </Button>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
}

export default Edit;
