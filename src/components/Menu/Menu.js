import React, {memo} from 'react';

import {Li, List, Nav, NavLink, NavLink2} from "./Menu.styles";

const Menu = ({pathname}) => {
    return (
        <header>
            <Nav>
                <List>
                    <Li active={pathname === '/'}>
                        <NavLink to="/">Profiles</NavLink>
                    </Li>
                    <Li active={pathname.startsWith('/profile')}>
                        <NavLink2 disabled>Profile Summary</NavLink2>
                    </Li>
                </List>
            </Nav>
        </header>
    );
}

export default memo(Menu);
