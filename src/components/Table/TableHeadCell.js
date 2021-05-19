import React from 'react';
import PropTypes from 'prop-types';

import {HeadCell} from "./Table.style";
import styled from "styled-components";

const Arrow = styled.span`
  width: 5px;
  display: inline-block;
`;

const TableHeadCell = ({label, sorting, changeSorting, id}) => {
    const arrow = sorting.order === 'reverse' ? <span>&uarr;</span> : <span>&darr;</span>;

    return (
        <HeadCell onClick={changeSorting}>
            {label}
            <Arrow>
                {sorting.column === id && arrow}
            </Arrow>
        </HeadCell>
    );
};

TableHeadCell.propTypes = {
    label: PropTypes.string.isRequired,
}

export default TableHeadCell;
