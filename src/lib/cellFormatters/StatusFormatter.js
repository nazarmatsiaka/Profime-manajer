import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const statusesColor = {
    Active: '#00AB66',
    Paused: '#FFAB76',
    Deleted: '#FF0000',
};

const StatusCell = styled.div`
  text-align: center;
  color: ${({color}) => color};
`;

const DateFormatter = ({value}) => {
    return <StatusCell color={statusesColor[value]}>{value}</StatusCell>
};


DateFormatter.propTypes = {
    value: PropTypes.string.isRequired,
};

export default DateFormatter;
