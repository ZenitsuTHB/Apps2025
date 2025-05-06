
document.querySelector('#spin').addEventListener('click', shuffleGame)

const BET = true

function checkData(amount, bet) {

  if (!amount) {

    alert('Enter the amount of money to bet !')
    BET = false
    return;
  }

  if (amount < bet) {

    alert('The amount must be superior or equal to bet !')
    BET = false
    return;
  }

}

function randomNumGen() {
  return (Math.floor(Math.random() * 10));
}

function shuffleGame() {

  let amount = Number(document.querySelector('#amount').value)
  let bet = Number(document.querySelector('#bet').value)
  checkData(amount, bet)
  if (BET === true)
    document.querySelector('#amount').value -= bet


  let hasard = []
  hasard[0] = randomNumGen()
  hasard[1] = randomNumGen()
  hasard[2] = randomNumGen()

  document.querySelector('#reel1').setAttribute('src', `img/${hasard[0]}.png`)
  document.querySelector('#reel2').setAttribute('src', `img/${hasard[1]}.png`)
  document.querySelector('#reel3').setAttribute('src', `img/${hasard[2]}.png`)

  let contador = {}
  hasard.forEach(element => {

    if (contador[element])
      contador[element] += 1
    else
      contador[element] = 1
  })

  let premio = 0

  for (let num in contador) {
    if (contador[num] === 3) {
      premio = calcularPremio(num) // Asumimos que tienes una función que calcula elpremio según el número
    } else if (contador[num] === 2 && contador["bar"]) {
      // Dos iguales y uno es "bar"
      premio = calcularPremio(num) // Calcula el premio con ese multiplicador
    }
  }

  let multiplier = {
    1: 1,
    2: 10,
    3: 20,
    4: 40,
    5: 60,
    6: 100,
    7: 200,
    8: 500
  }

  document.querySelector('#amount').value = multiplier * bet
}