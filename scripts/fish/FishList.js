import {
  getFish,
  getMostHolyFish,
  getSoldierFish,
  getUnworthy,
} from "../fish/FishData.js";
import { fishCard } from "../fish/Fish.js";

const holy = getMostHolyFish();
const soldier = getSoldierFish();
const unworthy = getUnworthy();

export const FishList = () => {
  const holyElement = document.querySelector(".holyList");
  const soldierElement = document.querySelector(".soldierList");
  const unworthyElement = document.querySelector(".unworthyList");
  // const fishes = getFish();

  let holyHTML = "";
  let soldierHTML = "";
  let unworthyHTML = "";

  // for (const fish of fishes) {
  //   fishHTML += fishCard(fish);
  // }
  holy.forEach((fish_holy) => {
    holyHTML += fishCard(fish_holy);
  });
  soldier.forEach((fish_soldier) => {
    soldierHTML += fishCard(fish_soldier);
  });
  unworthy.forEach((fish_unworthy) => {
    unworthyHTML += fishCard(fish_unworthy);
  });
  // Set the dom equal to the variable containing the fish html representations
  holyElement.innerHTML += `
        ${holyHTML}
    `;
  soldierElement.innerHTML += `
        ${soldierHTML}
    `;
  unworthyElement.innerHTML += `
        ${unworthyHTML}
    `;
};
