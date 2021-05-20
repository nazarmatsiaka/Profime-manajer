import styled from "styled-components";

export const Button = styled.button`
  margin: 10px;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
  background-color: ${({color, theme}) => theme.colors[color] || '#EFEFEF'};
`;
