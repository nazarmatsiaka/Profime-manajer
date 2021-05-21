import React, {memo} from 'react';
import CurrencyFormatter from "../../lib/cellFormatters/CurrencyFormatter";
import PercentFormatter from "../../lib/cellFormatters/PercentFormatter";
import DateFormatter from "../../lib/cellFormatters/DateFormatter";
import StatusFormatter from "../../lib/cellFormatters/StatusFormatter";
import {Card, DataContainer} from "./ProfileCard.style";
import {Image} from "../../elemetns/Image";

const ProfileCard = ({data}) => {
    const {profileName, age, balance, currency, percentUsage, creationDate, profileStatus, imageUrl} = data;
    return (
        <Card>
            <Image circle src={imageUrl}/>
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

export default memo(ProfileCard);
