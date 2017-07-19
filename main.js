var FIRST_FIVE_NUMBER_SELECTOR = '[data-type="random-number-under-69"]';
var LAST_TWO_NUMBER_SELECTOR ='[data-type="random-number-under-26"]';
var PARAGRAPH_SELECTOR = '[data-type="paragraph"]';
var BUTTON_SELECTOR = '[data-type="numbers-button"]';
var LOTTERY_SELECTOR = '[data-type="lottery-container"]';

function generateNumber69(element, array) {
    var number = Math.floor(Math.random()*array.length)+1;
    if (array.includes(number)) {
        // console.log(number + "is in array");
        element.textContent = number;
        return number;
    } else {
        // console.log('not in the array, re-running');
        generateNumber69(element, array);
    }
    console.log(number + " number");
    // removeNumber(arraylocation,array);
    console.log(array);

}



function generateNumber26(element) {
    element.textContent = Math.floor(Math.random()*26);
}

function removeNumber(number, array) {
    var arraylocation = array.indexOf(number);
    console.log(number + "this is the number");
    console.log(arraylocation + " array location");
    array.splice(arraylocation,1)
}


function createArray(minNumber, maxNumber) {
    var newArray = [];
    for (var i=minNumber; i <=maxNumber; i++) {
        newArray.push(i);
    }
    return newArray;
}

console.log(createArray(1,69));



function generateLotto() {
    var firstFive = document.querySelectorAll(FIRST_FIVE_NUMBER_SELECTOR);
    var testArray = createArray(1,69);
    firstFive.forEach(function (element) {
        console.log(testArray);
        var theNumber = generateNumber69(element, testArray);
        removeNumber(theNumber, testArray);
    })
    var lastTwo = document.querySelectorAll(LAST_TWO_NUMBER_SELECTOR);
    var secondArray = createArray(1,26);
    lastTwo.forEach(function (element) {
        generateNumber26(element);
    });
}

document.querySelector(BUTTON_SELECTOR).addEventListener('click', function() {
    generateLotto();
});


