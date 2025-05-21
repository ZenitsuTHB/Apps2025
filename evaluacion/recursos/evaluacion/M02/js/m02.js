
document.getElementById('multiplicar').addEventListener('click', function () {

  const number = parseInt(document.getElementById('denominador').value);
  const table = document.getElementById('resultado');

  table.innerHTML = '';

  if (isNaN(number)) return;

  for (let i = 1; i <= 10; i++) {
    const fila = document.createElement('tr');
    fila.innerHTML = `<td>${number} x ${i} = ${number * i}</td>`;
    table.appendChild(fila);
  }
});

document.getElementById('cambiocolor').addEventListener('click', function () {
  const color = document.getElementById('color').value;
  document.getElementById('js2').style.backgroundColor = color;
});

document.querySelectorAll('#js3 img').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.add('girar');
    setTimeout(() => {
      img.classList.remove('girar');
    }, 10000);
  });
});

document.getElementById('validar').addEventListener('click', function () {
  let valido = true;

  const textoInput = document.getElementById('texto');
  const numeroInput = document.getElementById('numero');
  const radios = document.querySelectorAll('input[name="radio"]');
  const datos = document.getElementById('datos');

  textoInput.style.border = '';
  numeroInput.style.border = '';

  let texto = textoInput.value.trim();
  if (texto === '') {
    textoInput.style.border = '1px solid red';
    valido = false;
  }

  let numero = numeroInput.value.trim();
  if (numero === '' || isNaN(numero)) {
    alert('El input numero tiene que ser numero !')
    numeroInput.style.border = '1px solid red';
    valido = false;
  }

  let valorRadio = ''; 1
  radios.forEach(radio => {
    if (radio.checked) {
      valorRadio = radio.value;
    }
  });

  if (!valido) return;

  datos.value = `${texto} / ${numero} / ${valorRadio}`;
});


document.getElementById('evaluar').addEventListener('click', function () {

  const inputNote = parseFloat(document.getElementById('nota').value.trim());
  const resultInput = document.getElementById('result');

  if (valor === '' || isNaN(inputNote)) {
    alert('inputNote no numérica'); return;
  }
  else if (inputNote < 0 || inputNote > 10) {
    resultInput.value = 'inputNote fuera de rango';
  }
  else if (inputNote === 10) {
    resultInput.value = 'matricula';
  }
  else if (inputNote >= 9) {
    resultInput.value = 'excelente';
  }
  else if (inputNote >= 7) {
    resultInput.value = 'notable';
  }
  else if (inputNote === 5) {
    resultInput.value = 'aprobado';
  }
  else if (inputNote < 5) {
    resultInput.value = 'suspendido';
  }
  document.querySelector('form').reset()
});