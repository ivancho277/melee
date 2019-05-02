import React from 'react';


function  CharacterCard(props){
  return (
<div>
  <div class="card" style={{width: 18 + 'rem'}}>
    <h3 class= 'card-text'>Crazy Ivan</h3>
    <img class="card-img-top" src={ props.src } alt="Card image cap"/>
     <div class="card-body">
     <div class= 'card'>stats</div>
      <p class="card-text">Is Cold and Dangerous in Mother Russia</p>
     </div>
  </div>
</div>
  )
}


export default CharacterCard;