const quotes = [
  "Scrolling is stealing your time, focus on your goals!",
  "Every scroll takes you further from your dreams.",
  "Stop scrolling, start achieving!",
  "Scrolling won't get you where you want to be.",
  "Your future self will thank you for not scrolling.",
  "Time is precious, don't waste it scrolling.",
  "Scrolling is a distraction, stay focused.",
  "The more you scroll, the less you achieve.",
  "Scrolling is a habit, break it.",
  "Success comes to those who don't scroll.",
  "Social media can steal your time, but only if you let it. Protect your focus like it's gold.",
  "Scrolling through feeds won't build your dreams. Use your time to create, not just consume.",
  "The most successful people are too busy building their future to waste time on distractions.",
  "What you do with your time defines who you are. Social media is a tool, not a time thief.",
  "You can't reach your potential by scrolling through someone else's life.",
  "Time on social media can feel endless, but your dreams have deadlines.",
  "Success is earned in the real world, not the digital one. Choose your time wisely.",
  "Every minute spent mindlessly scrolling is a minute you could be working toward your goals.",
  "Don’t let the virtual world drain your real-world opportunities. Use your time to grow, not scroll.",
  "The more time you spend on social media, the less time you have to build the life you deserve.",
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

document.body.innerHTML = document.body.innerHTML = `
        <h1>This website is blocked.</h1>
        <p>${randomQuote}</p>
`;
const style = document.createElement("style");
style.innerHTML = `
    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        color: #333;
        text-align: center;
    }
    h1 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }
    p {
        font-size: 1.5em;
        max-width: 600px;
    }
`;
document.head.appendChild(style);

document.title = "Website has been blocked";
