import React from "react";
import { Link, Outlet } from "react-router-dom";


export const NavBar =() =>{

  return (
<>
<div className="navbar-wrapper">
    <div className="marginleftnav">
    <div className="container" >
    <div className="d-flex justify-content-between navbar">
      <div>
    <img  className="logosize"src="./images/oasis.jpg" alt=""/>
      </div>
      <div className="navbar" id="nobullet">
     
           
          <li  className="me-4"><Link className="linkstyle" to="/#About"  >About Us</Link>
          </li>
          <li  className="me-4"><Link className="linkstyle" to="/#Programs"  >Programs</Link>
          </li>
          <li className="me-4"><Link className="linkstyle" to="/#Admissions" >Admissions</Link>
          </li>
        
          <li  className="me-4"><Link  to='/gallery' id="linkstyle1">Gallery</Link>
          </li>
         
          <Link to='/contact'>
        <button className="btn btn-outline-success" type="submit"  id="buttonstyle" >
           Contact Us
         </button>
          </Link>
   
      </div>
    </div>
  </div>
  </div>
  </div>
  <Outlet/>
</>


  );
}