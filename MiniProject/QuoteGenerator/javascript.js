var quotesArray = [
    "All our dreams can come true, if we have the courage to pursue them - Walt Disney",
    "The secret of getting ahead is getting started - Mark Twain",
    "The best time to plant a tree was 20 years ago. The second best time is now - Chinese Proverb",
    "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    "Magic is believing in yourself. If you can make that happen, you can make anything happen - Johann Wolfgang Von Goethe",
    "Hold the vision, trust the process.",
    "Hustle in silence and let your success make the noise.",
    "Great things are done by a series of small things brought together - Vincent Van Gogh",
    "It\'s not the load that breaks you down, it\'s the way you carry it - Lou Holtz"
]

function genNewQuote()
{
    var ranNum = Math.floor(Math.random() * (quotesArray.length));
    document.getElementById('displayQuote').innerHTML = quotesArray[ranNum];
}