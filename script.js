const quotes = [
    {
        text: "One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives.",
        author: "Subhash Chandra Bose",
    },
    {
        text: "They may kill me, but they cannot kill my ideas. They can crush my body, but they will not be able to crush my spirit.",
        author: "Bhagat Singh",
    },
    {
        text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
        author: "APJ Abdul Kalam",
    },
    {
        text: "We walk together, we move together, we think together, we resolve together, and together we take this country forward.",
        author: "Narendra Modi",
    },
    {
        text: "It's easy to stand in the crowd but it takes courage to stand alone.",
        author: "Mahatma Gandhi"
    }
];

const quoteText = document.getElementById('quoteText');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const shareBtn = document.getElementById('shareBtn');

newQuoteBtn.addEventListener('click', showNewQuote);

function showNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.text}" - ${randomQuote.author}`;

    // Update share button link with the current quote for WhatsApp
    shareBtn.href = `https://api.whatsapp.com/send?text="${encodeURIComponent(randomQuote.text)}" - ${encodeURIComponent(randomQuote.author)}`;
    shareBtn.classList.remove('hidden');
}
