import React from "react";
import {
    Switch,
    Route, Redirect,
} from "react-router-dom";

import Profiles from "../pages/Profiles";
import ProfileSummary from "../pages/SummaryProfile";

const Routers = () => {
    return (
        <Switch>
            <Route exact path="/" component={Profiles} />
            <Route exact path="/profile/:id" component={ProfileSummary} />
            <Redirect to="/" />
        </Switch>
    );
}

export default Routers;
