import styled from "styled-components";

export const Table = styled.table`
  width: 95%;
  border-collapse: collapse;
  margin: 0 auto;
`;

export const HeadCell = styled.th`
  cursor: pointer;
  user-select: none;
  padding: 3px 20px;
  border: 1px solid #000;
`;

export const BodyCell = styled.td`
  padding: 8px 20px;
  border: 1px solid #000;
`;
