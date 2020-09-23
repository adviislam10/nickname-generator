// Nickname Generator

// Global Variable
let nickArray = ['Top Dawg', 'King', 'Computer Connoisseur', 'Bossman', 'MVP', 'Big Body', 'Imposter']
let imgIndex = 0;

// Functions
document.getElementById('randomNick').addEventListener('click', randomNick);
document.getElementById('allNick').addEventListener('click', allNick);

// Random Nickname
function randomNick() {
    document.getElementById('output0').innerHTML = ''

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    imgIndex = Math.randomInt(0, nickArray.length);
    document.getElementById('output0').innerHTML += firstName + ' ' + '"' + nickArray[imgIndex] + '"' + ' ' + lastName + '<br>'

}

// All Nicknames

function allNick() {
    document.getElementById('output0').innerHTML = ''

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;

    for (let i = 0; i < nickArray.length; i++)
        document.getElementById('output0').innerHTML += firstName + ' ' + '"' + nickArray[i] + '"' + ' ' + lastName + '<br>'


}