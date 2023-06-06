import * as THREE from 'three';
import { scene, setupScene } from './scene.js';
import { createPaintings } from './paintings.js';
import { createWalls } from './walls.js';
import { setupLighting } from './lighting.js';
import { setupFloor } from './floor.js';
import { createCeiling } from './ceiling.js';
import { createBoundingBoxes } from './boundingBox.js';
import { setupRendering } from './rendering.js';
import { setupEventListeners } from './eventListeners.js';
import { addObjectsToScene } from './sceneHelpers.js';
import { setupPlayButton } from './menu.js';
import { setupAudio } from './audioGuide.js';
import { setupFurniture} from './furniture.js';

let { camera, controls, renderer } = setupScene();

setupAudio(camera); 

const textureLoader = new THREE.TextureLoader();

const walls = createWalls(scene, textureLoader);
const floor = setupFloor(scene);
const ceiling = createCeiling(scene, textureLoader);
const paintings = createPaintings(scene, textureLoader);
const lighting = setupLighting(scene, paintings);
const furniture = setupFurniture(scene, textureLoader)

createBoundingBoxes(walls);
createBoundingBoxes(paintings);
createBoundingBoxes(furniture);

addObjectsToScene(scene, paintings);
addObjectsToScene(scene, furniture);

setupPlayButton(controls);

setupEventListeners(controls);

setupRendering(scene, camera, renderer, paintings, controls, walls, furniture);
