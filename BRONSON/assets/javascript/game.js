//------------------DATA-------------------//

// let broadsword = function() {
//   let damage = Math.floor(Math.random() * 12) + 1;
//   return damage;
// };

const broadSword = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function broadSwordRand() {
  let damage = broadSword[Math.floor(Math.random() * broadSword.length)];
  return damage;
  console.log(`Raw Damage from the broadSwordRand f(x) is ${damage}`);
}

let player1 = {
  playerId: 0,
  strength: 120,
  dexterity: 15,
  hitPoints: 120,
  armor: 0,
  initialAttackPower: 8,
  currentAttackPower: broadSwordRand(),
  playerName: "Thundarr",
  playerSide: "Fighter",

  updateAttackPower: function() {
    // this.currentAttackPower += this.initialAttackPower;
    this.currentAttackPower += 0;
  },
  updatehitPoints: function(attackerPower) {
    this.hitPoints -= attackerPower;
  },
  isAlive: function() {
    return this.hitPoints > 0;
  },
  resetPlayer: function() {
    this.currentAttackPower = this.initialAttackPower;
    this.hitPoints = this.strength;
  },
  lifePercentage: function() {
    if (this.hitPoints > 0) {
      return (this.hitPoints / this.strength) * 100;
    } else {
      return 0;
    }
  },
  attackerPowerPercentage: function() {
    return (this.currentAttackPower / 96) * 100; //Divide by max. attack power.
  }
};

const player2 = {
  playerId: 1,
  strength: 13,
  dexterity: 14,
  hitPoints: 13,
  armor: 1,
  initialAttackPower: 5,
  currentAttackPower: 5,
  playerName: "Wuf",
  playerSide: "Beast",

  updateAttackPower: function() {
    this.currentAttackPower += this.initialAttackPower;
  },
  updatehitPoints: function(attackerPower) {
    this.hitPoints -= attackerPower;
  },
  isAlive: function() {
    return this.hitPoints > 0;
  },
  resetPlayer: function() {
    this.currentAttackPower = this.initialAttackPower;
    this.hitPoints = this.strength;
  },
  lifePercentage: function() {
    if (this.hitPoints > 0) {
      return (this.hitPoints / this.strength) * 100;
    } else {
      return 0;
    }
  },
  attackerPowerPercentage: function() {
    return (this.currentAttackPower / 55) * 100; //Divide by max. attack power.
  }
};

const player3 = {
  playerId: 2,
  strength: 150,
  dexterity: 11,
  hitPoints: 150,
  armor: 2,
  initialAttackPower: 20,
  currentAttackPower: 20,
  playerName: "Bear",
  playerSide: "Beast",

  updateAttackPower: function() {
    this.currentAttackPower += this.initialAttackPower;
  },
  updatehitPoints: function(attackerPower) {
    this.hitPoints -= attackerPower;
  },
  isAlive: function() {
    return this.hitPoints > 0;
  },
  resetPlayer: function() {
    this.currentAttackPower = this.initialAttackPower;
    this.hitPoints = this.strength;
  },
  lifePercentage: function() {
    if (this.hitPoints > 0) {
      return (this.hitPoints / this.strength) * 100;
    } else {
      return 0;
    }
  },
  attackerPowerPercentage: function() {
    return (this.currentAttackPower / 160) * 100; //Divide by max. attack power.
  }
};

const player4 = {
  playerId: 3,
  strength: 15,
  dexterity: 13,
  hitPoints: 15,
  armor: 0,
  initialAttackPower: 25,
  currentAttackPower: 25,
  playerName: "Snek",
  playerSide: "Beast",

  updateAttackPower: function() {
    this.currentAttackPower += this.initialAttackPower;
  },
  updatehitPoints: function(attackerPower) {
    this.hitPoints -= attackerPower;
  },
  isAlive: function() {
    return this.hitPoints > 0;
  },
  resetPlayer: function() {
    this.currentAttackPower = this.initialAttackPower;
    this.hitPoints = this.strength;
  },
  lifePercentage: function() {
    if (this.hitPoints > 0) {
      return (this.hitPoints / this.strength) * 100;
    } else {
      return 0;
    }
  },
  attackerPowerPercentage: function() {
    return (this.currentAttackPower / 175) * 100; //Divide by max. attack power.
  }
};

//-------------- GLOBAL  -----------------------

