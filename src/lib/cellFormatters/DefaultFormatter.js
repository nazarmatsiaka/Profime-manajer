import React, {memo} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const DefaultCell = styled.div`
  text-align: right;
`;

const DefaultFormatter = ({value}) => {
    return <DefaultCell>{String(value)}</DefaultCell>
};

DefaultFormatter.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
    ]),
};

export default memo(DefaultFormatter);
