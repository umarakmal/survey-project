import React, { useEffect } from "react";
import logo from "../images/logo3.png";
import { Link } from "react-router-dom";
import $ from "jquery";
const MenuAgent = () => {
  //   useEffect(() => {
  //     const trees = window.$('[data-widget="treeview"]');
  //     trees.Treeview("init");
  //   }, []);

  return (
    <div>
      <aside
        style={{ fontSize: "12px" }}
        className="main-sidebar sidebar-dark-primary elevation-4"
      >
        <a href="#" className="brand-link">
          <img
            src={logo}
            alt="Logo"
            className="brand-image"
            style={{ opacity: ".9", maxHeight: "43px" }}
          />
          <span className="brand-text font-weight-light invisible">Cogent</span>
        </a>
        <div className="sidebar">
          <nav className="mt-5">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="Agent"
              data-accordion="false"
            >
              <li className="nav-item  mb-2">
                <Link to="/agentlogin" className="nav-link">
                  <i
                    className="nav-icon fas fa-poll"
                    style={{ color: "white", fontSize: "12px" }}
                  />
                  <p style={{ color: "white" }}>My Survey</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div id="overlay-scrollbar"></div>
    </div>
  );
};

export default MenuAgent;
