// variables
var newQuoteButton = document.getElementsByTagName("button")[0];
var quoteContent = document.querySelectorAll("div p");
var quoteList = [];

// functions
async function getData() {
  var x = await fetch("https://type.fit/api/quotes");
  quoteList = await x.json();
  // author:"Thomas Edison, type.fit"
  // text:"Genius is one percent inspiration and ninety-nine percent perspiration."
}

function getRandomQuote(array) {
  var previousRandomNumber = 0;
  return function () {
    do {
      var NewRandomNumber = Math.trunc(Math.random() * array.length);
    } while (NewRandomNumber == previousRandomNumber);
    previousRandomNumber = NewRandomNumber;
    return array[NewRandomNumber];
  };
}

getData().then(function () {
  newQuoteButton.onclick = function () {
    var quote = getRandomQuote(quoteList)();
    quoteContent[0].innerHTML = quote.text;
    quoteContent[1].innerHTML = quote.author;
  };
});
