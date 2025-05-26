index.html

html
Copy
Edit
<div id="eventsContainer"></div>
main.js

javascript
Copy
Edit
const events = [
  { name: "Music", date: "2025-06-10" },
  { name: "Yoga", date: "2025-06-15" }
];

const container = document.querySelector("#eventsContainer");

events.forEach(event => {
  const card = document.createElement("div");
  card.textContent = `${event.name} on ${event.date}`;
  container.appendChild(card);
});
