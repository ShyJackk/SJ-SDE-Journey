// I absolutely love this!!!

const button = document.getElementById("new-quote-btn");
const quoteDiv = document.getElementById("quote-output");
const authorDiv = document.getElementById("author-output");

const quotes = [
  {
    quote: “Like what you do, and then you will do your best.”,
    author: "— Katherine Johnson"
  },
  {
    quote: “She was fierce in the presence of death, heroic even, as she was at no other time. Its threat gave her direction, clarity, audacity.”,
    author: "— Toni Morrison"
  },
  {
    quote: “I'm no longer accepting the things I cannot change...I'm changing the things I cannot accept.”,
    author: "— 	Angela Davis"
  },
  {
    quote: “Your best champion and cheerleader is yourself. Always be proud of your accomplishments, big or small.”,
    author: "— Ayanna Howard"
  },
  {
    quote: “Don't sit down and wait for the opportunities to come. Get up and make them.”,
    author: "— Madam C.J. Walker"
  },
  {
    quote: “To bring about change, you must not be afraid to take the first step. We will fail when we fail to try.”,
    author: "— Rosa Parks"
  }
]

button.addEventListener("click", function() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];


  if (quoteDiv.innerText !== randomQuote.quote) {
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  } else {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteDiv.innerText = randomQuote.quote;
    authorDiv.innerText = randomQuote.author;
  }
});

