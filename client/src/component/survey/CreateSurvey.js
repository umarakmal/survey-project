import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import DatePicker from "react-datepicker";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import "react-datepicker/dist/react-datepicker.css";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";

const CreateSurvey = () => {
  const [dataSource, setDataSource] = useState("");
  const [getuserdata, setUserdata] = useState([]);
  const [duallist, setDualList] = useState({});
  const { selected } = duallist;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const onChanges = (selected) => {
    setDualList({ selected });
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
  const options = [
    { value: "Yes=>Question1?", label: "Yes=>Question1?" },
    { value: "No=>Question2?", label: "No=>Question2?" },
  ];
  const questions = [
    {
      value: "Yes=> Are you happy with the service",
      label: "Yes=> Are you happy with the service",
    },
    {
      value: "No=> Was the call answered",
      label: "No=> Was the call answered",
    },
  ];
  const dummyQuestions = [
    {
      value:
        "Yes=> Was the workshop staff friendly & courteous in responding to your queries?",
      label:
        "Yes=> Was the workshop staff friendly & courteous in responding to your queries?",
    },
    {
      value: "No=> Was vehicle inward performed with promptness?",
      label: "No=> Was vehicle inward performed with promptness?",
    },
    {
      value: "Yes=> Are you satisfied with the work done on the vehicle?",
      label: "Yes=> Are you satisfied with the work done on the vehicle?",
    },
    {
      value:
        "No=> Did you get the vehicle delievered within the committed time?",
      label:
        "No=> Did you get the vehicle delievered within the committed time?",
    },
    {
      value:
        "Yes=> Were the necessary spare parts available at the workshop for the repair car?",
      label:
        "Yes=> Were the necessary spare parts available at the workshop for the repair car?",
    },
    {
      value:
        "No=> Was the work performed on vehicle explained by the Dealer Executive duty?",
      label:
        "No=> Was the work performed on vehicle explained by the Dealer Executive duty?",
    },
    {
      value:
        "Yes=> How do you rate the driver lounge/workshop for cleanliness, comfort and facilities?",
      label:
        "Yes=> How do you rate the driver lounge/workshop for cleanliness, comfort and facilities?",
    },
  ];

  $(function () {
    $("#questionbucket").on("change", function () {
      if ($(this).val() === "alquestion") {
        $("#dls").hide();
        $("#dls2").hide();
        $("#duallist").show();
        $("#dls3").show();
        $("#templatename").show();
        $("#date").show();
        $("#script").show();
        $("#btn").show();
      } else if ($(this).val() === "alsurvey") {
        $("#dls").hide();
        $("#duallist").show();
        $("#dls2").show();
        $("#dls3").hide();
        $("#templatename").show();
        $("#script").show();
        $("#date").show();
        $("#btn").show();
      } else if ($(this).val() === "questional") {
        $("#dls").show();
        $("#duallist").show();
        $("#dls2").hide();
        $("#dls3").hide();
        $("#templatename").show();
        $("#script").show();
        $("#date").show();
        $("#btn").show();
      } else if ($(this).val() === "sel") {
        $("#duallist").hide();
        $("#date").hide();
        $("#script").hide();
        $("#templatename").hide();
        $("#btn").hide();
      }
    });
  });

  //Submit the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {
      questionbucket,
      templatename,
      openingscript,
      closingscript,
      status,
      channel,
    } = dataSource;
    const startdate = startDate.toLocaleDateString();
    const enddate = endDate.toLocaleDateString();
    const selectedquestion = duallist.selected;
    const res = await fetch(`/api/createsurvey`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        questionbucket,
        templatename,
        selectedquestion,
        openingscript,
        closingscript,
        startdate,
        enddate,
        status,
        channel,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      toast.error("Error Occurred!");
    } else {
      toast.success("Survey added successfully");
    }
  };

  const keyUp = (e) => {
    e.preventDefault();
    const templatename = e.target.value;
    const postDataSource = async () => {
      const res = await fetch("/api/gettemplatename", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          templatename,
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
                      <h3 className="card-title">Create Survey Template</h3>
                    </div>
                    <div className="card-body">
                      <div id="totaldatasource" className="col-sm-6 row">
                        <div className=" form-group col-sm-5 ">
                          <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                            Question Bucket
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <select
                            id="questionbucket"
                            name="questionbucket"
                            onChange={setdata}
                            className="form-control"
                            style={{ fontSize: "12.4px" }}
                          >
                            <option value="sel">
                              --Select Question Bucket--
                            </option>
                            <option value="alquestion">AL Questions</option>
                            <option value="alsurvey">AL Survey May 2022</option>
                            <option value="questional">Question AL</option>
                          </select>
                        </div>

                        <div
                          style={{ display: "none" }}
                          id="templatename"
                          className="form-group"
                        >
                          <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                            Template Name
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <input
                            className="form-control"
                            onChange={setdata}
                            type="text"
                            name="templatename"
                            onKeyUp={keyUp}
                            required
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

                      <div
                        style={{ fontSize: "12.5px", display: "none" }}
                        className="mt-2"
                        id="duallist"
                      >
                        <DualListBox
                          style={{ display: "none" }}
                          options={options}
                          selected={selected}
                          onChange={onChanges}
                          name="duallisttt[]"
                          id="dls"
                        />
                        <DualListBox
                          style={{ display: "none" }}
                          options={questions}
                          selected={selected}
                          onChange={onChanges}
                          name="duallisttt[]"
                          id="dls2"
                        />
                        <DualListBox
                          style={{ display: "none" }}
                          options={dummyQuestions}
                          selected={selected}
                          onChange={onChanges}
                          name="duallisttt[]"
                          id="dls3"
                        />
                      </div>
                      <div
                        style={{ display: "none" }}
                        id="script"
                        className="row mt-4"
                      >
                        <div className="col-lg-6">
                          <label style={{ fonrSize: "12.4px" }}>
                            Opening Script
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <textarea
                            name="openingscript"
                            className="form-control"
                            style={{ width: "100%" }}
                            onChange={setdata}
                            rows={5}
                            required
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-lg-6">
                          <label style={{ fontSize: "12.4px" }}>
                            Closing Script
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <textarea
                            name="closingscript"
                            className="form-control"
                            onChange={setdata}
                            rows={5}
                            required
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div
                        style={{ display: "none" }}
                        id="date"
                        className="row mt-2"
                      >
                        <div className="form-group col-md-3">
                          <label
                            style={{ fontSize: "12.4px" }}
                            htmlFor="date1"
                            className="form-label"
                          >
                            Start Date
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <DatePicker
                            selected={startDate}
                            selectsStart
                            placeholderText="Select Date"
                            value={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="yyyy-MM-dd"
                            id="date1"
                            className="form-control"
                            autoComplete="off"
                          />
                        </div>
                        <div className="form-group col-md-3">
                          <label
                            style={{ fontSize: "12.4px" }}
                            htmlFor="date2"
                            className="form-label"
                          >
                            End Date
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <DatePicker
                            selected={endDate}
                            dateFormat="yyyy-MM-dd"
                            selectsEnd
                            placeholderText="Select Date"
                            minDate={startDate}
                            value={endDate}
                            className="form-control "
                            onChange={(date) => setEndDate(date)}
                            id="date2"
                            autoComplete="off"
                          />
                        </div>
                        <div className=" form-group col-sm-3 ">
                          <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                            Status
                          </label>

                          <span style={{ color: "red" }}>*</span>
                          <select
                            id="status"
                            name="status"
                            onChange={setdata}
                            className="form-control"
                            style={{ fontSize: "12.4px" }}
                          >
                            <option value="sel">--Select--</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                        </div>
                        <div className=" form-group col-sm-3 ">
                          <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                            Channel
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <select
                            id="channel"
                            name="channel"
                            onChange={setdata}
                            className="form-control"
                            style={{ fontSize: "12.4px" }}
                          >
                            <option value="sel">--Select--</option>
                            <option value="email">Email</option>
                            <option value="sms">SMS</option>
                            <option value="outbound">Outbound</option>
                            <option value="cti">CTI</option>
                          </select>
                        </div>
                      </div>
                      <button
                        id="btn"
                        type="submit"
                        style={{ fontSize: "12.4px", display: "none" }}
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

export default CreateSurvey;
