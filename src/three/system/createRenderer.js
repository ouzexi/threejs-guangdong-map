import { WebGLRenderer } from 'three'
import mapData from '../../map/440000.js'
import { createMap } from '../createMap.js'

function createRenderer(mapRef, scene) {
    const renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mapRef.appendChild(renderer.domElement);
    const map = createMap(mapData);
    scene.add(map);
    return renderer
}

export { createRenderer }
