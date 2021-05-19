import React from 'react';
import PropTypes from 'prop-types';

const DefaultFormatter = ({value}) => {
    return <td>{String(value)}</td>
};

DefaultFormatter.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
    ]),
};

export default DefaultFormatter;
