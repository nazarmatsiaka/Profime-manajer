import React, {memo, useContext} from 'react';

import withMenu from "../../components/HOC/withMenu";
import Table from "../../components/Table";

import {profileColumns} from "../../lib/columns/profileColumns";
import {ProfilesContext} from "../../context/ProfilesContext";
import {PagesContainer} from "../../elemetns/PagesContainer";

const Profiles = () => {
    const {profiles, fetching} = useContext(ProfilesContext);

    return (
        <PagesContainer>
            {fetching ? <div>Loading...</div> : <Table
                tableId="profilesTable"
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

export default withMenu(memo(Profiles));
