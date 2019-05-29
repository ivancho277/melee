import icon35 from "../../pages/gamePieceImages/MeleeGamePieces-35.jpg";
import icon37 from "../../pages/gamePieceImages/MeleeGamePieces-37.jpg";
import icon32 from "../../pages/gamePieceImages/MeleeGamePieces-32.jpg";
import iconSnek from "../../pages/gamePieceImages/MeleeGamePieces-20.jpg";
import iconWuf from "../../pages/gamePieceImages/MeleeGamePieces-25.jpg";
import ivan from "../../pages/gamePieceImages/crazy-ivan.jpg";

export const CharToChoose = [
  {
    id: 1,
    name: "Crazy Ivan",
    hp: 11,
    strength: 11,
    dexterity: 13,
    adjDx: 10,
    weapon: "Short Sword",
    wDmg: "2d6-1",
    armor: "Leather Armor",
    shield: "Large Shield",
    armorAbsorbs: 4,
    adjMovement: 8,
    src: ivan
  },
  {
    id: 2,
    name: "JnastE",
    hp: 13,
    strength: 13,
    dexterity: 11,
    adjDx: 14,
    weapon: "Teeph!",
    wDmg: "1d6+1",
    armor: "Pelt",
    shield: "",
    armorAbsorbs: 1,
    adjMovement: 12,
    src: icon32
  },
  {
    id: 3,
    name: "Jordapeno",
    hp: 12,
    strength: 12,
    dexterity: 12,
    adjDx: 11,
    weapon: "Bear Claw",
    wDmg: "2d6+2",
    armor: "Hide",
    shield: "",
    armorAbsorbs: 2,
    adjMovement: 8,
    src: icon35
  },
  {
    id: 4,
    name: "Chris P. Bacon",
    hp: 14,
    strength: 14,
    dexterity: 10,
    adjDx: 12,
    weapon: "Fangs",
    wDmg: "1d6+1",
    armor: "",
    shield: "",
    armorAbsorbs: 0,
    adjMovement: 6,
    src: icon37
  }
];