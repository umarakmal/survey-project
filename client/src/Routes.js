import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Signin from "./auth/Signin";
import AdminRoute from "./auth/AdminRoute";
import PrivateRoute from "./auth/PrivateRoute";
import PageNotFound from "./component/PageNotFound";
import AddUser from "./component/user/AddUser";
import AgentPage from "./component/agentLogin/AgentPage";
import EditUser from "./component/user/EditUser";
import ListUser from "./component/user/ListUser";
import DataAllocationManagement from "./component/DataAllocationManage";
import ReAssignAgent from "./component/ReAssignAgent";
import Test from "./component/Test";
import CreateDataSource from "./component/dataSource/CreateDataSource";
import ListDataSource from "./component/dataSource/ListDataSource";
import UploadData from "./component/dataSource/UploadData";
import CreateQuestion from "./component/question/CreateQuestion";
import QuestionBank from "./component/question/QuestionBank";
import CreateSurvey from "./component/survey/CreateSurvey";
import SurveyList from "./component/survey/SurveyList";
import CustomerReport from "./component/report/CustomerReport";
import DetailsReport from "./component/report/DetailsReport";
import CustomerDetails from "./component/agentLogin/CustomerDetails";
import SurveyMayEdit from "./component/agentLogin/SurveyMayEdit";
const Routess = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signin" exact component={Signin} />
        <AdminRoute path="/admin" exact component={App} />
        <AdminRoute path="/test" exact component={Test} />
        <AdminRoute path="/users" exact component={ListUser} />
        <AdminRoute path="/adduser" exact component={AddUser} />
        <AdminRoute path="/edit/user/:id" exact component={EditUser} />
        <PrivateRoute
          path="/sheet/survey/:id"
          exact
          component={CustomerDetails}
        />
        <PrivateRoute path="/may/survey/:id" exact component={SurveyMayEdit} />
        <AdminRoute
          path="/dataallocation"
          exact
          component={DataAllocationManagement}
        />
        <AdminRoute path="/reassign" exact component={ReAssignAgent} />
        <AdminRoute
          path="/createdatasource"
          exact
          component={CreateDataSource}
        />
        <AdminRoute path="/listdatasource" exact component={ListDataSource} />
        <AdminRoute path="/dataupload" exact component={UploadData} />
        <AdminRoute path="/createquestion" exact component={CreateQuestion} />
        <AdminRoute path="/questionbank" exact component={QuestionBank} />
        <AdminRoute path="/createsurvey" exact component={CreateSurvey} />
        <AdminRoute path="/surveylist" exact component={SurveyList} />
        <AdminRoute path="/customerreport" exact component={CustomerReport} />
        <AdminRoute path="/detailsreport" exact component={DetailsReport} />
        <PrivateRoute path="/agentlogin" exact component={AgentPage} />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routess;
