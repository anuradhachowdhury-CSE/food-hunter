import React from 'react'
import {NavLink} from 'react-router-dom'


const Navbar = () => {
  return (
  //   <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  //   <div class="container-fluid">
    
  //     <a class="navbar-brand food" href="#">Food Hunter</a><br/>
      
      
  //     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
  //       <span class="navbar-toggler-icon"></span>
  //     </button>
  //     <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
  //       <div class="offcanvas-header">
  //         {/* <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> */}
  //         <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  //       </div>
  //       <div class="offcanvas-body">
  //         <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
  //           <li class="nav-item">
  //             <NavLink className="nav-link"  to="/">
  //             Home
  //             </NavLink>
             
  //           </li>
  //           <li class="nav-item">
  //           <NavLink className="nav-link"  to="/menu">
  //             Menu
  //             </NavLink>
              
  //           </li>
  //           <li class="nav-item">
  //           <NavLink className="nav-link"  to="/contact">
  //             contact
  //             </NavLink>
              
  //           </li>
            
  //         </ul>
          
  //     </div>
  //     </div>
  //   </div>
  // </nav>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Food Hunter</a>
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