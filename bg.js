const body = document.querySelector("body");
const IMG_NUMBER = 8;

function paintImages(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genNumber() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genNumber();
  paintImages(randomNumber);
}

init();
