function renderPhotos(photos) {
  photos.forEach((img) => {
    const imgEL = document.createElement("img");
    imgEL.setAttribute("src", 'https://picsum.photos/200/300');
    document.getElementById("output").appendChild(imgEL);
  });
}

async function getPhotos() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await data.json();
    if (!photos.length) {
      console.log('error on return value');
    } else {
      onSuccess(photos);
    }
  } catch (error) {
    onError(error);
  }
}

function onSuccess(photos) {
  renderPhotos(photos);
}

function onError(err) {
  console.log(`Error ${err}`);
}
function start() {
  getPhotos();
}

start();
