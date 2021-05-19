import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const CurrencyCell = styled.td`
  text-align: right;
  padding-right: 10px;
`;

const CurrencyFormatter = ({value, currency}) => {
    const bal = new Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(value);
    return <CurrencyCell>{bal}</CurrencyCell>;
};

CurrencyFormatter.defaultProps = {
    currency: 'USD',
};

CurrencyFormatter.propTypes = {
    value: PropTypes.number.isRequired,
    currency: PropTypes.string,
};

export default CurrencyFormatter;