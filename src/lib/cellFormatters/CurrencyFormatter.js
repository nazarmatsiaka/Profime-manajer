import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const CurrencyCell = styled.div`
  text-align: right;
`;

const CurrencyFormatter = ({value, currency}) => {
    const bal = new Intl.NumberFormat('de-DE', { style: 'currency', currency }).format(value);
    return <CurrencyCell>{value && bal}</CurrencyCell>;
};

CurrencyFormatter.defaultProps = {
    currency: 'USD',
};

CurrencyFormatter.propTypes = {
    value: PropTypes.number,
    currency: PropTypes.string,
};

export default memo(CurrencyFormatter);
