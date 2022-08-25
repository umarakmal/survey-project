import React, { useEffect, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { ToastContainer, toast } from "react-toastify";
import Menu from "../Menu";
import { saveAs } from "file-saver";
import $ from "jquery";

const UploadData = () => {
  const [file, setFile] = useState("");
  const [sub, setSub] = useState("");

  const history = useHistory();
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  //Upload File
  const addFile = async (e) => {
    e.preventDefault();

    if (sub === "aldata") {
      var formData = new FormData();
      formData.append("csv", file);

      const res = await fetch(`/api/uploadaldata`, {
        method: "POST",
        body: formData,
      });

      formData = await res.json();
      console.log(formData.chk);
      if (formData.chk == "0") {
        toast.success("Uploaded Sucessfully");
      } else if (formData.chk == "1") {
        toast.error(formData.error);
      } else if (formData.chk == "2") {
        toast.error("Only CSV files are allowed!");
      }
    } else if (sub === "psftest") {
      var formData = new FormData();
      formData.append("csv", file);

      const res = await fetch(`/api/uploadpsftest`, {
        method: "POST",
        body: formData,
      });

      formData = await res.json();
      console.log(formData.chk);
      if (formData.chk == "0") {
        toast.success("Uploaded Sucessfully");
      } else if (formData.chk == "1") {
        toast.error(formData.error);
      } else if (formData.chk == "2") {
        toast.error("Only CSV files are allowed!");
      }
    } else if (sub === "jap") {
      var formData = new FormData();
      formData.append("csv", file);

      const res = await fetch(`/api/uploadjapan`, {
        method: "POST",
        body: formData,
      });

      formData = await res.json();
      console.log(formData.chk);
      if (formData.chk == "0") {
        toast.success("Uploaded Sucessfully");
      } else if (formData.chk == "1") {
        toast.error(formData.error);
      } else if (formData.chk == "2") {
        toast.error("Only CSV files are allowed!");
      }
    } else if (sub === "altest") {
      var formData = new FormData();
      formData.append("csv", file);

      const res = await fetch(`/api/uploadaltest`, {
        method: "POST",
        body: formData,
      });

      formData = await res.json();
      console.log(formData.chk);
      if (formData.chk == "0") {
        toast.success("Uploaded Sucessfully");
      } else if (formData.chk == "1") {
        toast.error(formData.error);
      } else if (formData.chk == "2") {
        toast.error("Only CSV files are allowed!");
      }
    } else if (sub === "alnew") {
      var formData = new FormData();
      formData.append("csv", file);

      const res = await fetch(`/api/uploadaldatanew`, {
        method: "POST",
        body: formData,
      });

      formData = await res.json();
      console.log(formData.chk);
      if (formData.chk == "0") {
        toast.success("Uploaded Sucessfully");
      } else if (formData.chk == "1") {
        toast.error(formData.error);
      } else if (formData.chk == "2") {
        toast.error("Only CSV files are allowed!");
      }
    }
  };

  useEffect(() => {
    $(function () {
      $("#select1").on("change", function () {
        if ($(this).val() === "aldata") {
          setSub("aldata");
          $("#sample1").show();
          $("#sample2").hide();
          $("#sample3").hide();
          $("#sample4").hide();
          $("#sample5").hide();
        } else if ($(this).val() === "psftest") {
          setSub("psftest");
          $("#sample1").hide();
          $("#sample2").hide();
          $("#sample3").hide();
          $("#sample4").hide();
          $("#sample5").show();
        } else if ($(this).val() === "jap") {
          setSub("japan");
          $("#sample1").hide();
          $("#sample2").hide();
          $("#sample3").hide();
          $("#sample4").show();
          $("#sample5").hide();
        } else if ($(this).val() === "altest") {
          setSub("altest");
          $("#sample1").hide();
          $("#sample2").hide();
          $("#sample3").show();
          $("#sample4").hide();
          $("#sample5").hide();
        } else if ($(this).val() === "alnew") {
          setSub("alnew");
          $("#sample1").hide();
          $("#sample2").show();
          $("#sample3").hide();
          $("#sample4").hide();
          $("#sample5").hide();
        }
      });
    });
  }, []);

  return (
    <div>
      <Header />
      <Menu />
      <ToastContainer />
      <div style={{ minHeight: "36rem" }} className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 mt-2">
                <div className="card card-dark">
                  <div className="card-header">
                    <h3 className="card-title">Upload Data</h3>
                  </div>

                  <div className="card-body">
                    <form encType="multipart/form-data" onSubmit={addFile}>
                      <div className="row">
                        <div className=" form-group col-sm-2">
                          <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                            Data Source
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <select
                            id="select1"
                            name="datasources"
                            //   onChange={handleFormSubmit}
                            className="form-control"
                            style={{ fontSize: "12.4px" }}
                          >
                            <option value="sel">--Select--</option>
                            <option value="aldata">AL DATA SOURCE</option>
                            <option value="psftest">PSF TEST SURVEY</option>
                            <option value="jap">JAPAN</option>
                            <option value="altest">AL TEST</option>
                            <option value="alnew">AL DATA SOURCE NEW</option>
                          </select>
                        </div>
                        <div className=" form-group col-sm-2 ">
                          <label style={{ fontSize: "12.4px" }} htmlFor="xyz">
                            Source Of Leads
                          </label>
                          <span style={{ color: "red" }}>*</span>
                          <select
                            id="leads"
                            name="sourceleads"
                            //   onChange={handleFormSubmit}
                            className="form-control"
                            style={{ fontSize: "12.4px" }}
                          >
                            <option value="sel">--Select--</option>
                            <option value="exc">Excel</option>
                          </select>
                        </div>
                        <div className="col-md-3 mt-2 ml-2">
                          <div className="form-group">
                            <h6 style={{ fontSize: "12.5px" }}>
                              Download upload csv format from below:
                            </h6>
                            <Link
                              style={{
                                fontWeight: "bolder",
                                fontSize: "12.5px",
                                display: "none",
                              }}
                              id="sample1"
                              to="/al_data_source .csv"
                              target="_blank"
                              download
                            >
                              Download Sample
                            </Link>
                            <Link
                              style={{
                                fontWeight: "bolder",
                                fontSize: "12.5px",
                                display: "none",
                              }}
                              id="sample2"
                              to="/al_data_source_new.csv"
                              target="_blank"
                              download
                            >
                              Download Sample
                            </Link>
                            <Link
                              style={{
                                fontWeight: "bolder",
                                fontSize: "12.5px",
                                display: "none",
                              }}
                              id="sample3"
                              to="/al_test.csv"
                              target="_blank"
                              download
                            >
                              Download Sample
                            </Link>
                            <Link
                              style={{
                                fontWeight: "bolder",
                                fontSize: "12.5px",
                                display: "none",
                              }}
                              id="sample4"
                              to="/japan.csv"
                              target="_blank"
                              download
                            >
                              Download Sample
                            </Link>
                            <Link
                              style={{
                                fontWeight: "bolder",
                                fontSize: "12.5px",
                                display: "none",
                              }}
                              id="sample5"
                              to="/psf_test_survey.csv"
                              target="_blank"
                              download
                            >
                              Download Sample
                            </Link>
                          </div>
                        </div>

                        <div className="form-group ml-2">
                          <label
                            htmlFor="file"
                            style={{ fontSize: "12.5px" }}
                            className="form-label text-muted"
                          >
                            Upload File
                          </label>
                          <input
                            filename="csv"
                            onChange={handleFile}
                            style={{ fontSize: "12.5px" }}
                            className="form-control-file"
                            type="file"
                            id="file"
                            aria-label="file example"
                            required
                          />
                          <div
                            style={{ fontSize: "12.5px" }}
                            className="invalid-feedback "
                          >
                            Please choose a csv file
                          </div>
                          <button
                            style={{ marginTop: "15px", fontSize: "12.5px" }}
                            type="submit"
                            className="btn btn-primary"
                          >
                            Upload
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default UploadData;
