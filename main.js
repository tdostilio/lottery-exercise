var FIRST_FIVE_NUMBER_SELECTOR = '[data-type="random-number-under-69"]';
var LAST_TWO_NUMBER_SELECTOR ='[data-type="random-number-under-26"]';
var PARAGRAPH_SELECTOR = '[data-type="paragraph"]';
var BUTTON_SELECTOR = '[data-type="numbers-button"]';
var LOTTERY_SELECTOR = '[data-type="lottery-container"]';

function generateNumber69(element) {
    element.textContent = Math.floor(Math.random()*69);
}

function generateNumber26(element) {
    element.textContent = Math.floor(Math.random()*26);
}

function generateLotto() {
    var firstFive = document.querySelectorAll(FIRST_FIVE_NUMBER_SELECTOR);
    firstFive.forEach(function (element) {
        generateNumber69(element);
    })
    var lastTwo = document.querySelectorAll(LAST_TWO_NUMBER_SELECTOR);
    lastTwo.forEach(function (element) {
        generateNumber26(element);
    });
}

document.querySelector(BUTTON_SELECTOR).addEventListener('click', function() {
    generateLotto();
});


