import React from "react";
import "./index.css";
const Navbar = ()=>
{
    return (
      <div className="nav" >
            <nav className="navbar navbar-expand-lg ">
  <a className="navbar-brand" href="#">START BOOTSTRAP</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link me-3" href="#">Portfolio <span className="sr-only"></span></a>
      <a className="nav-item nav-link  me-3" href="#">About</a>
      <a className="nav-item nav-link  me-3" href="#">Contact</a>
      
    </div>
  </div>
</nav>
        </div>
    )
}
export default Navbar;