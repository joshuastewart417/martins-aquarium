import { getLocations } from "../locations/LocationData.js";
import { locationCard } from "../locations/Location.js";

export const LocationList = () => {
  // References the ".tipList" class of section in index.html
  const contentElement = document.querySelector(".locationList");
  // Get the fish array
  const locations = getLocations();
  // Declare a variable to hold on to the fish HTML representation
  let locationHTML = "";
  // Loop over the array of fish
  for (const location of locations) {
    locationHTML += locationCard(location);
  }
  // Set the dom equal to the variable containing the fish html representations
  contentElement.innerHTML += `
        ${locationHTML}
    `;
};
