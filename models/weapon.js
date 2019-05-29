const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  weapon: { type: String, required: true, default: "stick" },
  damage: { type: Array, required: false, default: [4, 4] }, // weapon damage is a die roll, but can easily be created as an array of numbers
  min_strength: { type: Number, required: true, default: 10 }, // higher the strength, stronger the weapon
  type: { type: String, required: true, default: "m" }, // choices are melee (1 hex away), pole (can jab 2 hex away), ranged, and beast
  throwable: { type: Boolean, required: false, default: false }, // Can the item be thrown?
  twohands: { type: Boolean, required: false, default: false }, // Does the item require two hands? (thus, no shield usable)
  img: { type: String, required: true, default: "MeleeGamePieces-14" },
  notes: { type: String, required: false, default: "moo" }
});
const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = Weapon;
