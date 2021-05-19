import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import styled from "styled-components";

const DateCell = styled.div`
  text-align: center;
`;

const DateFormatter = ({value, format}) => {
    const date = moment(value).format(format);

    return <DateCell>{date}</DateCell>
};

DateFormatter.defaultProps = {
    format: 'DD-MM-YYYY HH:mm',
};

DateFormatter.propTypes = {
    value: PropTypes.instanceOf(Date).isRequired,
    format: PropTypes.string,
};

export default DateFormatter;
