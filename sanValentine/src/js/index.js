const btnAceptar = document.getElementById("btnAceptar");
const btnNoAcepto = document.getElementById("btnNoAcepto");
const imgCat = document.getElementById("imgCat");
const contBtn = document.querySelector(".contBtn");
const contImg = document.querySelector(".contImg");
const question = document.querySelector(".question");
const contPrincipal = document.querySelector(".contPrincipal");
const btnRandomGift = document.getElementById("btnRandomGift");
const txtGift = document.querySelector(".txtGift");
const contPrincipal2 = document.querySelector(".contPrincipal2");
const notesArr = [
  "No",
  "Ey no juegues:(",
  "Plis ya di que si",
  "Te voy a pegar",
  "Me dueles",
  "Ira vas a ver",
];
const gifsArr = [
  "Cita en carls jr ❤️",
  "Cita en cachos cafe ❤️",
  "Cita en Giussepis ❤️",
  "Cita en flyers ❤️",
  "Cita en La macha ❤️",
  "Cita en PancakePlace ❤️",
  "Cita en el cine ❤️",
];
var contador = 0;

btnNoAcepto.addEventListener("click", (e) => {
  contador++;
  if (contador < 6) {
    let porcent = 20 * (contador + 1);
    btnAceptar.style.width = `${porcent > 100 ? 100 : porcent}%`;
    btnAceptar.style.height = `${porcent > 100 ? 100 : porcent}%`;
    imgCat.src = `src/img/Cat${contador + 1}.png`;
    btnNoAcepto.textContent = notesArr[contador];
  } else {
    console.log(contBtn);
    contImg.classList.add("ocultar");
    question.classList.add("ocultar");
    btnNoAcepto.classList.add("ocultar");

    btnAceptar.removeAttribute("style");
    contBtn.classList.add("allWindow");
    btnAceptar.classList.add("allWindow");
  }
});

btnAceptar.addEventListener("click", () => {
  contPrincipal.style.display = "none";

  // Mostrar los corazones
  const corazonesContainer = document.getElementById("corazones");
  corazonesContainer.classList.remove("ocultar");

  // Crear corazones aleatorios
  for (let i = 0; i < 30; i++) {
    const corazon = document.createElement("span");
    corazon.classList.add("corazon");
    corazon.textContent = "❤️";

    // Posicionar los corazones aleatoriamente
    corazon.style.left = `${Math.random() * 100}%`;
    corazon.style.animationDelay = `${Math.random() * 3}s`;

    corazonesContainer.appendChild(corazon);
  }
  setTimeout(() => {
    corazonesContainer.innerHTML = ""; // Elimina todos los corazones
    corazonesContainer.classList.add("ocultar"); // Oculta el contenedor nuevamente
    contPrincipal2.classList.toggle("mostrar");
  }, 5000);
});

btnRandomGift.addEventListener("click", () => {
  let randomGift = Math.floor(Math.random() * 6 + 1);
  console.log(`Numero random : ${randomGift}`);
  txtGift.textContent = `~ ${gifsArr[randomGift]} ~`;
});
