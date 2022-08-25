import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import MenuAgent from "../MenuAgent";
import HeaderAgent from "../HeaderAgent";
import { matchPath, NavLink } from "react-router-dom";
import { isAuth } from "../../auth/helpers";
const AgentPage = () => {
  const isActive = (path) => {
    if (matchPath.path === path) {
      return { color: "#000" };
    } else {
      return { color: "#fff" };
    }
  };

  const [getuserdata, setUserdata] = useState([]);

  const getdata = async () => {
    const res = await fetch("/api/getsheetdetails", {
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

  const deleteuser = async (id) => {
    const res2 = await fetch(`/api/sheet/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();
    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      toast.success("Deleted Successfully!");
      getdata();
    }
  };
  return (
    <>
      <HeaderAgent />
      <MenuAgent />
      <ToastContainer />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row mt-2">
              <div style={{ fontSize: "12.3px" }} className="col-md-12">
                <div className="card card-dark mt-3">
                  <div className="card-header">
                    <h6 style={{ fontSize: "15px" }} className="card-title">
                      My Active Campaign ( {isAuth().name} )
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
                          <th scope="col">Survey Name</th>
                          <th scope="col">Start Date</th>
                          <th scope="col">End Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Total Records</th>
                          <th scope="col">Survey Completed</th>
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
                                  {element.surveyname}
                                </td>
                                <td key={element._id + "jh"}>
                                  {element.startdate}
                                </td>
                                <td key={element._id + "oh"}>
                                  {element.enddate}
                                </td>
                                <td key={element._id + "8722"}>
                                  {element.status}
                                </td>
                                <td key={element._id + "87hk"}>
                                  {element.totalrecord}
                                </td>
                                <td key={element._id + "8722"}>
                                  {element.surveycompleted}
                                </td>
                                <td
                                  className="d-flex "
                                  key={element._id + "tt"}
                                >
                                  <NavLink to={`sheet/survey/${element._id}`}>
                                    {" "}
                                    <button
                                      key={element._id + "97700"}
                                      style={{ margin: "3px" }}
                                      className="btn btn-primary"
                                    >
                                      <i className="nav-icon fas fa-users" />
                                    </button>
                                  </NavLink>

                                  {isAuth()._id === element._id ? (
                                    <button
                                      key={element._id + "8514"}
                                      style={{
                                        margin: "3px",
                                        display: "none",
                                      }}
                                      className="btn btn-danger"
                                      onClick={() => deleteuser(element._id)}
                                    >
                                      <i className="nav-icon fas fa-trash" />
                                    </button>
                                  ) : (
                                    <button
                                      key={element._id + "46700"}
                                      style={{ margin: "3px" }}
                                      className="btn btn-danger"
                                      onClick={(e) =>
                                        window.confirm(
                                          "Are you sure you want to delete?"
                                        )
                                          ? deleteuser(element._id)
                                          : e.preventDefault()
                                      }
                                    >
                                      <i className="nav-icon fas fa-trash" />
                                    </button>
                                  )}
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

export default AgentPage;
