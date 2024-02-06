import { TextureLoader, SpriteMaterial, Sprite } from 'three'
import offsetXY from './utils/offsetXY';

const createIcon = (point, depth) => {
  const url = new URL("../assets/icon.png", import.meta.url).href;
  const map = new TextureLoader().load(url);
  const material = new SpriteMaterial({
    map: map,
    transparent: true,
  });
  const sprite = new Sprite(material);
  const [x, y] = offsetXY(point);
  sprite.scale.set(0.3, 0.3, 0.3);

  sprite.position.set(x, -y + 0.5, depth + 0.2);
  sprite.renderOrder = 1;

  return sprite;
};

export { createIcon }