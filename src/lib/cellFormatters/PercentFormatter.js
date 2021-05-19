import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const PercentCell = styled.td`
  text-align: right;
  padding-right: 10px;
`;

const PercentFormatter = ({value}) => {
    const bal = new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2 }).format(value);
    return <PercentCell>{bal}</PercentCell>;
};

PercentFormatter.propTypes = {
    value: PropTypes.number.isRequired,
};

export default PercentFormatter;
