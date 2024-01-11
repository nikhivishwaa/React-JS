import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar(props) {
  let txtColor = props.mode==='light'?'text-dark':'text-light';
  const modeAlert = ()=>{
    props.alert(`${props.caps(props.mode==='light'?'dark':'light')} mode enabled`, 'success')
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} text-white`}>
  <div className="container-fluid">
    <NavLink className={`navbar-brand ${txtColor}`} to="/">Sigma Word</NavLink>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={`nav-link active ${txtColor}`} aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link ${txtColor}`} to="/about">About</NavLink>
        </li>
        </ul>
        <div className="form-check form-switch mx-5">
  <input className="form-check-input" onClick={props.toggle} type="checkbox" onClickCapture={modeAlert} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label ${txtColor}`} htmlFor="flexSwitchCheckDefault">{props.caps(props.mode)} Mode</label>
</div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
