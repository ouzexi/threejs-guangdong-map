import { Vector2, Raycaster } from 'three'
import isAlpha from '../utils/isAlpha';

function createLoop(scene, camera, renderer, controls, labelRenderer) {
  const animate = () => {
    //   map.rotation.y += 0.01
    renderer.setAnimationLoop(animate);
    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
  };
  
  animate();
  
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  let intersect = null;
  window.addEventListener("pointerdown", (event) => {
    const mouse = new Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
    const raycaster = new Raycaster();
    raycaster.setFromCamera(mouse, camera);
  
    const intersects = raycaster.intersectObjects(map.children).filter((item) => item.object.type !== "Line");
  
    if (intersects.length > 0) {
      if (intersects[0].object.type === "Mesh") {
        if (intersect) isAlpha(intersect, 1);
        intersect = intersects[0].object.parent;
        isAlpha(intersect, 0.4);
      }
      if (intersects[0].object.type === "Sprite") {
        console.log(intersects[0].object);
      }
    } else {
      if (intersect) isAlpha(intersect, 1);
    }
  });
}

export { createLoop }
