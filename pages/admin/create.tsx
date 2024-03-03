import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex, FormLabel,
  Heading,
  Input, SimpleGrid, Textarea,
  useToast
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

import axios from "axios";

function Create() {
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionEn, setDescriptionEn] = useState("");
  const [image, setImage] = useState<any>();
  const [link, setLink] = useState("");
  const [selectedStacks, setSelectedStacks] = React.useState<any[]>([]);

  

  const handleStackChange = (values: any[]) => {
    setSelectedStacks(values);
  };

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

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();
  //   console.log(title, description, image, link, selectedStacks);
  //   try {
  //     const res = await fetch("http://localhost:8000/api/works-create", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         title,
  //         description,
  //         image,
  //         link,
  //         stacks: selectedStacks,
  //       }),
  //     });
  //     console.log
  //   } catch (error) {
  //     console.log(error);
  //   }

  // }
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("description_en", descriptionEn);
    formData.append("image", image);
    formData.append("link", link);

    // Append selectedStacks as an array of strings
    selectedStacks.forEach((stack, index) => {
      formData.append(`stacks[${index}]`, stack);
    });

    

    try {
      const res = await axios.post(
        "http://localhost:8000/api/works-create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${token}`,
          },
        }
      );

      console.log(res.data);

      toast({
        title: "Projet ajouté avec succès",
        status: "success",
        duration: 7000,
        isClosable: true,
      });
      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);
      toast({
        title: "Erreur lors de l'ajout du projet",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    }
  };

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
        Ajouter un projet
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
          <Flex flexDirection="column" p={12} borderRadius={8} boxShadow="lg">
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
              placeholder="Description in English"
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
                <Checkbox value="React">React</Checkbox>
                <Checkbox value="Symfony">Symfony</Checkbox>
                <Checkbox value="PHP">PHP</Checkbox>
                <Checkbox value="Javascript">Javascript</Checkbox>
                <Checkbox value="Typescript">Typescript</Checkbox>
                <Checkbox value="NodeJS">NodeJS</Checkbox>
                <Checkbox value="NextJs">NextJs</Checkbox>
                <Checkbox value="MySQL">MySQL</Checkbox>
              </SimpleGrid>
            </CheckboxGroup>
            <Button type="submit" bg={"brand.solidbg"} color={"brand.text2"} mb={8} mt="5vh">
              Ajouter
            </Button>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
}

export default Create;
