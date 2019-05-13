# melee

A strategy based DnD style RPG game

#Psuedo code of game logic

- Each game continues until only 1 side is left alive
- A side in the game can have 1 or multiple players
- Games start in turn #1 and turns progress until the game is over
- Each turn is broken into action rounds. Every character that is alive is entitled to an action round (unless rendered frozen via a spell or other variation)
- The action rounds are divided into 2 phases, a movement phase and an attack phase.
- The order of movement in the movement phase is decided by a 1d6 roll for initiative. The winner can either move first or defer and move last.
- The movement phase ends after every player has an opportunity to move (or not)
- After the movment phase, the attack phase cycles through the players allowing them to attack (if possible). The order of attack is determined by Dexterity, highest DX goes first. In case of dexterity ties a random order intra-dexterity is defined

#Psuedo code of logic flow

- Each full turn is estimated to be taking 6 seconds of combat time
- Game will have a turn, starting in turnNumber = 1
- Each player will have fields that regulate flow:
  -- hasMoved: boolean, default false
  -- isEngaged: boolean, default false
  -- hasAttacked: boolean, default false // this is probably not necessary given the next two attributes but will leave in for now
  -- attackEligibleMelee: boolean, default true
  -- attackEligbleRanged, default true
  -- isProne: boolean, default false

- Game will have components that define the following slots, selectable by the game or the player as appropriate
  -- playerMoving = this selected
  -- playerAttacking = this selected
  -- playerDefending = this selected

#Psuedo code game cycle

- Random number generates order of move for each side (MVP is to not allow defer, highest rank in sort just goes first)
- All the sides (1 or multiple players) move, or not. Move logic is based on playerMoving selection (moves are one at a time)
- at start of move phase, all players that have isEngaged = true have attackEligbleRanged = false
- After move completion, all players hasMoved = true
- after move completion, all players who have moved > 50% of movement allowance are set attackEligibleMelee = false
- after move completion, all players who have moved > 1 hex are set attackEligibleRanged = false
  -- note: only ranged weapons can fire missiles (there are "thrown weapons" as well, but this will not be in MVP)
- during move round, players that have fallen can either stand up, or, crawl up to 2 spaces
- after each person has moved, the game will also set the following
- hasMoved: true, isEngaged (depending), hasFallen (if appropriate)
- During attack round, the game will start with dexterity = 20 and progress through all the players attack phase by counting down to 19 DX players, then 18 DX, etc untill all players have had their opportunity to attack. For players with the same dexterity, the game will randomly assign an attack order (basically another "roll for initiative")
- During attack round, a player who does not have a weapon equipped can ready a weapon, pick up a weapon from the ground, or do nothing
  -- note, there are "Defend" and "Dodge" options that can be set that aren't yet in the MVP
- The system will be selecting the playerAttacking, and the current playerAttacking will select who the playerDefending will be
  -- For melee attacks, the only playerDefending selection options are adjacent to the playerAttacking, and in the front 3 hexes
  -- For ranged attacks, the only playerDefending selction options are in the hexes in front of the playerAttacking (regardless of distance)
  -- The player attacks, and their values for attackEligbleMelee and attackEligibleRanged are set to false
  -- if the playerDefending has taken 8 or more hits, their stats are set hasFallen = true, hasAttacked = true, attackEligbleMelee = false = attackEligibleRanged(They are knocked to the ground)
  - the attack phase cycles through all players, and then at the end when all players have no eligible attacks remaining the phase ends and a new turn begins
    -- turnNumber++

data point | Turn | Move phase | Attack Phase
---------- | ---- | ---------- | ------------
Stage starts when	Game starts or previous turn completes |	Turn start logic completes|	Move phase logic completes
Stage completes when |	Attack phase  complete  |		All players moveEligible = false	 |	All players attackEligibleMelee && attackEligibleRanged = false (everyone has attacked)
Action precedence	 |None |		Teams roll for initiative and sort order is built.  Team winning move initiative sort have option to defer and be pushed to end of sort order	Dexterity sort, regardless of team assignment (ties broken by random initiative sort)
isEngaged	| If player is in front hex of opposing team player ? true : false	if = true, move only 1 (shift).  This can be any direction including away from enemy player (disengaging)	NA
moveEligible | 	if isProne = false ? true: false	When move round complete, give player option to face game piece any direction, then  set to false for that player	NA
attackEligibleMelee | 	if isProne = false ? true: false	if isProne = false && player moves 50% of Move allowance or less? true: false	when true, if player has melee or pole weapon equipped and an enemy is in range (front three hexes), player can attack.  After attack both attackEligibleMelee and attackEligibleRanged = false
attackEligibleRanged | 	if isProne && is Engaged = false? true: false	if isProne && is Engaged = false && player moves 0 or 1 hexes? true: false	when true, if player has ranged weapon equipped and an enemy in front of them, player can attack.  After attack both attackEligibleMelee and attackEligibleRanged = false
isProne | 	Set to false	if isProne = true, player can only: leave isProne = false and crawl up to 2 hexes OR stand up (set isProne = true)	NA
Player Choices |	NA	Move piece on hex game board (or no move at all, or stand up)	Attack any defender within range
iconFaceDirection | 	if Turn = 1, face randomly (xyz coords or 60 degree increments)	hypothetically if a player is isProne = true at the end of the move (player elects to crawl), facing is irrelevant	NA
teamAssigned | 	based on select logic, for now every player is their own team	Moves are team by team	NA
turnNumber | 	initializes at 1, then ++ upon completion of each turn	NA	NA
playerMoving | 	NA |		Rounds cycle through every member on team depending on initiative sort. (Team A move round, Team B move round, etc). Intrateam movement can be set to a randomized sort if we can't figure out how to tab between players on a team for action |		NA
playerAttacking | 	NA |		NA |		Rounds cycle through every member on team, based on dexterity
playerDefending |	NA |		NA |		selected by playerAttacking