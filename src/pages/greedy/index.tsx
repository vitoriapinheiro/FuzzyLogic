import Sketch from "react-p5";
import p5Types from "p5"; 
import { Box, Text } from "@chakra-ui/react";

export default function Greedy() {
  let x = 50;
  const y = 50;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(800, 800).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  return (
    <Box>
      <Text>Busca gulosa</Text>
      <Sketch setup={setup} draw={draw} />
    </Box>
  );
}
