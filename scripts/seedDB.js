const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/melee_db");

const weaponSeed = [
  {
    weapon: "Fist",
    damage: [0, 0, 1, 2, 3, 4],
    min_strength: 6,
    type: "M",
    throwable: false,
    twohands: false,
    notes: "No weapon? Throw a punch",
    date: new Date(Date.now())
  },
  {
    weapon: "Dagger",
    damage: [0, 1, 2, 3, 4, 5],
    min_strength: 8,
    type: "M",
    throwable: true,
    twohands: false,
    notes: "Everybody gets to carry 1 dagger, 3-8 dmg in HTH",
    date: new Date(Date.now())
  },
  {
    weapon: "Rapier",
    damage: [1, 2, 3, 4, 5, 6],
    min_strength: 9,
    type: "M",
    throwable: false,
    twohands: false,
    notes: "Zorro's favorite weapon!",
    date: new Date(Date.now())
  },
  {
    weapon: "Hammer",
    damage: [2, 3, 4, 5, 6, 7],
    min_strength: 10,
    type: "M",
    throwable: true,
    twohands: false,
    notes: "To you, everthing looks like a nail",
    date: new Date(Date.now())
  },
  {
    weapon: "Saber",
    damage: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    min_strength: 10,
    type: "M",
    throwable: false,
    twohands: false,
    notes: "aka Cutlass, Scimitar",
    img: "MeleeGamePieces-14",
    date: new Date(Date.now())
  },
  {
    weapon: "Shortsword",
    damage: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    min_strength: 11,
    type: "M",
    throwable: false,
    twohands: false,
    notes: "Favorite of Roman Legionnaires",
    date: new Date(Date.now())
  },
  {
    weapon: "Mace",
    damage: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    min_strength: 11,
    type: "M",
    throwable: true,
    twohands: false,
    notes: "Spiked ball on a stick - Potato Masher",
    date: new Date(Date.now())
  },
  {
    weapon: "Small Ax",
    damage: [3, 4, 5, 6, 7, 8],
    min_strength: 11,
    type: "M",
    throwable: true,
    twohands: false,
    notes: "Hatchet like",
    date: new Date(Date.now())
  },
  {
    weapon: "Broad Sword",
    damage: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    min_strength: 12,
    type: "M",
    throwable: false,
    twohands: false,
    notes: "Big Sword",
    date: new Date(Date.now())
  },
  {
    weapon: "Morning Star",
    damage: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    min_strength: 13,
    type: "M",
    throwable: false,
    twohands: false,
    notes: "Spiked ball swung from end of club",
    date: new Date(Date.now())
  },
  {
    weapon: "2 Handed Sword",
    damage: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    min_strength: 14,
    type: "M",
    throwable: false,
    twohands: true,
    notes: "Ned Stark's sword, aka Bastard Sword",
    date: new Date(Date.now())
  },
  {
    weapon: "Battleaxe",
    damage: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    min_strength: 15,
    type: "M",
    throwable: false,
    twohands: true,
    notes: "Giant ax",
    date: new Date(Date.now())
  },
  {
    weapon: "Javelin",
    damage: [0, 1, 2, 3, 4, 5],
    min_strength: 9,
    type: "P",
    throwable: true,
    twohands: true,
    notes: "",
    date: new Date(Date.now())
  },
  {
    weapon: "Spear",
    damage: [3, 4, 5, 6, 7],
    min_strength: 11,
    type: "P",
    throwable: true,
    twohands: true,
    notes: "",
    date: new Date(Date.now())
  },
  {
    weapon: "Halberd",
    damage: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    min_strength: 13,
    type: "P",
    throwable: false,
    twohands: true,
    notes: "Often comes with a Knight Gig that pulls folks off horses",
    date: new Date(Date.now())
  },
  {
    weapon: "Pike Axe",
    damage: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    min_strength: 15,
    type: "P",
    throwable: false,
    twohands: true,
    notes: "Remember that a charge attack adds 1 die, not double the damage",
    date: new Date(Date.now())
  },
  {
    weapon: "Rock",
    damage: [0, 0, 0, 0, 1, 2],
    min_strength: 6,
    type: "R",
    throwable: true,
    twohands: false,
    notes: "You can always pick up a rock!",
    date: new Date(Date.now())
  },
  {
    weapon: "Sling",
    damage: [0, 0, 1, 2, 3, 4],
    min_strength: 8,
    type: "R",
    throwable: false,
    twohands: true,
    notes: "Best used against Goliath",
    date: new Date(Date.now())
  },
  {
    weapon: "Small Bow",
    damage: [0, 1, 2, 3, 4, 5],
    min_strength: 9,
    type: "R",
    throwable: false,
    twohands: true,
    notes: "2 shots/turn if adjDX = 15+",
    img: "MeleeGamePieces-13",
    date: new Date(Date.now())
  },
  {
    weapon: "Horse bow",
    damage: [1, 2, 3, 4, 5, 6],
    min_strength: 10,
    type: "R",
    throwable: false,
    twohands: true,
    notes: "2 shots/turn if adjDX = 16+",
    date: new Date(Date.now())
  },
  {
    weapon: "Long bow",
    damage: [3, 4, 5, 6, 7, 8],
    min_strength: 11,
    type: "R",
    throwable: false,
    twohands: true,
    notes: "2 shots/turn if adjDX = 18+",
    date: new Date(Date.now())
  },
  {
    weapon: "Light Crossbow",
    damage: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    min_strength: 12,
    type: "R",
    throwable: false,
    twohands: true,
    notes: "Fires every other turn, every turn if adjDX 14+",
    date: new Date(Date.now())
  },
  {
    weapon: "Heavy Crossbow",
    damage: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    min_strength: 15,
    type: "R",
    throwable: false,
    twohands: true,
    notes: "Fires every 3rd turn, or every other turn if adjDX 14+",
    date: new Date(Date.now())
  },
  {
    weapon: "Bear Claw",
    damage: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    min_strength: 30,
    type: "B",
    throwable: false,
    twohands: true,
    notes: "Swat ya",
    date: new Date(Date.now())
  },
  {
    weapon: "Wolf Bite",
    damage: [2, 3, 4, 5, 6, 7],
    min_strength: 10,
    type: "B",
    throwable: false,
    twohands: true,
    notes: "Bite ya",
    date: new Date(Date.now())
  },
  {
    weapon: "Snake Bite",
    damage: [2, 3, 4, 5, 6, 7],
    min_strength: 12,
    type: "B",
    throwable: false,
    twohands: true,
    notes: "Snek ya",
    date: new Date(Date.now())
  },
  {
    weapon: "Giant's Club",
    damage: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    min_strength: 25,
    type: "B",
    throwable: false,
    twohands: true,
    notes: "Smath da beetlths",
    date: new Date(Date.now())
  },
  {
    weapon: "Gargoyle Fist",
    damage: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    min_strength: 20,
    type: "B",
    throwable: false,
    twohands: true,
    notes: "Rocklike Hands",
    date: new Date(Date.now())
  },
  {
    weapon: "Dragon Fire",
    damage: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    min_strength: 60,
    type: "B",
    throwable: false,
    twohands: true,
    notes: "He likes em crispy",
    date: new Date(Date.now())
  }
];

