//Task 2: Fetch Tickets Using Async/Await and Handle Errors

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";
const ticketContainer = document.getElementById("ticket-container");
const errorMessage = document.getElementById("error-message");

async function fetchTickets() {
    try {
        const response = await fetch(apiEndpoint);

        if(!response.ok) {
            throw new Error("Failed to fetch tickets. Please try again later.");
        }
    const tickets = await response.json();

    if(!tickets.length) {
        throw new Error("No tickets available.");
        }
    
    displayTickets(tickets);
    } catch(error) {
        errorMessage.style.display = "block";
        errorMessage.textContent = error.message;
        console.error("Fetch error:", error);
    } finally {
        console.log("Fetch attemot completed.");
    }
}

fetchTickets();