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
            age: 28,
            currency: 'USD',
        },
        {
            id: 2,
            profileName: 'Nazar',
            profileStatus: 'Active',
            creationDate: new Date('2001-12-17T03:24:00'),
            percentUsage: 0.05,
            balance: 200,
            age: 22,
            currency: 'EUR'
        },
        {
            id: 3,
            profileName: 'Person',
            profileStatus: 'Paused',
            creationDate: new Date('2003-12-17T03:24:00'),
            percentUsage: 0.7,
            balance: 76000,
            age: 37,
            currency: 'USD',
        },
    ];
    return (
        <Table
            columns={profileColumns}
            data={data}
            defaultSorting={{
                column: 'profileName',
                order: 'default',
            }}
        />
    );
}

export default withMenu(Profiles);
