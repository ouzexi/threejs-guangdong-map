import { Scene, AmbientLight, DirectionalLight } from "three";

function createScene() {
    const scene = new Scene();
    
    // const axesHelper = new THREE.AxesHelper(5);
    // scene.add(axesHelper);
    const ambientLight = new AmbientLight(0xd4e7fd, 4);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xe8eaeb, 0.2);
    directionalLight.position.set(0, 10, 5);

    const directionalLight2 = directionalLight.clone();
    directionalLight2.position.set(0, 10, -5);

    const directionalLight3 = directionalLight.clone();
    directionalLight3.position.set(5, 10, 0);

    const directionalLight4 = directionalLight.clone();
    directionalLight4.position.set(-5, 10, 0);

    scene.add(directionalLight);
    scene.add(directionalLight2);
    scene.add(directionalLight3);
    scene.add(directionalLight4);

    return scene;
}

export { createScene }