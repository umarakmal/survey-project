import React, { useState, useEffect } from "react";
import "../../css/home.css";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import {
  DataGrid,
  GridToolbarExport,
  GridToolbarContainer,
} from "@material-ui/data-grid";
import { ToastContainer, toast } from "react-toastify";

function MyExportButton() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
const SurveyList = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const columns = [
    { field: "id", headerName: "S.No.", width: 115 },
    { field: "templatename", headerName: "Name", width: 150 },
  ];
  const rows = getuserdata.map((element, index) => ({
    id: index + 1,
    _id: element._id,
    templatename: element.templatename,
  }));

  const getdata = async () => {
    const res = await fetch("/api/surveylist", {
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

  return (
    <>
      <Header />
      <Menu />
      <ToastContainer />
      <div>
        <div style={{ minHeight: "36rem" }} className="content-wrapper">
          <div className="content">
            <div style={{ margin: "15px" }} className="card">
              <DataGrid
                style={{ fontWeight: "400", fontSize: "12.4px" }}
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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SurveyList;
