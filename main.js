//Task 2: Fetch Products from the API Using Fetch and Promises

const apiEndpoint = "https://www.course-api.com/javascript-store-products";
const productContainer = document.getElementById("product-container");
const errorMessage = document.getElementById("error-message");

fetch(apiEndpoint)
    .then((response) => {
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        displayProducts(data);
    })

    //Task 4: Handle Errors Gracefully

    .catch((error) => {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Products failed to load, please try again later.";
        console.error("Fetch error:", error);
    });

    //Task 3: Display Product Details Dynamically

    function displayProducts(products) {
        products.forEach((product) => {
            const { company, price, name} = product.fields;
            const imgUrl = product.fields.image[0].url;

            const productElement = document.createElement("div");
            productElement.className = "product";

            const img = document.createElement("img");
            img.src = imgUrl;
            img.alt = name; 
            
            const companyElement = document.createElement("p");
            companyElement.textContent = `Company: ${company}`;

            const nameElement = document.createElement("p");
            nameElement.textContent = `Product: ${name}`;

            const priceElement = document.createElement("p");
            priceElement.textContent = `Price: $${(price / 100).toFixed(2)}}`;

            productElement.appendChild(img);
            productElement.appendChild(companyElement);
            productElement.appendChild(nameElement);
            productElement.appendChild(priceElement);

            productContainer.appendChild(productElement);
        });
    }
