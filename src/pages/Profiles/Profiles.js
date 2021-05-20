import React, {useContext} from 'react';

import withMenu from "../../components/HOC/withMenu";
import Table from "../../components/Table";

import {profileColumns} from "../../lib/columns/profileColumns";
import {ProfilesContext} from "../../context/ProfilesContext";
import {PagesContainer} from "../../context/PagesContainer";

const Profiles = () => {
    const {profiles} = useContext(ProfilesContext);

    return (
        <PagesContainer>
            <Table
                columns={profileColumns}
                data={profiles}
                defaultSorting={{
                    column: 'profileName',
                    order: 'default',
                }}
            />
        </PagesContainer>
    );
}

export default withMenu(Profiles);
