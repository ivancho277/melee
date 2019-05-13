const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const armorSchema = new Schema({
  armor: { type: String, required: true },
  absorbs: { type: Number, required: true },
  ma_decrement: { type: Number, required: false }, // Movement penalty on player equipped
  dex_decrement: { type: Number, required: true }, // Dexterity penalty on player equipped
  shield_boolean: { type: Boolean, required: true, default: false }, // 1 is a shield, 0 is body armor
  img: { type: String, required: true, default: "MeleeGamePieces-02" },
  notes: { type: String, required: false }
});

const Armor = mongoose.model("Armor", armorSchema);

module.exports = Armor;
