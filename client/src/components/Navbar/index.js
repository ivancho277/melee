import React from 'react'
import './style.css'

function Navbar() {
  return (
    <div>
    <nav className="nav">
    <button className="btn">
         <span className="badge badge-primary">Instructions</span>
    </button>
    <button className="btn">
         <span className="badge badge-primary">Start</span>
    </button>
      <a className="nav-link active" href="#">sign in</a>
      <a className="nav-link sctive" href="#">sign up</a>
      
    </nav>
    
      <h1 id="title-id">MELEE!!</h1> 
    </div>
  
  )
}

export default Navbar

