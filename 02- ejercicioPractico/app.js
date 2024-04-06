const botonSelect = document.getElementById("button");
botonSelect.addEventListener("click", changeColor);

function changeColor() {
  const textoColor = document.getElementById("paragraph");
  textoColor.style = `background:crimson; padding: 15px; border-radius: 10px; color:white`;
}
