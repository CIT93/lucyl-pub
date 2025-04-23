function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEL = document.createElement("img");
        imgEL.setAttribute("src", `img.thumbnailUrl` );
        document.getElementById("output").appendChild(imgEL);
    })
}

async function getPhotos() {
   try{
const response = await fetch('https://jsonplaceholder.typicode.com/photos')
const picture = await response.json()
renderPhotos(picture)
   } catch (error) {
console.log('Error: ${error}')}
}

// async function start () {

// }

getPhotos();