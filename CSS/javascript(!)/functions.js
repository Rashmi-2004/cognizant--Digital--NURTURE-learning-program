function addEvent(name, date, category) {
  return { name, date, category };
}

function registerUser(event) {
  console.log(`User registered for ${event.name}`);
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

// Closure to track total registrations per category
function registrationTracker() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const musicTracker = registrationTracker();
console.log(musicTracker());
console.log(musicTracker());
