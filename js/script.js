// Menu Data
const menuData = {
  starters: [
    {
      name: "Bruschetta",
      description:
        "Toasted bread topped with fresh tomatoes, garlic, and basil",
      price: "$8.99",
      image: "bruscketa.jpg.avif",
    },
    {
      name: "Calamari",
      description: "Crispy fried squid served with marinara sauce",
      price: "$12.99",
      image: "camalari.jpg.avif",
    },
    {
      name: "Caprese Salad",
      description:
        "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
      price: "$10.99",
      image: "Caprese.jpg.avif",
    },
  ],
  main: [
    {
      name: "Grilled Salmon",
      description:
        "Fresh Atlantic salmon with lemon butter sauce and seasonal vegetables",
      price: "$24.99",
      image: "salmon.jpg",
    },
    {
      name: "Beef Tenderloin",
      description:
        "8oz grass-fed beef with red wine reduction and mashed potatoes",
      price: "$32.99",
      image: "grass-fed.jpg",
    },
    {
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms and parmesan",
      price: "$18.99",
      image: "rice.jpg",
    },
  ],
  desserts: [
    {
      name: "Tiramisu",
      description:
        "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
      price: "$8.99",
      image: "tiramisu.jpg",
    },
    {
      name: "Chocolate Lava Cake",
      description:
        "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: "$9.99",
      image: "cakewithice-cream.jpg",
    },
    {
      name: "Crème Brûlée",
      description:
        "Classic French dessert with vanilla custard and caramelized sugar",
      price: "$8.99",
      image: "vanilla.jpg",
    },
  ],
};

// DOM Elements
const menuItemsContainer = document.querySelector(".menu-items");
const categoryButtons = document.querySelectorAll(".category-btn");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Menu Category Filter
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    const category = button.dataset.category;
    displayMenuItems(category);
  });
});

// Display Menu Items
function displayMenuItems(category) {
  menuItemsContainer.innerHTML = "";

  if (category === "all") {
    // Display all items
    Object.values(menuData)
      .flat()
      .forEach((item) => {
        createMenuItem(item);
      });
  } else {
    // Display items from selected category
    menuData[category].forEach((item) => {
      createMenuItem(item);
    });
  }
}

// Create Menu Item Card
function createMenuItem(item) {
  const menuItem = document.createElement("div");
  menuItem.className = "menu-item";
  menuItem.innerHTML = `
        <div class="menu-item-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="menu-item-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span class="price">${item.price}</span>
        </div>
    `;
  menuItemsContainer.appendChild(menuItem);
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
      // Close mobile menu after clicking
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// Form Submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Here you would typically send the form data to a server
  alert("Thank you for your message! We will get back to you soon.");
  contactForm.reset();
});

// Initialize menu with all items
displayMenuItems("all");

// Add scroll event listener for navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
  } else {
    navbar.style.backgroundColor = "var(--white)";
  }
});
