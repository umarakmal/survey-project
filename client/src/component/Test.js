import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";

const Test = () => {
  const history = useHistory();
  const [dataSource, setDataSource] = useState("");
  const [getuserdata, setUserdata] = useState([]);
  const [formValues, setFormValues] = useState([]);
  const [noOfIndex, setNoOfIndex] = useState([]);

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

  const [duallist, setDualList] = useState({});

  const { selected } = duallist;

  const onChanges = (selected) => {
    setDualList({ selected });
  };

  //Submit the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { datasources, surveytemp } = dataSource;
    if (!surveytemp) {
      alert("please select an option!");
      return false;
    } else {
      console.log(dataSource);
      console.log(duallist.selected);
      console.log(formValues);
    }
  };

  const [users, setUsers] = useState([]);
  //Assigning users in duallistbox
  const options = users.map((element) => ({
    label: element.name,
    value: element.name,
  }));

  //Getting users to assign in duallistbox
  const getUsers = async () => {
    const res = await fetch("/api/getuserstoassign", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUsers(data);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  const [filterDetails, setFilterDetails] = useState([]);

  const [filterDetailsAltest, setFilterDetailsAltest] = useState([]);
  const [filterDetailsAlDataNew, setFilterDetailsAlDataNew] = useState([]);
  const [filterDetailsAlDataSource, setFilterDetailsAlDataSource] = useState(
    []
  );
  const [filterDetailsPsfTest, setFilterDetailsPsfTest] = useState([]);
  //JQUERY code where adding and removing input fields dynamically
  useEffect(() => {
    $(function () {
      //To select filter column values according to data source options
      //To select an option from Data Source
      $("#select1").on("change", function () {
        if ($(this).val() === "aldata") {
          $("#aldatasourceselect1").css("display", "block");
          $("#aldatavalue").css("display", "block");
          $("#japanvalue").hide();
          $("#psfvalue").hide();
          $("#altestvalue").hide();
          $("#aldatavaluenew").hide();
          $("#psftestselect1").hide();
          $("#japanselect1").hide();
          $("#altestselect1").hide();
          $("#aldatanewselect1").hide();
        } else if ($(this).val() === "psftest") {
          $("#psftestselect1").css("display", "block");
          $("#psfvalue").css("display", "block");
          $("#japanvalue").hide();
          $("#aldatavaluenew").hide();
          $("#altestvalue").hide();
          $("#aldatavalue").hide();
          $("#japanselect1").hide();
          $("#altestselect1").hide();
          $("#aldatanewselect1").hide();
          $("#aldatasourceselect1").hide();
        } else if ($(this).val() === "jap") {
          $("#japanselect1").css("display", "block");
          $("#japanvalue").css("display", "block");
          $("#altestvalue").hide();
          $("#aldatavaluenew").hide();
          $("#aldatavalue").hide();
          $("#psfvalue").hide();
          $("#psftestselect1").hide();
          $("#altestselect1").hide();
          $("#aldatanewselect1").hide();
          $("#aldatasourceselect1").hide();
        } else if ($(this).val() === "altest") {
          $("#altestselect1").css("display", "block");
          $("#altestvalue").css("display", "block");
          $("#japanvalue").hide();
          $("#aldatavaluenew").hide();
          $("#aldatavalue").hide();
          $("#psfvalue").hide();
          $("#aldatanewselect1").hide();
          $("#japanselect1").hide();
          $("#aldatasourceselect1").hide();
          $("#psftestselect1").hide();
        } else if ($(this).val() === "alnew") {
          $("#aldatanewselect1").css("display", "block");
          $("#aldatavaluenew").css("display", "block");
          $("#japanvalue").hide();
          $("#aldatavalue").hide();
          $("#japanselect1").hide();
          $("#altestvalue").hide();
          $("#psfvalue").hide();
          $("#aldatasourceselect1").hide();
          $("#psftestselect1").hide();
          $("#altestselect1").hide();
        }

        $("#surveytemplate").css("display", "block");
        $("#random").css("display", "block");
        $("#totaldatasource").css("display", "block");
        $("#btn").css("display", "block");
      });
      //To select survey template option and also it gives fields dynamically
      $("#select2").on("change", function () {
        $("#duallist").css("display", "block");
        $("#userAssign").css("display", "block");
      });

      //To Select options from range types and display fields dynamically
      // for(var i = 0 ; i<)
      // console.log(noOfIndex.length);
      $("#rangetypes").on("change", function () {
        if ($(this).val() === "per") {
          $("#prcntge").css("display", "block");
          $("#range").hide();
        } else if ($(this).val() === "ran") {
          $("#range").css("display", "flex");
          $("#prcntge").hide();
        } else if ($(this).val() === "eq") {
          $("#prcntge").hide();
          $("#range").hide();
        } else if ($(this).val() === "like") {
          $("#prcntge").hide();
          $("#range").hide();
        }
      });

      //Add input fields on button click
      var counter = 1;
      var x = filterDetails;
      var y = ["a", "b"];
      console.log(x);
      $("#addmore").on("click ", function () {
        $('[id^="rangetypes"]').on("change", function () {
          alert("hello");
        });
      });

      //Randomizer radio according to which we can add filter
      $("#without").on("change", function () {
        $("#filter").hide();
        $(".btnadd").hide();
      });
      $("#with").on("change", function () {
        $("#filter").show();
        $(".btnadd").show();
      });

      $("#auto").on("change", function () {
        $("#userassign").hide();
      });

      $("#manual").on("click", function () {
        $("#userassign").show();
      });

      //To get total records of data source options accordingly
      $("#select1").on("change", function () {
        if ($(this).val() === "aldata") {
          const getdata = async () => {
            const res = await fetch("/api/getaldatasource", {
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
          getdata();
        } else if ($(this).val() === "alnew") {
          const getdata1 = async () => {
            const res = await fetch("/api/getaldatasourcenew", {
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
          getdata1();
        } else if ($(this).val() === "psftest") {
          const getdata2 = async () => {
            const res = await fetch("/api/getpsftest", {
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
          getdata2();
        } else if ($(this).val() === "jap") {
          const getdata3 = async () => {
            const res = await fetch("/api/getjapan", {
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
          getdata3();
        } else if ($(this).val() === "altest") {
          const getdata4 = async () => {
            const res = await fetch("/api/getaltest", {
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
          getdata4();
        }
      });

      //select filter options dynamically for Japan
      $("#japanselect1").on("change", function () {
        if ($(this).val() === "Ticket") {
          $("#valticket").css("display", "block");
          $("#valvehicle").hide();
          $("#valcompany").hide();
          $("#valstate").hide();
          $("#valcity").hide();
          $("#valname").hide();
          $("#valemail").hide();
          $("#valmobile").hide();
        } else if ($(this).val() === "Vehicle") {
          $("#valvehicle").css("display", "block");
          $("#valcompany").hide();
          $("#valticket").hide();
          $("#valstate").hide();
          $("#valcity").hide();
          $("#valname").hide();
          $("#valemail").hide();
          $("#valmobile").hide();
        } else if ($(this).val() === "Company") {
          $("#valcompany").css("display", "block");
          $("#valticket").hide();
          $("#valvehicle").hide();
          $("#valstate").hide();
          $("#valcity").hide();
          $("#valname").hide();
          $("#valemail").hide();
          $("#valmobile").hide();
        } else if ($(this).val() === "State") {
          $("#valstate").css("display", "block");
          $("#valcity").hide();
          $("#valname").hide();
          $("#valemail").hide();
          $("#valmobile").hide();
          $("#valcompany").hide();
          $("#valticket").hide();
          $("#valvehicle").hide();
        } else if ($(this).val() === "City") {
          $("#valcity").css("display", "block");
          $("#valstate").hide();
          $("#valname").hide();
          $("#valemail").hide();
          $("#valmobile").hide();
          $("#valcompany").hide();
          $("#valticket").hide();
          $("#valvehicle").hide();
        } else if ($(this).val() === "Name") {
          $("#valname").css("display", "block");
          $("#valemail").hide();
          $("#valmobile").hide();
          $("#valcompany").hide();
          $("#valticket").hide();
          $("#valvehicle").hide();
          $("#valcity").hide();
          $("#valstate").hide();
        } else if ($(this).val() === "Email") {
          $("#valemail").css("display", "block");
          $("#valname").hide();
          $("#valmobile").hide();
          $("#valcompany").hide();
          $("#valticket").hide();
          $("#valvehicle").hide();
          $("#valcity").hide();
          $("#valstate").hide();
        } else if ($(this).val() === "Mobile") {
          $("#valmobile").css("display", "block");
          $("#valcompany").hide();
          $("#valticket").hide();
          $("#valvehicle").hide();
          $("#valcity").hide();
          $("#valstate").hide();
          $("#valemail").hide();
          $("#valname").hide();
        }
      });

      //select filter options dynamically for PSF test Survey
      $("#psftestselect1").on("change", function () {
        if ($(this).val() === "Ticketpsf") {
          $("#valticketpsf").css("display", "block");
          $("#valregistrationnopsf").hide();
          $("#valcompanynamepsf").hide();
          $("#valnamepsf").hide();
          $("#valemailpsf").hide();
          $("#valmobilepsf").hide();
        } else if ($(this).val() === "registrationnopsf") {
          $("#valregistrationnopsf").css("display", "block");
          $("#valcompanynamepsf").hide();
          $("#valticketpsf").hide();

          $("#valnamepsf").hide();
          $("#valemailpsf").hide();
          $("#valmobilepsf").hide();
        } else if ($(this).val() === "Companynamepsf") {
          $("#valcompanynamepsf").css("display", "block");
          $("#valticketpsf").hide();
          $("#valregistrationnopsf").hide();

          $("#valnamepsf").hide();
          $("#valemailpsf").hide();
          $("#valmobilepsf").hide();
        } else if ($(this).val() === "Namepsf") {
          $("#valnamepsf").css("display", "block");
          $("#valemailpsf").hide();
          $("#valmobilepsf").hide();
          $("#valcompanynamepsf").hide();
          $("#valticketpsf").hide();
          $("#valregistrationnopsf").hide();
        } else if ($(this).val() === "Emailpsf") {
          $("#valemailpsf").css("display", "block");
          $("#valnamepsf").hide();
          $("#valmobilepsf").hide();
          $("#valcompanynamepsf").hide();
          $("#valticketpsf").hide();
          $("#valregistrationnopsf").hide();
        } else if ($(this).val() === "Mobilepsf") {
          $("#valmobilepsf").css("display", "block");
          $("#valcompanynamepsf").hide();
          $("#valticketpsf").hide();
          $("#valregistrationnopsf").hide();
          $("#valemailpsf").hide();
          $("#valnamepsf").hide();
        }
      });

      //select filter options dynamically for AL Test Survey
      $("#altestselect1").on("change", function () {
        if ($(this).val() === "Ticketaltest") {
          $("#valticketaltest").css("display", "block");
          $("#valorderidaltest").hide();
          $("#valdateorequestaltest").hide();
          $("#valnamealtest").hide();
          $("#valemailaltest").hide();
          $("#valmobilealtest").hide();
        } else if ($(this).val() === "orderidaltest") {
          $("#valorderidaltest").css("display", "block");
          $("#valdateorequestaltest").hide();
          $("#valticketaltest").hide();
          $("#valnamealtest").hide();
          $("#valemailaltest").hide();
          $("#valmobilealtest").hide();
        } else if ($(this).val() === "dateorequestaltest") {
          $("#valdateorequestaltest").css("display", "block");
          $("#valticketaltest").hide();
          $("#valorderidaltest").hide();
          $("#valnamealtest").hide();
          $("#valemailaltest").hide();
          $("#valmobilealtest").hide();
        } else if ($(this).val() === "Namealtest") {
          $("#valnamealtest").css("display", "block");
          $("#valemailaltest").hide();
          $("#valmobilealtest").hide();
          $("#valdateorequestaltest").hide();
          $("#valticketaltest").hide();
          $("#valorderidaltest").hide();
        } else if ($(this).val() === "Emailaltest") {
          $("#valemailaltest").css("display", "block");
          $("#valnamealtest").hide();
          $("#valmobilealtest").hide();
          $("#valdateorequestaltest").hide();
          $("#valticketaltest").hide();
          $("#valorderidaltest").hide();
        } else if ($(this).val() === "Mobilealtest") {
          $("#valmobilealtest").css("display", "block");
          $("#valdateorequestaltest").hide();
          $("#valticketaltest").hide();
          $("#valorderidaltest").hide();
          $("#valemailaltest").hide();
          $("#valnamealtest").hide();
        }
      });

      //select filter options dynamically for AL Data Source
      $("#aldatasourceselect1").on("change", function () {
        if ($(this).val() === "Ticketaldatasource") {
          $("#valticketaldatasource").css("display", "block");
          $("#valorderidaldatasource").hide();
          $("#valnamealdatasource").hide();
          $("#valemailaldatasource").hide();
          $("#valmobilealdatasource").hide();
        } else if ($(this).val() === "orderidaldatasource") {
          $("#valorderidaldatasource").css("display", "block");
          $("#valticketaldatasource").hide();
          $("#valnamealdatasource").hide();
          $("#valemailaldatasource").hide();
          $("#valmobilealdatasource").hide();
        } else if ($(this).val() === "Namealdatasource") {
          $("#valnamealdatasource").css("display", "block");
          $("#valemailaldatasource").hide();
          $("#valmobilealdatasource").hide();
          $("#valticketaldatasource").hide();
          $("#valorderidaldatasource").hide();
        } else if ($(this).val() === "Emailaldatasource") {
          $("#valemailaldatasource").css("display", "block");
          $("#valnamealdatasource").hide();
          $("#valmobilealdatasource").hide();
          $("#valticketaldatasource").hide();
          $("#valorderidaldatasource").hide();
        } else if ($(this).val() === "Mobilealdatasource") {
          $("#valmobilealdatasource").css("display", "block");
          $("#valticketaldatasource").hide();
          $("#valorderidaldatasource").hide();
          $("#valemailaldatasource").hide();
          $("#valnamealdatasource").hide();
        }
      });

      //select filter options dynamically for AL Data Source New
      $("#aldatanewselect1").on("change", function () {
        if ($(this).val() === "Ticketaldatasourcenew") {
          $("#valticketaldatasourcenew").css("display", "block");
          $("#valorderidaldatasourcenew").hide();
          $("#valnamealdatasourcenew").hide();
          $("#valemailaldatasourcenew").hide();
          $("#valmobilealdatasourcenew").hide();
          $("#valaddressaldatasourcenew").hide();
        } else if ($(this).val() === "orderidaldatasourcenew") {
          $("#valorderidaldatasourcenew").css("display", "block");
          $("#valticketaldatasourcenew").hide();
          $("#valnamealdatasourcenew").hide();
          $("#valemailaldatasourcenew").hide();
          $("#valmobilealdatasourcenew").hide();
          $("#valaddressaldatasourcenew").hide();
        } else if ($(this).val() === "Namealdatasourcenew") {
          $("#valnamealdatasourcenew").css("display", "block");
          $("#valemailaldatasourcenew").hide();
          $("#valmobilealdatasourcenew").hide();
          $("#valticketaldatasourcenew").hide();
          $("#valorderidaldatasourcenew").hide();
          $("#valaddressaldatasourcenew").hide();
        } else if ($(this).val() === "Emailaldatasourcenew") {
          $("#valemailaldatasourcenew").css("display", "block");
          $("#valnamealdatasourcenew").hide();
          $("#valmobilealdatasourcenew").hide();
          $("#valticketaldatasourcenew").hide();
          $("#valorderidaldatasourcenew").hide();
          $("#valaddressaldatasourcenew").hide();
        } else if ($(this).val() === "Mobilealdatasourcenew") {
          $("#valmobilealdatasourcenew").css("display", "block");
          $("#valticketaldatasourcenew").hide();
          $("#valorderidaldatasourcenew").hide();
          $("#valemailaldatasourcenew").hide();
          $("#valnamealdatasourcenew").hide();
          $("#valaddressaldatasourcenew").hide();
        } else if ($(this).val() === "addressaldatasourcenew") {
          $("#valaddressaldatasourcenew").css("display", "block");
          $("#valmobilealdatasourcenew").hide();
          $("#valticketaldatasourcenew").hide();
          $("#valorderidaldatasourcenew").hide();
          $("#valemailaldatasourcenew").hide();
          $("#valnamealdatasourcenew").hide();
        }
      });
    });

    const getdata11 = async () => {
      const res = await fetch("/api/getfilterdetailsjapan", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        console.log("error ");
      } else {
        // console.log("details" + data);
        setFilterDetails(data);
      }
    };
    getdata11();

    const getdata12 = async () => {
      const res = await fetch("/api/getfilterdetailsaltest", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        console.log("error ");
      } else {
        setFilterDetailsAltest(data);
      }
    };
    getdata12();

    const getdata13 = async () => {
      const res = await fetch("/api/getfilterdetailsaldatasource", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        console.log("error ");
      } else {
        setFilterDetailsAlDataSource(data);
      }
    };
    getdata13();

    const getdata14 = async () => {
      const res = await fetch("/api/getfilterdetailsaldatasourcenew", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        console.log("error ");
      } else {
        setFilterDetailsAlDataNew(data);
      }
    };
    getdata14();

    const getdata15 = async () => {
      const res = await fetch("/api/getfilterdetailspsftest", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        console.log("error ");
      } else {
        setFilterDetailsPsfTest(data);
      }
    };
    getdata15();
  }, []);

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
                      <h3 className="card-title">Data Allocation Management</h3>
                    </div>
                    <div className="card-body">
                      <div className=" form-group col-sm-6">
                        <label htmlFor="xyz">Data Source</label>
                        <span style={{ color: "red" }}>*</span>
                        <select
                          id="select1"
                          name="datasources"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.5px" }}
                        >
                          <option value="sel">--Select--</option>
                          <option value="aldata">AL DATA SOURCE</option>
                          <option value="psftest">PSF TEST SURVEY</option>
                          <option value="jap">JAPAN</option>
                          <option value="altest">AL TEST</option>
                          <option value="alnew">AL DATA SOURCE NEW</option>
                        </select>
                      </div>
                      <div
                        style={{ display: "none" }}
                        id="surveytemplate"
                        className=" form-group col-sm-6"
                      >
                        <label htmlFor="xyz">Survey Template</label>
                        <span style={{ color: "red" }}>*</span>
                        <select
                          id="select2"
                          name="surveytemp"
                          onChange={setdata}
                          className="form-control"
                          style={{ fontSize: "12.5px" }}
                          required
                        >
                          <option value="sel">--Select--</option>
                          <option value="surveymay">SURVEY MAY</option>
                          <option value="surveyal">SURVEY AL</option>
                        </select>
                      </div>
                      <div
                        style={{ display: "none" }}
                        id="random"
                        className="col-sm-6"
                      >
                        <div className="form-group">
                          <label htmlFor="xyz">Randomizer</label>
                          <span style={{ color: "red" }}>*</span>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radio1"
                              id="without"
                              defaultChecked
                            />
                            <label className="form-check-label">Without</label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radio1"
                              id="with"
                            />
                            <label className="form-check-label">With</label>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ display: "none" }}
                        id="totaldatasource"
                        className="col-sm-6"
                      >
                        <div className="form-group">
                          <label htmlFor="xyz">
                            Total Records of Data Source
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <input
                            className="form-control"
                            value={getuserdata}
                            type="text"
                            name="datasourcerecords"
                            readOnly
                          />
                        </div>
                      </div>
                      <div style={{ display: "none" }} className="row btnadd">
                        <div className="button-section">
                          {/* <button
                          className="button add"
                          type="button"
                          onClick={() => addFormFields()}
                        >
                          Add
                        </button>  */}
                          <button
                            // id="AddMoreHeader"
                            id="addmore"
                            style={{ fontSize: "12px" }}
                            type="button"
                            className="btn  btn-success ml-3"
                            onClick={() => addFormFields()}
                          >
                            <i
                              className="nav-icon fas fa-plus"
                              style={{ fontSize: "11px" }}
                            />{" "}
                            Add Filter
                          </button>
                        </div>

                        {/* <button
                          id="rembtn"
                          style={{ fontSize: "12px" }}
                          type="click"
                          className="btn btn-danger ml-2 remove_btn"
                        >
                          <i
                            className="nav-icon fas fa-minus "
                            style={{ fontSize: "11px" }}
                          />{" "}
                          Remove Filter
                        </button> */}
                      </div>

                      {formValues.map((element, index) => (
                        <div key={index}>
                          <div style={{ fontSize: "12.5px" }} id="filter">
                            <div
                              style={{ backgroundColor: "#d1d8e0" }}
                              className="card-body border mt-2 "
                            >
                              <div className="row">
                                <div className=" form-group col-sm-2">
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="xyz"
                                  >
                                    Column
                                  </label>
                                  <select
                                    id="japanselect1"
                                    name="colum"
                                    value={element.colum || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    style={{
                                      fontSize: "12.4px",
                                    }}
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option value="Ticket">Ticket No.</option>
                                    <option value="Vehicle">
                                      Vehicle Number
                                    </option>
                                    <option value="Company">Company</option>
                                    <option value="State">State</option>
                                    <option value="City">City</option>
                                    <option value="Name">Name</option>
                                    <option value="Email">Email</option>
                                    <option value="Mobile">Mobile</option>
                                  </select>

                                  <select
                                    style={{
                                      display: "none",
                                      fontSize: "12.4px",
                                    }}
                                    id="psftestselect1"
                                    name="colum"
                                    value={element.colum || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option value="Ticketpsf">
                                      Ticket No.
                                    </option>
                                    <option value="registrationnopsf">
                                      Registration Number
                                    </option>
                                    <option value="Companynamepsf">
                                      Company Name
                                    </option>
                                    <option value="Namepsf">Name</option>
                                    <option value="Emailpsf">Email</option>
                                    <option value="Mobilepsf">Mobile</option>
                                  </select>

                                  <select
                                    style={{
                                      display: "none",
                                      fontSize: "12.4px",
                                    }}
                                    id="aldatasourceselect1"
                                    name="colum"
                                    value={element.colum || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option value="Ticketaldatasource">
                                      Ticket No.
                                    </option>
                                    <option value="orderidaldatasource">
                                      Order ID
                                    </option>
                                    <option value="Namealdatasource">
                                      Name
                                    </option>
                                    <option value="Emailaldatasource">
                                      Email
                                    </option>
                                    <option value="Mobilealdatasource">
                                      Mobile
                                    </option>
                                  </select>

                                  <select
                                    style={{
                                      display: "none",
                                      fontSize: "12.4px",
                                    }}
                                    id="altestselect1"
                                    name="colum"
                                    value={element.colum || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option value="Ticketaltest">
                                      Ticket No.
                                    </option>
                                    <option value="orderidaltest">
                                      Order ID
                                    </option>
                                    <option value="dateorequestaltest">
                                      Date Of Request
                                    </option>
                                    <option value="Namealtest">Name</option>
                                    <option value="Emailaltest">Email</option>
                                    <option value="Mobilealtest">Mobile</option>
                                  </select>

                                  <select
                                    style={{
                                      display: "none",
                                      fontSize: "12.4px",
                                    }}
                                    id="aldatanewselect1"
                                    name="colum"
                                    value={element.colum || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option value="Ticketaldatasourcenew">
                                      Ticket No.
                                    </option>
                                    <option value="orderidaldatasourcenew">
                                      Order ID
                                    </option>
                                    <option value="addressaldatasourcenew">
                                      Address
                                    </option>
                                    <option value="Namealdatasourcenew">
                                      Name
                                    </option>
                                    <option value="Emailaldatasourcenew">
                                      Email
                                    </option>
                                    <option value="Mobilealdatasourcenew">
                                      Mobile
                                    </option>
                                  </select>
                                </div>
                                {/********* For Japan  ***********/}
                                <div
                                  id="japanvalue"
                                  className=" form-group col-sm-2"
                                >
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="xyz"
                                  >
                                    Value
                                  </label>

                                  <select
                                    name="val[]"
                                    // value={[element.val] || []}
                                    onChange={(e) => handleChange(index, e)}
                                    style={{
                                      fontSize: "12.4px",
                                    }}
                                    id="valname"
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetails.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.name}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valticket"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetails.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.ticket_no}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    id="valemail"
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetails.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.email}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    id="valvehicle"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetails.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.vehicle_no}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    id="valcompany"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetails.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.company}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    id="valstate"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetails.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.state}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    id="valcity"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetails.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.city}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    id="valmobile"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetails.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.mobile}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>

                                {/******  For AL Data Source ********/}
                                <div
                                  id="aldatavalue"
                                  style={{ display: "none" }}
                                  className=" form-group col-sm-2"
                                >
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="xyz"
                                  >
                                    Value
                                  </label>

                                  <select
                                    name="val[]"
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    id="valnamealdatasource"
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataSource.map(
                                      (element) => {
                                        return (
                                          <option
                                            value={element._id}
                                            key={element._id}
                                          >
                                            {element.name}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valticketaldatasource"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataSource.map(
                                      (element) => {
                                        return (
                                          <option
                                            value={element._id}
                                            key={element._id}
                                          >
                                            {element.ticket_no}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>
                                  <select
                                    name="val[]"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    id="valemailaldatasource"
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataSource.map(
                                      (element) => {
                                        return (
                                          <option
                                            value={element._id}
                                            key={element._id}
                                          >
                                            {element.email}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>
                                  <select
                                    name="val[]"
                                    id="valorderidaldatasource"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataSource.map(
                                      (element) => {
                                        return (
                                          <option
                                            value={element._id}
                                            key={element._id}
                                          >
                                            {element.order_id}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valmobilealdatasource"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataSource.map(
                                      (element) => {
                                        return (
                                          <option
                                            value={element._id}
                                            key={element._id}
                                          >
                                            {element.mobile}
                                          </option>
                                        );
                                      }
                                    )}
                                  </select>
                                </div>

                                {/**** For AL Data Source New  ******/}
                                <div
                                  id="aldatavaluenew"
                                  style={{ display: "none" }}
                                  className=" form-group col-sm-2"
                                >
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="xyz"
                                  >
                                    Value
                                  </label>

                                  <select
                                    name="val[]"
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    id="valnamealdatasourcenew"
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataNew.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.name}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valticketaldatasourcenew"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataNew.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.ticket_no}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    id="valemailaldatasourcenew"
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataNew.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.email}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    id="valorderidaldatasourcenew"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataNew.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.order_id}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valmobilealdatasourcenew"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataNew.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.mobile}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valaddressaldatasourcenew"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAlDataNew.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.address}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>

                                {/**** For AL Test Survey  ******/}
                                <div
                                  id="altestvalue"
                                  style={{ display: "none" }}
                                  className=" form-group col-sm-2"
                                >
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="xyz"
                                  >
                                    Value
                                  </label>

                                  <select
                                    name="val[]"
                                    value={[element.val] || []}
                                    onChange={(e) => handleChange(index, e)}
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    id="valnamealtest"
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAltest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.name}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valticketaltest"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAltest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.ticket_no}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    id="valemailaltest"
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAltest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.email}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    id="valorderidaltest"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAltest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.order_id}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valmobilealtest"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAltest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.mobile}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valdateorequestaltest"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsAltest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.dateorequest}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>

                                {/**** For  PSF Test Survey  ******/}
                                <div
                                  id="psfvalue"
                                  style={{ display: "none" }}
                                  className=" form-group col-sm-2"
                                >
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="xyz"
                                  >
                                    Value
                                  </label>

                                  <select
                                    name="val[]"
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    id="valnamepsf"
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsPsfTest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.name}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valticketpsf"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsPsfTest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.ticket_no}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    id="valemailpsf"
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsPsfTest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.email}
                                        </option>
                                      );
                                    })}
                                  </select>
                                  <select
                                    name="val[]"
                                    id="valregistrationnopsf"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsPsfTest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.registration_no}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valmobilepsf"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsPsfTest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.mobile}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <select
                                    name="val[]"
                                    id="valcompanynamepsf"
                                    style={{
                                      display: "none",
                                      fontSize: "12.5px",
                                    }}
                                    value={element.val || []}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                    {filterDetailsPsfTest.map((element) => {
                                      return (
                                        <option
                                          value={element._id}
                                          key={element._id}
                                        >
                                          {element.company_name}
                                        </option>
                                      );
                                    })}
                                  </select>
                                </div>

                                <div className="form-group col-sm-2">
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="xyz"
                                  >
                                    Range Type
                                  </label>

                                  <select
                                    name="rangetype"
                                    id={"rangetypes" + index}
                                    value={element.rangetype || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    className="form-control"
                                    style={{
                                      fontSize: "12.5px",
                                    }}
                                  >
                                    <option>--Select Category--</option>
                                    <option value="per">Percentage</option>
                                    <option value="ran">Range</option>
                                    <option value="eq">Equal</option>
                                    <option value="like">Like</option>
                                  </select>
                                </div>

                                <div
                                  style={{
                                    display: "none",
                                    fontSize: "12.5px",
                                  }}
                                  id={"prcntge" + index}
                                  className="form-group col-sm-2 prcntge"
                                >
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    htmlFor="exampleInputEmail"
                                  >
                                    Percentage
                                  </label>
                                  <input
                                    type="number"
                                    value={element.prcnt || ""}
                                    onChange={(e) => handleChange(index, e)}
                                    name="prcnt"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div
                                  style={{
                                    display: "none",
                                    fontSize: "12.5px",
                                  }}
                                  className="row range"
                                  id={"range" + index}
                                >
                                  <div className="form-group col-sm-4">
                                    <label
                                      style={{ fontSize: "12.4px" }}
                                      htmlFor="exampleInputEmail"
                                    >
                                      Min:
                                    </label>
                                    <input
                                      type="number"
                                      value={element.min || ""}
                                      onChange={(e) => handleChange(index, e)}
                                      name="min"
                                      className="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div className="form-group col-sm-4">
                                    <label
                                      style={{ fontSize: "12.4px" }}
                                      htmlFor="exampleInputEmail"
                                    >
                                      Max:
                                    </label>
                                    <input
                                      type="number"
                                      value={element.max || ""}
                                      onChange={(e) => handleChange(index, e)}
                                      name="max"
                                      className="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {index ? (
                            <button
                              type="button"
                              style={{ fontSize: "12px" }}
                              className="btn btn-danger ml-2 remove_btn mt-2"
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
                      {/* <div className="button-section">
                        <button
                          className="button add"
                          type="button"
                          onClick={() => addFormFields()}
                        >
                          Add
                        </button> */}
                      {/* <button className="button submit" type="submit">
                      Submit
                    </button> */}
                      {/* </div> */}

                      {/* <div id="duallist" className="row">
                        <div className="col-sm-8">
                          <div className="form-group">
                            <label>Select Users</label>
                            <select
                              id="duallistselectssss"
                              className="duallistbox"
                              name="duallistselect[]"
                              multiple="multiple"
                              onChange={setdata}
                            >
                              <option>A</option>
                              <option>B</option>
                              <option>C</option> */}
                      {/* {users.map((element) => (
                                <>
                                  <option value={element._id} key={element._id}>
                                    {element.name}
                                  </option>
                                </>
                              ))} */}
                      {/* </select>
                          </div>
                        </div>
                      </div> */}

                      <div
                        style={{ display: "none", fontSize: "12.5px" }}
                        className="mt-2"
                        id="duallist"
                      >
                        <DualListBox
                          options={options}
                          selected={selected}
                          onChange={onChanges}
                          name="duallisttt[]"
                          id="dls"
                        />
                      </div>
                      <div
                        id="userAssign"
                        style={{ display: "none", fontSize: "12.5px" }}
                        className="form-group mt-2"
                      >
                        <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                          User Assign
                        </label>
                        <span style={{ color: "red" }}>*</span>
                        <div className="row">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radio3"
                              id="auto"
                              defaultChecked
                            />
                            <label
                              style={{ fontSize: "12.4px" }}
                              className="form-check-label"
                            >
                              Auto
                            </label>
                          </div>
                          <div className="form-check ml-2">
                            <input
                              className="form-check-input "
                              type="radio"
                              name="radio3"
                              id="manual"
                            />
                            <label
                              style={{ fontSize: "12.4px" }}
                              className="form-check-label"
                            >
                              Manual
                            </label>
                          </div>
                        </div>

                        <div
                          style={{ display: "none" }}
                          id="userassign"
                          className="form-group col-sm-2 userassin"
                        >
                          <input
                            type="hidden"
                            // value={inpval.prcnt}
                            // onChange={setdata}
                            name="userassin"
                            className="form-control"
                          />

                          {selected &&
                            selected.map((input) => {
                              return (
                                <div key={input + "abcff"}>
                                  <label
                                    style={{ fontSize: "12.4px" }}
                                    key={input + "abc"}
                                  >
                                    {input}
                                  </label>
                                  <input type="text" key={input} />
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <button
                        id="btn"
                        style={{ display: "none" }}
                        type="submit"
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

export default Test;
