import React, { useEffect, useState } from "react";
import Header from "../Header";
import "jquery/dist/jquery.min.js";
import Footer from "../Footer";
import DatePicker from "react-datepicker";
import {
  DataGrid,
  GridToolbarExport,
  GridToolbarContainer,
} from "@material-ui/data-grid";
import "react-datepicker/dist/react-datepicker.css";
import Menu from "../Menu";

function MyExportButton() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const CustomerReport = () => {
  const columns = [
    { field: "id", headerName: "S.No.", width: 120 },
    { field: "primaryPatient", headerName: "Primary Patient Name", width: 150 },
    { field: "primaryPhone", headerName: "Primary Phone Number", width: 150 },
    { field: "patientRelation", headerName: "Patient Relation", width: 150 },
    { field: "patientName", headerName: "Patient Name", width: 150 },
  ];
  const [getuserdata, setUserdata] = useState([]);
  const [startDate, setStartDate] = useState("");
  // console.log(startDate);
  const [endDate, setEndDate] = useState("");
  const [show, setShow] = useState(false);

  const postData = async (e) => {
    e.preventDefault();

    const date1 = startDate.toLocaleDateString();
    const date2 = endDate.toLocaleDateString();
    var body = {
      date1,
      date2,
    };

    console.log(body);
    const res = await fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date1,
        date2,
      }),
    });
    {
      const data = await res.json();
      console.log(data);
      setUserdata(data);
    }

    setShow(true);
  };

  const rows = getuserdata.map((element, index) => ({
    id: index + 1,
    _id: element._id,
    primaryPatient: element.primaryPatient,
    primaryPhone: element.primaryPhone,
    patientRelation: element.patientRelation,
  }));

  return (
    <div>
      <Header />
      <Menu />
      <div style={{ minHeight: "36rem" }} className="content-wrapper">
        <center>
          <h4>Customer Report</h4>
        </center>

        <div className="card mt-5">
          <section className="content offset-md-3">
            <div className="container-fluid">
              <form>
                <div className="form-row">
                  <div className="form-group ">
                    <label
                      style={{ fontSize: "12.4px" }}
                      htmlFor="date1"
                      className="form-label"
                    >
                      From
                    </label>

                    <DatePicker
                      selected={startDate}
                      selectsStart
                      className="form-control"
                      placeholderText="Select Date"
                      value={startDate}
                      onChange={(date) => setStartDate(date)}
                      dateFormat="yyyy-MM-dd"
                      id="date1"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group ml-2">
                    <label
                      style={{ fontSize: "12.4px" }}
                      htmlFor="date2"
                      className="form-label"
                    >
                      To
                    </label>
                    <DatePicker
                      selected={endDate}
                      dateFormat="yyyy-MM-dd"
                      className="form-control"
                      selectsEnd
                      placeholderText="Select Date"
                      minDate={startDate}
                      value={endDate}
                      onChange={(date) => setEndDate(date)}
                      id="date2"
                      autoComplete="off"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      fontSize: "12.4px",
                      height: "35px",
                      marginTop: "30px",
                    }}
                    onClick={postData}
                    className="btn btn-primary ml-2"
                    id="submit"
                  >
                    Get Data
                  </button>
                </div>
              </form>
            </div>
          </section>

          <div style={{ margin: "15px" }} className="card">
            {show ? (
              <DataGrid
                style={{ fontWeight: "400" }}
                components={{
                  Toolbar: MyExportButton,
                }}
                autoHeight
                getRowId={(element) => element._id}
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
              />
            ) : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerReport;
