import React from 'react';
import './style.css'
import {PreMadeChar1, PreMadeChar2, PreMadeChar3, PreMadeChar4}  from '../PreMadeCharactersCard'


function  Jumbotron2(props){
  return (
<div>
 <div id= 'j2' class="jumbotron col-12">
 <div>
          <PreMadeChar1 stats={props.stats} src={props.src} name={props.name}/>
          <br></br>
          <PreMadeChar2 stats={props.stats} src={props.src} name={props.name}/>
          <br></br>
          <PreMadeChar3 stats={props.stats} src={props.src} name={props.name}/>
          <br></br>
          <PreMadeChar4 stats={props.stats} src={props.src} name={props.name}/>
          <br></br>
</div>
</div>
</div>
  )
}


export default Jumbotron2;