const thrallSeed = [
  {
    name: "Crazy Ivan",
    moveallow: 10,
    strength: 11,
    dexterity: 13,
    hp: 11,
    weapon: "Shortsword",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Jordapeno",
    moveallow: 10,
    strength: 12,
    dexterity: 12,
    hp: 12,
    weapon: "Long Bow",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Turnson Bronsquist",
    moveallow: 10,
    strength: 13,
    dexterity: 11,
    hp: 13,
    weapon: "Morning Star",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Chris P. Bacon",
    moveallow: 10,
    strength: 14,
    dexterity: 10,
    hp: 14,
    weapon: "2 Handed Sword",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Myrmidon",
    moveallow: 10,
    strength: 12,
    dexterity: 12,
    hp: 12,
    weapon: "Broadsword",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Martial Artist",
    moveallow: 10,
    strength: 9,
    dexterity: 15,
    hp: 9,
    weapon: "Rapier",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Thief",
    moveallow: 10,
    strength: 8,
    dexterity: 16,
    hp: 8,
    weapon: "Dagger",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Axman",
    moveallow: 10,
    strength: 15,
    dexterity: 9,
    hp: 15,
    weapon: "Battleaxe",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Archer",
    moveallow: 10,
    strength: 10,
    dexterity: 14,
    hp: 10,
    weapon: "Horse bow",
    armor: "Chainmail",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Crossbowman",
    moveallow: 10,
    strength: 12,
    dexterity: 12,
    hp: 12,
    weapon: "Light Crossbow",
    armor: "Leather",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Tank",
    moveallow: 10,
    strength: 10,
    dexterity: 14,
    hp: 10,
    weapon: "Hammer",
    armor: "Plate",
    shield: "LargeShield",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Crazy Ivan",
    moveallow: 12,
    strength: 15,
    dexterity: 16,
    hp: 15,
    weapon: "Heavy Crossbow",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Bear",
    moveallow: 10,
    strength: 30,
    dexterity: 11,
    hp: 30,
    weapon: "Bear Claw",
    armor: "BearPelt",
    shield: "",
    life_status: 1,
    img: "MeleeGamePieces-17",
    date: new Date(Date.now())
  },
  {
    name: "Wolf",
    moveallow: 10,
    strength: 10,
    dexterity: 14,
    hp: 10,
    weapon: "Wolf Bite",
    armor: "WolfHide",
    shield: "",
    life_status: 1,
    img: "MeleeGamePieces-19",
    date: new Date(Date.now())
  },
  {
    name: "Snake",
    moveallow: 6,
    strength: 12,
    dexterity: 12,
    hp: 12,
    weapon: "Snake Bite",
    armor: "",
    shield: "",
    life_status: 1,
    img: "MeleeGamePieces-20",
    date: new Date(Date.now())
  },
  {
    name: "Gargoyle",
    moveallow: 10,
    strength: 20,
    dexterity: 11,
    hp: 20,
    weapon: "Gargoyle Fist",
    armor: "GargoyleFlesh",
    shield: "",
    life_status: 1,
    img: "MeleeGamePieces-26",
    date: new Date(Date.now())
  },
  {
    name: "Giant",
    moveallow: 10,
    strength: 25,
    dexterity: 9,
    hp: 25,
    weapon: "Giant's Club",
    armor: "",
    shield: "",
    life_status: 1,
    date: new Date(Date.now())
  },
  {
    name: "Dragon",
    moveallow: 8,
    strength: 60,
    dexterity: 14,
    hp: 60,
    weapon: "Dragon Fire",
    armor: "DragonScales",
    shield: "",
    life_status: 1,
    img: "MeleeGamePieces-40",
    date: new Date(Date.now())
  }
];

