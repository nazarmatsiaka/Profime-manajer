import styled from "styled-components";

const Input = styled.input`
  margin-right: 10px;
`;

const Checkbox = (props) => <Input {...props} type="checkbox"/>;

export default Checkbox;
