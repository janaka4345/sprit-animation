import { useEffect, useState } from "react";
import useCanvas from "./useCanvas";
let animationName = "dizzy";
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
export default function Canvas1() {
  const [animation, setAnimation] = useState("idle");
  const canvasRef = useCanvas(draw);
  useEffect(() => {
    // console.log(canvasRef.current.getContext("2d"));
    animationName = animation;
  }, [animation]);
  return (
    <>
      <canvas id="canvas1" ref={canvasRef} />
      <form className="form1">
        <select
          name="animations"
          id="animations"
          onChange={(e) => setAnimation(e.target.value)}
        >
          {Object.entries(animationState).map(([key]) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}

const spriteAnimation = "";

let frameX = 0;

let staggerFrames = 5; //60/5=12 12 frames per second
const draw = (ctx, frameCount, ratio) => {
  let FrameY = animationState[animationName][0];
  // frameCount is 60times per second
  let position =
    Math.floor(frameCount / staggerFrames) % animationState[animationName][1]; // only has 9 frames   , 60/5=12 12 frames per second
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
