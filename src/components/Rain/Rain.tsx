import Sketch from "react-p5";
import "./Rain.scss";
interface Drop {
  x: number;
  y: number;
  z: number;
  len: number;
  yspeed: number;
}

let drops: Drop[] = [];
const Rain = () => {
  //@ts-ignore
  const setup = (p, canvasParentRef) => {
    p.createCanvas(window.innerWidth+50, window.innerHeight+50).parent(
      canvasParentRef
    );
    for (let i = 0; i < 30; i++) {
      drops[i] = {
        x: p.random(p.width),
        y: p.random(-500, -50),
        z: p.random(-20, 20),
        len: p.map(p.random(), 0, 1, 10, 20),
        yspeed: p.map(p.random(), 0, 1, 1, 20),
      };
    }
  };

  //@ts-ignore
  const draw = (p) => {
    p.frameRate(60)
    p.background(0, 0, 0);

    for (let i = 0; i < drops.length; i++) {
      fall(drops[i], p);
      show(drops[i], p);
    }
  };

  //@ts-ignore
  const fall = (drop: Drop, p) => {
    drop.y = drop.y + drop.yspeed;
    drop.x = drop.x + 1;
    const grav = p.map(drop.z, 0, 20, 0, 0.2);
    drop.yspeed = drop.yspeed + grav;

    if (drop.y > p.height) {
      drop.y = p.random(-200, -100);
      drop.x = p.random(p.width);
      drop.yspeed = p.map(drop.z, 0, 20, 4, 10);
    }
  };

  //@ts-ignore
  const show = (drop: Drop, p) => {
    const thick = p.map(drop.z, 0, 20, 1, 3);
    p.strokeWeight(thick);
    p.stroke(90, 0, 0);
    p.line(drop.x - 100, drop.y, drop.x - 100, drop.y + drop.len);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Rain;
