import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import MenuAgent from "../MenuAgent";
import HeaderAgent from "../HeaderAgent";
import { NavLink, useParams, useHistory } from "react-router-dom";
import $ from "jquery";
const SurveyMayEdit = () => {
  const [getuserdata, setUserdata] = useState([]);
  const [sheetSurvey, setSheetSurvey] = useState([]);
  const { id } = useParams("");

  const setdata = (e) => {
    const { name, value } = e.target;
    setSheetSurvey((preval) => {
      return {
        ...sheetSurvey,
        [name]: value,
      };
    });
  };

  const getdata = async () => {
    const res = await fetch(`/api/survey/${id}`, {
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

  $(function () {
    $("#disposition").on("change", function () {
      if ($(this).val() === "contactable") {
        $("#subdisposition").show();
        $("#subdisposition1").hide();
      } else if ($(this).val() === "notcontactable") {
        $("#subdisposition").hide();
        $("#subdisposition1").show();
      }
    });

    $("#questionradiodown1").on("click", function () {
      $("#thumbsdownselected").show();
      $("#subdis").show();
    });
    $("#questionradioup1").on("click", function () {
      $("#thumbsdownselected").hide();
      $("#subdis").hide();
    });
    $("#thumbsdownselected").on("change", function () {
      if ($(this).val() === "1") {
        $("#reportedproblems").show();
        $("#notdelievered").hide();
        $("#behissue").hide();
        $("#sparepartsnot").hide();
        $("#other").hide();
      } else if ($(this).val() === "2") {
        $("#notdelievered").show();
        $("#reportedproblems").hide();
        $("#behissue").hide();
        $("#sparepartsnot").hide();
        $("#other").hide();
      } else if ($(this).val() === "3") {
        $("#behissue").show();
        $("#notdelievered").hide();
        $("#reportedproblems").hide();
        $("#sparepartsnot").hide();
        $("#other").hide();
      } else if ($(this).val() === "4") {
        $("#sparepartsnot").show();
        $("#behissue").hide();
        $("#notdelievered").hide();
        $("#reportedproblems").hide();
        $("#other").hide();
      } else if ($(this).val() === "5") {
        $("#other").show();
        $("#sparepartsnot").hide();
        $("#behissue").hide();
        $("#notdelievered").hide();
        $("#reportedproblems").hide();
      } else if ($(this).val() === "sel") {
        $("#other").hide();
        $("#sparepartsnot").hide();
        $("#behissue").hide();
        $("#notdelievered").hide();
        $("#reportedproblems").hide();
      }
    });
  });

  //Submit the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(sheetSurvey);
    const {
      openingscript,
      closingscript,
      question1,
      question2,
      reason,
      subdispositionreason,
      disposition,
      subdisposition,
      remarks,
    } = sheetSurvey;
    const res = await fetch(`/api/sheetsurveymaysubmit`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        openingscript,
        closingscript,
        question1,
        question2,
        reason,
        subdispositionreason,
        disposition,
        subdisposition,
        remarks,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      toast.error("Error Occurred!");
    } else {
      toast.success("Submitted successfully");
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
              <NavLink
                style={{
                  color: "#2980b9",
                  fontWeight: "bolder",
                }}
                to="/sheet/survey/:id"
                className="btn btn"
              >
                <i
                  style={{ marginRight: "5px" }}
                  className="nav-icon fas fa-arrow-left"
                />
                Back to Customer Details
              </NavLink>
              <div style={{ fontSize: "12.3px" }} className="col-md-12">
                <div className="card card-dark mt-3">
                  <div className="card-header">
                    <h6 style={{ fontSize: "15px" }} className="card-title">
                      Survey Name - Survey May
                    </h6>
                  </div>
                  <div className="card-body">
                    <h6>Customer Info</h6>
                    <table className="table mt-2">
                      <thead
                        style={{ fontSize: "12.4px" }}
                        // className="thead-dark"
                      >
                        <tr
                          style={{ color: "black" }}
                          className="table table-dark"
                        >
                          <th scope="col">City</th>
                          <th scope="col">Company</th>
                          <th scope="col">DispositionId</th>
                          <th scope="col">Email</th>
                          <th scope="col">id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Mobile</th>
                        </tr>
                      </thead>
                      <tbody style={{ fontSize: "12.4px" }}>
                        <>
                          <tr key={getuserdata._id}>
                            <td key={getuserdata._id + "657"}>
                              {getuserdata.city}
                            </td>
                            <td key={getuserdata._id + "6875"}>
                              {getuserdata.company}
                            </td>
                            <td key={getuserdata._id + "65qw"}>
                              {getuserdata.dispositionid}
                            </td>
                            <td key={getuserdata._id + "8798"}>
                              {getuserdata.email}
                            </td>
                            <td key={getuserdata._id + "658496"}>
                              {getuserdata.id}
                            </td>
                            <td key={getuserdata._id + "jhd"}>
                              {getuserdata.employeename}
                            </td>
                            <td key={getuserdata._id + "oh"}>
                              {getuserdata.phone}
                            </td>
                          </tr>
                        </>
                      </tbody>
                    </table>

                    <div className="col-lg-12 mt-3">
                      <label style={{ fontSize: "12.4px" }}>
                        Opening Script
                      </label>
                      <textarea
                        name="openingscript"
                        className="form-control"
                        style={{ width: "100%", fontSize: "12.4px" }}
                        onChange={setdata}
                        rows={5}
                        required
                        defaultValue={"Start Survey"}
                        readOnly
                      />
                    </div>
                    <div className="row mt-2">
                      <div className="col-lg-6">
                        <label style={{ fontSize: "12.4px" }}>
                          Q1. Are you happy with the service?
                        </label>
                        <div className="row">
                          <div className="col-lg-3">
                            <label
                              style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                color: "#78b833",
                              }}
                            >
                              <input
                                type="radio"
                                defaultValue="Yes@1@Yes"
                                id="questionradioup1"
                                defaultChecked
                                name="radoption1"
                              />{" "}
                              <i className="fa fa-thumbs-up" />{" "}
                            </label>
                          </div>
                          <div className="col-lg-3">
                            <label
                              style={{
                                fontWeight: "bold",
                                fontSize: 16,
                                color: "#c4001a",
                              }}
                            >
                              <input
                                type="radio"
                                defaultValue="Yes@1@No"
                                id="questionradiodown1"
                                name="radoption1"
                              />{" "}
                              <i className="fa fa-thumbs-down" />
                            </label>
                          </div>
                        </div>
                        <textarea
                          name="question1"
                          className="form-control"
                          style={{ width: "100%", fontSize: "12.4px" }}
                          onChange={setdata}
                          rows={2}
                          defaultValue={"NA"}
                        />
                      </div>
                      <div className=" form-group col-sm-3 ">
                        <select
                          id="thumbsdownselected"
                          name="reason"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.4px", display: "none" }}
                        >
                          <option value="sel">
                            Select Reasons For Dissatisfaction
                          </option>
                          <option value="1">Reported Problem not Solved</option>
                          <option value="2">
                            Not delievered in the committed time
                          </option>
                          <option value="3">Behavioural Issue</option>
                          <option value="4">Spare parts not available</option>
                          <option value="5">others</option>
                        </select>
                      </div>
                      <div
                        id="subdis"
                        style={{ display: "none" }}
                        className=" form-group col-sm-3 "
                      >
                        <select
                          id="reportedproblems"
                          name="reasonsubdisposition"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.4px", display: "none" }}
                        >
                          <option>Select Subdisposition</option>
                          <option>
                            Poor mileage/High fuel consumption/Poor average
                          </option>
                          <option>Poor pickup/Engine RPM not raising</option>
                          <option>Tyre Wear/Wheel alignment</option>
                          <option>
                            Air Leak/Air pressure drop/Vaccuum Leak
                          </option>
                          <option>EDC lighting glowing</option>
                          <option>Engine Overheating</option>
                          <option>Brake Jam/wheel jam</option>
                          <option>Poor brake</option>
                          <option>Lift Axle not working</option>
                          <option>Clutch paddle hard</option>
                        </select>
                        <select
                          id="notdelievered"
                          name="selectedreasons"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.4px", display: "none" }}
                        >
                          <option value="sel">Select Subdisposition</option>
                          <option>No update about delivery time</option>
                          <option>Time estimate not provided</option>
                        </select>
                        <select
                          id="behissue"
                          name="selectedreasons"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.4px", display: "none" }}
                        >
                          <option value="sel">Select Subdisposition</option>
                          <option>Poor response</option>
                          <option>
                            Mechanics/Electricians behaved wrongly
                          </option>
                          <option>Work manager behaved wrongly</option>
                          <option>
                            Supervisor/Service-In-Charge behaved wrongly
                          </option>
                          <option>Customer/Driver asked to work</option>
                          <option>
                            Preferential treatment to local customers
                          </option>
                          <option>Bribe taken in workshop</option>
                          <option>Customer/Driver charged extra</option>
                        </select>
                        <select
                          id="sparepartsnot"
                          name="selectedreasons"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.4px", display: "none" }}
                        >
                          <option>Select Subdisposition</option>
                          <option>Generic Remark</option>
                          <option>
                            Wiper/ Alternator/ Starter motors/ Battery
                          </option>
                          <option>Gearbox spare parts</option>
                          <option>
                            Brake spare parts (Brake liner/ Slack adjuste)
                          </option>
                          <option>Dashboard/ Gauge spare parts</option>
                          <option>Cabin spare parts</option>
                          <option>Steering spare parts</option>
                          <option>Wheel/ Hub spare parts</option>
                          <option>Engine Spare parts</option>
                          <option>Oil/ Air/ Diesel Filter spare parts</option>
                          <option>Lift Axle spare parts</option>
                          <option>Air/ Oil/ Pressure pipes</option>
                          <option>
                            Radiator spare parts (Coolant hose/ DAT / Rad)
                          </option>
                        </select>
                        <select
                          id="other"
                          name="selectedreasons"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.4px", display: "none" }}
                        >
                          <option value="sel">Select Subdisposition</option>
                          <option>Poor response</option>
                          <option>Process not followed</option>
                          <option>Manpower not available</option>
                          <option>High labor/parts Cost</option>
                          <option>Warranty disputes</option>
                          <option>Workshop facility</option>
                          <option>Timing not convenient</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 mt-2">
                      <label style={{ fontSize: "12.4px" }}>
                        Q2. Was the call answered?
                      </label>
                      <div className="row">
                        <div className="col-lg-3">
                          <label
                            style={{
                              fontWeight: "bold",
                              fontSize: 16,
                              color: "#78b833",
                            }}
                          >
                            <input
                              type="radio"
                              defaultValue="Yes@1@Yes"
                              name="radoption2"
                              id="questionradioup2"
                              defaultChecked
                            />{" "}
                            <i className="fa fa-thumbs-up" />{" "}
                          </label>
                        </div>
                        <div className="col-lg-3">
                          <label
                            style={{
                              fontWeight: "bold",
                              fontSize: 16,
                              color: "#c4001a",
                            }}
                          >
                            <input
                              type="radio"
                              defaultValue="Yes@1@No"
                              name="radoption2"
                              id="questionradiodown2"
                            />{" "}
                            <i className="fa fa-thumbs-down" />
                          </label>
                        </div>
                      </div>
                      <textarea
                        name="question2"
                        className="form-control"
                        style={{ width: "100%", fontSize: "12.4px" }}
                        onChange={setdata}
                        rows={2}
                        defaultValue={"Remarks"}
                      />
                    </div>
                    <div className="col-lg-12 mt-2">
                      <label style={{ fontSize: "12.4px" }}>
                        Closing Script
                      </label>
                      <textarea
                        name="closingscript"
                        className="form-control"
                        style={{ width: "100%", fontSize: "12.4px" }}
                        onChange={setdata}
                        rows={5}
                        required
                        defaultValue={"End Survey"}
                        readOnly
                      />
                    </div>
                    <div className="row mt-2">
                      <div className=" form-group col-sm-4 ">
                        <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                          Disposition
                        </label>
                        <span style={{ color: "red" }}>*</span>
                        <select
                          id="disposition"
                          name="disposition"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.4px" }}
                        >
                          <option value="sel">--Select--</option>
                          <option value="contactable">Contactable</option>
                          <option value="notcontactable">
                            Not Contactable
                          </option>
                        </select>
                      </div>
                      <div className=" form-group col-sm-4 ">
                        <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                          Sub Disposition
                        </label>
                        <span style={{ color: "red" }}>*</span>
                        <select
                          id="subdisposition"
                          name="subdisposition"
                          onChange={setdata}
                          className="form-control"
                          style={{ display: "none", fontSize: "12.4px" }}
                        >
                          <option value="sel">--Select--</option>
                          <option>Feedback Collected</option>
                        </select>
                        <select
                          id="subdisposition1"
                          name="subdisposition"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.4px", display: "none" }}
                        >
                          <option value="sel">--Select--</option>
                          <option>Switch Off</option>
                        </select>
                      </div>
                      <div className="col-lg-4">
                        <label style={{ fonrSize: "12.4px" }}>Remarks</label>
                        <span style={{ color: "red" }}>*</span>
                        <input
                          name="remarks"
                          className="form-control"
                          style={{ width: "100%" }}
                          onChange={setdata}
                          required
                        />
                      </div>
                    </div>
                    <button
                      id="btn"
                      type="submit"
                      onClick={handleSubmit}
                      style={{ fontSize: "12.4px" }}
                      className="btn btn-primary mt-2"
                    >
                      Submit
                    </button>
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

export default SurveyMayEdit;
