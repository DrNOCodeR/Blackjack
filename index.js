
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

function getRandomCard() {
  let randomNumber = Math.floor( Math.random()*13 ) + 1
  if (randomNumber > 10) {
      return 10
  } else if (randomNumber === 1) {
      return 11
  } else {
      return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Карты: "
  for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Сумма очков: " + sum
  if (sum <= 20) {
      message = "Хотите взять еще карту?"
  } else if (sum === 21) {
      message = "Вы победили! Blackjack!"
      hasBlackJack = true
  } else {
      message = "Вы проиграли!"
      isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      renderGame()        
  }
}
