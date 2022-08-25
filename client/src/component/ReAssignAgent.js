import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";

const ReAssignAgent = () => {
  const history = useHistory();
  const [dataSource, setDataSource] = useState("");

  const setdata = (e) => {
    const { name, value } = e.target;
    setDataSource((preval) => {
      return {
        ...dataSource,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
                <div style={{ fontSize: "13.5px" }} className="col-md-12">
                  <div className="card card-dark mt-3">
                    <div className="card-header">
                      <h3 className="card-title">Re-Assign Agents</h3>
                    </div>
                    <div className="card-body">
                      <div className=" form-group">
                        <label htmlFor="xyz">Survey</label>
                        <span style={{ color: "red" }}>*</span>
                        <select
                          id="select1"
                          name="dataSource"
                          onChange={setdata}
                          className="form-control"
                          required
                        >
                          <option value="sel">--Select--</option>
                          <option value="surveymay">SURVEY MAY</option>
                          <option value="surveyal">SURVEY AL</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        // onClick={addinpdata}
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                {/* <br></br> */}
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

export default ReAssignAgent;
