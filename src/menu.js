import backgroundImage from "./images/hamburger-4095155_1280.jpg";

export function insertMenu() {
  const content = document.getElementById("content");

  const menuTab = document.createElement("div");
  menuTab.classList.add("menuTab");

  // Function to create a card
  function createCard(title, description, price) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = backgroundImage;
    image.alt = "Hamburger";

    const menuDescription = document.createElement("div");
    menuDescription.classList.add("menuDescription");

    const h1 = document.createElement("h1");
    h1.textContent = title;

    const h3Description = document.createElement("h3");
    h3Description.textContent = description;

    const h3Price = document.createElement("h3");
    h3Price.textContent = price;

    menuDescription.appendChild(h1);
    menuDescription.appendChild(h3Description);
    menuDescription.appendChild(h3Price);

    card.appendChild(image);
    card.appendChild(menuDescription);

    return card;
  }

  // Creating and appending cards
  menuTab.appendChild(
    createCard(
      "Classic Cheeseburger",
      "100g beef patty, cheddar cheese, lettuce, tomato, pickles, and special sauce",
      "7.99€"
    )
  );
  menuTab.appendChild(
    createCard(
      "BBQ Bacon Burger",
      "150g beef patty, smoked bacon, cheddar cheese, onion rings, BBQ sauce, and lettuce",
      "8.99€"
    )
  );
  menuTab.appendChild(
    createCard(
      "Spicy Jalapeno Burger",
      "120g beef patty, pepper jack cheese, jalapenos, lettuce, tomato, and chipotle mayo",
      "8.50€"
    )
  );
  menuTab.appendChild(
    createCard(
      "Avocado Bacon Burger",
      "150g beef patty, crispy bacon, fresh avocado slices, Swiss cheese, lettuce, tomato, and garlic aioli",
      "9.75€"
    )
  );

  content.appendChild(menuTab);
}

insertMenu();
