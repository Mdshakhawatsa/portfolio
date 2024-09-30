import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faHome, faInfo, faBriefcase, faPaperPlane, faCogs } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";



const Navbar = () => {
  return (
    <div className="fixed md:mt-52 ">
      <ul className="menu">
        <li className="menu_list">
          {/* Use FontAwesomeIcon as a component */}
          <span className="front">
            <FontAwesomeIcon icon={faHome} />
          </span>
          <a href="#banner" className="side">Home</a>
          {/* <NavLink className="side" to="/">
            Home
          </NavLink> */}
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faInfo} />
          </span>
          <a href="#about" className="side">about</a>
          {/* <NavLink className="side" to="/About">
            About
          </NavLink> */}
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faCogs} />
          </span>
          <a href="#skill" className="side">Skill</a>
          {/* <NavLink className="side" to="/skill">
            Skill
          </NavLink> */}
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>
          <a href="#project" className="side">Projects</a>
          {/* <NavLink className="side" to="/projects">
            Projects
          </NavLink> */}
        </li>
        <li className="menu_list">
          <span className="front">
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
          <a href="#contact" className="side">Contact</a>
          {/* <NavLink className="side" to="/contact">
            Contact
          </NavLink> */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
