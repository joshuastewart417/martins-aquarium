import { getTips } from "../tips/tipData.js";
import { tipCard } from "../tips/Tip.js";

export const TipsList = () => {
  // References the ".tipList" class of section in index.html
  const contentElement = document.querySelector(".tipsList");
  // Get the fish array
  const tips = getTips();
  // Declare a variable to hold on to the fish HTML representation
  let tipHTML = "";
  // Loop over the array of fish
  for (const tip of tips) {
    tipHTML += tipCard(tip);
  }
  // Set the dom equal to the variable containing the fish html representations
  contentElement.innerHTML += `
        ${tipHTML}
    `;
};
