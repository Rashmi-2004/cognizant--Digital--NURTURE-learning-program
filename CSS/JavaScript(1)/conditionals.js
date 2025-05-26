const events = [
  { name: "Yoga", date: "2025-06-01", seats: 0 },
  { name: "Art", date: "2025-06-15", seats: 5 },
  { name: "Music", date: "2025-05-01", seats: 10 }
];

events.forEach(event => {
  const today = new Date();
  const eventDate = new Date(event.date);
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  } else {
    console.log(`Not shown: ${event.name}`);
  }
});

try {
  let registered = false;
  if (!registered) throw "Registration failed!";
  console.log("Registration successful!");
} catch (err) {
  console.error(err);
}
