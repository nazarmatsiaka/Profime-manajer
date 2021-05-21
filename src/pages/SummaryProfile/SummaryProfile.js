import React, {memo, useContext} from 'react';
import withMenu from "../../components/HOC/withMenu";
import {SummaryProfileContext} from "../../context/SummaryProfileContext";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const SummaryProfile = () => {
    const {profile, fetching} = useContext(SummaryProfileContext);

    return fetching ? <div>Loading...</div> : <ProfileCard data={profile} />;
}

export default withMenu(memo(SummaryProfile));
