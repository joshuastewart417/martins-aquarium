import { getFish } from "../fish/FishData.js";
import { fishCard } from "../fish/Fish.js";

export const FishList = () => {
  // References the ".fishList" class of section in index.html
  const contentElement = document.querySelector(".fishList");
  // Get the fish array
  const fishes = getFish();
  // Declare a variable to hold on to the fish HTML representation
  let fishHTML = "";
  // Loop over the array of fish
  for (const fish of fishes) {
    fishHTML += fishCard(fish);
  }
  // Set the dom equal to the variable containing the fish html representations
  contentElement.innerHTML += `
        ${fishHTML}
    `;
};
