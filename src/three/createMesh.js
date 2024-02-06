import { Shape, DoubleSide, ExtrudeGeometry, MeshStandardMaterial, Mesh } from 'three'
import offsetXY from './utils/offsetXY';

const createMesh = (data, color, depth) => {
  const shape = new Shape();
  data.forEach((item, idx) => {
    const [x, y] = offsetXY(item);

    if (idx === 0) shape.moveTo(x, -y);
    else shape.lineTo(x, -y);
  });

  const extrudeSettings = {
    depth: depth,
    bevelEnabled: false,
  };

  const materialSettings = {
    color: color,
    emissive: 0x000000,
    roughness: 0.45,
    metalness: 0.8,
    transparent: true,
    side: DoubleSide,
  };

  const geometry = new ExtrudeGeometry(shape, extrudeSettings);
  const material = new MeshStandardMaterial(materialSettings);
  const mesh = new Mesh(geometry, material);

  return mesh;
};

export { createMesh }