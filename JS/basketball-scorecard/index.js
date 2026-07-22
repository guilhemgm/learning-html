let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

console.log(homeScoreEl)
console.log(guestScoreEl)

function addHome(add) {
    homeScore += add
    homeScoreEl.textContent = homeScore
}

function addGuest(add) {
    guestScore += add
    guestScoreEl.textContent = guestScore
}