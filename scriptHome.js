/* 1º Carrocel  */
let time = 2000, //o tempo que eu quero de rotação
currentImageIndex = 0, // a primeira imagem é zero
images = document.querySelectorAll("#slider img"); // pegas as imagens
max = images.length; // máximo de imagens que existe pra mim 

function nextImage() { //ele vai puxar a próxima imagem

  images[currentImageIndex].classList.remove("selected");
  //remover a classe do elemento atual , para as outras imagens
  //irem adicionando 
  currentImageIndex++; //incrementamos uma imagem para ela ir trocando

  if (currentImageIndex >= max)
    // se o meu create imageindex for maior ou igual ao meu máximo de imagem
    //eu reseto ele, e ele volta para a sua posição 0
    //(e então nosso banner fica rotativo)
    currentImageIndex = 0;
  images[currentImageIndex].classList.add("selected");
}

function start() {
  //setInterval vai executar uma função a cada momento
  setInterval(() => {
    // troca de imagem
    nextImage(); //usando a função de troca de imagem que eu criei
  }, time)
}

window.addEventListener("load", start);

/* 2º Carrocel  */
function activateCarousel(index) {
  const slides = document.querySelectorAll(".slide");
  const slide = slides[index];

  if (slide.classList.contains("active")) {
    return;
  }

  slide.classList = "slide active";

  if (slides[index - 2] != undefined) {
    slides[index - 2].classList = "slide lhidden";
  }
  if (slides[index - 1] != undefined) {
    slides[index - 1].classList = "slide lqueue";
  }
  if (slides[index + 1] != undefined) {
    slides[index + 1].classList = "slide rqueue";
  }
  if (slides[index + 2] != undefined) {
    slides[index + 2].classList = "slide rhidden";
  }
}

function initializeCarousel() {
  const slides = document.querySelectorAll(".slide");
  for (let index = 0; index < slides.length; index++) {
    const slide = slides[index];
    slide.classList.add("rhidden");
    slide.addEventListener("click", () => {
      activateCarousel(index);
    });
  }
  slides[0].classList = "slide active";
  slides[1].classList = "slide rqueue";
}

initializeCarousel();