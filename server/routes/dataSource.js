const express = require("express");
const {
  AlDataSource,
  getAlDataSource,
  AlDataSourceNew,
  getAlDataSourceNew,
  AlTest,
  getAlTest,
  Japan,
  getJapan,
  PsfTestSurvey,
  getPsfTestSurvey,
  UsersToAssign,
  getUsersToAssign,
  getFilterDataJapan,
  getFilterDataAlDataSource,
  getFilterDataAlDataSourceNew,
  getFilterDataPsfTest,
  getFilterDataAlTest,
  getJapanPer,
  getRangeJapan,
  getLikeJapan,
  getAlTestPer,
  getAlDataPer,
  getAlDataNewPer,
  getPsfTestPer,
  getEqualDataJapan,
  getRangeAlTest,
  getLikeAlTest,
  getRangeAlDataSource,
  getLikeAlDataSource,
  getRangeAlDataSourceNew,
  getLikeAlDataSourceNew,
  getRangePsfTest,
  getLikePsfTest,
  submitSurvey,
  DataSource,
  getCollection,
  dynamicCollection,
  testt,
  getDataSource,
  uploaddataJapan,
  uploaddataAlTest,
  uploaddataAlDataNew,
  uploaddataAlDataSource,
  uploaddataPsfTest,
  upload,
  CreateQuestion,
  CreateSurvey,
  getTemplate,
  getQuestionBankList,
  checkQuestionBankList,
  assignData,
  surveyList,
  sheetDetails,
  getSheetDetails,
  findOneSurvey,
  sheetSurveyMay,
  getDetailsofSheetSurveyMay,
  findOneSurveyMay,
  sheetSurveyMaySubmit,
  assignDataManual,
  DeleteAgent,
} = require("../controllers/dataSource");

const router = express.Router();

router.post("/aldatasource", AlDataSource);
router.get("/getaldatasource", getAlDataSource);
router.post("/aldatasourcenew", AlDataSourceNew);
router.get("/getaldatasourcenew", getAlDataSourceNew);
router.post("/altest", AlTest);
router.get("/getaltest", getAlTest);
router.post("/japan", Japan);
router.get("/getjapan", getJapan);
router.post("/psftest", PsfTestSurvey);
router.get("/getpsftest", getPsfTestSurvey);
router.post("/userstoassign", UsersToAssign);
router.get("/getuserstoassign", getUsersToAssign);
router.get("/getfilterdetailsjapan", getFilterDataJapan);
router.get("/getfilterdetailsaldatasource", getFilterDataAlDataSource);
router.get("/getfilterdetailsaldatasourcenew", getFilterDataAlDataSourceNew);
router.get("/getfilterdetailspsftest", getFilterDataPsfTest);
router.get("/getfilterdetailsaltest", getFilterDataAlTest);
router.post("/getperjapanfilter", getJapanPer);
router.post("/getrangejapan", getRangeJapan);
router.post("/getlikejapan", getLikeJapan);
router.post("/getequaljapan", getEqualDataJapan);
router.post("/getaltestper", getAlTestPer);
router.post("/getaltestrange", getRangeAlTest);
router.post("/getlikealitest", getLikeAlTest);
router.post("/getaldata", getAlDataPer);
router.post("/getaldatarange", getRangeAlDataSource);
router.post("/getaldatalike", getLikeAlDataSource);
router.post("/getaldatanew", getAlDataNewPer);
router.post("/getaldatanewrange", getRangeAlDataSourceNew);
router.post("/getaldatanewlike", getLikeAlDataSourceNew);
router.post("/getpsfper", getPsfTestPer);
router.post("/getpsftestrange", getRangePsfTest);
router.post("/getpsftestlike", getLikePsfTest);
router.post("/getsubmitsurvey", submitSurvey);
router.post("/postdatasource", DataSource);
router.post("/getcollection", getCollection);
router.get("/getDatasource", getDataSource);
router.post("/dynamiccollection", dynamicCollection);
router.post("/posttest", testt);
router.post("/uploadjapan", upload.single("csv"), uploaddataJapan);
router.post("/uploadaltest", upload.single("csv"), uploaddataAlTest);
router.post("/uploadaldatanew", upload.single("csv"), uploaddataAlDataNew);
router.post("/uploadaldata", upload.single("csv"), uploaddataAlDataSource);
router.post("/uploadpsftest", upload.single("csv"), uploaddataPsfTest);
// Create Question
router.post("/createquestion", CreateQuestion);
//Create Survey
router.post("/createsurvey", CreateSurvey);
//Get survey details
router.get("/surveylist", surveyList);
//Get template of create survey
router.post("/gettemplatename", getTemplate);
//Get Question bank list
router.get("/getquestionlist", getQuestionBankList);
//Check Question bank list
router.post("/checkquestionlist", checkQuestionBankList);
//Assigning data to users
router.post("/assigndata", assignData);
//create sheet details
router.post("/sheetdetails", sheetDetails);
//get sheet details
router.get("/getsheetdetails", getSheetDetails);
//get sheet by id
router.get("/sheet/survey/:id", findOneSurvey);
//create sheet survey may
router.post("/sheetsurveymay", sheetSurveyMay);
//Get details of sheet survey may
router.get("/getsheetsurveymay", getDetailsofSheetSurveyMay);
//get sheet May survey by id
router.get("/survey/:id", findOneSurveyMay);
//Submit survey may
router.post("/sheetsurveymaysubmit", sheetSurveyMaySubmit);
//Assigning data to users manually
router.post("/assigndatamanually", assignDataManual);
//Delete
router.delete("/sheet/:id", DeleteAgent);
module.exports = router;
