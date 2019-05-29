import React, { Component } from "react";
import CSS from "./index.css"

class CombatStats extends Component {


    render() {
        return (
            <div class ="CombatStats">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Attacker Dexterity</th>
                        <th scope="col">3d6 Roll to hit:</th>
                        <th scope="col">Roll Result:</th>
                        <th scope="col">Weapon Damage (raw):</th>
                        <th scope="col">Weapon Damage (adjusted):</th>
                        <th scope="col">Defender Armor Protect:</th>
                        <th scope="col">Adjusted Damage:</th>
                        <th scope="col">Defender Strength:</th>
                        <th scope="col">Defender Hit Points:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>statshere</td>
                        {/* cell A */}
                        <td>statshere</td>
                        {/* cell B */}
                        <td>statshere</td>
                        {/* cell C */}
                        <td>statshere</td>
                        {/* cell D */}
                        <td>statshere</td>
                        {/* cell E */}
                        <td>statshere</td>
                        {/* cell F */}
                        <td>statshere</td>
                        {/* cell G */}
                        <td>statshere</td>
                        {/* cell H */}
                        <td>statshere</td>
                        {/* cell I */}
                    </tr>
                </tbody>
            </table>
            </div>




        )
    }


}

export default CombatStats;