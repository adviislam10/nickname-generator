// Nickname Generator

// Global Variable
let nickArray = [];
fetch("nickname.txt")
.then((rawData) => rawData.text())
.then((data) => nickArray = data.split("\r\n"));

let nickIndex = 0;

// Functions
document.getElementById('randomNick').addEventListener('click', randomNick);
document.getElementById('allNick').addEventListener('click', allNick);

// Random Nickname
function randomNick() {
    document.getElementById('output0').innerHTML = ''

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    nickIndex = Math.randomInt(0, nickArray.length);
    document.getElementById('output0').innerHTML += firstName + ' ' + '"' + nickArray[nickIndex] + '"' + ' ' + lastName + '<br>'

}

// All Nicknames

function allNick() {
    document.getElementById('output0').innerHTML = ''

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;

    for (let i = 0; i < nickArray.length; i++)
        document.getElementById('output0').innerHTML += firstName + ' ' + '"' + nickArray[i] + '"' + ' ' + lastName + '<br>'


}