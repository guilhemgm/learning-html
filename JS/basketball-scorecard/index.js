let scoreEl = {
    home: document.getElementById("home-score"),
    guest: document.getElementById("guest-score")
}

let score = {home: 0, guest: 0}

function addScore(team, add) {
    score[team] += add
    scoreEl[team].textContent = score[team]
}