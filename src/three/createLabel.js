import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import offsetXY from "./utils/offsetXY";

const createLabel = (name, point, depth) => {
  const div = document.createElement("div");
  div.style.color = "#fff";
  div.style.fontSize = "12px";
  div.style.textShadow = "1px 1px 2px #047cd6";
  div.textContent = name;
  const label = new CSS2DObject(div);
  label.scale.set(0.01, 0.01, 0.01);
  const [x, y] = offsetXY(point);
  label.position.set(x, -y, depth);
  return label;
};

export { createLabel }