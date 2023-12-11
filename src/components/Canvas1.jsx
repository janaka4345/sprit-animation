import { useEffect } from "react";
import useCanvas from "./useCanvas";

export default function Canvas1() {
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

let frameX = 0;
let FrameY = 3;
let staggerFrames = 5; //60/5=12 12 frames per second
const draw = (ctx, frameCount, ratio) => {
  // frameCountis 60 per second
  let position = Math.floor(frameCount / staggerFrames) % 9; // only has 9 frames
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
