// document.getElementById("count-el").innerText=1
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    score = count + " - "
    saveEl.textContent += score
    count = 0
    countEl.textContent = count
} 