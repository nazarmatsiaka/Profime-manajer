import React from 'react';

import {Li, List, Nav, NavLink} from "./Menu.styles";

const Menu = ({pathname}) => {
    return (
        <header>
            <Nav>
                <List>
                    <Li active={pathname === '/'}>
                        <NavLink to="/">Profiles</NavLink>
                    </Li>
                    <Li active={pathname.startsWith('/profile')}>
                        <NavLink to="/profile/3">Profile Summary</NavLink>
                    </Li>
                </List>
            </Nav>
        </header>
    );
}

export default Menu;
