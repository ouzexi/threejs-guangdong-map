import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

function createControl(camera, renderer) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    return controls
}

export { createControl }