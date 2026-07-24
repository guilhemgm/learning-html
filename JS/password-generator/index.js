const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordEl1 = document.getElementById("password-el1")
let passwordEl2 = document.getElementById("password-el2")

function displayNewPasswords() {
    passwordEl1.textContent = generatePassword()
    passwordEl2.textContent = generatePassword()
}

function generatePassword() {
    let passwordLenght = 15
    let password = ""
    for (let i = 0 ; i < passwordLenght ; i++) {
        let index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }
    return password
}