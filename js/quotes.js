const quotes = [
    {quote :"How is your day so far?" },
    {quote :"Hope you're having a good day." },
    {quote :"And it's a good day no matter the weather" },
];

const quote = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;