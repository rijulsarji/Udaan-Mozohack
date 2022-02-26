import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Components/navbar.css";

// image import
import udaanLogo from "../assets/udaanLogo.png";

function Navbar() {

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.sessionStorage.setItem("blind", toggle);
    if(toggle)
      window.alert(
        "This feature is for the visually impaired to assist them in using the websites.\nWebsite content can now be heard as you scroll on the home page. Along with this feature, the person can speak for navigating through the website.\nThe following commands are available:\nNavigate to/Go to Home page\nNavigate to/Go to Jobs page\nNavigate to/Go to Scholarships page\nNavigate to/Go to Heroes page"
      );
  }, [toggle])

  return (
    <div className="navbarBody">

      {/* left side of navbar */}
      <div className="leftNavbarSide"></div>
        <img src={udaanLogo} alt="udaan Logo" className="navbarUdaanLogo"/>

      {/* blind assist toggle */}
      <div className="navbarToggle">
        <input type="checkbox" onChange={() => setToggle( !toggle )}/>
        <span>For the visually impaired</span> 
      </div>

      {/* right side of navbar */}
      <div className="rightNavbarSide">
        <div className="navbarLinkContainer">
          <NavLink activeClassName="active" to="/" className="navbarLinks">Home</NavLink>
          {/* <NavLink activeClassName="active" to="/" className="navbarLinks">About</NavLink> */}
          <NavLink activeClassName="active" to="/jobs" className="navbarLinks">Jobs</NavLink>
          <NavLink activeClassName="active" to="/scholarships" className="navbarLinks">Scholarships</NavLink>
          <NavLink activeClassName="active" to="/" className="navbarLinks">Heroes</NavLink>
          {/* <NavLink activeClassName="active" to="/" className="navbarLinks">NGOs</NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;