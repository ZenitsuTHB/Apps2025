document.querySelector('#color').oninput = cambiarColor

function cambiarColor() {
  let color = document.querySelector('#color').value
  document.querySelector('body').style.backgroundColor = color
}