import React, {useState, Component} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "../components/Footer.js";
import Home from "../components/Home.js";
import logo from "./images/app_logo.png"
import "./css/Nav.css"
import Typography from "@mui/material/Typography";

class Nav extends Component {
  render() {
    return (
      <nav className="navigation">
                  <img alt="logo" width = "20%" height = "120px" src={logo} className="logo"></img>
      <a href="/" className="broccoli">
        Broccoli & Co.
      </a>
      <button className="menu">
        {/* icon from heroicons.com */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

      </button>
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
      
        </ul>
      </div>
    </nav>

   );
  }
}
export default Nav;