const game = {
  attackerSelected: "",
  defenderSelected: "",
  isAttackerSelected: false,
  avaliablePlayers: [true, true, true, true],
  firstAttack: true,

  activateAttacker: function(player) {
    this.attackerSelected = player;
    this.avaliablePlayers[player.playerId] = false;
    this.attackerSelected.resetPlayer();
  },
  activateDefender: function(enemy) {
    this.defenderSelected = enemy;
    this.avaliablePlayers[enemy.playerId] = false;
    this.defenderSelected.resetPlayer();
  },
  resetAvaliablePlayers: function() {
    for (let index = 0; index < this.avaliablePlayers.length; index++) {
      this.avaliablePlayers[index] = true;
    }
  },
  existAvaliablePlayers: function() {
    for (let index = 0; index < this.avaliablePlayers.length; index++) {
      if (this.avaliablePlayers[index] === true) {
        return true;
      }
    }
    return false;
  }
};
//--------------GAME FUNTIONS--------------------
function selectPlayers(selectedPlayer) {
  if (selectedPlayer.id === "player1-img") {
    if (!game.isAttackerSelected) {
      game.activateAttacker(player1);
      console.log("Attacker is: " + this.player1);
    } else {
      game.activateDefender(player1);
      console.log("Defender is: " + this.player1);
    }
  } else if (selectedPlayer.id === "player2-img") {
    if (!game.isAttackerSelected) {
      game.activateAttacker(player2);
      console.log("Attacker is: " + this.player2);
    } else {
      game.activateDefender(player2);
      console.log("Defender is: " + this.player2);
    }
  } else if (selectedPlayer.id === "player3-img") {
    if (!game.isAttackerSelected) {
      game.activateAttacker(player3);
      console.log("Attacker is: " + player3);
    } else {
      game.activateDefender(player3);
      console.log("Defender is: " + player3);
    }
  } else if (selectedPlayer.id === "player4-img") {
    if (!game.isAttackerSelected) {
      game.activateAttacker(player4);
      console.log("Attacker is: " + player4);
    } else {
      game.activateDefender(player4);
      console.log("Defender is: " + player4);
    }
  }
}

function attackEnemy() {
  const rollToHit = Math.floor(Math.random() * 16) + 3;
  let attackResult;
  if (rollToHit === 3) {
    attackResult = 3;
  } else if (rollToHit === 4) {
    attackResult = 2;
  } else if (rollToHit === 5) {
    attackResult = 1;
  } else if (rollToHit === 16) {
    attackResult = 0;
  } else if (rollToHit === 17) {
    attackResult = -2;
  } else if (rollToHit === 18) {
    attackResult = -3;
  } else if (rollToHit <= game.attackerSelected.dexterity) {
    attackResult = 1;
  } else {
    attackResult = 0;
  }

  //   const enemyDamage = game.defenderSelected.currentAttackPower;
  //   const rawAttackerDamage = game.attackerSelected.currentAttackPower;
  const enemyDamage = game.defenderSelected.currentAttackPower;
  // let rawAttackerDamage = game.attackerSelected.currentAttackPower;
  const weaponDamage = broadSwordRand();
  const rawAttackerDamage = Math.max(weaponDamage * attackResult, 0);
  const adjAttackerDamage = Math.max(
    rawAttackerDamage - game.defenderSelected.armor,
    0
  );
  //   const rawAttackerDamage = broadswordDamage();
  console.log(`weaponDamage damage is ${weaponDamage}`);
  console.log(`rawAttackerDamage damage is ${rawAttackerDamage}`);
  console.log(`adjAttackerDamage damage is ${adjAttackerDamage}`);

  updateMessages(
    rollToHit,
    enemyDamage,
    weaponDamage,
    rawAttackerDamage,
    adjAttackerDamage,
    attackResult
  );

  game.defenderSelected.updatehitPoints(adjAttackerDamage);
  game.attackerSelected.updateAttackPower();

  if (!game.defenderSelected.isAlive()) {
    updatePlayerStats();
    if (game.existAvaliablePlayers()) {
      moveToNextPlayer();
    } else {
      winGame();
    }
  } else {
    game.attackerSelected.updatehitPoints(
      game.defenderSelected.currentAttackPower
    );
    updatePlayerStats();
    if (!game.attackerSelected.isAlive()) {
      gameOver();
    }
  }
}

function newGame() {
  game.attackerSelected = "";
  game.defenderSelected = "";
  game.isAttackerSelected = false;
  game.firstAttack = true;
  game.resetAvaliablePlayers();

  resetGameControls();
}

$(document).ready(function() {
  //------------SELECTING THE PLAYER AND THE ENEMY-------------//
  $("#player1-img").on("click", function() {
    selectPlayers(this);
    updatePlayer("obi");
  });
  $("#player2-img").on("click", function() {
    selectPlayers(this);
    updatePlayer("luke");
  });
  $("#player3-img").on("click", function() {
    selectPlayers(this);
    updatePlayer("sidious");
  });
  $("#player4-img").on("click", function() {
    selectPlayers(this);
    updatePlayer("maul");
  });

  $("#attackButton").on("click", function() {
    attackEnemy();
  });

  $("#restartButton").on("click", function() {
    newGame();
  });
});

