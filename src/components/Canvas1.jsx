import { useEffect, useState } from "react";
import useCanvas from "./useCanvas";

export default function Canvas1() {
  const [animation, setAnimation] = useState("idle");
  const canvasRef = useCanvas(draw);
  useEffect(() => {
    // console.log(canvasRef.current.getContext("2d"));
  }, []);
  return (
    <>
      <canvas id="canvas1" ref={canvasRef} />
    </>
  );
}

const spriteAnimation = "";
const animationState = {
  idle: [0, 7],
  jump: [1, 7],
  down: [2, 7],
  run: [3, 9],
  dizzy: [4, 11],
  sit: [5, 5],
  ball: [6, 7],
  goof1: [7, 7],
  goof2: [8, 12],
  goof3: [9, 4],
};
let frameX = 0;
let animation = "dizzy";
let FrameY = animationState[animation][0];
let staggerFrames = 5; //60/5=12 12 frames per second
const draw = (ctx, frameCount, ratio) => {
  // frameCount is 60times per second
  let position =
    Math.floor(frameCount / staggerFrames) % animationState[animation][1]; // only has 9 frames   , 60/5=12 12 frames per second
  frameX = position;
  ctx.clearRect(0, 0, ctx.canvas.width * ratio, ctx.canvas.height * ratio);
  const image = new Image();
  image.src = "./shadow_dog.png";
  const spriteWidth = image.width / 12;
  const spriteHeight = image.height / 10;
  ctx.drawImage(
    image,
    frameX * spriteWidth,
    FrameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight,
  );
};
