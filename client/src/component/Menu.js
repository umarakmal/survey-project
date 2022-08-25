import React, { useEffect } from "react";
import logo from "../images/logo3.png";
import { Link } from "react-router-dom";
import $ from "jquery";
const Menu = () => {
  // useEffect(() => {
  //   const trees = window.$('[data-widget="treeview"]');
  //   trees.Treeview("init");
  // }, []);

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
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item  mb-2">
                <Link to="/admin" className="nav-link">
                  <i
                    className="nav-icon fas fa-user"
                    style={{ color: "white", fontSize: "12px" }}
                  />
                  <p style={{ color: "white", fontSize: "12.4px" }}>
                    Dashboard
                  </p>
                </Link>
              </li>

              <li className="nav-item  mb-2">
                <Link to="/users" className="nav-link">
                  <i
                    className="nav-icon fas fa-users"
                    style={{ color: "white", fontSize: "12px" }}
                  />
                  <p style={{ color: "white", fontSize: "12.4px" }}>
                    Manage Users
                  </p>
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link to="#" className="nav-link ">
                  <i
                    className="nav-icon fas fa-database"
                    style={{ color: "white", fontSize: "12px" }}
                  />
                  <p style={{ color: "white", fontSize: "12.4px" }}>
                    Data Source
                    <i
                      className="right fas fa-angle-left"
                      style={{ color: "white", fontSize: "12px" }}
                    />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/createdatasource" className="nav-link ">
                      <i
                        className="far fa-circle nav-icon"
                        style={{ color: "white", fontSize: "7px" }}
                      />
                      <p style={{ color: "white", fontSize: "10.4px" }}>
                        Create Data Source
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/listdatasource" className="nav-link">
                      <i
                        className="far fa-circle nav-icon"
                        style={{ color: "white", fontSize: "7px" }}
                      />
                      <p style={{ color: "white", fontSize: "10.4px" }}>
                        List Data Source
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/dataupload" className="nav-link">
                      <i
                        className="far fa-circle nav-icon"
                        style={{ color: "white", fontSize: "7px" }}
                      />
                      <p style={{ color: "white", fontSize: "10.4px" }}>
                        Upload Data
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item mb-2">
                <Link to="/dataallocation" className="nav-link ">
                  <i
                    style={{ color: "white", fontSize: "12px" }}
                    className="nav-icon fas fa-sitemap "
                  ></i>
                  <p style={{ color: "white", fontSize: "12.4px" }}>
                    Data Allocation Management
                  </p>
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link to="#" className="nav-link ">
                  <i
                    className="nav-icon fas fa-question"
                    style={{ color: "white", fontSize: "12px" }}
                  />
                  <p style={{ color: "white", fontSize: "12.4px" }}>
                    Question
                    <i
                      className="right fas fa-angle-left"
                      style={{ color: "white", fontSize: "12px" }}
                    />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/createquestion" className="nav-link ">
                      <i
                        className="far fa-circle nav-icon"
                        style={{ color: "white", fontSize: "7px" }}
                      />
                      <p style={{ color: "white", fontSize: "10.4px" }}>
                        Create New Question
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/questionbank" className="nav-link">
                      <i
                        className="far fa-circle nav-icon"
                        style={{ color: "white", fontSize: "7px" }}
                      />
                      <p style={{ color: "white", fontSize: "10.4px" }}>
                        Question Bank
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item mb-2">
                <Link to="#" className="nav-link ">
                  <i
                    // <i class="fa-solid fa-square-poll-vertical"></i>
                    className="nav-icon fas fa-poll"
                    style={{ color: "white", fontSize: "12px" }}
                  />
                  <p style={{ color: "white", fontSize: "12.4px" }}>
                    Survey
                    <i
                      className="right fas fa-angle-left"
                      style={{ color: "white", fontSize: "12px" }}
                    />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/createsurvey" className="nav-link ">
                      <i
                        className="far fa-circle nav-icon"
                        style={{ color: "white", fontSize: "7px" }}
                      />
                      <p style={{ color: "white", fontSize: "10.4px" }}>
                        Create Survey
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/surveylist" className="nav-link">
                      <i
                        className="far fa-circle nav-icon"
                        style={{ color: "white", fontSize: "7px" }}
                      />
                      <p style={{ color: "white", fontSize: "10.4px" }}>
                        Survey List
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item mb-2">
                <Link to="#" className="nav-link ">
                  <i
                    // <i class="fa-solid fa-square-poll-vertical"></i>
                    className="nav-icon fas fa-envelope"
                    style={{ color: "white", fontSize: "12px" }}
                  />
                  <p style={{ color: "white", fontSize: "12.4px" }}>
                    Report
                    <i
                      className="right fas fa-angle-left"
                      style={{ color: "white", fontSize: "12px" }}
                    />
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/customerreport" className="nav-link ">
                      <i
                        className="far fa-circle nav-icon"
                        style={{ color: "white", fontSize: "7px" }}
                      />
                      <p style={{ color: "white", fontSize: "10.4px" }}>
                        Customer Report
                      </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/detailsreport" className="nav-link">
                      <i
                        className="far fa-circle nav-icon"
                        style={{ color: "white", fontSize: "7px" }}
                      />
                      <p style={{ color: "white", fontSize: "10.4px" }}>
                        Details Report
                      </p>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <div id="overlay-scrollbar"></div>
    </div>
  );
};

export default Menu;
