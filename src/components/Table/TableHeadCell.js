import React from 'react';
import PropTypes from 'prop-types';

import {HeadCell} from "./Table.style";

const TableHeadCell = ({label}) => {

    return (
        <HeadCell>{label}</HeadCell>
    );
};

TableHeadCell.propTypes = {
    label: PropTypes.string.isRequired,
}

export default TableHeadCell;
