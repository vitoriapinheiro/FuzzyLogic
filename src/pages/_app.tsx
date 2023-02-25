import "@/styles/globals.css";
import {
  Box,
  Button,
  ButtonGroup,
  ChakraProvider,
  HStack,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Box w={"100%"} h={"100vh"} backgroundColor={"gray.50"}>
        <HStack
          w={"100%"}
          h={"10vh"}
          backgroundColor={"blue.500"}
          display={"flex"}
          justifyContent={"center"}
        >
          <ButtonGroup colorScheme={"red"} justifyContent={"space-between"}>
            <Link href={"/breadth-first"}>
              <Button>Largura</Button>
            </Link>
            <Link href={"/depth"}>
              <Button>Profundidade</Button>
            </Link>

            <Link href={"/uniform-cost"}>
              <Button>Custo Uniforme</Button>
            </Link>

            <Link href={"/greedy"}>
              <Button>Gulosa</Button>
            </Link>

            <Link href={"/a-star"}>
              <Button>A*</Button>
            </Link>
          </ButtonGroup>
        </HStack>
        <Box w={"100%"} h={"90vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Component {...pageProps} />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
