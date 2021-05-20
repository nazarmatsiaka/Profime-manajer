import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const HeadCell = styled.th`
  cursor: ${({isPointer}) => isPointer ? 'pointer' : 'auto'};
  user-select: none;
  padding: 3px 20px;
  border: 1px solid #000;
`;

export const BodyCell = styled.td`
  padding: 8px 20px;
  border: 1px solid #000;
`;
