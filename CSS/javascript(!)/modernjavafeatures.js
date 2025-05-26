const defaultEvent = { name: "Unnamed", date: "TBD" };

function createEvent({ name = "Untitled", date = "Soon" } = {}) {
  console.log(`Event: ${name}, Date: ${date}`);
}

createEvent({ name: "Concert", date: "2025-07-01" });

const eventDetails = { name: "Seminar", category: "Education" };
const { name, category } = eventDetails;

const newEventList = [...events]; // Cloning with spread
console.log(newEventList);
