// This is new code. Add this.

const fishCollection = [
  {
    name: "Dude",
    diet: "hot dogs",
    image: "clownfish.jpg",
    species: "fella",
    length: 8,
    waterType: "Salt",
    harvestLocation: "Australia",
  },
  {
    name: "Dudette",
    diet: "cold dogs",
    image: "clownfish.jpg",
    species: "chica",
    length: 6,
    waterType: "Brackish",
    harvestLocation: "Detroit",
  },
  {
    name: "Duderino",
    diet: "just dogs",
    image: "clownfish.jpg",
    species: "chile",
    length: 5,
    waterType: "Fresh",
    harvestLocation: "Kentucky",
  },
  {
    name: "Duderina",
    diet: "warm dogs",
    image: "clownfish.jpg",
    species: "hoss",
    length: 10,
    waterType: "Salt",
    harvestLocation: "Lebanon",
  },
];

export const getFish = () => {
  return fishCollection;
};
