var selectedQuote = [];
var quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You can never cross the ocean until you have the courage to lose sight of the shore. - Christopher Columbus",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"
];
var remainingQuotes = quotes.length;
document.getElementById("remaining-count").innerHTML = remainingQuotes;
function quotefunc() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    if (selectedQuote.length >= quotes.length) {
        document.querySelector(".quote-text").innerHTML = "All quotes have been displayed , if you want to see them again please refresh the page";
    }
    else {
        while (selectedQuote.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * quotes.length);
        }
        selectedQuote.push(randomIndex);
        remainingQuotes = quotes.length - selectedQuote.length;
        document.getElementById("remaining-count").innerHTML = remainingQuotes;
        document.querySelector(".quote-text").innerHTML = quotes[randomIndex];
    }
}