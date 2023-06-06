let width, height;
export async function getImageDimensions(imgSrc){
    const img = new Image();
    // Set the source of the image
    img.src = imgSrc;

// Wait for the image to load
    img.onload = () => {
    // Get the width and height of the image
    const width = img.width;
    const height = img.height;

        console.log(width, height)
    };
    return {w:img.width, h:height};
 
}