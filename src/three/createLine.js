import { Vector3, BufferGeometry, LineBasicMaterial, Line } from 'three'
import offsetXY from './utils/offsetXY';

const createLine = (data, depth) => {
  const points = [];

  data.forEach((item) => {
    const [x, y] = offsetXY(item);
    points.push(new Vector3(x, -y, 0));
  });

  const lineGeometry = new BufferGeometry().setFromPoints(points);
  const uplineMaterial = new LineBasicMaterial({
    color: 0xffffff,
    linewidth: 0.5,
  });
  const downlineMaterial = new LineBasicMaterial({
    color: 0xffffff,
    linewidth: 0.5,
  });

  const upLine = new Line(lineGeometry, uplineMaterial);
  const downLine = new Line(lineGeometry, downlineMaterial);
  downLine.position.z = -0.0001;
  upLine.position.z = depth + 0.0001;

  return [upLine, downLine];
};

export { createLine }
