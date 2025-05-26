function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0 ? "Available" : "Full";
};

const yogaEvent = new Event("Yoga Class", "2025-06-20", 10);
console.log(yogaEvent.checkAvailability());

console.log(Object.entries(yogaEvent));
