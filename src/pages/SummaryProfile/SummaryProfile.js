import React, {useContext} from 'react';
import withMenu from "../../components/HOC/withMenu";
import {SummaryProfileContext} from "../../context/SummaryProfileContext";
import ProfileCard from "../../components/ProfileCard/ProfileCard";

const SummaryProfile = () => {
    const {profile} = useContext(SummaryProfileContext);

    return (
        <ProfileCard data={profile} />
    );
}

export default withMenu(SummaryProfile);