//------------DOM MANIPULATION FUNCTIONS-------------//
function updatePlayer(player) {
  $("#" + player + "-img").css("pointer-events", "none");
  $("#" + player + "-img").css("cursor", "default");
  $("#" + player + "-button").css("display", "none");

  if (player === "obi") {
    $("#collapseOne").collapse("hide");
  } else if (player === "luke") {
    $("#collapseTwo").collapse("hide");
  } else if (player === "sidious") {
    $("#collapseThree").collapse("hide");
  } else if (player === "maul") {
    $("#collapseFour").collapse("hide");
  }

  if (!game.isAttackerSelected) {
    $("#" + player + "-card").addClass("border border-success");
    game.isAttackerSelected = true;
    $("#presentation").text("Select the Defender");
  } else {
    $("#" + player + "-card").addClass("border border-danger");

    //hide other cards.
    // hideRemainingCharacters();
    showControls();
    updatePlayerStats();
  }
}

function hideRemainingCharacters() {
  const avaliablePlayers = game.avaliablePlayers;

  for (let index = 0; index < avaliablePlayers.length; index++) {
    if (avaliablePlayers[index] === true) {
      $("#column-" + index).css("display", "all");
    }
  }
}

function showAvaliableCharacters() {
  const avaliablePlayers = game.avaliablePlayers;

  for (let index = 0; index < avaliablePlayers.length; index++) {
    if (avaliablePlayers[index] === true) {
      $("#column-" + index).css("display", "block");
    }
  }
}

function hideDefeatedCharacter() {
  // $("#column-" + game.defenderSelected.playerId).css("display", "all");
  $("#column-" + game.defenderSelected.playerId).addClass("grey-dead");
}

function showControls() {
  $("#information").css("display", "none");
  $("#attackButton").css("display", "block");
  $("#gameActions").css("display", "block");
  $("#gameActions").css("visibility", "hidden");

  //show progress attacker
  $("#Player" + (game.attackerSelected.playerId + 1) + "Stats").css(
    "display",
    "block"
  );

  //show progress defender
  $("#Player" + (game.defenderSelected.playerId + 1) + "Stats").css(
    "display",
    "block"
  );
}

function hideControls() {
  $("#information").css("display", "block");
  $("#attackButton").css("display", "none");
  $("#gameActions").css("display", "none");
  $("#gameActions").css("visibility", "hidden");
}

function updatePlayerStats() {
  //Update attacker
  $("#hp-progress-" + game.attackerSelected.playerId).css(
    "width",
    game.attackerSelected.lifePercentage() + "%"
  );
  $("#ap-progress-" + game.attackerSelected.playerId).css(
    "width",
    game.attackerSelected.attackerPowerPercentage() + "%"
  );

  //Update defender
  $("#hp-progress-" + game.defenderSelected.playerId).css(
    "width",
    game.defenderSelected.lifePercentage() + "%"
  );
  $("#ap-progress-" + game.defenderSelected.playerId).css("width", "100%");
}

function updateMessages(
  rollToHit,
  enemyDamage,
  weaponDamage,
  rawAttackerDamage,
  adjAttackerDamage,
  attackResult
) {
  if (game.firstAttack) {
    $("#gameActions").css("visibility", "visible");
    game.firstAttack = false;
  }
  let textAttackResult;
  switch (attackResult) {
    case 1:
      textAttackResult = "Hit!";
      break;
    case 0:
      textAttackResult = "missed....";
      break;
    case 2:
      textAttackResult = "DHit!!";
      break;
    case 3:
      textAttackResult = "THIT!!!";
      break;
    case -2:
      textAttackResult = "drop...";
      break;
    case -3:
      textAttackResult = "broke!";
      break;
    default:
      textAttackResult = "YOU SHOULDN'T SEE THIS";
      break;
  }
  $("#attacker").empty();
  $("#attacker").append(
    `You roll 3d6 to hit versus damage your dexterity of ${
      game.attackerSelected.dexterity
    } and get a ${rollToHit}.<br />
    You attacked ${
      game.defenderSelected.playerName
    } and ${textAttackResult} for ${rawAttackerDamage} damage.<br />His armor stops ${
      game.defenderSelected.armor
    } hit(s) of damage. Therefore the adjusted damage is ${adjAttackerDamage}.<br />The ${
      game.defenderSelected.playerName
    }'s Strength is ${game.defenderSelected.strength} and HPs are now ${game
      .defenderSelected.hitPoints - adjAttackerDamage}.`
  );
  $("#defender").text(
    game.defenderSelected.playerName +
      " attacked you back for " +
      enemyDamage +
      " damage."
  );
  emptyBins();
  // appendBins();
  $("#to-hit-roll").html(game.attackerSelected.dexterity);
  $("#attacker-roll").html(rollToHit);
  $("#to-hit-result").html(textAttackResult);
  $("#weapon-damage-raw").html(weaponDamage);
  $("#weapon-damage-adjusted").html(rawAttackerDamage);
  $("#defender-armor-protection").html(game.defenderSelected.armor);
  $("#defender-damage").html(adjAttackerDamage);
  $("#defender-strength").html(game.defenderSelected.strength);
  $("#defender-hit-points").html(
    game.defenderSelected.hitPoints - adjAttackerDamage
  );
}

