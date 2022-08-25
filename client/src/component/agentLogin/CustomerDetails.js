import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import MenuAgent from "../MenuAgent";
import HeaderAgent from "../HeaderAgent";
import { matchPath, NavLink } from "react-router-dom";
import { isAuth } from "../../auth/helpers";
const CustomerDetails = () => {
  const isActive = (path) => {
    if (matchPath.path === path) {
      return { color: "#000" };
    } else {
      return { color: "#fff" };
    }
  };

  const [getuserdata, setUserdata] = useState([]);

  const getdata = async () => {
    const res = await fetch("/api/getsheetsurveymay", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <HeaderAgent />
      <MenuAgent />
      <ToastContainer />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row mt-2">
              <NavLink
                style={{
                  color: "#2980b9",
                  fontWeight: "bolder",
                }}
                to="/agentlogin"
                className="btn btn"
              >
                <i
                  style={{ marginRight: "5px" }}
                  className="nav-icon fas fa-arrow-left"
                />
                Back
              </NavLink>
              <div style={{ fontSize: "12.3px" }} className="col-md-12">
                <div className="card card-dark mt-3">
                  <div className="card-header">
                    <h6 style={{ fontSize: "15px" }} className="card-title">
                      Customer details
                    </h6>
                  </div>
                  <div className="card-body">
                    <table className="table mt-2">
                      <thead
                        style={{ fontSize: "12.4px" }}
                        className="thead-dark"
                      >
                        <tr
                          style={{ color: "black" }}
                          className="table table-dark"
                        >
                          <th scope="col">#</th>
                          <th scope="col">Ticket Number</th>
                          <th scope="col">Employee Name</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Survey Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody style={{ fontSize: "12.4px" }}>
                        {getuserdata.map((element, id) => {
                          return (
                            <>
                              <tr key={element._id}>
                                <th scope="row" key={element._id + "97867"}>
                                  {id + 1}
                                </th>
                                <td key={element._id + "65fv"}>
                                  {element.ticketnumber}
                                </td>
                                <td key={element._id + "jh"}>
                                  {element.employeename}
                                </td>
                                <td key={element._id + "oh"}>
                                  {element.phone}
                                </td>
                                <td key={element._id + "8722"}>
                                  {element.status}
                                </td>

                                <td
                                  className="d-flex "
                                  key={element._id + "tt"}
                                >
                                  <NavLink to={`/may/survey/${element._id}`}>
                                    {" "}
                                    <button
                                      key={element._id + "97700"}
                                      style={{ margin: "3px" }}
                                      className="btn btn-primary"
                                    >
                                      <i className="nav-icon fas fa-edit" />
                                    </button>
                                  </NavLink>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CustomerDetails;
