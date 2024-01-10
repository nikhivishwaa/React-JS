import React from 'react'

export default function Navbar(props) {
  let txtColor = props.mode==='light'?'text-dark':'text-light';
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} text-white`}>
  <div className="container-fluid">
    <a className={`navbar-brand ${txtColor}`} href="/">Sigma Word</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active ${txtColor}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${txtColor}`} href="/">Link</a>
        </li>
        </ul>
        <div className="form-check form-switch mx-5">
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
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
