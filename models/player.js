const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  user_name: [{ type: Schema.Types.ObjectId, ref: "User" }], // users will have access to player (characters) that they create
  name: { type: String, required: true },
  move_allow: { type: Number, required: false }, // This will vary depending on armor equipped
  strength: { type: String, required: true },
  dexterity: { type: String, required: true },
  hp: { type: Number, required: true },
  weapon: [{ type: Schema.Types.ObjectId, ref: "Weapon" }], // foreign key link to Weapon table
  armor: [{ type: Schema.Types.ObjectId, ref: "Armor" }], // foreign key to Armor table
  shield: [{ type: Schema.Types.ObjectId, ref: "Armor" }], // foreign key to Armor table
  life_status: { type: Number, required: true, default: 1 } // 1 is alive, 0 is dead (later we can introduce a status for unconscious)
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
