import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";

function createLabelRenderer(mapRef) {
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0px";
    labelRenderer.domElement.style.pointerEvents = "none";
    labelRenderer.setSize(window.innerWidth, window.innerHeight);

    mapRef.appendChild(labelRenderer.domElement);
    
    return labelRenderer
}

export { createLabelRenderer }
