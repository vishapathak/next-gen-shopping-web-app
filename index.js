// STEP 1: Ek function banao jo product details ko API se fetch kare aur webpage par dikhaye.
async function fetchProductDataAndRenderInHtml() {
    try {
        // STEP 2: `fetch` function ka use karke product details API (ek website jo data deti hai) se leke aao.
        const response = await fetch("https://dummyjson.com/products");

        // STEP 3: Response ko aise format (JSON) me badlo jo hum apne code me use kar sake.
        const formattedResponse = await response.json();

        // STEP 4: HTML element jisme products dikhana hai (`.cards` class) ko dhundo.
        const cardsContainer = document.querySelector(".cards");

        // STEP 5: Har product ko ek-ek karke dekho aur uska title, image, aur price nikalo.
        formattedResponse?.products?.forEach(product => {
            // Product ka naam (title) nikaalo.
            const title = product?.title;
            // Product ki image (thumbnail) nikaalo.
            const thumbnail = product?.thumbnail;
            // Product ki price nikaalo.
            const price = product?.price;

            // Ek card banao jisme yeh product ka data dikhaya ja sake.
            const card = document.createElement("span");
            card.classList.add("card"); // Card ko style karne ke liye class lagayi.

            // Card ke andar product ki details daldo.
            card.innerHTML = `
                <img src="${thumbnail}" alt="${title}" width="200" height="250">
                <h3>${title}</h3>
                <span>
                    <h3>$${price}</h3>
                    <button class="shop-button">Shop now</button>
                </span>
            `;

            // Card ko main container (jisme saare products dikhte hain) me add kar do.
            cardsContainer.appendChild(card);
        });
    } catch (error) {
        // Agar kuch galat ho gaya (jaise internet issue), toh ek error message dikhao.
        alert("Kuch gadbad ho gayi! Please baad me try karo.");
    }
}

// STEP 6: Ab function ko call karo taaki sab kuch kaam kare.
fetchProductDataAndRenderInHtml();
