// génère un entier entre a et b
function randomInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

let firstCard = randomInt(2, 11)
let secondCard = randomInt(2, 11)

let sum = firstCard + secondCard

console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw another card ?")
} else if (sum === 21) {
    console.log("Wouhou, you've got a blackjack !!")
} else {
    console.log("Lol, you loss loser")
}