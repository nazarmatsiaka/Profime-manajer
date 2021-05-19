import React from 'react';
import withMenu from "../../components/HOC/withMenu";
import Table from "../../components/Table/Table";
import {profileColumns} from "../../lib/columns/profileColumns";

const Profiles = () => {
    const data = [
        {
            id: 1,
            profileName: 'Andrey',
            profileStatus: 'Deleted',
            creationDate: new Date(),
            percentUsage: 0.46,
            balance: 5000,
            currency: 'USD',
        },
        {
            id: 2,
            profileName: 'Nazar',
            profileStatus: 'Active',
            creationDate: new Date(),
            percentUsage: 0.05,
            balance: 200,
            currency: 'EUR'
        },
        {
            id: 3,
            profileName: 'Person',
            profileStatus: 'Paused',
            creationDate: new Date(),
            percentUsage: 0.7,
            balance: 76000,
            currency: 'USD',
        },
    ];
    return (
        <Table
            columns={profileColumns}
            data={data}
        />
    );
}

export default withMenu(Profiles);
