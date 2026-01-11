import React from 'react'
import {NavLink } from "react-router-dom";
export default function Navbar(props){
function handleChange(e) {
  const value = e.target.value;
  props.Mode(`${value}`)
}
    return(
        <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='Light Mode'?'light':'dark'} bg-${props.mode==='Light Mode'?'light':'dark'}`} style = {{width: '100%',height:'100%'}}>
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <NavLink  className='nav-link' id = "home" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className='nav-link' id= "about" to="/about">About</NavLink>
        </li>
      </ul>
        <div className="form-floating">
  <select onChange = {handleChange} className="form-select" style = {{width: '10rem'}} id="floatingSelect" aria-label="Floating label select example">
        <option className = "text-dark">White</option>
        <option className = "text-dark">Black</option>
        <option className = "text-danger">Red</option>
        <option className = "text-primary">Blue</option>
  </select>
  <label htmlFor="floatingSelect">Select Mode</label>
</div>
    </div>
  </div>
</nav>
        </>
    );
}
