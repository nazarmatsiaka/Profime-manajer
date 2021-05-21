import React, {useContext, useEffect} from 'react';

import withMenu from "../../components/HOC/withMenu";
import Table from "../../components/Table";

import {firestoreDB} from "../../base";
import {profileColumns} from "../../lib/columns/profileColumns";
import {ProfilesContext} from "../../context/ProfilesContext";
import {PagesContainer} from "../../elemetns/PagesContainer";

const Profiles = () => {
    const {profiles} = useContext(ProfilesContext);

    // useEffect(() => {
    //     firestoreDB.collection('profiles').add({
    //         profileName: 'Person',
    //         profileStatus: 'Paused',
    //         creationDate: new Date('2003-12-17T03:24:00'),
    //         percentUsage: 0.7,
    //         balance: 76000,
    //         age: 37,
    //         currency: 'USD',
    //     }).then(
    //         res => console.log('res - ', res),
    //         err => console.log('err - ', err),
    //     )
    // }, []);

    return (
        <PagesContainer>
            <Table
                columns={profileColumns}
                data={profiles}
                defaultSorting={{
                    column: 'profileName',
                    order: 'default',
                }}
                withSelectColumns
            />
        </PagesContainer>
    );
}

export default withMenu(Profiles);
