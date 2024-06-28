import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo1.png";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="header sticky">
      <Link to="/">
        <div>
          <div className="logo-container" title="Go to home page!">
            <div className="col">
              <img
                className="logo"
                alt="logo"
                src={Logo}
                style={{ height: "65px", width: "65px" }}
              />
              <div className="text col">Wellness</div>
            </div>
          </div>
        </div>
      </Link>

      <div className="options">
        <Link
          className="option hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
          to="/"
        >
         HOME
        </Link>
        <Link
          className="option hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
          to="/scan-skin"
        >
          SCANSKIN
        </Link>
        <Link
          className="option hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
          to="/treatment"
        >
          TREATMENT
        </Link>
        <Link className="option" to="/places">
          PLACES
        </Link>

        {/* set current user to effect display */}
        <Link className="options" to="/farmers">
          <button className="get-started">
            <span className="get-started-btn">LOGIN</span>
            <span className="get-started-icon" size="10px"></span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
