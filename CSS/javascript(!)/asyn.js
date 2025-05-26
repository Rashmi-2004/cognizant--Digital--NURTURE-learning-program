<button onclick="loadEvents()">Load Events</button>
<div id="loading"></div>
<div id="output"></div>
JavaScript

javascript
Copy
Edit
function fetchEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Hackathon", category: "Tech" },
        { name: "Art Fair", category: "Art" }
      ]);
    }, 2000);
  });
}

async function loadEvents() {
  document.getElementById("loading").textContent = "Loading...";
  try {
    const events = await fetchEvents();
    const output = events.map(e => `<p>${e.name}</p>`).join("");
    document.getElementById("output").innerHTML = output;
  } catch (e) {
    console.error(e);
  } finally {
    document.getElementById("loading").textContent = "";
  }
}
