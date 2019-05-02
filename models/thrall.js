const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const thrallSchema = new Schema({
  name: { type: String, required: true },
  moveallow: { type: Number, required: false },
  strength: { type: String, required: true },
  dexterity: { type: String, required: true },
  hp: { type: Number, required: true },
  weapon: { type: String, required: false }, // Thralls will have hardcoaded weapons (or claws or teeth)
  armor: { type: String, required: false }, // Thralls will have hardcoded armor (or fur or scales)
  shield: { type: String, required: false }, // Thralls shouldn't have a shield, for now
  life_status: { type: Number, required: true, default: 1 }
});

const Thrall = mongoose.model("thrall", thrallSchema);

module.exports = Thrall;
