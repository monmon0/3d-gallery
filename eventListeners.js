import { keysPressed } from './movement.js'; // import the keysPressed object
import { showMenu } from './menu.js'; // import the showMenu function
// import { startAudio, stopAudio } from './audioGuide.js';

// let audioPlay = false;
// // add the controls parameter which is the pointer lock controls and is passed from main.js where setupEventListeners is called

// async function playMusic() {
//   if(!audioPlay){
//     console.log('startMusic')
//      startAudio()
//      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
//      console.log("change state")
//     audioPlay = true
//   }
//   else if (audioPlay){
//     stopAudio()
//     await new Promise((resolve, reject) => setTimeout(resolve, 1000));
//     audioPlay = false
//   }
// }
// export const setupEventListeners = (controls) => {
//   // add the event listeners to the document which is the whole page
//   document.addEventListener('keydown', onKeyDown, false); // keydown event is when the key is pressed
//   document.addEventListener('keyup', onKeyUp, false); // keyup event is when the key is released
//   controls.addEventListener('unlock', showMenu); // add the event listener to the controls to show the menu when the pointer is unlocked

//   // Add event listeners for the audio guide buttons


//   document.addEventListener('keydown', event => {
//     if (event.code === 'Space') {
//     //  playMusic()
//     }
//   })


// };

// function onKeyDown(event) {
//   // event is the event object that has the key property
//   if (event.key in keysPressed) {
//     // check if the key pressed by the user is in the keysPressed object
//     keysPressed[event.key] = true; // if yes, set the value of the key pressed to true
//   }
// }

// function onKeyUp(event) {
//   // same but for keyup
//   if (event.key in keysPressed) {
//     keysPressed[event.key] = false; // set to false when the key is released
//   }
// }
