//------------------DATA-------------------//

// let broadsword = function() {
//   let damage = Math.floor(Math.random() * 12) + 1;
//   return damage;
// };

const broadSword = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function broadSwordRand() {
  let damage = broadSword[Math.floor(Math.random() * broadSword.length)];
  return damage;
}

let player1 = {
  playerId: 0,
  maxLifePoints: 120,
  currentLifePoints: 120,
  initialAttackPower: 8,
  currentAttackPower: broadSwordRand(),
  playerName: "Thundarr",
  playerSide: "Fighter",
  dexterity: 15,

  updateAttackPower: function() {
    // this.currentAttackPower += this.initialAttackPower;
    this.currentAttackPower += 0;
  },
  updateCurrentLifePoints: function(attackerPower) {
    this.currentLifePoints -= attackerPower;
  },
  isAlive: function() {
    return this.currentLifePoints > 0;
  },
  resetPlayer: function() {
    this.currentAttackPower = this.initialAttackPower;
    this.currentLifePoints = this.maxLifePoints;
  },
  lifePercentage: function() {
    if (this.currentLifePoints > 0) {
      return (this.currentLifePoints / this.maxLifePoints) * 100;
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
  maxLifePoints: 100,
  currentLifePoints: 100,
  initialAttackPower: 5,
  currentAttackPower: 5,
  playerName: "Wuf",
  playerSide: "Beast",
  dexterity: 14,
  armor: 1,

  updateAttackPower: function() {
    this.currentAttackPower += this.initialAttackPower;
  },
  updateCurrentLifePoints: function(attackerPower) {
    this.currentLifePoints -= attackerPower;
  },
  isAlive: function() {
    return this.currentLifePoints > 0;
  },
  resetPlayer: function() {
    this.currentAttackPower = this.initialAttackPower;
    this.currentLifePoints = this.maxLifePoints;
  },
  lifePercentage: function() {
    if (this.currentLifePoints > 0) {
      return (this.currentLifePoints / this.maxLifePoints) * 100;
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
  maxLifePoints: 150,
  currentLifePoints: 150,
  initialAttackPower: 20,
  currentAttackPower: 20,
  playerName: "Bear",
  playerSide: "Beast",

  updateAttackPower: function() {
    this.currentAttackPower += this.initialAttackPower;
  },
  updateCurrentLifePoints: function(attackerPower) {
    this.currentLifePoints -= attackerPower;
  },
  isAlive: function() {
    return this.currentLifePoints > 0;
  },
  resetPlayer: function() {
    this.currentAttackPower = this.initialAttackPower;
    this.currentLifePoints = this.maxLifePoints;
  },
  lifePercentage: function() {
    if (this.currentLifePoints > 0) {
      return (this.currentLifePoints / this.maxLifePoints) * 100;
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
  maxLifePoints: 180,
  currentLifePoints: 180,
  initialAttackPower: 25,
  currentAttackPower: 25,
  playerName: "Snek",
  playerSide: "Beast",

  updateAttackPower: function() {
    this.currentAttackPower += this.initialAttackPower;
  },
  updateCurrentLifePoints: function(attackerPower) {
    this.currentLifePoints -= attackerPower;
  },
  isAlive: function() {
    return this.currentLifePoints > 0;
  },
  resetPlayer: function() {
    this.currentAttackPower = this.initialAttackPower;
    this.currentLifePoints = this.maxLifePoints;
  },
  lifePercentage: function() {
    if (this.currentLifePoints > 0) {
      return (this.currentLifePoints / this.maxLifePoints) * 100;
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
  playerSelected: "",
  enemySelected: "",
  isPlayerSelected: false,
  avaliablePlayers: [true, true, true, true],
  firstAttack: true,

  activatePlayer: function(player) {
    this.playerSelected = player;
    this.avaliablePlayers[player.playerId] = false;
    this.playerSelected.resetPlayer();
  },
  activateEnemy: function(enemy) {
    this.enemySelected = enemy;
    this.avaliablePlayers[enemy.playerId] = false;
    this.enemySelected.resetPlayer();
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
  if (selectedPlayer.id === "obi-img") {
    if (!game.isPlayerSelected) {
      game.activatePlayer(player1);
    } else {
      game.activateEnemy(player1);
    }
  } else if (selectedPlayer.id === "luke-img") {
    if (!game.isPlayerSelected) {
      game.activatePlayer(player2);
    } else {
      game.activateEnemy(player2);
    }
  } else if (selectedPlayer.id === "sidious-img") {
    if (!game.isPlayerSelected) {
      game.activatePlayer(player3);
    } else {
      game.activateEnemy(player3);
    }
  } else if (selectedPlayer.id === "maul-img") {
    if (!game.isPlayerSelected) {
      game.activatePlayer(player4);
    } else {
      game.activateEnemy(player4);
    }
  }
}

function attackEnemy() {
  const rollToHit = Math.floor(Math.random() * 16) + 3;
  let attackResult = 0;
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
  } else if (rollToHit <= game.playerSelected.dexterity) {
    attackResult = 1;
    console.log(
      `You roll 3d6 to hit versus damage your dexterity of ${
        game.playerSelected.dexterity
      } and get a ${rollToHit}.`
    );
    console.log("YOU HIT!!!!");
  } else {
    attackResult = 0;
    console.log(
      `You roll 3d6 to hit versus damage your dexterity of ${
        game.playerSelected.dexterity
      } and get a ${rollToHit}.`
    );
    console.log("you missed");
  }

  //   var enemyDamage = game.enemySelected.currentAttackPower;
  //   var playerDamage = game.playerSelected.currentAttackPower;
  var enemyDamage = game.enemySelected.currentAttackPower;
  // let playerDamage = game.playerSelected.currentAttackPower;
  var playerDamage = Math.max(broadSwordRand() * attackResult, 0);
  var adjPlayerDamage = Math.max(playerDamage - game.enemySelected.armor, 0);
  //   const playerDamage = broadswordDamage();
  console.log(`playerDamage damage is ${playerDamage}`);
  console.log(`adjPlayerDamage damage is ${adjPlayerDamage}`);

  updateMessages(
    rollToHit,
    enemyDamage,
    playerDamage,
    adjPlayerDamage,
    attackResult
  );

  game.enemySelected.updateCurrentLifePoints(adjPlayerDamage);
  game.playerSelected.updateAttackPower();

  if (!game.enemySelected.isAlive()) {
    updatePlayerStats();
    if (game.existAvaliablePlayers()) {
      moveToNextPlayer();
    } else {
      winGame();
    }
  } else {
    game.playerSelected.updateCurrentLifePoints(
      game.enemySelected.currentAttackPower
    );
    updatePlayerStats();
    if (!game.playerSelected.isAlive()) {
      gameOver();
    }
  }
}

function newGame() {
  game.playerSelected = "";
  game.enemySelected = "";
  game.isPlayerSelected = false;
  game.firstAttack = true;
  game.resetAvaliablePlayers();

  resetGameControls();
}

$(document).ready(function() {
  //------------SELECTING THE PLAYER AND THE ENEMY-------------//
  $("#obi-img").on("click", function() {
    selectPlayers(this);
    updatePlayer("obi");
  });
  $("#luke-img").on("click", function() {
    selectPlayers(this);
    updatePlayer("luke");
  });
  $("#sidious-img").on("click", function() {
    selectPlayers(this);
    updatePlayer("sidious");
  });
  $("#maul-img").on("click", function() {
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

  if (!game.isPlayerSelected) {
    $("#" + player + "-card").addClass("border border-success");
    game.isPlayerSelected = true;
    $("#presentation").text("Select your Enemy!");
  } else {
    $("#" + player + "-card").addClass("border border-danger");
    //hide other cards.
    hideRemainingCharacters();
    showControls();
    updatePlayerStats();
  }
}

function hideRemainingCharacters() {
  var avaliablePlayers = game.avaliablePlayers;

  for (let index = 0; index < avaliablePlayers.length; index++) {
    if (avaliablePlayers[index] === true) {
      $("#column-" + index).css("display", "all");
    }
  }
}

function showAvaliableCharacters() {
  var avaliablePlayers = game.avaliablePlayers;

  for (let index = 0; index < avaliablePlayers.length; index++) {
    if (avaliablePlayers[index] === true) {
      $("#column-" + index).css("display", "block");
    }
  }
}

function hideDefeatedCharacter() {
  $("#column-" + game.enemySelected.playerId).css("display", "all");
}

function showControls() {
  $("#information").css("display", "none");
  $("#attackButton").css("display", "block");
  $("#gameActions").css("display", "block");
  $("#gameActions").css("visibility", "hidden");

  //show progress attacker
  $("#Player" + (game.playerSelected.playerId + 1) + "Stats").css(
    "display",
    "block"
  );

  //show progress defender
  $("#Player" + (game.enemySelected.playerId + 1) + "Stats").css(
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
  $("#hp-progress-" + game.playerSelected.playerId).css(
    "width",
    game.playerSelected.lifePercentage() + "%"
  );
  $("#ap-progress-" + game.playerSelected.playerId).css(
    "width",
    game.playerSelected.attackerPowerPercentage() + "%"
  );

  //Update defender
  $("#hp-progress-" + game.enemySelected.playerId).css(
    "width",
    game.enemySelected.lifePercentage() + "%"
  );
  $("#ap-progress-" + game.enemySelected.playerId).css("width", "100%");
}

function updateMessages(
  rollToHit,
  enemyDamage,
  playerDamage,
  adjPlayerDamage,
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
      textAttackResult = "Hit for Double Damage!!";
      break;
    case 3:
      textAttackResult = "HIT FOR TRIPLE DAMAGE!!!";
      break;
    case -2:
      textAttackResult = "DROPPED YOUR WEAPON...";
      break;
    case -3:
      textAttackResult = "BROKE YOUR WEAPON!!!!";
      break;
    default:
      textAttackResult = "YOU SHOULDN'T SEE THIS";
      break;
  }
  $("#attacker").empty();
  $("#attacker").append(
    `You roll 3d6 to hit versus damage your dexterity of ${
      game.playerSelected.dexterity
    } and get a ${rollToHit}.<br />
    You attacked ${
      game.enemySelected.playerName
    } and ${textAttackResult} for ${playerDamage} damage.<br />His armor stops ${
      game.enemySelected.armor
    } hit(s) of damage. Therefore the adjusted damage is ${adjPlayerDamage}.<br />The ${
      game.enemySelected.playerName
    }'s Strength is ${game.enemySelected.maxLifePoints} and HPs are now ${game
      .enemySelected.currentLifePoints - adjPlayerDamage}.`
  );
  $("#defender").text(
    game.enemySelected.playerName +
      " attacked you back for " +
      enemyDamage +
      " damage."
  );
  $("to-hit-roll").empty();
  $("#attacker-roll").empty();
  $("#to-hit-result").empty();
  $("#weapon-damage-raw").empty();
  $("#weapon-damage-adjusted").empty();
  $("#defender-armor-protection").empty();
  $("#defender-damage").empty();
  $("#defender-strength").empty();
  $("#defender-hit-points").empty();
  $("#to-hit-roll").html(game.playerSelected.dexterity);
  $("#attacker-roll").html(rollToHit);
  $("#to-hit-result").html(textAttackResult);
  $("#weapon-damage-raw").html("tbd");
  $("#weapon-damage-adjusted").html(playerDamage);
  $("#defender-armor-protection").html(game.enemySelected.armor);
  $("#defender-damage").html(adjPlayerDamage);
  $("#defender-strength").html(game.enemySelected.maxLifePoints);
  $("#defender-hit-points").html(
    game.enemySelected.currentLifePoints - adjPlayerDamage
  );
}

function gameOver() {
  $("#presentation").text(
    "You have been defeated by " +
      game.enemySelected.playerName +
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
  $("#presentation").text(
    "You defeated " +
      game.enemySelected.playerName +
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

  $("#obi-img").css("pointer-events", "auto");
  $("#obi-img").css("cursor", "pointer");
  $("#obi-button").css("display", "block");
  $("#obi-card").removeClass("border border-success");
  $("#obi-card").removeClass("border border-danger");

  $("#luke-img").css("pointer-events", "auto");
  $("#luke-img").css("cursor", "pointer");
  $("#luke-button").css("display", "block");
  $("#luke-card").removeClass("border border-success");
  $("#luke-card").removeClass("border border-danger");

  $("#sidious-img").css("pointer-events", "auto");
  $("#sidious-img").css("cursor", "pointer");
  $("#sidious-button").css("display", "block");
  $("#sidious-card").removeClass("border border-success");
  $("#sidious-card").removeClass("border border-danger");

  $("#maul-img").css("pointer-events", "auto");
  $("#maul-img").css("cursor", "pointer");
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
