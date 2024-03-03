import {
  Badge,
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

function Dashboard() {
  const [token, setToken] = useState("");
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const toast = useToast();

  const generateRandomLightColor = () => {
    const randomColor = () => Math.floor(Math.random() * 200) + 55; // Valeurs entre 55 et 255 incluses

    const r = randomColor();
    const g = randomColor();
    const b = randomColor();

    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  };

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
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/works");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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

  interface Project {
    id: number;
    // Add other properties as needed
  }

  const handleEdit = (id: number) => {
    router.push(`/admin/edit/${id}`);
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/works/${id}`);
      console.log(res.data);
      // Refresh projects after deletion
      const updatedProjects = projects.filter((p: Project) => p.id !== id);
      setProjects(updatedProjects);
      toast({
        title: "Project Deleted",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    }
  };

  return (
    <Box className=" min-h-screen flex flex-col " bg={"brand.bg"}>
      <Navbar />
      <Heading
        fontSize={{ base: "20px", md: "35px", lg: "40px", xl: "40px" }}
        color={"brand.text2"}
        as={"b"}
        mt={["10vh", "10vh", "15vh", "15vh"]}
        ml={{ base: 0, md: 0, lg: "10vh", xl: "10vh" }}
        mx={{ base: "auto", md: "auto", lg: "", xl: "" }}
        className="cssanimation sequence fadeInBottom"
      >
        Admin Dashboard
      </Heading>

      <TableContainer
        mx={{ base: "auto", md: "auto", lg: "10vh", xl: "10vh" }}
        mt={["10vh", "10vh", "3vh", "3vh"]}
        mb="30px"
      >
        <Table
          variant="simple"
          m="auto"
          border={"2px solid"}
          borderColor={"brand.border3"}
          bg={"brand.componentbg"}
          className="cssanimation sequence fadeInBottom"
        >
          <TableCaption
            placement="top"
            color={"brand.text2"}
            fontSize={{ base: "20px", md: "35px", lg: "50px", xl: "50px" }}
          >
            Liste des Projets
          </TableCaption>
          <Thead>
            <Tr m="auto">
              <Th>ID</Th>
              <Th>Project Title</Th>
              <Th>Descirption</Th>
              <Th>Descirption English</Th>
              <Th>Image</Th>
              <Th>Link</Th>
              <Th>Stacks</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody color={"brand.text2"}>
            {projects.map(
              (
                project: {
                  id: number;
                  image: string;
                  title: string;
                  description: string;
                  description_en: string | null;
                  link: string;
                  stacks: { name: string }[];
                },
                index: number
              ) => (
                <Tr key={index}>
                  <Td>{project.id}</Td>
                  <Td>{project.title}</Td>
                  <Td>
                    {project.description.length > 50
                      ? project.description.substring(0, 10) + "..."
                      : project.description}
                  </Td>
                  <Td>
                  {project.description_en && project.description_en.length > 50
                    ? project.description_en.substring(0, 10) + "..."
                    : project.description_en}
                  </Td>
                  <Td>
                    <Image
                      src={`http://localhost:8000/storage/images/${project.image}`}
                      alt="project image"
                      width="100"
                    />
                  </Td>
                  <Td>
                    {project.link && project.link.length > 20
                      ? project.link.substring(0, 20) + "..."
                      : project.link}
                  </Td>

                  <Td>
                    <Stack mt="6" spacing="2" direction="row" flexWrap="wrap">
                      {project.stacks.map((stack, index) => (
                        <Badge
                          bg={"brand.componentbgonclck"}
                          key={index}
                          color={generateRandomLightColor()}
                          fontSize="sm"
                          rounded={10}
                          paddingX={2}
                          paddingY={1}
                          w={"auto"}
                        >
                          {stack.name}
                        </Badge>
                      ))}{" "}
                    </Stack>
                  </Td>
                  <Td>
                    <Stack direction="row" spacing={4}>
                      <Button
                        onClick={() => handleEdit(project.id)}
                        colorScheme="gray"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => handleDelete(project.id)}
                        colorScheme="red"
                      >
                        Delete
                      </Button>
                    </Stack>
                  </Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Dashboard;