const armorSeed = [
  {
    armor: "None",
    absorbs: 0,
    ma_decrement: 0,
    dex_decrement: 0,
    shield_boolean: false,
    notes: "No Armor",
    date: new Date(Date.now())
  },
  {
    armor: "Cloth",
    absorbs: 1,
    ma_decrement: 0,
    dex_decrement: 1,
    shield_boolean: false,
    notes: "Cloth Armor",
    date: new Date(Date.now())
  },
  {
    armor: "Leather",
    absorbs: 2,
    ma_decrement: 2,
    dex_decrement: 2,
    shield_boolean: false,
    notes: "Leather Armor",
    date: new Date(Date.now())
  },
  {
    armor: "Chainmail",
    absorbs: 3,
    ma_decrement: 4,
    dex_decrement: 3,
    shield_boolean: false,
    notes: "Chainmail Armor",
    date: new Date(Date.now())
  },
  {
    armor: "HalfPlate",
    absorbs: 4,
    ma_decrement: 4,
    dex_decrement: 4,
    shield_boolean: false,
    notes: "Half Plate Armor",
    date: new Date(Date.now())
  },
  {
    armor: "Plate",
    absorbs: 5,
    ma_decrement: 4,
    dex_decrement: 5,
    shield_boolean: false,
    notes: "Full Plate Armor",
    date: new Date(Date.now())
  },
  {
    armor: "SmallShield",
    absorbs: 1,
    ma_decrement: 0,
    dex_decrement: 0,
    shield_boolean: true,
    notes: "Small shield, almost a SwashBuckler",
    date: new Date(Date.now())
  },
  {
    armor: "LargeShield",
    absorbs: 2,
    ma_decrement: 0,
    dex_decrement: 1,
    shield_boolean: true,
    notes: "Big shield to hide behind",
    date: new Date(Date.now())
  },
  {
    armor: "BearPelt",
    absorbs: 2,
    ma_decrement: 2,
    dex_decrement: 5,
    shield_boolean: false,
    notes: "Thick fur",
    date: new Date(Date.now())
  },
  {
    armor: "WolfHide",
    absorbs: 1,
    ma_decrement: -2,
    dex_decrement: 5,
    shield_boolean: false,
    notes: "Wooly hide",
    date: new Date(Date.now())
  },
  {
    armor: "GargoyleFlesh",
    absorbs: 3,
    ma_decrement: 2,
    dex_decrement: 5,
    shield_boolean: false,
    notes: "Stone skin",
    date: new Date(Date.now())
  },
  {
    armor: "DragonScales",
    absorbs: 5,
    ma_decrement: 2,
    dex_decrement: 5,
    shield_boolean: false,
    notes: "Scaly armor",
    date: new Date(Date.now())
  }
];

db.Weapon.deleteMany({})
  .then(() => db.Weapon.collection.insertMany(weaponSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Armor.deleteMany({})
  .then(() => db.Armor.collection.insertMany(armorSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Thrall.deleteMany({})
  .then(() => db.Thrall.collection.insertMany(thrallSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
