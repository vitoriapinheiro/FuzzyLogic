import p5Types from "p5";
import Sketch from "react-p5";
import { Box, Text } from "@chakra-ui/react";
import { Vehicle } from "./vehicle.js";

export default function AStar() {
  let x = 50;
  const y = 50;

  let v = new Vehicle(200 / 2, 200 / 2);
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(800, 800);
    let target = window.p5.createVector(200 / 2, 200 / 2);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);

    // Draw an ellipse at the target position
    p5.fill(51);
    p5.stroke(255);
    p5.strokeWeight(2);
    p5.ellipse(target.x, target.y, 24, 24);

    if (window.p5.Vector.dist(v.position, target) < 8) {
      target = p5.createVector(p5.random(p5.width), p5.random(p5.height));
      v.counter++;
    }

    // Call the appropriate steering behaviors for our agents
    v.arrive(target);
    v.update();
    v.display();

    p5.textSize(32);
    p5.fill(255);
    p5.text(v.counter, 10, 30);
    x++;
  };

  return (
    <Box>
      <Text>Busca A*</Text>
      <Sketch setup={setup} draw={draw} />
    </Box>
  );
}
