import React, {useContext} from 'react';

import withMenu from "../../components/HOC/withMenu";
import Table from "../../components/Table";

import {profileColumns} from "../../lib/columns/profileColumns";
import {ProfilesContext} from "../../context/ProfilesContext";
import {PagesContainer} from "../../elemetns/PagesContainer";

const Profiles = () => {
    const {profiles, fetching} = useContext(ProfilesContext);
    console.log(profiles)

    return (
        <PagesContainer>
            {fetching ? <div>Loading...</div> : <Table
                columns={profileColumns}
                data={profiles}
                defaultSorting={{
                    column: 'creationDate',
                    order: 'default',
                }}
                withSelectColumns
            />}
        </PagesContainer>
    );
}

export default withMenu(Profiles);
