let events = [
  { name: "Music", category: "Entertainment" },
  { name: "Coding", category: "Education" }
];

events.push({ name: "Cooking", category: "Lifestyle" });

const musicEvents = events.filter(e => e.category === "Entertainment");

const eventCards = events.map(e => `Upcoming: ${e.name}`);
console.log(eventCards);
