import styled from "styled-components";

export const Container = styled.div`
  background-color: #000b;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Modal = styled.div`
  width: ${({width}) => width};
  border: 1px solid red;
  margin: 150px auto 0;
`;
