document.querySelector('#button').addEventListener('click', validate)

const OUTPUT = document.querySelector('#output');

function changeStyle() {
  OUTPUT.style.fontSize = '1.5rem';
  OUTPUT.style.textAlign = 'center';
  OUTPUT.style.color = 'blue';
}

function validate() {

  let name = document.querySelector('#texto').value.trim();
  let number = Number(document.querySelector('#number').value);
  
  document.querySelector('#texto').style.backgroundColor = 'white';
  document.querySelector('#number').style.backgroundColor = 'white';


  if (!name || !number) {
    if (!name) document.querySelector('#texto').style.backgroundColor = 'yellow';
    if (!number) document.querySelector('#number').style.backgroundColor = 'yellow';
    alert('Text and number are necessary to validate');
    return;
  }

  let checks = [];
  let checkboxes = document.getElementsByName('check');
  for (let box of checkboxes) {
    if (box.checked) {
      checks.push(box.value);
      box.checked = false;
    }
  }

  //built ouput
  let outputText = `${name} / ${number}`;
  if (checks.length > 0) {
    outputText += ` / ${checks.join(' ')}`;
  }

  OUTPUT.value = outputText;
  changeStyle();

  document.querySelector('#texto').value = '';
  document.querySelector('#number').value = '';
}


document.querySelector('#color').oninput = cambiarColor

function cambiarColor() {
  let color = document.querySelector('#color').value
  document.querySelector('#info').style.backgroundColor = color
}

//Clean outpu on reload
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#output').value = '';
  document.querySelector('#output').style = '';
});