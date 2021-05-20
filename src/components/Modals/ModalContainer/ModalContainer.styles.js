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
  border: 1px solid ${({theme}) => theme.colors.darkGreen};
  margin: 150px auto 0;
  background-color: #fff;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 2px solid ${({theme}) => theme.colors.darkGreen};
`;

export const Title = styled.h2`
  color: ${({theme}) => theme.colors.darkGreen};
`;

export const Cross = styled.div`
  font-weight: bold;
  cursor: pointer;
  color: ${({theme}) => theme.colors.darkGreen};
  font-size: 20px;
`;

export const ModalBody = styled.div`
  padding: 10px 20px;
`;
