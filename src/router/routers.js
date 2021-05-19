import React from "react";
import {
    Switch,
    Route, Redirect,
} from "react-router-dom";
import Profiles from "../pages/Profiles/Profiles";
import ProfileSummary from "../pages/ProfileSummary/ProfileSummary";

const Routers = () => {
    return (
        <Switch>
            <Route exact path="/" component={Profiles} />
            <Route exact path="/profile" component={ProfileSummary} />
            <Redirect to="/" />
        </Switch>
    );
}

export default Routers;
