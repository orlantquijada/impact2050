import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      {/* <NavLink to="/">Home</NavLink>
			<NavLink to="/partner">About</NavLink>
			<NavLink to="/donor">Donor</NavLink> */}
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <div className="navbar-brand" href="#page-top">
            <img
              src={require("../img/SanduguanLogo.png")}
              style={{ width: "80px", height: "90px", margin: "0px" }}
            ></img>
            <a className="navbar-brand brand-name" href="#page-top">
              Sandugo
            </a>
          </div>
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarItem"
            aria-controls="navbarItem"
            aria-expand="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarItem">
            <ul className="navbar-nav ml-auto">
              <li
                className="nav-item padding"
                data-toggle="modal"
                data-target="#SignUp"
              >
                <a class="nav-link" href="#">
                  Sign-up
                </a>
              </li>
              <li className="nav-item" data-toggle="modal" data-target="#login">
                <button
                  type="button"
                  className="btn btn-red"
                  style={{
                    backgroundColor: "#a5243d"
                  }}
                >
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
