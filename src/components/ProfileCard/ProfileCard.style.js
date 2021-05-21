import styled from "styled-components";

export const Card = styled.div`
  border: 2px solid ${({theme}) => theme.colors.green};
  border-radius: 10px;
  overflow: hidden;
  max-width: 600px;
  margin: 0 auto;
`;

export const DataContainer = styled.div`
  display: grid;
  margin: 20px auto;
  grid-template-columns: 1fr 1fr;
  width: 50%;
  &>* {
    border: 1px solid #000;
    text-align: left;
    padding: 5px 10px;
  }
`;
