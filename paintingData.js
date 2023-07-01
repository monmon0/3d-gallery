export const paintingData = [

  //--------------- wall ben phai---------------
  { 
    imgSrc: `https://i.imgur.com/iZmNA8w.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 3500/1.5, // width of the painting
    height: 5000/1.5, // height of the painting
    position: { x: -32 + 15 * 0, y: 3, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: { // info about the painting
      title: `Di Lập`, 
   
    },
  },

  { 
    imgSrc: `https://i.imgur.com/wsyIAAM.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    // dịmensions: 2537 × 3250
    width: 2537, // width of the painting
    height: 3250, // height of the painting
    position: { x: -50, y: 3, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: { // info about the painting
      title: `Suoxiao19`, 
    },
  },

  { 
    imgSrc: `https://i.imgur.com/nqlNvvH.png`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 2500, // width of the painting
    height: 2500 , // height of the painting
    position: { x: -38 + 15 * 3, y: 2.5, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: { // info about the painting
      title: `Sumire Zumi`, 
  
    },
  },

  { // mhs artist
    imgSrc: `https://i.imgur.com/c22aMe4.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 2480, // width of the painting
    height: 2778, // height of the painting
    position: { x: -32 + 10 * 2, y: 2.5, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: { // info about the painting
      title: `Shinnie`, 
    },
  },

  

  //---------------wall ben trai---------------
  { 
    imgSrc: `https://i.imgur.com/8AFIjL2.jpg`, // nhi bùi
    width: 4800/1.5,
    height: 3600/1.5,
    position: { x: (-25), y: 3, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: ` XXX `,

    },
  },

  { 
    imgSrc: `https://i.imgur.com/ApGBSHN.jpg`, // nhi bùi
    width: 3764,
    height: 2646,
    position: { x: (-6.5), y: 3, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Tentaco Can Draw`,
      artist: 'Vincent van Gogh',
      description: `Artwork  by Vincent van Gogh is an exceptional piece showcasing his remarkable ability to capture emotion and atmosphere.`,
      year: `Year`,
    },
  },

  { 
    imgSrc: `https://i.imgur.com/cAzQkOF.jpg`, // nhi bùi
    width: 2000,
    height: 2500,
    position: { x: (10), y: 3, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Po Hay Cười`,
     
    },
  },

  { // open mouth one
    imgSrc: `https://i.imgur.com/4xFrLdK.png`, // nhi bùi
    width: 1581*1.5,
    height: 2064*1.5,
    position: { x: (-50), y: 3, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Tentaco Can Draw`,
   
    },
  },


  // ----------------- wall mat truowc =-----------------------------
    { // hynohenky
      imgSrc: `https://i.imgur.com/P498uV2.jpg`,
      width: 1000*2,
      height: 1388*2,
      position: { x: -19.8*3, y: 3, z: 0},
      rotationY: Math.PI / 2,
      info: {
        title: `Shinnie`,
   
      },
    },
 





  // Right Wall
  {
    imgSrc: `https://i.imgur.com/Rp8v5nN.jpg`,
    width: 2048*1.8,
    height: 1454*1.8,
    position: { x: 19.5, y: 3, z: 0 },
    rotationY: -Math.PI / 2,
    info: {
      title: `Yan Zio`,
    
    },
  }
];
