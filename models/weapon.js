const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  weapon: { type: String, required: true },
  damage: { type: Array, required: false }, // weapon damage is a die roll, but can easily be created as an array of numbers
  min_strength: { type: Number, required: true }, // higher the strength, stronger the weapon
  type: { type: String, required: true }, // choices are melee (1 hex away), pole (can jab 2 hex away), ranged, and beast
  throwable: { type: boolean, required: false, default: false }, // Can the item be thrown?
  twohands: { type: boolean, required: false, default: false }, // Does the item require two hands? (thus, no shield usable)
  notes: { type: String, required: false }
});
const Weapon = mongoose.model("Weapon", weaponSchema);

module.exports = Weapon;
