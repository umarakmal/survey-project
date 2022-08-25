import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/home.css";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import { matchPath } from "react-router-dom";
import { isAuth } from "../../auth/helpers";

const ListUser = () => {
  const isActive = (path) => {
    if (matchPath.path === path) {
      return { color: "#000" };
    } else {
      return { color: "#fff" };
    }
  };
  // const columns = [
  //   { field: "id", headerName: "S.No.", width: 120 },
  //   { field:'lob', headerName:"LOB", width:150},
  //   { field: "name", headerName: "Name", width: 150 },
  //   { field: "email", headerName: "Email", width: 150 },
  //   { field: "role", headerName: "Role", width: 150 },
  //   { field: "usertype", headerName: "User Type", width: 150 },
  //   { field:'status', headerName:'Status', width:150}
  // ];
  const [getuserdata, setUserdata] = useState([]);
  const getdata = async () => {
    const res = await fetch("/api/user/findall", {
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
    const res2 = await fetch(`/api/user/${id}`, {
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
      <Header />
      <Menu />
      <ToastContainer />
      <div>
        <div style={{ minHeight: "36rem" }} className="content-wrapper">
          <div className="content">
            <h4 style={{ textAlign: "center" }}>User Management</h4>
            <div className="add_btn mt-2 mb-2">
              <NavLink
                style={{ fontSize: "12.4px" }}
                to="/adduser"
                className="btn btn-primary"
              >
                Add data
              </NavLink>
            </div>

            <table className="table">
              <thead style={{ fontSize: "12.4px" }} className="thead-dark">
                <tr style={{ color: "black" }} className="table table-dark">
                  <th scope="col">#</th>
                  <th scope="col">LOB</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">User Type</th>
                  <th scope="col">Status</th>
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
                        <td key={element._id + "65fv"}>{element.lob}</td>
                        <td key={element._id + "jh"}>{element.name}</td>
                        <td key={element._id + "oh"}>{element.email}</td>
                        <td key={element._id + "hfdd"}>{element.role}</td>
                        <td key={element._id + "9934"}>{element.usertype}</td>
                        <td key={element._id + "8722"}>{element.status}</td>
                        <td className="d-flex " key={element._id + "tt"}>
                          <NavLink to={`edit/user/${element._id}`}>
                            {" "}
                            <button
                              key={element._id + "97700"}
                              style={{ margin: "3px" }}
                              className="btn btn-primary"
                            >
                              <i className="nav-icon fas fa-edit" />
                            </button>
                          </NavLink>

                          {isAuth()._id === element._id ? (
                            <button
                              key={element._id + "8514"}
                              style={{ margin: "3px", display: "none" }}
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
      <Footer />
    </>
  );
};

export default ListUser;
