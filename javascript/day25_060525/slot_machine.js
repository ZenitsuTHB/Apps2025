
document.querySelector('#spin').addEventListener('click', shuffleGame)

let BET = true

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

  /*
    PRIZE
    conditions for prize
    1) the three generated numbers are the same
    2) 2 generated  numbers are same and the other is the joker which is the bar num = 9
  
    ACTIONS IN CASE OF PRIZE
    1) The amount will increase, amount += prize factor * bet
    2) The prize value will be printed in the win input field
  
    Each bet will decrease the amount the bet time, amount -= bet * time;
  */

  document.querySelector('#win').value = ''

  let prizeFactor = [1, 2, 3, 5, 10, 20, 100, 300, 500, 1000]

  if (hasard[0] === hasard[1] && hasard[1] === hasard[2]) {

    document.querySelector('#amount').value += prizeFactor[hasard[0]] * bet
    document.querySelector('#win').value = prizeFactor[hasard[0]] * bet
  }
  else if (hasard[0] === hasard[1] && hasard[2] === 9) {

    document.querySelector('#amount').value += prizeFactor[hasard[0]] * bet
    document.querySelector('#win').value = prizeFactor[hasard[0]] * bet

  }
  else if (hasard[0] === hasard[2] && hasard[1] === 9) {

    document.querySelector('#amount').value += prizeFactor[hasard[0]] * bet
    document.querySelector('#win').value = prizeFactor[hasard[0]] * bet

  }
  else if (hasard[0] === 9 && hasard[1] === hasard[2]) {

    document.querySelector('#amount').value += prizeFactor[hasard[1]] * bet
    document.querySelector('#win').value = prizeFactor[hasard[1]] * bet

  }
  else if (hasard[0] === 9 && hasard[1] === 9) {

    document.querySelector('#amount').value += prizeFactor[hasard[2]] * bet
    document.querySelector('#win').value = prizeFactor[hasard[2]] * bet

  }
  else if (hasard[0] === 9 && hasard[2] === 9) {

    document.querySelector('#amount').value += prizeFactor[hasard[1]] * bet
    document.querySelector('#win').value = prizeFactor[hasard[1]] * bet

  }
  else if (hasard[1] === 9 && hasard[2] === 9) {

    document.querySelector('#amount').value += prizeFactor[hasard[0]] * bet
    document.querySelector('#win').value = prizeFactor[hasard[0]] * bet

  }




  /*let contador = {}
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

  //document.querySelector('#amount').value = multiplier * bet*/
}