import React, { useEffect, useState } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Menu from "../Menu";
import { ToastContainer, toast } from "react-toastify";

const EditUser = () => {
  const history = useHistory("");

  const [inpval, setINP] = useState({
    name: "",
    employeeid: "",
    email: "",
    role: "",
    status: "",
    password: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`/api/user/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setINP(data);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();
    const { name, email, role, password, status } = inpval;
    if (!name || !email || !role) {
      return false;
    } else {
      const res2 = await fetch(`/api/user/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          status,
          email,
          role,
          password,
        }),
      });

      const data = await res2.json();

      if (res2.status === 422 || !data) {
        toast.error("Email already exists!");
      } else {
        history.push("/users");
        toast.success("User updated successfully");
      }
    }
  };

  return (
    <>
      <Header />
      <Menu />
      <ToastContainer />

      <div
        style={{ minHeight: "36rem", fontSize: "13px" }}
        className="content-wrapper "
      >
        <NavLink
          style={{
            color: "#2980b9",
            fontWeight: "bolder",
          }}
          to="/users"
          className="btn btn"
        >
          <i
            style={{ marginRight: "5px" }}
            className="nav-icon fas fa-arrow-left"
          />
          User Management
        </NavLink>
        <center>
          <h4>Edit User</h4>
        </center>
        <div className="content offset-4">
          <form onSubmit={updateuser}>
            <div className="col-md-5 col-sm-12 col-xs-12 form-group ml-5">
              <label style={{ fontSize: "12.4px" }} htmlFor="exampleInputName">
                Name
              </label>
              <input
                type="text"
                value={inpval.name}
                onChange={setdata}
                style={{ fontSize: "12.4px" }}
                name="name"
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                required
              />
              <div className="invalid-feedback ">Please choose a name</div>
            </div>

            <div className="col-md-5 col-sm-12 col-xs-12 form-group ml-5">
              <label style={{ fontSize: "12.4px" }} htmlFor="exampleInputEmail">
                Email
              </label>
              <input
                type="email"
                style={{ fontSize: "12.4px" }}
                value={inpval.email}
                onChange={setdata}
                name="email"
                className="form-control"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                required
              />
              <div className="invalid-feedback ">Please choose Email</div>
            </div>

            <div className="col-md-5 col-sm-12 col-xs-12 form-group ml-5">
              <label
                style={{ fontSize: "12.4px" }}
                htmlFor="exampleFormControlSelect1"
              >
                Role
              </label>
              <select
                name="role"
                value={inpval.role}
                onChange={setdata}
                style={{ fontSize: "12.4px" }}
                className="form-control"
                id="exampleFormControlSelect1"
                aria-label=".form-select-lg example"
              >
                <option defaultValue="">Select</option>
                <option>admin</option>
                <option>agent</option>
              </select>
              <div className="invalid-feedback ">Please choose Role</div>
            </div>

            <div className="col-md-5 col-sm-12 col-xs-12 form-group ml-5">
              <label style={{ fontSize: "12.4px" }} htmlFor="exampleInputPass">
                Password
              </label>
              <input
                type="password"
                // value={inpval.password}
                style={{ fontSize: "12.4px" }}
                onChange={setdata}
                name="password"
                className="form-control"
                id="exampleInputPass"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col-md-5 col-sm-12 col-xs-12 form-group ml-5">
              <label
                style={{ fontSize: "12.4px" }}
                htmlFor="exampleFormControlSelect1"
              >
                Status
              </label>
              <select
                name="status"
                value={inpval.status}
                onChange={setdata}
                className="form-control"
                style={{ fontSize: "12.4px" }}
                id="exampleFormControlSelect1"
                aria-label=".form-select-lg example"
              >
                <option defaultValue="">--Select--</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div className="invalid-feedback ">Please choose status</div>
            </div>
            <button
              style={{ marginLeft: "23%", fontSize: "12.5px" }}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditUser;
