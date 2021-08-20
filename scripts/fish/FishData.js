// This is new code. Add this.

const fishCollection = [
  {
    species: "Discus (Symphysodon discus)",
    image: "discus.jpg",
    name: "Theodore",
    diet: "Omnivore",
    length: "8",
    waterType: "Salt",
    harvestLocation: "Rio Negro, Amazon",
  },
  {
    species: "Wolf Cichlid (Parachromis dovii)",
    image: "wolfcichlid.jpg",
    name: "Fido",
    diet: "Carnivore",
    length: "30",
    waterType: "Salt",
    harvestLocation: "Costa Rica",
  },
  {
    species: "Flowerhorn Cichlid (Paraneetroplus synspilus)",
    image: "flowerhorncichlid.jpg",
    name: "Daisy",
    diet: "Carnivore",
    length: "10",
    waterType: "Salt",
    harvestLocation: "Captivity",
  },
  {
    species: "Zebra Pleco (Hypancistrus zebra)",
    image: "zebrapleco.jpg",
    name: "Stripes",
    diet: "Omnivore",
    length: "4",
    waterType: "Salt",
    harvestLocation: "Rio Xingu, Brazil",
  },
  {
    species: "Black Ghost Knifefish (Apteronotus albifrons)",
    image: "blackghostknifefish.jpg",
    name: "Shadow",
    diet: "Carnivore",
    length: "20",
    waterType: "Salt",
    harvestLocation: "South America",
  },
  {
    species: "Arowana (Scleropages formosus)",
    image: "silverarowana.jpg",
    name: "Powder",
    diet: "Carnivore",
    length: "48",
    waterType: "Salt",
    harvestLocation: "Amazon River, Brazil",
  },
  {
    species: "Butterfly Fish (Chaetodontidae)",
    image: "butterflyfish.jpg",
    name: "Butter",
    diet: "Omnivore",
    length: "4",
    waterType: "Salt",
    harvestLocation: "Atlantic Ocean",
  },
  {
    species: "Clown Fish (Amphiriprioninge)",
    image: "clownfish.jpg",
    name: "Nemo",
    diet: "Omnivore",
    length: "3",
    waterType: "Salt",
    harvestLocation: "Great Barrier Reef, Australia",
  },
  {
    species: "Moray eel (Muraenidae)",
    image: "morayeel.jpg",
    name: "Slippy",
    diet: "Carnivore",
    length: "62",
    waterType: "Salt",
    harvestLocation: "South Pacific, Philippines",
  },
  {
    species: "Puffer fish (Tetraodontitae)",
    image: "pufferfish.jpg",
    name: "Spike",
    diet: "Omnivore",
    length: "24",
    waterType: "Salt",
    harvestLocation: "Japan",
  },
];

export const getFish = () => {
  return fishCollection;
};

export const getMostHolyFish = () => {
  const holyFishArray = [];

  for (const holy of fishCollection) {
    if (holy.length % 3 === 0) {
      holyFishArray.push(holy);
    }
  }
  return holyFishArray;
};

export const getSoldierFish = () => {
  const soldierFishArray = [];

  for (const soldier of fishCollection) {
    if (soldier.length % 5 === 0) {
      soldierFishArray.push(soldier);
    }
  }
  return soldierFishArray;
};

export const getUnworthy = () => {
  const unworthyArray = [];

  for (const unworthy of fishCollection) {
    if (unworthy.length % 3 != 0 && unworthy.length % 5 != 0) {
      unworthyArray.push(unworthy);
    }
  }
  return unworthyArray;
};
