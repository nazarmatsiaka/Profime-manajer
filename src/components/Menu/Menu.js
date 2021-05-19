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
                    <Li active={pathname === '/profile'}>
                        <NavLink to="/profile">Profile Summary</NavLink>
                    </Li>
                </List>
            </Nav>
        </header>
    );
}

export default Menu;
