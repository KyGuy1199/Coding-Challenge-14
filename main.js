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
    } 
    
    

    finally {
        console.log("Fetch attemot completed.");
    }
}

fetchTickets();

function displayTickets(ticket) {
    tickets.forEach((ticket) => {
        const ticketElement = document.createElement("div");
        ticketElement.className = "ticket";

        const ticketId = document.createElement("p");
        ticketId.textContent = 'Ticket ID: ${ticket.id}';

        const customerName = document.createElement("p");
        customerName.textContent = 'Customer Name: User ${ticket.userId}';

        const issueDescription = document.createElement("p");
        issueDescription.textContent = 'Issue: ${ticket.title}';

        const details = document.createElement("p");
        details.textContent = 'Details: ${ticket.body}';

        ticketElement.appenedChild(ticketId);
        ticketElement.appenedChild(customerName);
        ticketElement.appenedChild(issueDescription);
        ticketElement.appenedChild(details);

        ticketContainer.appendChild(ticketElement);
    });
}