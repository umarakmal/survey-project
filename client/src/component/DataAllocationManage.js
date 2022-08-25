import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import $ from "jquery";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";

const DataAllocationManagement = () => {
  const history = useHistory();
  const [dataSource, setDataSource] = useState("");
  const [assignDataUserss, setAssigningData] = useState("");
  const [getuserdata, setUserdata] = useState([]);
  const [val, setVal] = useState([]);
  const [optionChange, setOptionChange] = useState([]);
  const [percentageData, setPercentageData] = useState([]);
  // console.log({ assigningData });
  const [test, setTest] = useState([]);
  const [assign, setAssign] = useState([]);
  const [counterValue, setCounterValue] = useState([]);
  const [rangetype, setRangeType] = useState([]);
  const [randoms, setRandom] = useState([]);
  const [autoManual, setAutoManual] = useState([]);
  // console.log(autoManual);
  const setdata1 = (e) => {
    const { name, value } = e.target;
    setVal((preval) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  const setdata2 = (e) => {
    const { name, value } = e.target;
    setAssigningData((preval) => {
      return {
        ...assignDataUserss,
        [name]: value,
      };
    });
  };

  const handleRun = (e) => {
    if (test === "jap") {
      if (counterValue === 1) {
        const { min, max } = rangetype;
        const { vehicle_no } = vehic;
        const { email } = emailet;
        const { name } = namet;
        const { state } = statet;
        const { city } = cityt;
        const { ticket_no } = tickett;
        const { mobile } = mobilet;
        const { company } = companyt;
        const getDataRange = async () => {
          const res = await fetch("/api/getrangejapan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              state,
              city,
              ticket_no,
              vehicle_no,
              mobile,
              company,
              min,
              max,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataRange();
      } else if (counterValue === 2) {
        const getDataEqual = async () => {
          const res = await fetch("/api/getequaljapan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataEqual();
      } else if (counterValue === 3) {
        const { name } = namet;
        const { email } = emailet;
        const getDataLike = async () => {
          const res = await fetch("/api/getlikejapan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataLike();
      } else {
        const { prcnt } = val;
        const {
          name,
          email,
          state,
          city,
          ticket_no,
          mobile,
          vehicle_no,
          company,
        } = optionChange;
        const getdatapercentage = async () => {
          const res = await fetch("/api/getperjapanfilter", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              state,
              city,
              ticket_no,
              vehicle_no,
              mobile,
              company,
              prcnt,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getdatapercentage();
      }
    } else if (test === "aldata") {
      if (counterValue === 1) {
        const { min, max } = rangetype;
        const { email } = emailAlData;
        const { name } = nameAlData;
        const { ticket_no } = ticketAlData;
        const { mobile } = mobileAlData;
        const { order_id } = orderAlData;
        const getDataRange = async () => {
          const res = await fetch("/api/getaldatarange", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              ticket_no,
              mobile,
              order_id,
              min,
              max,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataRange();
      } else if (counterValue === 2) {
        const getDataEqual = async () => {
          const res = await fetch("/api/getequaljapan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataEqual();
      } else if (counterValue === 3) {
        const { name } = nameAlData;
        const { email } = emailAlData;
        const getDataLike = async () => {
          const res = await fetch("/api/getaldatalike", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataLike();
      } else {
        const { prcnt } = val;
        const { name, email, ticket_no, mobile, order_id } = optionChange;
        const getdatapercentage = async () => {
          const res = await fetch("/api/getaldata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              ticket_no,
              mobile,
              order_id,
              prcnt,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getdatapercentage();
      }
    } else if (test === "psftest") {
      if (counterValue === 1) {
        const { min, max } = rangetype;
        const { email } = emailPsf;
        const { name } = namePsf;
        const { ticket_no } = ticketPsf;
        const { mobile } = mobilePsf;
        const { company_name } = companyPsf;
        const { registration_no } = registrationt;
        const getDataRange = async () => {
          const res = await fetch("/api/getpsftestrange", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              ticket_no,
              mobile,
              registration_no,
              company_name,
              min,
              max,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataRange();
      } else if (counterValue === 2) {
        const getDataEqual = async () => {
          const res = await fetch("/api/getequaljapan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataEqual();
      } else if (counterValue === 3) {
        const { name } = namePsf;
        const { email } = emailPsf;
        const getDataLike = async () => {
          const res = await fetch("/api/getpsftestlike", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataLike();
      } else {
        const { prcnt } = val;
        const {
          name,
          email,
          ticket_no,
          mobile,
          company_name,
          registration_no,
        } = optionChange;
        const getdatapercentage = async () => {
          const res = await fetch("/api/getpsfper", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              ticket_no,
              registration_no,
              mobile,
              company_name,
              prcnt,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getdatapercentage();
      }
    } else if (test === "alnew") {
      if (counterValue === 1) {
        const { min, max } = rangetype;
        const { email } = emailAlDataNew;
        const { name } = nameAlDataNew;
        const { ticket_no } = ticketAlDataNew;
        const { mobile } = mobileAlDataNew;
        const { address } = addresst;
        const { order_id } = orderAlDataNew;
        const getDataRange = async () => {
          const res = await fetch("/api/getaldatanewrange", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              ticket_no,
              mobile,
              order_id,
              address,
              min,
              max,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataRange();
      } else if (counterValue === 2) {
        const getDataEqual = async () => {
          const res = await fetch("/api/getequaljapan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataEqual();
      } else if (counterValue === 3) {
        const { name } = nameAlDataNew;
        const { email } = emailAlDataNew;
        const getDataLike = async () => {
          const res = await fetch("/api/getaldatanewlike", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataLike();
      } else {
        const { prcnt } = val;
        const { name, email, ticket_no, mobile, order_id, address } =
          optionChange;
        const getdatapercentage = async () => {
          const res = await fetch("/api/getaldatanew", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              ticket_no,
              address,
              mobile,
              order_id,
              prcnt,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getdatapercentage();
      }
    } else if (test === "altest") {
      if (counterValue === 1) {
        const { min, max } = rangetype;
        const { email } = emailAlTest;
        const { name } = nameAlTest;
        const { ticket_no } = ticketAlTest;
        const { mobile } = mobileAlTest;
        const { dateorequest } = dateorequestt;
        const { order_id } = orderAlTest;
        const getDataRange = async () => {
          const res = await fetch("/api/getaltestrange", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              ticket_no,
              mobile,
              order_id,
              dateorequest,
              min,
              max,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataRange();
      } else if (counterValue === 2) {
        const getDataEqual = async () => {
          const res = await fetch("/api/getequaljapan", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataEqual();
      } else if (counterValue === 3) {
        const { name } = nameAlTest;
        const { email } = emailAlTest;
        const getDataLike = async () => {
          const res = await fetch("/api/getlikealitest", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getDataLike();
      } else {
        const { prcnt } = val;
        const { name, email, ticket_no, mobile, order_id, dateorequest } =
          optionChange;
        const getdatapercentage = async () => {
          const res = await fetch("/api/getaltestper", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
              ticket_no,
              dateorequest,
              mobile,
              order_id,
              prcnt,
            }),
          });
          const data = await res.json();
          if (res.status === 422 || !data) {
            console.log("error");
          } else {
            setPercentageData(data);
          }
        };
        getdatapercentage();
      }
    }
  };

  const handleSelectChange = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setOptionChange({ [e.target.name]: value });
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
  var userid = {};
  var assignDataUsers = {};
  //Submit the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(assignDataUsers);
    // console.log(optionChange);
    if (autoManual === "manual") {
      if (assign === "ja" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = filterDetails;
        // console.log(dataJapan);
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              assignDataUsers,
              dataJapan,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "psf" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = filterDetailsPsfTest;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              assignDataUsers,
              dataJapan,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "alne" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = filterDetailsAlDataNew;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              assignDataUsers,
              dataJapan,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "al" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = filterDetailsAlDataSource;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              dataJapan,
              assignDataUsers,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "altes" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = filterDetailsAlDataSource;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              assignDataUsers,
              dataJapan,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "ja" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              dataJapan,
              assignDataUsers,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            // toast.error("Error Occurred!");
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            // toast.error("Error occured");
            console.log("err");
          }
        }
      } else if (assign === "psf" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              dataJapan,
              assignDataUsers,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            console.log("err");
          }
        }
      } else if (assign === "alne" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              assignDataUsers,
              dataJapan,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            console.log("err");
          }
        }
      } else if (assign === "al" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              dataJapan,
              assignDataUsers,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            console.log("err");
          }
        }
      } else if (assign === "altes" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        assignDataUsers = assignDataUserss;
        const dataJapan = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndatamanually`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              dataJapan,
              assignDataUsers,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            console.log("err");
          }
        }
      }
    } else {
      if (assign === "ja" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = filterDetails;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "psf" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = filterDetailsPsfTest;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "alne" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = filterDetailsAlDataNew;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "al" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = filterDetailsAlDataSource;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "altes" && randoms === "withoutrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = filterDetailsAltest;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            toast.error("Error Occurred!");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            toast.error("Error occured");
          }
        }
      } else if (assign === "ja" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            // toast.error("Error Occurred!");
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            // toast.error("Error occured");
            console.log("err");
          }
        }
      } else if (assign === "psf" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            console.log("err");
          }
        }
      } else if (assign === "alne" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            console.log("err");
          }
        }
      } else if (assign === "al" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            console.log("err");
          }
        }
      } else if (assign === "altes" && randoms === "withrandom") {
        const { datasources, surveytemp, val } = dataSource;
        userid = duallist.selected;
        const assigningData = percentageData;
        if (!surveytemp && !duallist.selected) {
          alert("please select an option!");
          return false;
        } else {
          // console.log({ userid });
          const res = await fetch(`/api/assigndata`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              userid,
              assigningData,
            }),
          });
          const data = await res.json();
          console.log(data);
          if (res.status === 422 || !data) {
            console.log("err");
          } else if (res.status === 200) {
            toast.success("Submitted successfully");
          } else {
            console.log("err");
          }
        }
      }
    }
  };

  const handleFormSubmit = (e) => {
    // e.preventDefault();
    if (e.target.value === "jap") {
      setTest(e.target.value);
      setAssign("ja");
      var counter = 1;
      $("#psfdiv").hide();
      $("#altestdiv").hide();
      $("#aldatadiv").hide();
      $("#alnewdiv").hide();
      $("#AddMoreHeader").on("click", function () {
        setCounterValue(counter);
        $("#filter").append(
          `
              <div 
                              style= "background-color: #d1d8e0"
                              class="card-body border mt-2 "
                              id="japandiv"
                            >
                              <div class="row">
                              
                                <div class=" form-group col-sm-2">
                                  <label style= 'font-size:12.4px' htmlFor="xyz">Column</label>
                                  <select
                                    id="japanselect1${counter}"
                                    name="colum"
                                    style= 'font-size:12.4px'
                                    class="form-control"
                                    onchange="callClumData('fr')"
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option value="Tickettt">Ticket No.</option>
                                    <option value="Vehiclett">Vehicle Number</option>
                                    <option value="Companytt">Company</option>
                                    <option value="Statett">State</option>
                                    <option value="Citytt">City</option>
                                    <option value="Namett">Name</option>
                                    <option value="Emailtt">Email</option>
                                    <option value="Mobilett">Mobile</option>
                                  </select>
                               </div>
                             
                                <div
                                  id="japanvalues${counter}"                                
                                  class=" form-group col-sm-2"
                                >
                                  <label style='font-size:12.4px' htmlFor="xyz">Value</label>
                                  <select
                                    name="name[]"                                    
                                    style="display:none; font-size: 12.4px"
                                    id="tablValueID${counter}"
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
    
                                  <select 
                                    name="email[]"
                                    id="tablValueIDem${counter}"
                                    style="display:'none'; font-size: 12.4px"                                  
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>
    
                                  </select>
                                  <select
                                    name="ticket[]"
                                    style=" display: none ; font-size: 12.4px" 
                                    id="valticket${counter}"
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>
  
                                  </select>
                                  <select
                                    name="vehicle[]"
                                    id="valvehicle${counter}"
                                    style=" display: none ; font-size: 12.4px"                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                         
                                  <option defaultValue="">--Select--</option>

                                  </select>
                                  <select
                                    name="company[]"
                                    id="valcompany${counter}"
                                    style=" display: none ; font-size: 12.4px"                                     
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
                                  <select
                                    name="state[]"
                                    id="valstate${counter}"
                                    style=" display: none ; font-size: 12.4px" 
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>
    
                                  </select>
                                  <select
                                    name="city[]"
                                    id="valcity${counter}"
                                    style=" display: none ; font-size: 12.4px" 
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                  </select>
                                  <select
                                    name="mobile[]"
                                    id="valmobile${counter}"
                                    style=" display: none ; font-size: 12.4px "  
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                  </select>
                                </div>
    

                                <div class="form-group col-sm-2">
                                  <label style='font-size:12.4px' htmlFor="xyz">Range Type</label>
    
                                  <select
                                    name="rangetype"
                                    id="rngtypes${counter}"
                                   
                                    class="form-control"
                                    style="font-size: 12.4px" 
                                  >
                                    <option>--Select Category--</option>
                                    <option value="1">Percentage</option>
                                    <option value="2">Range</option>
                                    <option value="3">Equal</option>
                                    <option value="4">Like</option>
                                  </select>
                                </div>
    
                                <div
                                  style="display: none ; font-size: 12.4px"
                                  id="pcn${counter}"
                                  class="form-group col-sm-2"
                                >
                                  <label style='font-size:12.4px' htmlFor="exampleInputEmail">
                                    Percentage
                                  </label>
                                  <input
                                    type="number"
                                    style= "font-size: 12.4px"                                
                                    name="prcnt"
                                    class="form-control"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div
                                  style="display: none; font-size: 12.4px"
                                  class="row"
                                  id="rngs${counter}"
                                >
                                  <div style='font-size:12.4px' class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Min:</label>
                                    <input
                                      type="number"
                                      style= "font-size: 12.4px"
                                      name="min"
                                      id="min${counter}"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Max:</label>
                                    <input
                                      type="number" 
                                      style= "font-size: 12.4px"
                                      name="max"
                                      id="max${counter}"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>      
    
                            <script>
                         
                            $("#japanselect1${counter}").on('change',function(){

                              if($(this).val()=='Namett'){
                                $("#tablValueID${counter}").css("display","block")
                                $("#tablValueIDem${counter}").hide()
                                $("#valvehicle${counter}").hide()
                                $("#valstate${counter}").hide()
                                $("#valcity${counter}").hide()
                                $("#valcompany${counter}").hide()
                                $("#valticket${counter}").hide()
                                $("#valmobile${counter}").hide()
                              }
                              else if($(this).val()=='Emailtt'){
                                $("#tablValueID${counter}").hide()
                                $("#tablValueIDem${counter}").show()
                                $("#valvehicle${counter}").hide()
                                $("#valstate${counter}").hide()
                                $("#valcity${counter}").hide()
                                $("#valcompany${counter}").hide()
                                $("#valticket${counter}").hide()
                                $("#valmobile${counter}").hide()
                              }
                              else if($(this).val()=='Vehiclett'){
                                $("#tablValueID${counter}").hide()
                                $("#tablValueIDem${counter}").hide()
                                $("#valvehicle${counter}").show()
                                $("#valstate${counter}").hide()
                                $("#valcity${counter}").hide()
                                $("#valcompany${counter}").hide()
                                $("#valticket${counter}").hide()
                                $("#valmobile${counter}").hide()
                              }
                              else if($(this).val()=='Tickettt'){
                                $("#tablValueID${counter}").hide()
                                $("#tablValueIDem${counter}").hide()
                                $("#valvehicle${counter}").hide()
                                $("#valstate${counter}").hide()
                                $("#valcity${counter}").hide()
                                $("#valcompany${counter}").hide()
                                $("#valticket${counter}").show()
                                $("#valmobile${counter}").hide()
                              }
                              else if($(this).val()=='Statett'){
                                $("#tablValueID${counter}").hide()
                                $("#tablValueIDem${counter}").hide()
                                $("#valvehicle${counter}").hide()
                                $("#valstate${counter}").show()
                                $("#valcity${counter}").hide()
                                $("#valcompany${counter}").hide()
                                $("#valticket${counter}").hide()
                                $("#valmobile${counter}").hide()
                              }
                              else if($(this).val()=='Citytt'){
                                $("#tablValueID${counter}").hide()
                                $("#tablValueIDem${counter}").hide()
                                $("#valvehicle${counter}").hide()
                                $("#valstate${counter}").hide()
                                $("#valcity${counter}").show()
                                $("#valcompany${counter}").hide()
                                $("#valticket${counter}").hide()
                                $("#valmobile${counter}").hide()
                              }
                              else if($(this).val()=='Companytt'){
                                $("#tablValueID${counter}").hide()
                                $("#tablValueIDem${counter}").hide()
                                $("#valvehicle${counter}").hide()
                                $("#valstate${counter}").hide()
                                $("#valcity${counter}").hide()
                                $("#valcompany${counter}").show()
                                $("#valticket${counter}").hide()
                                $("#valmobile${counter}").hide()
                              }
                              else if($(this).val()=='Mobilett'){
                                $("#tablValueID${counter}").hide()
                                $("#tablValueIDem${counter}").hide()
                                $("#valvehicle${counter}").hide()
                                $("#valstate${counter}").hide()
                                $("#valcity${counter}").hide()
                                $("#valcompany${counter}").hide()
                                $("#valticket${counter}").hide()
                                $("#valmobile${counter}").show()

                              }
                             })

                            function callClumData(fr) {
                              const getdata11 = async () => {
                                const res = await fetch("/api/getfilterdetailsjapan", {
                                  method: "GET",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                })
                          
                                const data = await res.json();
                          
                                if (res.status === 422 || !data) {
                                  console.log("error ");
                                } else {
                                  
                                    $('#tablValueID${counter}').find('option:not(:first)').remove();
                                      $.each(data,function(key, value){
                                        var opt = '<option value="'+value.name+'">'+value.name+'</option>';  
                                       $("#tablValueID${counter}").append(opt);
                                     });

                                     $('#tablValueIDem${counter}').find('option:not(:first)').remove();
                                     $.each(data,function(key, value){
                                       var opt = '<option value="'+value.email+'">'+value.email+'</option>';  
                                      $("#tablValueIDem${counter}").append(opt);
                                    });
                                   
                                    $('#valticket${counter}').find('option:not(:first)').remove();
                                    $.each(data,function(key, value){
                                      var opt = '<option value="'+value.ticket_no+'">'+value.ticket_no+'</option>';  
                                     $("#valticket${counter}").append(opt);
                                   });

                                   $('#valstate${counter}').find('option:not(:first)').remove();
                                   $.each(data,function(key, value){
                                     var opt = '<option value="'+value.state+'">'+value.state+'</option>';  
                                    $("#valstate${counter}").append(opt);
                                  });

                                  $('#valcity${counter}').find('option:not(:first)').remove();
                                  $.each(data,function(key, value){
                                    var opt = '<option value="'+value.city+'">'+value.city+'</option>';  
                                   $("#valcity${counter}").append(opt);
                                 });

                                 $('#valvehicle${counter}').find('option:not(:first)').remove();
                                 $.each(data,function(key, value){
                                   var opt = '<option value="'+value.vehicle_no+'">'+value.vehicle_no+'</option>';  
                                  $("#valvehicle${counter}").append(opt);
                                });

                                $('#valcompany${counter}').find('option:not(:first)').remove();
                                  $.each(data,function(key, value){
                                    var opt = '<option value="'+value.company+'">'+value.company+'</option>';  
                                   $("#valcompany${counter}").append(opt);
                                 });

                                 $('#valmobile${counter}').find('option:not(:first)').remove();
                                  $.each(data,function(key, value){
                                    var opt = '<option value="'+value.mobile+'">'+value.mobile+'</option>';  
                                   $("#valmobile${counter}").append(opt);
                                 });
                              };
                             
                            }
                            getdata11();
                          }

                            $("#rngtypes${counter}").on("change", function () {
                             
                              if ($(this).val() === "1") {
                                $("#pcn${counter}").css("display", "block")
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "2") {
                                $("#rngs${counter}").css("display", "flex");
                                $("#pcn${counter}").hide();
                              } else if ($(this).val() === "3") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "4") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              }
                            });
            

                            $('#btnrun').on('click',function(){
                              let vehicle = $("#valvehicle${counter}").val()
                              console.log(vehicle);                 
                              var company = $("#valcompany${counter}").val();
                              console.log(company);
                              var name = $("#tablValueID${counter}").val()
                              console.log(name)
                              var email = $("#tablValueIDem${counter}").val()
                              console.log(email)
                              var ticket = $("#valticket${counter}").val()
                              console.log(ticket)
                              var state = $("#valstate${counter}").val()
                              console.log(state)
                              var city = $("#valcity${counter}").val()
                              console.log(city)
                              var mobile = $("#valmobile${counter}").val()
                              console.log(mobile)
                              var min = $("#min${counter}").val()
                              console.log(min)
                              var max = $("#max${counter}").val()
                              console.log(max)
                            });

                            </script> `
        );
        counter++;
      });
    } else if (e.target.value === "psftest") {
      setTest(e.target.value);
      setAssign("psf");
      counter = 1;
      $("#japandiv").hide();
      $("#altestdiv").hide();
      $("#aldatadiv").hide();
      $("#alnewdiv").hide();
      $("#AddMoreHeader").on("click", function () {
        $("#filter").append(
          `
                                    <div
                              style= "background-color: #d1d8e0"
                              class="card-body border mt-2 "
                              id="psfdiv"
                            >
                              <div class="row">
                              
                                <div class=" form-group col-sm-2">
                                  <label style= 'font-size:12.4px' htmlFor="xyz">Column</label>
                                  <select
                                  style= " font-size: 12.4px" 
                                  id="psftestselect1${counter}"
                                  name="colum"
                                  onchange="callPsfValData('fr')"
                                  class="form-control"
                                  required
                                >
                                  <option>--Select--</option>
                                  <option value="Ticketpsf">Ticket No.</option>
                                  <option value="Registrationnopsf">
                                    Registration Number
                                  </option>
                                  <option value="Companynamepsf">
                                    Company Name
                                  </option>
                                  <option value="Namepsf">Name</option>
                                  <option value="Emailpsf">Email</option>
                                  <option value="Mobilepsf">Mobile</option>
                                </select>
                               </div>
                             
                               <div
                                  id="psfvalue${counter}"
                                 
                             class=" form-group col-sm-2"
                                >
                                  <label style='font-size:12.4px' htmlFor="xyz">Value</label>
    
                                  <select
                                    name="val[]"
                                    
                                    style=" display: none ; font-size: 12.5px"
                                    id="valnamepsf${counter}"
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
    
                                  <select
                                    name="val[]"
                                    id="valticketpsf${counter}"
                                    style=" display: none ; font-size: 12.5px"
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
                                  <select
                                    name="val[]"
                                    style=" display: none ; font-size: 12.4px"
                                    id="valemailpsf${counter}"
                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
                                  <select
                                    name="val[]"
                                    id="valregistrationnopsf${counter}"
                                    style=" display: none ; font-size: 12.4px"
                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
    
                                  <select
                                    name="val[]"
                                    id="valmobilepsf${counter}"
                                    style=" display: none ; font-size: 12.4px"
                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>
    
                                  </select>
    
                                  <select
                                    name="val[]"
                                    id="valcompanynamepsf${counter}"
                                    style="display: none ; font-size: 12.4px"
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>
    
                                  </select>
                                </div>
    
  
    
                                <div class="form-group col-sm-2">
                                  <label style='font-size:12.4px' htmlFor="xyz">Range Type</label>
    
                                  <select
                                    name="rangetype"
                                    id="rngtypes${counter}"                                   
                                    class="form-control"
                                    style="font-size: 12.4px" 
                                  >
                                    <option>--Select Category--</option>
                                    <option value="1">Percentage</option>
                                    <option value="2">Range</option>
                                    <option value="3">Equal</option>
                                    <option value="4">Like</option>
                                  </select>
                                </div>
    
                                <div
                                  style="display: none ; font-size: 12.4px"
                                  id="pcn${counter}"
                                  class="form-group col-sm-2"
                                >
                                  <label style='font-size:12.4px' htmlFor="exampleInputEmail">
                                    Percentage
                                  </label>
                                  <input
                                    type="number"    
                                    style= "font-size: 12.4px"                            
                                    name="prcnt"
                                    class="form-control"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div
                                  style="display: none; font-size: 12.4px"
                                  class="row"
                                  id="rngs${counter}"
                                >
                                  <div style='font-size:12.4px' class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Min:</label>
                                    <input
                                      type="number"
                                      name="min"
                                      style= "font-size: 12.4px"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Max:</label>
                                    <input
                                      type="number" 
                                      style= "font-size: 12.4px"
                                      name="max"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>      
    
                            <script>
                         
                            $("#psftestselect1${counter}").on('change',function(){

                              if($(this).val()=='Namepsf'){
                                $("#valnamepsf${counter}").css("display","block")
                                $("#valemailpsf${counter}").hide()
                                $("#valregistrationnopsf${counter}").hide()
                                $("#valcompanynamepsf${counter}").hide()
                                $("#valticketpsf${counter}").hide()
                                $("#valmobilepsf${counter}").hide()
                              }
                              else if($(this).val()=='Emailpsf'){
                                $("#valnamepsf${counter}").hide()
                                $("#valemailpsf${counter}").show()
                                $("#valregistrationnopsf${counter}").hide()
                                $("#valcompanynamepsf${counter}").hide()
                                $("#valticketpsf${counter}").hide()
                                $("#valmobilepsf${counter}").hide()
                              }
                              else if($(this).val()=='Registrationnopsf'){
                                $("#valnamepsf${counter}").hide()
                                $("#valemailpsf${counter}").hide()
                                $("#valregistrationnopsf${counter}").show()
                                $("#valcompanynamepsf${counter}").hide()
                                $("#valticketpsf${counter}").hide()
                                $("#valmobilepsf${counter}").hide()
                              }
                              else if($(this).val()=='Ticketpsf'){
                                $("#valnamepsf${counter}").hide()
                                $("#valemailpsf${counter}").hide()
                                $("#valregistrationnopsf${counter}").hide()
                                $("#valcompanynamepsf${counter}").hide()
                                $("#valticketpsf${counter}").show()
                                $("#valmobilepsf${counter}").hide()
                              }
                              
                              else if($(this).val()=='Companynamepsf'){
                                $("#valnamepsf${counter}").hide()
                                $("#valemailpsf${counter}").hide()
                                $("#valregistrationnopsf${counter}").hide()
                                $("#valcompanynamepsf${counter}").show()
                                $("#valticketpsf${counter}").hide()
                                $("#valmobilepsf${counter}").hide()
                              }
                              else if($(this).val()=='Mobilepsf'){
                                $("#valnamepsf${counter}").hide()
                                $("#valemailpsf${counter}").hide()
                                $("#valregistrationnopsf${counter}").hide()
                                $("#valcompanynamepsf${counter}").hide()
                                $("#valticketpsf${counter}").hide()
                                $("#valmobilepsf${counter}").show()
                            
                              }
                             })

                             function callPsfValData(fr){
                              const getdata12 = async () => {
                                const res = await fetch("/api/getfilterdetailspsftest", {
                                  method: "GET",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                })
                            
                                const data = await res.json();
                            
                                if (res.status === 422 || !data) {
                                  console.log("error ");
                                } else {
                                  
                                    $('#valnamepsf${counter}').find('option:not(:first)').remove();
                                      $.each(data,function(key, value){
                                        var opt = '<option value="'+value.name+'">'+value.name+'</option>';  
                                       $("#valnamepsf${counter}").append(opt);
                                     });
                            
                                     $('#valemailpsf${counter}').find('option:not(:first)').remove();
                                     $.each(data,function(key, value){
                                       var opt = '<option value="'+value.email+'">'+value.email+'</option>';  
                                      $("#valemailpsf${counter}").append(opt);
                                    });
                                   
                                    $('#valticketpsf${counter}').find('option:not(:first)').remove();
                                    $.each(data,function(key, value){
                                      var opt = '<option value="'+value.ticket_no+'">'+value.ticket_no+'</option>';  
                                     $("#valticketpsf${counter}").append(opt);
                                   });
                            
                                   $('#valmobilepsf${counter}').find('option:not(:first)').remove();
                                   $.each(data,function(key, value){
                                     var opt = '<option value="'+value.mobile+'">'+value.mobile+'</option>';  
                                    $("#valmobilepsf${counter}").append(opt);
                                  });
                            
                                  $('#valregistrationnopsf${counter}').find('option:not(:first)').remove();
                                  $.each(data,function(key, value){
                                    var opt = '<option value="'+value.registration_no+'">'+value.registration_no+'</option>';  
                                   $("#valregistrationnopsf${counter}").append(opt);
                                 });
                            
                                $('#valcompanynamepsf${counter}').find('option:not(:first)').remove();
                                  $.each(data,function(key, value){
                                    var opt = '<option value="'+value.company_name+'">'+value.company_name+'</option>';  
                                   $("#valcompanynamepsf${counter}").append(opt);
                                 });
                            
                              };
                             
                            }
                            getdata12();
                                  }
                            
                            $("#rngtypes${counter}").on("change", function () {
                             
                              if ($(this).val() === "1") {
                                $("#pcn${counter}").css("display", "block")
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "2") {
                                $("#rngs${counter}").css("display", "flex");
                                $("#pcn${counter}").hide();
                              } else if ($(this).val() === "3") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "4") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              }
                            });

                            $('#btnrun').on('click',function(){             
                              var name = $("#valnamepsf${counter}").val()
                              var email = $("#valemailpsf${counter}").val()
                              var ticket = $("#valticketpsf${counter}").val()
                              var Registration = $("#valregistrationnopsf${counter}").val()
                              var company = $("#valcompanynamepsf${counter}").val()
                              var mobile = $("#valmobilepsf${counter}").val()
                            });

                            </script> `
        );
        counter++;
      });
    } else if (e.target.value === "aldata") {
      setTest(e.target.value);
      setAssign("al");
      var counter = 1;
      $("#japandiv").hide();
      $("#altestdiv").hide();
      $("#psfdiv").hide();
      $("#alnewdiv").hide();
      $("#AddMoreHeader").on("click", function () {
        $("#filter").append(
          `
              <div
                              style= "background-color: #d1d8e0"
                              class="card-body border mt-2 "
                              id="aldatadiv"
                            >
                              <div class="row">
                              
                                <div class=" form-group col-sm-2">
                                  <label style= 'font-size:12.4px' htmlFor="xyz">Column</label>
                                  <select
                                  style= " font-size: 12.4px"
                                  id="aldatasourceselect1${counter}"
                                  name="colum"
                                  onchange="callaldataValData('fr')"
                                  class="form-control"
                                  required
                                >
                                  <option>--Select--</option>
                                  <option value="Ticketaldatasource">
                                    Ticket No.
                                  </option>
                                  <option value="orderidaldatasource">
                                    Order ID
                                  </option>
                                  <option value="Namealdatasource">Name</option>
                                  <option value="Emailaldatasource">Email</option>
                                  <option value="Mobilealdatasource">
                                    Mobile
                                  </option>
                                </select>
                               </div>
                             
                               <div
                               id="aldatavalue${counter}"
                               
                               class=" form-group col-sm-2"
                             >
                               <label style='font-size:12.4px' htmlFor="xyz">Value</label>
 
                               <select
                                 name="val[]"
                                 
                                 style=" display: none ; font-size: 12.4px "
                                 id="valnamealdatasource${counter}"
                                 class="form-control"
                                 multiple="multiple"
                               >
                                 <option defaultValue="">--Select--</option>

                               </select>
 
                               <select
                                 name="val[]"
                                 id="valticketaldatasource${counter}"
                                 style= "display: none ; font-size: 12.4px" 
                                 
                                 class="form-control"
                                 multiple="multiple"
                               >
                                 <option defaultValue="">--Select--</option>

                               </select>
                               <select
                                 name="val[]"
                                 style= "display: none ; font-size: 12.4px"
                                 id="valemailaldatasource${counter}"
                                 
                                 class="form-control"
                                 multiple="multiple"
                               >
                                 <option defaultValue="">--Select--</option>

                               </select>
                               <select
                                 name="val[]"
                                 id="valorderidaldatasource${counter}"
                                 style= "display: none ; font-size: 12.4px"                                 
                                 class="form-control"
                                 multiple="multiple"
                               >
                                 <option defaultValue="">--Select--</option>
                               </select>
 
                               <select
                                 name="val[]"
                                 id="valmobilealdatasource${counter}"
                                 style=" display: none ; font-size: 12.4px"
                                 
                                 class="form-control"
                                 multiple="multiple"
                               >
                                 <option defaultValue="">--Select--</option>

                               </select>
                             </div>
 
                                <div class="form-group col-sm-2">
                                  <label style='font-size:12.4px' htmlFor="xyz">Range Type</label>
    
                                  <select
                                    name="rangetype"
                                    id="rngtypes${counter}"
                                   
                                    class="form-control"
                                    style="font-size: 12.4px" 
                                  >
                                    <option>--Select Category--</option>
                                    <option value="1">Percentage</option>
                                    <option value="2">Range</option>
                                    <option value="3">Equal</option>
                                    <option value="4">Like</option>
                                  </select>
                                </div>
    
                                <div
                                  style="display: none ; font-size: 12.4px"
                                  id="pcn${counter}"
                                  class="form-group col-sm-2"
                                >
                                  <label style='font-size:12.4px' htmlFor="exampleInputEmail">
                                    Percentage
                                  </label>
                                  <input
                                    type="number" 
                                    style= "font-size: 12.4px"                               
                                    name="prcnt"
                                    class="form-control"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div
                                  style="display: none; font-size: 12.5px"
                                  class="row"
                                  id="rngs${counter}"
                                >
                                  <div style='font-size:12.4px' class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Min:</label>
                                    <input
                                      type="number"
                                      style= "font-size: 12.4px"
                                      name="min"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Max:</label>
                                    <input
                                      type="number" 
                                      style= "font-size: 12.4px"
                                      name="max"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>      
    
                            <script>
                         
                            $("#aldatasourceselect1${counter}").on('change',function(){

                              if($(this).val()=='Namealdatasource'){
                                $("#valnamealdatasource${counter}").css("display","block")
                                $("#valemailaldatasource${counter}").hide()
                                $("#valorderidaldatasource${counter}").hide()
                                $("#valticketaldatasource${counter}").hide()
                                $("#valmobilealdatasource${counter}").hide()
                              }
                              else if($(this).val()=='Emailaldatasource'){
                                $("#valnamealdatasource${counter}").hide()
                                $("#valemailaldatasource${counter}").show()
                                $("#valorderidaldatasource${counter}").hide()
                                $("#valticketaldatasource${counter}").hide()
                                $("#valmobilealdatasource${counter}").hide()
                              }
                            
                              else if($(this).val()=='Ticketaldatasource'){
                                $("#valnamealdatasource${counter}").hide()
                                $("#valemailaldatasource${counter}").hide() 
                                $("#valorderidaldatasource${counter}").hide()
                                $("#valticketaldatasource${counter}").show()
                                $("#valmobilealdatasource${counter}").hide()
                              }
                              
                              else if($(this).val()=='orderidaldatasource'){
                                $("#valnamealdatasource${counter}").hide()
                                $("#valemailaldatasource${counter}").hide()
                                $("#valorderidaldatasource${counter}").show()
                                $("#valticketaldatasource${counter}").hide()
                                $("#valmobilealdatasource${counter}").hide()
                              }
                              else if($(this).val()=='Mobilealdatasource'){
                                $("#valnamealdatasource${counter}").hide()
                                $("#valemailaldatasource${counter}").hide()
                                $("#valorderidaldatasource${counter}").hide()
                                $("#valticketaldatasource${counter}").hide()
                                $("#valmobilealdatasource${counter}").show()
                            
                              }
                             })

                             function callaldataValData(fr){
                              const getdata13 = async () => {
                                const res = await fetch("/api/getfilterdetailsaldatasource", {
                                  method: "GET",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                })
                            
                                const data = await res.json();
                            
                                if (res.status === 422 || !data) {
                                  console.log("error ");
                                } else {
                                  
                                    $('#valnamealdatasource${counter}').find('option:not(:first)').remove();
                                      $.each(data,function(key, value){
                                        var opt = '<option value="'+value.name+'">'+value.name+'</option>';  
                                       $("#valnamealdatasource${counter}").append(opt);
                                     });
                            
                                     $('#valemailaldatasource${counter}').find('option:not(:first)').remove();
                                     $.each(data,function(key, value){
                                       var opt = '<option value="'+value.email+'">'+value.email+'</option>';  
                                      $("#valemailaldatasource${counter}").append(opt);
                                    });
                                   
                                    $('#valticketaldatasource${counter}').find('option:not(:first)').remove();
                                    $.each(data,function(key, value){
                                      var opt = '<option value="'+value.ticket_no+'">'+value.ticket_no+'</option>';  
                                     $("#valticketaldatasource${counter}").append(opt);
                                   });
                            
                                   $('#valmobilealdatasource${counter}').find('option:not(:first)').remove();
                                   $.each(data,function(key, value){
                                     var opt = '<option value="'+value.mobile+'">'+value.mobile+'</option>';  
                                    $("#valmobilealdatasource${counter}").append(opt);
                                  });
                            
                                  
                                $('#valorderidaldatasource${counter}').find('option:not(:first)').remove();
                                  $.each(data,function(key, value){
                                    var opt = '<option value="'+value.order_id+'">'+value.order_id+'</option>';  
                                   $("#valorderidaldatasource${counter}").append(opt);
                                 });
                            
                              };
                             
                            }
                            getdata13();
                                  }
                            
                            $("#rngtypes${counter}").on("change", function () {
                             
                              if ($(this).val() === "1") {
                                $("#pcn${counter}").css("display", "block")
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "2") {
                                $("#rngs${counter}").css("display", "flex");
                                $("#pcn${counter}").hide();
                              } else if ($(this).val() === "3") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "4") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              }
                            });

                            $('#btnrun').on('click',function(){             
                              var name = $("#valnamealdatasource${counter}").val()
                              var email = $("#valemailaldatasource${counter}").val()
                              var ticket = $("#valticketaldatasource${counter}").val()
                              var orderid = $("#valorderidaldatasource${counter}").val()
                              var mobile = $("#valmobilealdatasource${counter}").val()
                            });

                            </script> `
        );
        counter++;
      });
    } else if (e.target.value === "alnew") {
      setTest(e.target.value);
      setAssign("alne");
      var counter = 1;
      $("#psfdiv").hide();
      $("#altestdiv").hide();
      $("#aldatadiv").hide();
      $("#japandiv").hide();
      $("#AddMoreHeader").on("click", function () {
        $("#filter").append(
          `
              <div
                              style= "background-color: #d1d8e0"
                              class="card-body border mt-2 "
                              id="alnewdiv"
                            >
                              <div class="row">
                              
                                <div class=" form-group col-sm-2">
                                  <label style= 'font-size:12.4px' htmlFor="xyz">Column</label>
                                  <select
                                  style=" font-size: 12.4px "
                                  id="aldatanewselect1${counter}"
                                  name="colum"
                                onchange="callaldataNewValData('fr')"
                                  class="form-control"
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
                             
                               <div
                                  id="aldatavaluenew${counter}"
                                  
                                  class=" form-group col-sm-2"
                                >
                                  <label style='font-size:12.4px' htmlFor="xyz">Value</label>
    
                                  <select
                                    name="val[]"
                                    
                                    style=" display: none ; font-size: 12.4px" 
                                    id="valnamealdatasourcenew${counter}"
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
    
                                  <select
                                    name="val[]"
                                    id="valticketaldatasourcenew${counter}"
                                    style=" display: none ; font-size: 12.4px" 
                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
                                  <select
                                    name="val[]"
                                    style=" display: none ; font-size: 12.4px" 
                                    id="valemailaldatasourcenew${counter}"
                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
                                  <select
                                    name="val[]"
                                    id="valorderidaldatasourcenew${counter}"
                                    style=" display: none ; font-size: 12.4px" 
                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
    
                                  <select
                                    name="val[]"
                                    id="valmobilealdatasourcenew${counter}"
                                    style=" display: none ; font-size: 12.4px"                                     
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
    
                                  <select
                                    name="val[]"
                                    id="valaddressaldatasourcenew${counter}"
                                    style="display: none ; font-size: 12.4px"                                  
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
                                </div>
  
                                <div class="form-group col-sm-2">
                                  <label style='font-size:12.4px' htmlFor="xyz">Range Type</label>
    
                                  <select
                                    name="rangetype"
                                    id="rngtypes${counter}"
                                   
                                    class="form-control"
                                    style="font-size: 12.4px" 
                                  >
                                    <option>--Select Category--</option>
                                    <option value="1">Percentage</option>
                                    <option value="2">Range</option>
                                    <option value="3">Equal</option>
                                    <option value="4">Like</option>
                                  </select>
                                </div>
    
                                <div
                                  style="display: none ; font-size: 12.4px"
                                  id="pcn${counter}"
                                  class="form-group col-sm-2"
                                >
                                  <label style='font-size:12.4px' htmlFor="exampleInputEmail">
                                    Percentage
                                  </label>
                                  <input
                                    type="number"   
                                    style= "font-size: 12.4px"                             
                                    name="prcnt"
                                    class="form-control"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div
                                  style="display: none; font-size: 12.4px"
                                  class="row"
                                  id="rngs${counter}"
                                >
                                  <div style='font-size:12.4px' class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Min:</label>
                                    <input
                                      type="number"                                     
                                      name="min"
                                      style= "font-size: 12.4px"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Max:</label>
                                    <input
                                      type="number"                    
                                      name="max"
                                      style= "font-size: 12.4px"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>      
    
                            <script>
                         
                            $("#aldatanewselect1${counter}").on('change',function(){

                              if($(this).val()=='Namealdatasourcenew'){
                                $("#valnamealdatasourcenew${counter}").css("display","block")
                                $("#valemailaldatasourcenew${counter}").hide()
                                $("#valorderidaldatasourcenew${counter}").hide()
                                $("#valticketaldatasourcenew${counter}").hide()
                                $("#valmobilealdatasourcenew${counter}").hide()
                                $("#valaddressaldatasourcenew${counter}").hide()
                              }
                              else if($(this).val()=='Emailaldatasourcenew'){
                                $("#valnamealdatasourcenew${counter}").hide()
                                $("#valemailaldatasourcenew${counter}").show()
                                $("#valorderidaldatasourcenew${counter}").hide()
                                $("#valticketaldatasourcenew${counter}").hide()
                                $("#valmobilealdatasourcenew${counter}").hide()
                                $("#valaddressaldatasourcenew${counter}").hide()
                              }
                            
                              else if($(this).val()=='Ticketaldatasourcenew'){
                                $("#valnamealdatasourcenew${counter}").hide()
                                $("#valemailaldatasourcenew${counter}").hide() 
                                $("#valorderidaldatasourcenew${counter}").hide()
                                $("#valticketaldatasourcenew${counter}").show()
                                $("#valmobilealdatasourcenew${counter}").hide()
                                $("#valaddressaldatasourcenew${counter}").hide()
                              }
                              
                              else if($(this).val()=='orderidaldatasourcenew'){
                                $("#valnamealdatasourcenew${counter}").hide()
                                $("#valemailaldatasourcenew${counter}").hide()
                                $("#valorderidaldatasourcenew${counter}").show()
                                $("#valticketaldatasourcenew${counter}").hide()
                                $("#valmobilealdatasourcenew${counter}").hide()
                                $("#valaddressaldatasourcenew${counter}").hide()
                              }
                              else if($(this).val()=='Mobilealdatasourcenew'){
                                $("#valnamealdatasourcenew${counter}").hide()
                                $("#valemailaldatasourcenew${counter}").hide()
                                $("#valorderidaldatasourcenew${counter}").hide()
                                $("#valticketaldatasourcenew${counter}").hide()
                                $("#valmobilealdatasourcenew${counter}").show()
                                $("#valaddressaldatasourcenew${counter}").hide()
                              }
                              
                              else if($(this).val()=='addressaldatasourcenew'){
                                $("#valnamealdatasourcenew${counter}").hide()
                                $("#valemailaldatasourcenew${counter}").hide()
                                $("#valorderidaldatasourcenew${counter}").hide()
                                $("#valticketaldatasourcenew${counter}").hide()
                                $("#valmobilealdatasourcenew${counter}").hide()
                                $("#valaddressaldatasourcenew${counter}").show()
                            
                              }
                             })

                             function callaldataNewValData(fr){
                              const getdata14 = async () => {
                                const res = await fetch("/api/getfilterdetailsaldatasourcenew", {
                                  method: "GET",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                })
                            
                                const data = await res.json();
                            
                                if (res.status === 422 || !data) {
                                  console.log("error ");
                                } else {
                                  
                                    $('#valnamealdatasourcenew${counter}').find('option:not(:first)').remove();
                                      $.each(data,function(key, value){
                                        var opt = '<option value="'+value.name+'">'+value.name+'</option>';  
                                       $("#valnamealdatasourcenew${counter}").append(opt);
                                     });
                            
                                     $('#valemailaldatasourcenew${counter}').find('option:not(:first)').remove();
                                     $.each(data,function(key, value){
                                       var opt = '<option value="'+value.email+'">'+value.email+'</option>';  
                                      $("#valemailaldatasourcenew${counter}").append(opt);
                                    });
                                   
                                    $('#valticketaldatasourcenew${counter}').find('option:not(:first)').remove();
                                    $.each(data,function(key, value){
                                      var opt = '<option value="'+value.ticket_no+'">'+value.ticket_no+'</option>';  
                                     $("#valticketaldatasourcenew${counter}").append(opt);
                                   });
                            
                                   $('#valmobilealdatasourcenew${counter}').find('option:not(:first)').remove();
                                   $.each(data,function(key, value){
                                     var opt = '<option value="'+value.mobile+'">'+value.mobile+'</option>';  
                                    $("#valmobilealdatasourcenew${counter}").append(opt);
                                  });
                            
                                  
                                $('#valorderidaldatasourcenew${counter}').find('option:not(:first)').remove();
                                  $.each(data,function(key, value){
                                    var opt = '<option value="'+value.order_id+'">'+value.order_id+'</option>';  
                                   $("#valorderidaldatasourcenew${counter}").append(opt);
                                 });

                                 $('#valaddressaldatasourcenew${counter}').find('option:not(:first)').remove();
                                 $.each(data,function(key, value){
                                   var opt = '<option value="'+value.address+'">'+value.address+'</option>';  
                                  $("#valaddressaldatasourcenew${counter}").append(opt);
                                });
                              };
                             
                            }
                            getdata14();
                                  }
                            
                            $("#rngtypes${counter}").on("change", function () {
                             
                              if ($(this).val() === "1") {
                                $("#pcn${counter}").css("display", "block")
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "2") {
                                $("#rngs${counter}").css("display", "flex");
                                $("#pcn${counter}").hide();
                              } else if ($(this).val() === "3") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "4") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              }
                            });

                            $('#btnrun').on('click',function(){             
                              var name = $("#valnamealdatasourcenew${counter}").val()
                              var email = $("#valemailaldatasourcenew${counter}").val()
                              var ticket = $("#valticketaldatasourcenew${counter}").val()
                              var orderid = $("#valorderidaldatasourcenew${counter}").val()
                              var mobile = $("#valmobilealdatasourcenew${counter}").val()
                              var address = $("#valaddressaldatasourcenew${counter}").val()
                            });

                            </script> `
        );
        counter++;
      });
    } else if (e.target.value === "altest") {
      setTest(e.target.value);
      setAssign("altes");
      var counter = 1;
      $("#psfdiv").hide();
      $("#japandiv").hide();
      $("#aldatadiv").hide();
      $("#alnewdiv").hide();
      $("#AddMoreHeader").on("click", function () {
        $("#filter").append(
          `
              <div
                              style= "background-color: #d1d8e0"
                              class="card-body border mt-2 "
                              id="altestdiv"
                            >
                              <div class="row">
                              
                                <div class=" form-group col-sm-2">
                                  <label style= 'font-size:12.4px' htmlFor="xyz">Column</label>
                                  <select
                                    style=" font-size: 12.4px "
                                    id="altestselect1${counter}"
                                    name="colum"
                                    onchange="callalTestValData('fr')"
                                    class="form-control"
                                    required
                                  >
                                    <option>--Select--</option>
                                    <option value="Ticketaltest">Ticket No.</option>
                                    <option value="orderidaltest">Order ID</option>
                                    <option value="dateorequestaltest">
                                      Date Of Request
                                    </option>
                                    <option value="Namealtest">Name</option>
                                    <option value="Emailaltest">Email</option>
                                    <option value="Mobilealtest">Mobile</option>
                                  </select>
    

                               </div>
                             
                               <div
                                  id="altestvalue${counter}"
                                  style=" font-size:12.4px" 
                                  class=" form-group col-sm-2"
                                >
                                  <label style="font-size:12.4px"  htmlFor="xyz">Value</label>
    
                                  <select
                                    name="val[]"
                                    
                                    style=" display: none ; font-size: 12.4px" 
                                    id="valnamealtest${counter}"
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>
                                  </select>
    
                                  <select
                                    name="val[]"
                                    id="valticketaltest${counter}"
                                    style=" display: none ; font-size: 12.4px"                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
                                  <select
                                    name="val[]"
                                    style=" display: none ; font-size: 12.4px" 
                                    id="valemailaltest${counter}"
                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
                                  <select
                                    name="val[]"
                                    id="valorderidaltest${counter}"
                                    style=" display: none ; font-size: 12.4px"                                    
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
    
                                  <select
                                    name="val[]"
                                    id="valmobilealtest${counter}"
                                    style=" display: none ; font-size: 12.4px"                                   
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>

                                  </select>
    
                                  <select
                                    name="val[]"
                                    id="valdateorequestaltest${counter}"
                                    style=" display: none ; font-size: 12.4px"                                  
                                    class="form-control"
                                    multiple="multiple"
                                  >
                                    <option defaultValue="">--Select--</option>
    
                                  </select>
                                </div>
             
    
                                <div class="form-group col-sm-2">
                                  <label style='font-size:12.4px' htmlFor="xyz">Range Type</label>
    
                                  <select
                                    name="rangetype"
                                    id="rngtypes${counter}"
                                   
                                    class="form-control"
                                    style="font-size: 12.4px" 
                                  >
                                    <option>--Select Category--</option>
                                    <option value="1">Percentage</option>
                                    <option value="2">Range</option>
                                    <option value="3">Equal</option>
                                    <option value="4">Like</option>
                                  </select>
                                </div>
    
                                <div
                                  style="display: none ; font-size: 12.4px"
                                  id="pcn${counter}"
                                  class="form-group col-sm-2"
                                >
                                  <label style='font-size:12.4px' htmlFor="exampleInputEmail">
                                    Percentage
                                  </label>
                                  <input
                                    type="number" 
                                    style= "font-size: 12.4px"                               
                                    name="prcnt"
                                    class="form-control"
                                    aria-describedby="emailHelp"
                                  />
                                </div>
                                <div
                                  style="display: none; font-size: 12.4px"
                                  class="row"
                                  id="rngs${counter}"
                                >
                                  <div style='font-size:12.4px' class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Min:</label>
                                    <input
                                      type="number"                                     
                                      name="min"
                                      style= "font-size: 12.4px"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                  <div class="form-group col-sm-4">
                                    <label style='font-size:12.4px' htmlFor="exampleInputEmail">Max:</label>
                                    <input
                                      type="number"                    
                                      name="max"
                                      style= "font-size: 12.4px"
                                      class="form-control"
                                      aria-describedby="emailHelp"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>      
    
                            <script>
                         
                            $("#altestselect1${counter}").on('change',function(){

                              if($(this).val()=='Namealtest'){
                                $("#valnamealtest${counter}").css("display","block")
                                $("#valemailaltest${counter}").hide()
                                $("#valorderidaltest${counter}").hide()
                                $("#valticketaltest${counter}").hide()
                                $("#valmobilealtest${counter}").hide()
                                $("#valdateorequestaltest${counter}").hide()
                              }
                              else if($(this).val()=='Emailaltest'){
                                $("#valnamealtest${counter}").hide()
                                $("#valemailaltest${counter}").show()
                                $("#valorderidaltest${counter}").hide()
                                $("#valticketaltest${counter}").hide()
                                $("#valmobilealtest${counter}").hide()
                                $("#valdateorequestaltest${counter}").hide()
                              }
                            
                              else if($(this).val()=='Ticketaltest'){
                                $("#valnamealtest${counter}").hide()
                                $("#valemailaltest${counter}").hide() 
                                $("#valorderidaltest${counter}").hide()
                                $("#valticketaltest${counter}").show()
                                $("#valmobilealtest${counter}").hide()
                                $("#valdateorequestaltest${counter}").hide()
                              }
                              
                              else if($(this).val()=='orderidaltest'){
                                $("#valnamealtest${counter}").hide()
                                $("#valemailaltest${counter}").hide()
                                $("#valorderidaltest${counter}").show()
                                $("#valticketaltest${counter}").hide()
                                $("#valmobilealtest${counter}").hide()
                                $("#valdateorequestaltest${counter}").hide()
                              }
                              else if($(this).val()=='Mobilealtest'){
                                $("#valnamealtest${counter}").hide()
                                $("#valemailaltest${counter}").hide()
                                $("#valorderidaltest${counter}").hide()
                                $("#valticketaltest${counter}").hide()
                                $("#valmobilealtest${counter}").show()
                                $("#valdateorequestaltest${counter}").hide()
                              }
                              
                              else if($(this).val()=='dateorequestaltest'){
                                $("#valnamealtest${counter}").hide()
                                $("#valemailaltest${counter}").hide()
                                $("#valorderidaltest${counter}").hide()
                                $("#valticketaltest${counter}").hide()
                                $("#valmobilealtest${counter}").hide()
                                $("#valdateorequestaltest${counter}").show()
                            
                              }
                             })

                             function callalTestValData(fr){
                              const getdata15 = async () => {
                                const res = await fetch("/api/getfilterdetailsaltest", {
                                  method: "GET",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                })
                            
                                const data = await res.json();
                            
                                if (res.status === 422 || !data) {
                                  console.log("error ");
                                } else {
                                  
                                    $('#valnamealtest${counter}').find('option:not(:first)').remove();
                                      $.each(data,function(key, value){
                                        var opt = '<option value="'+value._id+'">'+value.name+'</option>';  
                                       $("#valnamealtest${counter}").append(opt);
                                     });
                            
                                     $('#valemailaltest${counter}').find('option:not(:first)').remove();
                                     $.each(data,function(key, value){
                                       var opt = '<option value="'+value._id+'">'+value.email+'</option>';  
                                      $("#valemailaltest${counter}").append(opt);
                                    });
                                   
                                    $('#valticketaltest${counter}').find('option:not(:first)').remove();
                                    $.each(data,function(key, value){
                                      var opt = '<option value="'+value._id+'">'+value.ticket_no+'</option>';  
                                     $("#valticketaltest${counter}").append(opt);
                                   });
                            
                                   $('#valmobilealtest${counter}').find('option:not(:first)').remove();
                                   $.each(data,function(key, value){
                                     var opt = '<option value="'+value._id+'">'+value.mobile+'</option>';  
                                    $("#valmobilealtest${counter}").append(opt);
                                  });
                            
                                  
                                $('#valorderidaltest${counter}').find('option:not(:first)').remove();
                                  $.each(data,function(key, value){
                                    var opt = '<option value="'+value._id+'">'+value.order_id+'</option>';  
                                   $("#valorderidaltest${counter}").append(opt);
                                 });

                                 $('#valdateorequestaltest${counter}').find('option:not(:first)').remove();
                                 $.each(data,function(key, value){
                                   var opt = '<option value="'+value._id+'">'+value.dateorequest+'</option>';  
                                  $("#valdateorequestaltest${counter}").append(opt);
                                });
                              };
                             
                            }
                            getdata15();
                                  }
                            
                            $("#rngtypes${counter}").on("change", function () {
                             
                              if ($(this).val() === "1") {
                                $("#pcn${counter}").css("display", "block")
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "2") {
                                $("#rngs${counter}").css("display", "flex");
                                $("#pcn${counter}").hide();
                              } else if ($(this).val() === "3") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              } else if ($(this).val() === "4") {
                                $("#pcn${counter}").hide();
                                $("#rngs${counter}").hide();
                              }
                            });

                            $('#btnrun').on('click',function(){             
                              var name = $("#valnamealtest${counter}").val()
                              var email = $("#valemailaltest${counter}").val()
                              var ticket = $("#valticketaltest${counter}").val()
                              var mobile = $("#valmobilealtest${counter}").val()
                              var orderid = $("#valorderidaltest${counter}").val()
                              var dateofrequest = $("#valdateorequestaltest${counter}").val()
                            });       

                            </script> `
        );
        counter++;
      });
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
    const res = await fetch("/api/user/findall", {
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
  // console.log(filterDetails);
  const [filterDetailsAltest, setFilterDetailsAltest] = useState([]);
  const [filterDetailsAlDataNew, setFilterDetailsAlDataNew] = useState([]);
  const [filterDetailsAlDataSource, setFilterDetailsAlDataSource] = useState(
    []
  );
  const [filterDetailsPsfTest, setFilterDetailsPsfTest] = useState([]);
  const [vehic, setVehic] = useState([]);
  const [namet, setName] = useState([]);
  const [namePsf, setNamePsf] = useState([]);
  const [nameAlData, setNameAlData] = useState([]);
  const [nameAlDataNew, setNameAlDataNew] = useState([]);
  const [nameAlTest, setNameAlTest] = useState([]);
  const [emailet, setEmail] = useState([]);
  const [emailPsf, setEmailPsf] = useState([]);
  const [emailAlData, setEmailAlData] = useState([]);
  const [emailAlDataNew, setEmailAlDataNew] = useState([]);
  const [emailAlTest, setEmailAlTest] = useState([]);
  const [companyt, setCompany] = useState([]);
  const [companyPsf, setCompanyPsf] = useState([]);
  const [mobilet, setMobile] = useState([]);
  const [mobilePsf, setMobilePsf] = useState([]);
  const [mobileAlData, setMobileAlData] = useState([]);
  const [mobileAlDataNew, setMobileAlDataNew] = useState([]);
  const [mobileAlTest, setMobileAlTest] = useState([]);
  const [statet, setState] = useState([]);
  const [cityt, setCity] = useState([]);
  const [tickett, setTicket] = useState([]);
  const [ticketAlTest, setTicketAlTest] = useState([]);
  const [ticketPsf, setTicketPsf] = useState([]);
  const [ticketAlData, setTicketAlData] = useState([]);
  const [ticketAlDataNew, setTicketAlDataNew] = useState([]);
  const [orderAlTest, setOrderAlTest] = useState([]);
  const [orderAlData, setOrderAlData] = useState([]);
  const [orderAlDataNew, setOrderAlDataNew] = useState([]);
  const [addresst, setAddress] = useState([]);
  const [registrationt, setRegistration] = useState([]);
  const [dateorequestt, setDateOrequest] = useState([]);

  //JQUERY code where adding and removing input fields dynamically
  useEffect(() => {
    $(function () {
      //To select filter column values according to data source options
      //To select an option from Data Source
      var i = 0;
      $("#AddMoreHeader").on("click", function () {
        $("#btnrun").on("click", function () {
          let vehicle_no = $("#valvehicle" + i).val();
          let name = $("#tablValueID" + i).val();
          let email = $("#tablValueIDem" + i).val();
          let company = $("#valcompany" + i).val();
          let state = $("#valstate" + i).val();
          let mobile = $("#valmobile" + i).val();
          let city = $("#valcity" + i).val();
          let ticket = $("#valticket" + i).val();
          let min = $("#min" + i).val();
          let max = $("#max" + i).val();

          setVehic({ vehicle_no });
          setName({ name });
          setEmail({ email });
          setCompany({ company });
          setState({ state });
          setMobile({ mobile });
          setCity({ city });
          setTicket({ ticket });
          setRangeType({ min });
          setRangeType({ max });
          name = $("#valnamepsf" + i).val();
          email = $("#valemailpsf" + i).val();
          company = $("#valcompanynamepsf" + i).val();
          mobile = $("#valmobilepsf" + i).val();
          let registration_no = $("#valregistrationnopsf" + i).val();
          ticket = $("#valticketpsf" + i).val();
          setMobilePsf({ mobile });
          setNamePsf({ name });
          setEmailPsf({ email });
          setCompanyPsf({ company });
          setRegistration({ registration_no });
          setTicketPsf({ ticket });
          name = $("#valnamealtest" + i).val();
          email = $("#valemailaltest" + i).val();
          let order_id = $("#valorderidaltest" + i).val();
          mobile = $("#valmobilealtest" + i).val();
          let dateorequest = $("#valdateorequestaltest" + i).val();
          ticket = $("#valticketaltest" + i).val();
          setNameAlTest({ name });
          setOrderAlTest({ order_id });
          setEmailAlTest({ email });
          setMobileAlTest({ mobile });
          setDateOrequest({ dateorequest });
          setTicketAlTest({ ticket });
          name = $("#valnamealdatasourcenew" + i).val();
          email = $("#valemailaldatasourcenew" + i).val();
          order_id = $("#valorderidaldatasourcenew" + i).val();
          mobile = $("#valmobilealdatasourcenew" + i).val();
          let address = $("#valaddressaldatasourcenew" + i).val();
          ticket = $("#valticketaldatasourcenew" + i).val();
          setNameAlDataNew({ name });
          setEmailAlDataNew({ email });
          setOrderAlDataNew({ order_id });
          setMobileAlDataNew({ mobile });
          setAddress({ address });
          setTicketAlDataNew({ ticket });
          name = $("#valnamealdatasource" + i).val();
          email = $("#valemailaldatasource" + i).val();
          order_id = $("#valorderidaldatasource" + i).val();
          mobile = $("#valmobilealdatasource" + i).val();
          ticket = $("#valticketaldatasource" + i).val();
          setNameAlData({ name });
          setEmailAlData({ email });
          setOrderAlData({ order_id });
          setMobileAlData({ mobile });
          setTicketAlData({ ticket });
        });
        i++;
      });

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

      //Remove input fields on button click
      $(".remove_btn").on("click", function (e) {
        e.preventDefault();

        $("#filter").children("div").not(":first").last().remove();
      });
      //Randomizer radio according to which we can add filter
      $("#without").on("change", function () {
        $("#filter").hide();
        $(".btnadd").hide();
        $("#btnrun").hide();
      });
      $("#with").on("change", function () {
        $("#filter").show();
        $(".btnadd").show();
        $("#btnrun").show();
      });

      $("#btnrun").on("click", function () {
        $("#filtdiv").show();
      });

      $("#auto").on("change", function () {
        $("#userassign").hide();
        setAutoManual("auto");
      });

      $("#manual").on("click", function () {
        $("#userassign").show();
        setAutoManual("manual");
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

      //Filtered data
      $("#with").on("click", function () {
        setRandom("withrandom");
      });
      $("#without").on("click", function () {
        setRandom("withoutrandom");
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
            <div className="row mt-2">
              <div style={{ fontSize: "12.3px" }} className="col-md-12">
                <div className="card card-dark mt-3">
                  <div className="card-header">
                    <h3 className="card-title">Data Allocation Management</h3>
                  </div>
                  <div className="card-body">
                    <form id="form">
                      <div className=" form-group col-sm-6">
                        <label htmlFor="xyz">Data Source</label>
                        <span style={{ color: "red" }}>*</span>
                        <select
                          id="select1"
                          name="datasources"
                          onChange={handleFormSubmit}
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
                    </form>
                  </div>
                  <div className="card-body" style={{ marginTop: "-30px" }}>
                    <form id="myForm" onSubmit={handleSubmit}>
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
                        <button
                          id="AddMoreHeader"
                          style={{ fontSize: "12px" }}
                          type="click"
                          className="btn  btn-success ml-3"
                        >
                          <i
                            className="nav-icon fas fa-plus"
                            style={{ fontSize: "11px" }}
                          />{" "}
                          Add Filter
                        </button>

                        <button
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
                        </button>
                      </div>
                      <div
                        style={{ display: "none", fontSize: "12.4px" }}
                        id="filter"
                      >
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
                                onChange={setdata1}
                                className="form-control"
                                style={{ display: "none", fontSize: "12.4px" }}
                                required
                              >
                                <option>--Select--</option>
                                <option value="Ticket">Ticket No.</option>
                                <option value="Vehicle">Vehicle Number</option>
                                <option value="Company">Company</option>
                                <option value="State">State</option>
                                <option value="City">City</option>
                                <option value="Name">Name</option>
                                <option value="Email">Email</option>
                                <option value="Mobile">Mobile</option>
                              </select>

                              <select
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="psftestselect1"
                                name="colum"
                                onChange={setdata1}
                                className="form-control"
                                required
                              >
                                <option>--Select--</option>
                                <option value="Ticketpsf">Ticket No.</option>
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
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="aldatasourceselect1"
                                name="colum"
                                onChange={setdata1}
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
                                <option value="Namealdatasource">Name</option>
                                <option value="Emailaldatasource">Email</option>
                                <option value="Mobilealdatasource">
                                  Mobile
                                </option>
                              </select>

                              <select
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="altestselect1"
                                name="colum"
                                onChange={setdata1}
                                className="form-control"
                                required
                              >
                                <option>--Select--</option>
                                <option value="Ticketaltest">Ticket No.</option>
                                <option value="orderidaltest">Order ID</option>
                                <option value="dateorequestaltest">
                                  Date Of Request
                                </option>
                                <option value="Namealtest">Name</option>
                                <option value="Emailaltest">Email</option>
                                <option value="Mobilealtest">Mobile</option>
                              </select>

                              <select
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="aldatanewselect1"
                                name="colum"
                                onChange={setdata1}
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
                                name="name"
                                onChange={handleSelectChange}
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valname"
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetails.map((element) => {
                                  return (
                                    <option
                                      value={element.name}
                                      key={element._id}
                                    >
                                      {element.name}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="ticket_no"
                                id="valticket"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetails.map((element) => {
                                  return (
                                    <option
                                      value={element.ticket_no}
                                      key={element._id}
                                    >
                                      {element.ticket_no}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="email"
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valemail"
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetails.map((element) => {
                                  return (
                                    <option
                                      value={element.email}
                                      key={element._id}
                                    >
                                      {element.email}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="vehicle_no"
                                id="valvehicle"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetails.map((element) => {
                                  return (
                                    <option
                                      value={element.vehicle_no}
                                      key={element._id}
                                    >
                                      {element.vehicle_no}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="company"
                                id="valcompany"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetails.map((element) => {
                                  return (
                                    <option
                                      value={element.company}
                                      key={element._id}
                                    >
                                      {element.company}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="state"
                                id="valstate"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetails.map((element) => {
                                  return (
                                    <option
                                      value={element.state}
                                      key={element._id}
                                    >
                                      {element.state}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="city"
                                id="valcity"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetails.map((element) => {
                                  return (
                                    <option
                                      value={element.city}
                                      key={element._id}
                                    >
                                      {element.city}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="mobile"
                                id="valmobile"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetails.map((element) => {
                                  return (
                                    <option
                                      value={element.mobile}
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
                                name="name"
                                onChange={handleSelectChange}
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valnamealdatasource"
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetailsAlDataSource.map((element) => {
                                  return (
                                    <option
                                      value={element.name}
                                      key={element._id}
                                    >
                                      {element.name}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="ticket_no"
                                id="valticketaldatasource"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetailsAlDataSource.map((element) => {
                                  return (
                                    <option
                                      value={element.ticket_no}
                                      key={element._id}
                                    >
                                      {element.ticket_no}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="email"
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valemailaldatasource"
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAlDataSource.map((element) => {
                                  return (
                                    <option
                                      value={element.email}
                                      key={element._id}
                                    >
                                      {element.email}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="order_id"
                                id="valorderidaldatasource"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetailsAlDataSource.map((element) => {
                                  return (
                                    <option
                                      value={element.order_id}
                                      key={element._id}
                                    >
                                      {element.order_id}
                                    </option>
                                  );
                                })}
                              </select>

                              <select
                                name="mobile"
                                id="valmobilealdatasource"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetailsAlDataSource.map((element) => {
                                  return (
                                    <option
                                      value={element.mobile}
                                      key={element._id}
                                    >
                                      {element.mobile}
                                    </option>
                                  );
                                })}
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
                                name="name"
                                onChange={handleSelectChange}
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valnamealdatasourcenew"
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetailsAlDataNew.map((element) => {
                                  return (
                                    <option
                                      value={element.name}
                                      key={element._id}
                                    >
                                      {element.name}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="ticket_no"
                                id="valticketaldatasourcenew"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetailsAlDataNew.map((element) => {
                                  return (
                                    <option
                                      value={element.ticket_no}
                                      key={element._id}
                                    >
                                      {element.ticket_no}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="email"
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valemailaldatasourcenew"
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAlDataNew.map((element) => {
                                  return (
                                    <option
                                      value={element.email}
                                      key={element._id}
                                    >
                                      {element.email}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="order_id"
                                id="valorderidaldatasourcenew"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAlDataNew.map((element) => {
                                  return (
                                    <option
                                      value={element.order_id}
                                      key={element._id}
                                    >
                                      {element.order_id}
                                    </option>
                                  );
                                })}
                              </select>

                              <select
                                name="mobile"
                                id="valmobilealdatasourcenew"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAlDataNew.map((element) => {
                                  return (
                                    <option
                                      value={element.mobile}
                                      key={element._id}
                                    >
                                      {element.mobile}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="address"
                                id="valaddressaldatasourcenew"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAlDataNew.map((element) => {
                                  return (
                                    <option
                                      value={element.address}
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
                                name="name"
                                onChange={handleSelectChange}
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valnamealtest"
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAltest.map((element) => {
                                  return (
                                    <option
                                      value={element.name}
                                      key={element._id}
                                    >
                                      {element.name}
                                    </option>
                                  );
                                })}
                              </select>

                              <select
                                name="ticket_no"
                                id="valticketaltest"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAltest.map((element) => {
                                  return (
                                    <option
                                      value={element.ticket_no}
                                      key={element._id}
                                    >
                                      {element.ticket_no}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="email"
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valemailaltest"
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>
                                {filterDetailsAltest.map((element) => {
                                  return (
                                    <option
                                      value={element.email}
                                      key={element._id}
                                    >
                                      {element.email}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="order_id"
                                id="valorderidaltest"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAltest.map((element) => {
                                  return (
                                    <option
                                      value={element.order_id}
                                      key={element._id}
                                    >
                                      {element.order_id}
                                    </option>
                                  );
                                })}
                              </select>

                              <select
                                name="mobile"
                                id="valmobilealtest"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAltest.map((element) => {
                                  return (
                                    <option
                                      value={element.mobile}
                                      key={element._id}
                                    >
                                      {element.mobile}
                                    </option>
                                  );
                                })}
                              </select>

                              <select
                                name="dateorequest"
                                id="valdateorequestaltest"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsAltest.map((element) => {
                                  return (
                                    <option
                                      value={element.dateorequest}
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
                                name="name"
                                onChange={handleSelectChange}
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valnamepsf"
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsPsfTest.map((element) => {
                                  return (
                                    <option
                                      value={element.name}
                                      key={element._id}
                                    >
                                      {element.name}
                                    </option>
                                  );
                                })}
                              </select>

                              <select
                                name="ticket_no"
                                id="valticketpsf"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsPsfTest.map((element) => {
                                  return (
                                    <option
                                      value={element.ticket_no}
                                      key={element._id}
                                    >
                                      {element.ticket_no}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="email"
                                style={{ display: "none", fontSize: "12.4px" }}
                                id="valemailpsf"
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsPsfTest.map((element) => {
                                  return (
                                    <option
                                      value={element.email}
                                      key={element._id}
                                    >
                                      {element.email}
                                    </option>
                                  );
                                })}
                              </select>
                              <select
                                name="registration_no"
                                id="valregistrationnopsf"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsPsfTest.map((element) => {
                                  return (
                                    <option
                                      value={element.registration_no}
                                      key={element._id}
                                    >
                                      {element.registration_no}
                                    </option>
                                  );
                                })}
                              </select>

                              <select
                                name="mobile"
                                id="valmobilepsf"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsPsfTest.map((element) => {
                                  return (
                                    <option
                                      value={element.mobile}
                                      key={element._id}
                                    >
                                      {element.mobile}
                                    </option>
                                  );
                                })}
                              </select>

                              <select
                                name="company_name"
                                id="valcompanynamepsf"
                                style={{ display: "none", fontSize: "12.4px" }}
                                onChange={handleSelectChange}
                                className="form-control"
                                multiple="multiple"
                              >
                                <option defaultValue="">--Select--</option>

                                {filterDetailsPsfTest.map((element) => {
                                  return (
                                    <option
                                      value={element.company_name}
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
                                id="rangetypes"
                                className="form-control"
                                style={{ fontSize: "12.4px" }}
                              >
                                <option>--Select Category--</option>
                                <option value="per">Percentage</option>
                                <option value="ran">Range</option>
                                <option value="eq">Equal</option>
                                <option value="like">Like</option>
                              </select>
                            </div>

                            <div
                              style={{ display: "none", fontSize: "12.4px" }}
                              id="prcntge"
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
                                style={{ fontSize: "12.4px" }}
                                onChange={setdata1}
                                name="prcnt"
                                className="form-control"
                                aria-describedby="emailHelp"
                              />
                            </div>
                            <div
                              style={{ display: "none", fontSize: "12.5px" }}
                              className="row range"
                              id="range"
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
                                  style={{ fontSize: "12.4px" }}
                                  onChange={setdata1}
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
                                  style={{ fontSize: "12.4px" }}
                                  onChange={setdata1}
                                  name="max"
                                  className="form-control"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          id="btnrun"
                          style={{ display: "none", fontSize: "12.4px" }}
                          type="click"
                          onClick={handleRun}
                          className="btn btn-primary mt-2"
                        >
                          RUN
                        </button>
                      </div>
                      <div
                        style={{ display: "none" }}
                        className=" form-group col-lg-6 offset-md-5"
                        id="filtdiv"
                      >
                        <label>Total number of filtered Data: </label>
                        <label className="ml-2" id="totdata">
                          {percentageData.length}
                        </label>
                      </div>

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
                          style={{ fontSize: "12.4px" }}
                          required
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
                            name="userassin"
                            className="form-control"
                          />

                          {selected &&
                            selected.map((input) => {
                              return (
                                <div key={input + "abcff"}>
                                  <label
                                    style={{
                                      fontSize: "12.4px",
                                      marginTop: "5px",
                                    }}
                                    key={input + "abc"}
                                  >
                                    {input}
                                  </label>
                                  <input
                                    id="input"
                                    onChange={setdata2}
                                    name={input}
                                    type="number"
                                    className="form-control"
                                    key={input}
                                  />
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <button
                        id="btn"
                        style={{ display: "none", fontSize: "12.4px" }}
                        type="submit"
                        className="btn btn-primary mt-2"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <br></br>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DataAllocationManagement;
