import { PerspectiveCamera } from 'three'

function createCamera() {
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.y = 12;
  return camera;
}

export { createCamera }
