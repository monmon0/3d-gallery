import * as THREE from 'three';

import { furnitureData } from './furnitureData.js';

export const setupFurniture = (scene, textureLoader) => {
    let furnitures = [];

    furnitureData.forEach((data) => {
    // loop through the paintingData array we get from paintingData.js
    const furniture = new THREE.Mesh( // create a mesh for each painting
      new THREE.PlaneGeometry(data.width, data.height),
      new THREE.MeshLambertMaterial({ map: textureLoader.load(data.imgSrc) })
    );

    furniture.position.set(data.position.x, data.position.y, data.position.z); // position the painting
    furniture.rotation.y = data.rotationY; // rotate the painting
    furniture.rotation.x = data.rotationX; // rotate the painting
    furniture.material.transparent = true;

    furniture.castShadow = true; // set the painting to cast a shadow
    furniture.receiveShadow = true; // set the painting to receive a shadow

    furnitures.push(furniture); // push the painting to the paintings array
  });

  return furnitures; // return the furniture array
}

