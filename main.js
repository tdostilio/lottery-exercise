var FIRST_FIVE_NUMBER_SELECTOR = '[data-type="random-number-under-69"]';
var LAST_TWO_NUMBER_SELECTOR ='[data-type="random-number-under-26"]';
var PARAGRAPH_SELECTOR = '[data-type="paragraph"]';
var BUTTON_SELECTOR = '[data-type="numbers-button"]';
var LOTTERY_SELECTOR = '[data-type="lottery-container"]';

function generateNumber69(element, array) {
    var number = Math.floor(Math.random()*array.length)+1;
    if (array.includes(number)) {
        element.textContent = number;
        return number;
    } else {
        generateNumber69(element, array);
    }
}

function generateNumber26(element, array) {
    var number = Math.floor(Math.random()*array.length)+1;
    if (array.includes(number)) {
        element.textContent = number;
        return number;
    } else {
        generateNumber69(element, array);
    }
}

function removeNumber(number, array) {
    var arraylocation = array.indexOf(number);
    array.splice(arraylocation,1)
}

function createArray(minNumber, maxNumber) {
    var newArray = [];
    for (var i=minNumber; i <=maxNumber; i++) {
        newArray.push(i);
    }
    return newArray;
}

function generateLotto() {
    var firstFive = $(FIRST_FIVE_NUMBER_SELECTOR);
    var testArray = createArray(1,69);
    firstFive.each(function (i,element) {
        var theNumber = generateNumber69(element, testArray);
        removeNumber(theNumber, testArray);
    })
    var lastTwo = $(LAST_TWO_NUMBER_SELECTOR);
    var secondArray = createArray(1,26);
    lastTwo.each(function (i,element) {
        var theSecondNumber = generateNumber69(element, secondArray);
        removeNumber(theSecondNumber, secondArray);
    });
}

// BUTTON
$(BUTTON_SELECTOR).on('click', function() {
    generateLotto();
    $(".power-ball-box").each(function (i,element) {
      setTimeout(function() {
        $(element).toggleClass('transformed');  
      },i*300);
      
      
    //   $(element).toggleClass('transformed');  
    }) 
});

// Refresh Button 

$(".refresh-button").on('click', function() {
    location.reload();
});

