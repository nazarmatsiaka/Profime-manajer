import styled from "styled-components";
import {Link} from "react-router-dom";

export const Nav = styled.nav`
  padding: 10px 30px 0;
  margin-bottom: 10px;
  border-bottom: 2px solid #ddd;
`;

export const List = styled.ul`
  list-style-type: none;
  display: flex;
`;

export const Li = styled.li`
  margin-right: 10px;
  background-color: ${({active, theme}) => active ? theme.colors.green : '#ddd'};
  border-radius: 5px 5px 0 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  display: block;
  min-width: 80px;
  padding: 5px 25px;
  color: #000;
`;
