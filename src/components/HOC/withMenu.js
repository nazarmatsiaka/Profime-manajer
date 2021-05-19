import React from 'react';
import Menu from "../Menu/Menu";

const withMenu = Component => ({location, ...props}) => {
    return (
        <>
            <Menu pathname={location.pathname}/>
            <Component location={location} {...props} />
        </>
    );
};

export default withMenu;
