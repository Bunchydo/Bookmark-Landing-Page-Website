let downArrow = document.querySelectorAll(".down-arrow");
downArrow.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    let faqItemsContainer = arrow.closest(".faq-display-flex");
    let answer = faqItemsContainer.querySelector(".faq-answers");
    let path = arrow.querySelector("path"); // ✅ select the <path>

    if (answer.style.display == "block") {
      answer.style.display = "none";
      arrow.style.transform = `rotate(0deg)`;
      path.setAttribute("stroke", "#5167de");
    } else {
      answer.style.display = "block";
      arrow.style.transform = `rotate(180deg)`;
      path.setAttribute("stroke", "#e91e63");
    }
  });
});

let titleClickDropDown = document.querySelectorAll(".title-click")
titleClickDropDown.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    let faqItemsContainer = dropdown.closest(".faq-display-flex");
    let answer = faqItemsContainer.querySelector(".faq-answers");
    let path = dropdown.querySelector("path"); // ✅ select the <path>

    if (answer.style.display == "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
     
    }
  });
});



let firstTabContainer = document.querySelector(".first-tab-span");

document.addEventListener("DOMContentLoaded", () => {
  firstTabContainer.classList.add("active-tab");
});
let featuresTabItems = document.querySelectorAll(".features-hover");
let tabImage = document.querySelector(".tab-image");
let imageUrls = [
  "images/illustration-features-tab-1.svg",
  "images/illustration-features-tab-2.svg",
  "images/illustration-features-tab-3.svg",
];
featuresTabItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (index == 0) {
      tabImage.src = imageUrls[0];

      //   if (item.style.borderBottom == "5px solid #eb5e60") {
      //     item.style.borderBottom = "none";
      //   } else {
      //     item.style.borderBottom = "5px solid #eb5e60";
      //   }
    }
    if (index == 1) {
      tabImage.src = imageUrls[1];
      //   if (item.style.borderBottom == "5px solid #eb5e60") {
      //     item.style.borderBottom = "none";
      //   } else {
      //     item.style.borderBottom = "5px solid #eb5e60";
      //   }
    }
    if (index == 2) {
      tabImage.src = imageUrls[2];
      //   if (item.style.borderBottom == "5px solid #eb5e60") {
      //     item.style.borderBottom = "none";
      //   } else {
      //     item.style.borderBottom = "5px solid #eb5e60";
      //   }
    }
    featuresTabItems.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    // Add active class to the clicked tab
    item.classList.add("active-tab");
  });
});

let newsletterForm = document.querySelector(".newsletter-third-row");

const emailInput = document.getElementById("emailInput");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page from reloading

  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

  if (emailPattern.test(email)) {
    console.log("Valid email:", email);
    // Proceed with form submission logic (e.g., send to server)
  } else {
    console.log("Invalid email");
    // Show error message or highlight the input
  }
});
