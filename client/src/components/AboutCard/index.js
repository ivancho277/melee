import React from "react";

function AboutCard() {
  return (
    <div>
      <div className="card text-left">
        <div className="card-body">
          <h4 className="card-title">
            About the Melee! <i>("May-Lay")</i>
          </h4>
          <p>
            Melee was designed by Steve Jackson, and was originally released in
            1977 as MicroGame #3 by Metagaming Concepts. At the time Jackson was
            getting involved with Dungeons & Dragons, but he found the
            various-sized dice irritating, and he found the combat rules
            confusing and unsatisfying, particularly the lack of tactics, so he
            designed Melee as something different. Jackson had originally joined
            the Society for Creative Anachronism to gain a more visceral
            understanding of actual combat, and based Melee on his studies of
            the SCA.
          </p>
          <p>
            When designing Melee, Jackson saw the possibility to expand it into
            a full fantasy roleplaying game that could compete with D&D, and
            thus, even before Melee was released, Metagaming started advertising
            that full RPG system, The Fantasy Trip. Jackson also put together
            the game system's magic rules, which were published as Wizard
            (1978), MicroGame #6.
          </p>
          <p>
            Metagaming published MicroQuest #1, Death Test (1978), which was a
            short adventure for use with Melee or Wizard. Jackson planned for
            The Fantasy Trip to be released as a boxed set, but publisher Howard
            M. Thompson decided that the price was too high and so he split the
            product into four books: Advanced Melee (1980), which had the combat
            extensions to the Melee system, Advanced Wizard (1980), which had
            the magic extensions, In the Labyrinth (1980), which had the Games
            Master rules, and Tollenkar's Lair (1980), which was a GM adventure.
          </p>
          <p>
            Jackson was unhappy with this change and left the company the same
            year and founded Steve Jackson Games. Metagaming later released
            Dragons of Underearth (1982), a roleplaying game which was a
            cut-down version of The Fantasy Trip, primarily based on the
            original Melee and Wizard rules.
          </p>
          <p>
            {" "}
            Metagaming released a number of small games in plastic bags held
            closed with cellophane tape. The game came with a blank hex map
            overlaid with "megahexes" (groupings of 7 standard hexes into larger
            tesselating shapes for fast range determination), a counter sheet of
            men and monsters, and a 16-page rulebook.
          </p>
          <p>
            After Metagaming went out of business, Steve Jackson's GURPS
            borrowed heavily from his first role-playing rule set The Fantasy
            Trip, with a similar minimal set of primary attributes to determine
            in-game results: Strength, Dexterity, Intelligence (which had been
            added in Wizard), and a new ability, Health (which was added to
            address shortcomings in the original damage system).
          </p>
          <img
            style={{ width: "300px" }}
            src={require("../../pages/gamePieceImages/MeleeGamePieces-40.jpg")}
            alt='pic'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
