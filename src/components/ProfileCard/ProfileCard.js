import React from 'react';
import CurrencyFormatter from "../../lib/cellFormatters/CurrencyFormatter";
import PercentFormatter from "../../lib/cellFormatters/PercentFormatter";
import DateFormatter from "../../lib/cellFormatters/DateFormatter";
import StatusFormatter from "../../lib/cellFormatters/StatusFormatter";
import {Card, DataContainer} from "./ProfileCard.style";
import {Image} from "../../elemetns/Image";

const ProfileCard = ({data}) => {
    const {profileName, age, balance, currency, percentUsage, creationDate, profileStatus} = data;
    return (
        <Card>
            <Image circle src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
            <DataContainer>
                <h5>Profile Name</h5><p>{profileName}</p>
                <h5>Age</h5><p>{age}</p>
                <h5>Balance</h5><CurrencyFormatter value={balance} currency={currency}/>
                <h5>Usage</h5><PercentFormatter value={percentUsage}/>
                <h5>Creation Date</h5><DateFormatter value={creationDate}/>
                <h5>Profile Status</h5><StatusFormatter value={profileStatus}/>
            </DataContainer>
        </Card>
    );
};

export default ProfileCard;
