import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const PercentCell = styled.div`
  text-align: right;
`;

const PercentFormatter = ({value}) => {
    const bal = new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2 }).format(value);
    return <PercentCell>{value && bal}</PercentCell>;
};

PercentFormatter.propTypes = {
    value: PropTypes.number,
};

export default memo(PercentFormatter);
