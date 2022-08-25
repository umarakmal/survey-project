import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

const CreateDataSource = () => {
  const [dataSource, setDataSource] = useState("");
  const [getuserdata, setUserdata] = useState([]);
  const [formValues, setFormValues] = useState([]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  const setdata = (e) => {
    const { name, value } = e.target;
    setDataSource((preval) => {
      return {
        ...dataSource,
        [name]: value,
      };
    });
  };

  //Submit the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name } = dataSource;
    if (!name) {
      alert("Data source name is empty!");
      return false;
    } else {
      // const { email, mobile } = formValues;
      const res = await fetch(`/api/dynamiccollection`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 422 || !data) {
        toast.error("Error Occurred!");
      } else {
        toast.success("Data Source created successfully");
      }
    }
  };

  const keyUp = (e) => {
    e.preventDefault();
    const name = e.target.value;
    const postDataSource = async () => {
      const res = await fetch("/api/getcollection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      const data = await res.json();
      if (res.status === 422 || !data) {
        console.log("error");
      } else {
        console.log(data.length);
        if (data.length > 0) {
          $("#taken").show();
          $("#avail").hide();
          $(":submit").attr("disabled", true);
        } else {
          $("#avail").show();
          $("#taken").hide();
          $(":submit").removeAttr("disabled");
        }
      }
    };
    postDataSource();
  };

  return (
    <>
      <Header />
      <Menu />
      <ToastContainer />
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <form id="form" onSubmit={handleSubmit}>
              <div className="row mt-2">
                <div style={{ fontSize: "12.3px" }} className="col-md-12">
                  <div className="card card-dark mt-3">
                    <div className="card-header">
                      <h3 className="card-title">Data Source</h3>
                    </div>
                    <div className="card-body">
                      <div id="totaldatasource" className="col-sm-6">
                        <div className="form-group">
                          <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                            Data Source Name
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <input
                            className="form-control"
                            onChange={setdata}
                            type="text"
                            name="name"
                            onKeyUp={keyUp}
                            id="datasource"
                          />
                          <span
                            id="taken"
                            style={{ color: "red", display: "none" }}
                          >
                            Already Taken!
                          </span>
                          <span
                            id="avail"
                            style={{ color: "green", display: "none" }}
                          >
                            Available!
                          </span>
                        </div>
                      </div>

                      <div className="button-section row">
                        <button
                          // id="AddMoreHeader"
                          style={{ fontSize: "11px" }}
                          type="button"
                          className="btn  btn-success ml-3 mt-2"
                          onClick={() => addFormFields()}
                        >
                          <i
                            className="nav-icon fas fa-plus"
                            style={{ fontSize: "11px" }}
                          />{" "}
                          Add Filter
                        </button>
                        <label
                          className="ml-2 mt-3"
                          style={{ fontSize: "12px" }}
                        >
                          Default Column created (Name,Email,Mobile)
                        </label>
                      </div>

                      {formValues.map((element, index) => (
                        <div key={index}>
                          <div style={{ fontSize: "12.5px" }} id="filter">
                            <div
                              style={{ backgroundColor: "#d1d8e0" }}
                              className="card-body border mt-2 "
                            >
                              <div
                                style={{
                                  fontSize: "12.4px",
                                }}
                                className="form-group col-sm-2 "
                              >
                                <label
                                  style={{ fontSize: "12.4px" }}
                                  htmlFor="exampleInputEmail"
                                >
                                  Field Name
                                </label>
                                <input
                                  type="text"
                                  value={element.fieldname || ""}
                                  onChange={(e) => handleChange(index, e)}
                                  name="fieldname"
                                  className="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>

                          {index ? (
                            <button
                              type="button"
                              style={{ fontSize: "12px" }}
                              className="btn btn-danger ml-2 mt-2 remove_btn"
                              onClick={() => removeFormFields(index)}
                            >
                              <i
                                className="nav-icon fas fa-minus "
                                style={{ fontSize: "11px" }}
                              />{" "}
                              Remove Filter
                            </button>
                          ) : null}
                        </div>
                      ))}

                      <button
                        id="btn"
                        type="submit"
                        style={{ fontSize: "12.4px" }}
                        className="btn btn-primary mt-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <br></br>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CreateDataSource;
