import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="heading navbar-brand" href="/">Food Hunter</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        {/* <h5 className="offcanvas-title" id="offcanvasNavbarLabel">IGP Resume Maker</h5> */}
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1  navbar-dark bg-dark ">
          <li className="nav-item">
            <NavLink className="nav-link"  to="/">
            Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
            Menu </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
            Contact </NavLink>
          </li>
         
        </ul>
       
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar