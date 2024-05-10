function filterCreation(type) {
  // Get all elements with class 'animals'
  var elements = document.querySelectorAll(".animals");

  // Loop through all elements
  elements.forEach(function (element) {
    // Check if the type is 'all'
    if (type === "all") {
      // If type is 'all', display all elements
      element.style.display = "block";
    } else {
      // Check if the element has the specified type class
      if (element.classList.contains(type)) {
        // If the element matches the specified type, display it
        element.style.display = "block";
      } else {
        // If the element does not match the specified type, hide it
        element.style.display = "none";
      }
    }

    // Check if either mammals or birds button is pressed
    var mammalButton = document.getElementById("mammalsMammals");
    var birdButton = document.getElementById("birdsBirds");
    var virtueButton = document.getElementById("virtue");
    var viceButton = document.getElementById("vice");

    // Check if birds and virtues are pressed
    if (
      birdButton.classList.contains("pressed") &&
      virtueButton.classList.contains("pressed")
    ) {
      // Display only birds with virtues
      if (
        element.classList.contains("bird") &&
        element.classList.contains("virtue")
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }

    // Check if birds and vices are pressed
    if (
      birdButton.classList.contains("pressed") &&
      viceButton.classList.contains("pressed")
    ) {
      // Display only birds with vices
      if (
        element.classList.contains("bird") &&
        element.classList.contains("vice")
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }

    // Check if mammals and virtues are pressed
    if (
      mammalButton.classList.contains("pressed") &&
      virtueButton.classList.contains("pressed")
    ) {
      // Display only mammals with virtues
      if (
        element.classList.contains("mammal") &&
        element.classList.contains("virtue")
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }

    // Check if mammals and vices are pressed
    if (
      mammalButton.classList.contains("pressed") &&
      viceButton.classList.contains("pressed")
    ) {
      // Display only mammals with vices
      if (
        element.classList.contains("mammal") &&
        element.classList.contains("vice")
      ) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  });
}

document.getElementById("virtue").addEventListener("click", function () {
  var isPressed = this.classList.toggle("pressed");
  if (isPressed) {
    // If Virtues button is pressed, unpress Vices button
    var viceButton = document.getElementById("vice");
    if (viceButton.classList.contains("pressed")) {
      viceButton.classList.remove("pressed");
    }
    // Press Virtues button
    this.classList.add("pressed");
    filterCreation("virtue");
  } else {
    // If Virtues button is released, show all
    filterCreation("all");
  }
});

document.getElementById("vice").addEventListener("click", function () {
  var isPressed = this.classList.toggle("pressed");
  if (isPressed) {
    // If Vices button is pressed, unpress Virtues button
    var virtueButton = document.getElementById("virtue");
    if (virtueButton.classList.contains("pressed")) {
      virtueButton.classList.remove("pressed");
    }
    // Press Vices button
    this.classList.add("pressed");
    filterCreation("vice");
  } else {
    // If Vices button is released, show all
    filterCreation("all");
  }
});

document
  .getElementById("mammalsMammals")
  .addEventListener("click", function () {
    var isPressed = this.classList.toggle("pressed");
    if (isPressed) {
      // If Mammals button is pressed, hide Birds button
      var birdButton = document.getElementById("birdsBirds");
      if (birdButton.classList.contains("pressed")) {
        birdButton.classList.remove("pressed");
      }
      // Press Mammals button
      this.classList.add("pressed");
      filterCreation("mammal");
    } else {
      // If Mammals button is released, show all
      filterCreation("all");
    }
  });

document.getElementById("birdsBirds").addEventListener("click", function () {
  var isPressed = this.classList.toggle("pressed");
  if (isPressed) {
    // If Birds button is pressed, hide Mammals button
    var mammalButton = document.getElementById("mammalsMammals");
    if (mammalButton.classList.contains("pressed")) {
      mammalButton.classList.remove("pressed");
    }
    // Press Birds button
    this.classList.add("pressed");
    filterCreation("bird");
  } else {
    // If Birds button is released, show Mammals
    filterCreation("all");
  }
});

document.getElementById("allShow").addEventListener("click", function () {
  // Remove "pressed" class from all buttons
  var buttons = document.querySelectorAll(".btn");
  buttons.forEach(function (button) {
    button.classList.remove("pressed");
  });
  // Reset the filter
  filterCreation("all");
});

function shuffleElements() {
  // Get all elements with class 'animals'
  var elements = document.querySelectorAll(".animals");

  // Convert NodeList to array for easier manipulation
  var elementsArray = Array.from(elements);

  // Shuffle the array
  elementsArray.sort(() => Math.random() - 0.5);

  // Loop through all elements and re-append them to the container in shuffled order
  var container = document.querySelector(".container");
  container.innerHTML = ""; // Clear the container
  elementsArray.forEach(function (element) {
    container.appendChild(element);
  });
}

// Call shuffleElements function when the page loads
window.addEventListener("load", shuffleElements);
