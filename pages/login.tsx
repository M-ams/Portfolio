import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "next";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import {
  Box,
  Input,
  Stack,
  Text,
  Flex,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

function Login() {
  //login axios
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.api_token);
      setRedirect(true);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 401) {
          setError(error.response.data.message);
          console.log(error.response.data.message);
        }
      }
    }
  };

  const router = useRouter();

  if (redirect) {
    router.push("/admin/dashboard");
  }

  return (
    <Box className=" min-h-screen flex optima" bg={"brand.bg"}>
      <Navbar />
      <Flex
        m="auto"
        alignItems="center"
        border={"2px solid"}
        borderColor={"brand.border3"}
        borderRadius={8}
        justifyContent="center"
        w="50vw"
        bg={"brand.componentbg"}
      >
        <Flex flexDirection="column" p={12} borderRadius={8} boxShadow="lg">
          <Heading mb={6} color="brand.text1" m="auto">
            Log In
          </Heading>
          <Input
            mt={6}
            placeholder="Email"
            type="email"
            mb={6}
            color={"brand.text2"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="**********"
            type="password"
            mb={6}
            color={"brand.text2"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            onClick={handleSubmit}
            bg={"brand.solidbg"}
            color={"brand.text2"}
            mb={8}
          >
            Log In
          </Button>
          {error && <Text color="red.500">{error}</Text>}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Login;
