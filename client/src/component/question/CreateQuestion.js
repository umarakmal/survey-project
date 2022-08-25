import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";

const CreateQuestion = () => {
  const [dataSource, setDataSource] = useState("");
  const [getuserdata, setUserdata] = useState([]);
  const [formValues, setFormValues] = useState([]);

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
  let addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        questionheader: "",
        question: "",
        helptext: "",
        remarks: "",
        mandatory: "",
      },
    ]);
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

  const keyUp = (e) => {
    e.preventDefault();
    const questionbankname = e.target.value;
    const postDataSource = async () => {
      const res = await fetch("/api/checkquestionlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questionbankname,
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

  $(function () {
    $("#questiontype").on("change", function () {
      if ($(this).val() === "sel") {
        $("#AddMoreHeader").hide();
        $("#filter").hide();
      } else if ($(this).val() === "yesno") {
        $("#AddMoreHeader").show();
      }
    });
  });

  //Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { questionbankname, questiontype } = dataSource;

    const question = formValues;

    if (!questionbankname || !questiontype) {
      return false;
    } else {
      const res = await fetch(`/api/createquestion`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          questionbankname,
          questiontype,
          question,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 422 || !data) {
        toast.error("Error Occurred!");
      } else {
        toast.success("Question added successfully");
      }
    }
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
                      <h3 className="card-title">Create Question</h3>
                    </div>
                    <div className="card-body">
                      <div id="totaldatasource" className="col-sm-6 row">
                        <div className="form-group">
                          <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                            Question Bank Name
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <input
                            className="form-control"
                            onChange={setdata}
                            type="text"
                            style={{ fontSize: "12.4px" }}
                            name="questionbankname"
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
                        <div className=" form-group col-sm-5 ">
                          <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                            Question Type
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <select
                            id="questiontype"
                            name="questiontype"
                            onChange={setdata}
                            className="form-control"
                            style={{ fontSize: "12.4px" }}
                          >
                            <option value="sel">
                              --Select Question Type--
                            </option>
                            <option value="yesno">Yes/No</option>
                          </select>
                        </div>
                      </div>

                      <div className="button-section row">
                        <button
                          id="AddMoreHeader"
                          style={{ fontSize: "11px", display: "none" }}
                          type="button"
                          className="btn  btn-success mt-2 ml-2"
                          onClick={() => addFormFields()}
                        >
                          <i
                            className="nav-icon fas fa-plus"
                            style={{ fontSize: "11px" }}
                          />{" "}
                          Add Question
                        </button>
                      </div>

                      {formValues.map((element, index) => (
                        <div key={index}>
                          <div style={{ fontSize: "12.5px" }} id="filter">
                            <div
                              style={{ backgroundColor: "#d1d8e0" }}
                              className="card-body border mt-2"
                            >
                              <div className="row">
                                <div className=" form-group col-sm-3 ">
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="xyz"
                                  >
                                    Question Header
                                  </label>
                                  <select
                                    id="questionheader"
                                    name="questionheader"
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    style={{ fontSize: "12.4px" }}
                                  >
                                    <option value="select">
                                      --Select Category--
                                    </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                  </select>
                                </div>

                                <div
                                  style={{
                                    fontSize: "12.4px",
                                  }}
                                  className="form-group col-sm-5 "
                                >
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="exampleInputEmail"
                                  >
                                    Question:
                                  </label>
                                  <input
                                    type="text"
                                    value={element.question || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    name="question"
                                    style={{ fontSize: "12.4px" }}
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div
                                  style={{
                                    fontSize: "12.4px",
                                  }}
                                  className="form-group col-sm-6 "
                                >
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="exampleInputEmail"
                                  >
                                    Help Text (Max Length 800 characters):
                                  </label>
                                  <input
                                    type="text"
                                    maxLength={800}
                                    value={element.helptext || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    name="helptext"
                                    style={{ fontSize: "12.4px" }}
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div className="mt-4 ml-5">
                                  <label style={{ fontSize: "12.4px" }}>
                                    {" "}
                                    <input
                                      type="checkbox"
                                      value="yes"
                                      onChange={(e) => handleChange(index, e)}
                                      name="remarks"
                                      id="remarks"
                                    />{" "}
                                    Remarks
                                  </label>
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    className="ml-2"
                                  >
                                    <input
                                      type="checkbox"
                                      value="yes"
                                      onChange={(e) => handleChange(index, e)}
                                      name="mandatory"
                                    />{" "}
                                    Mandatory
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          {index ? (
                            <button
                              type="button"
                              style={{ fontSize: "12px" }}
                              className="btn btn-danger mt-2 remove_btn"
                              onClick={() => removeFormFields(index)}
                            >
                              <i
                                className="nav-icon fas fa-minus "
                                style={{ fontSize: "11px" }}
                              />{" "}
                              Remove Question
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

export default CreateQuestion;