function emptyBins() {
  $("to-hit-roll").empty();
  $("#attacker-roll").empty();
  $("#to-hit-result").empty();
  $("#weapon-damage-raw").empty();
  $("#weapon-damage-adjusted").empty();
  $("#defender-armor-protection").empty();
  $("#defender-damage").empty();
  $("#defender-strength").empty();
  $("#defender-hit-points").empty();
}

function appendBins() {
  $("#to-hit-roll").html(game.attackerSelected.dexterity);
  $("#attacker-roll").html(rollToHit);
  $("#to-hit-result").html(textAttackResult);
  $("#weapon-damage-raw").html(weaponDamage);
  $("#weapon-damage-adjusted").html(rawAttackerDamage);
  $("#defender-armor-protection").html(game.defenderSelected.armor);
  $("#defender-damage").html(adjAttackerDamage);
  $("#defender-strength").html(game.defenderSelected.strength);
  $("#defender-hit-points").html(
    game.defenderSelected.hitPoints - adjAttackerDamage
  );
}

function gameOver() {
  $("#presentation").text(
    "You have been defeated by " +
      game.defenderSelected.playerName +
      ". GAME OVER!!!"
  );
  hideControls();
  showReStart();
}

function winGame() {
  $("#presentation").text("You have defeated all your enemies. GAME OVER!!!");
  hideControls();
  showReStart();
}

function moveToNextPlayer() {
  hideControls();
  emptyBins();
  $("#presentation").text(
    "You defeated " +
      game.defenderSelected.playerName +
      ". Select your next opponent!"
  );
  hideDefeatedCharacter();
  showAvaliableCharacters();
  updatePlayerStats();
  game.firstAttack = true;
}

function showReStart() {
  $("#restartButton").css("display", "block");
}

function hideReStart() {
  $("#restartButton").css("display", "none");
}

function resetGameControls() {
  hideReStart();
  hideControls();
  $("#presentation").text("Fight Again!!!");
  showAvaliableCharacters();

  for (let index = 1; index <= 4; index++) {
    $("#Player" + index + "Stats").css("display", "none");
  }

  $("#player1-img").css("pointer-events", "auto");
  $("#player1-img").css("cursor", "pointer");
  $("#obi-button").css("display", "block");
  $("#obi-card").removeClass("border border-success");
  $("#obi-card").removeClass("border border-danger");

  $("#player2-img").css("pointer-events", "auto");
  $("#player2-img").css("cursor", "pointer");
  $("#luke-button").css("display", "block");
  $("#luke-card").removeClass("border border-success");
  $("#luke-card").removeClass("border border-danger");

  $("#player3-img").css("pointer-events", "auto");
  $("#player3-img").css("cursor", "pointer");
  $("#sidious-button").css("display", "block");
  $("#sidious-card").removeClass("border border-success");
  $("#sidious-card").removeClass("border border-danger");

  $("#player4-img").css("pointer-events", "auto");
  $("#player4-img").css("cursor", "pointer");
  $("#maul-button").css("display", "block");
  $("#maul-card").removeClass("border border-success");
  $("#maul-card").removeClass("border border-danger");
}

const fist = [0, 0, 1, 2, 3, 4];
const dagger = [0, 1, 2, 3, 4, 5];
const rapier = [1, 2, 3, 4, 5, 6];
const hammer = [2, 3, 4, 5, 6, 7];
const saber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shortsword = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const mace = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const smallAx = [3, 4, 5, 6, 7, 8];

const morningStar = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const twoHandedSword = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const battleaxe = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const javelin = [0, 1, 2, 3, 4, 5];
const spear = [3, 4, 5, 6, 7];
const halberd = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const pikeAxe = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const rock = [0, 0, 0, 0, 1, 2];
const sling = [0, 0, 1, 2, 3, 4];
const smallBow = [0, 1, 2, 3, 4, 5];
const horsebow = [1, 2, 3, 4, 5, 6];
const longbow = [3, 4, 5, 6, 7, 8];
const lightCrossbow = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const heavyCrossbow = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const bearClaw = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const wolfBite = [2, 3, 4, 5, 6, 7];
const gnakeBite = [2, 3, 4, 5, 6, 7];
const giantClub = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const gargoyleFist = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const dragonFire = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
