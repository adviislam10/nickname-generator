// Nickname Generator

// Global Variable
let nickArray = ['Top Dawg', 'King', 'Computer Connoisseur', 'Bossman', 'MVP', 'Big Body', 'Imposter']
let imgIndex = 0;

// Functions
document.getElementById('randomNick').addEventListener('click', randomNick);
document.getElementById('allNick').addEventListener('click', allNick);

// Random Nickname
function randomNick() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    imgIndex = Math.randomInt(0, nickArray.length);
    document.getElementById('output0').innerHTML = firstName + ' ' + '"' + nickArray[imgIndex] + '"' + ' ' + lastName

}

// All Nicknames

function allNick() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    document.getElementById('output0').innerHTML = firstName + ' ' + '"' + nickArray[0] + '"' + ' ' + lastName
    document.getElementById('output1').innerHTML = firstName + ' ' + '"' + nickArray[1] + '"' + ' ' + lastName
    document.getElementById('output2').innerHTML = firstName + ' ' + '"' + nickArray[2] + '"' + ' ' + lastName
    document.getElementById('output3').innerHTML = firstName + ' ' + '"' + nickArray[3] + '"' + ' ' + lastName
    document.getElementById('output4').innerHTML = firstName + ' ' + '"' + nickArray[4] + '"' + ' ' + lastName
    document.getElementById('output5').innerHTML = firstName + ' ' + '"' + nickArray[5] + '"' + ' ' + lastName
    document.getElementById('output6').innerHTML = firstName + ' ' + '"' + nickArray[6] + '"' + ' ' + lastName

}