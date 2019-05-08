# melee

A strategy based DnD style RPG game

#Psuedo code of Attack logic

- Each game continues until only 1 side is left alive
- A side in the game can have 1 or multiple players
- Games start in turn #1 and turns progress until the game is over
- Each turn is broken into action rounds. Every character that is alive is entitled to an action round (unless rendered frozen via a spell or other variation)
- The action rounds are divided into 2 phases, a movement phase and an attack phase.
- The order of movement in the movement phase is decided by a 1d6 roll for initiative. The winner can either move first or defer and move last.
