let arrayWords = ['HTML', ' CSS', 'and', 'JavaScript'];
let newString = arrayWords[0] + ',' + arrayWords.slice(1).join(' ');


function myFunction() {
    document.getElementById('myText').innerHTML = newString;
}

myFunction();