
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";
import _404Page from "../pages/_404Page";
import PrivateRoute from "./PrivateRoute";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/cart" component={HomePage} />
                <Route exact path="/olist" component={HomePage} />
                {/* <Route path="/mytaobao" component={MyTaobaoPage} /> */}
                <PrivateRoute path="/mytaobao" component={MyPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={_404Page} />
            </Switch>
        </Router>
    );
}

export default Routes;