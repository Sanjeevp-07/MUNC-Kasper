import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // your MUN-C logo image
import { FaCog, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo" src={logo} alt="Logo" />
        {/* <span className="logo-text">MUN-C<sup>™</sup></span> */}
      </div>
      <div className="navbar-right">
        <div className="icon-wrapper">
          <FaCog />
        </div>
        <div className="icon-wrapper">
          <FaBell />
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg" // replace with actual profile image if needed
          alt="Profile"
          className="profile-avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
