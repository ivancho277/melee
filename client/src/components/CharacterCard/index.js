import React from 'react';


function  CharacterCard(props){
  return (
<div>
  <div class="card" style={{width: 18 + 'rem'}}>
    <img class="card-img-top" src={ props.src } alt="Card image cap"/>
     <div class="card-body">
      <p class="card-text">Is Cold and Dangerous in Mother Russia</p>
     </div>
  </div>
</div>
  )
}


export default CharacterCard;