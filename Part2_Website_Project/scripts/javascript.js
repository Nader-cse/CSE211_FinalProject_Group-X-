const budgetForm = document.getElementById("budget-form");

if (budgetForm) {
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const ticketPrice = Number(document.getElementById("tickets").value);
    const quantity = Number(document.getElementById("quantity").value);
    const travelCost = Number(document.getElementById("travel").value);
    const accommodationCost = Number(document.getElementById("accommodation").value);

    const totalCost =
      (ticketPrice * quantity) + travelCost + accommodationCost;

    document.getElementById("total-cost").textContent = totalCost.toFixed(2);
  });
}
 

const eventsContainer = document.getElementById("upcoming-events");

if (eventsContainer) {
  const events = [
    {
      name: "Tech Conference 2026",
      date: "2026-02-15",
      location: "Cairo",
      price: 1200
    },
    {
      name: "Music Festival",
      date: "2026-03-10",
      location: "Alexandria",
      price: 800
    },
    {
      name: "Startup Meetup",
      date: "2026-01-25",
      location: "Giza",
      price: 300
    }
  ];

  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p><strong>Price:</strong> ${event.price} EGP</p>
    `;

    eventsContainer.appendChild(card);
  });
}
