document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = {
    name: e.target.elements.username.value,
    email: e.target.elements.email.value,
    event: e.target.elements.event.value
  };

  document.getElementById("formMsg").textContent = "Submitting...";

  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); // simulate delay
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    });
    const result = await response.json();
    document.getElementById("formMsg").textContent = "Registered successfully!";
    console.log(result);
  } catch (error) {
    document.getElementById("formMsg").textContent = "Failed to register.";
    console.error(error);
  }
});
