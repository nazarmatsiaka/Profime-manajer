import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import {HeadCell} from "./Table.style";
import styled from "styled-components";

const Arrow = styled.span`
  width: 3px;
  margin-left: 4px;
  display: inline-block;
`;

const TableHeadCell = ({label, sorting: {isSorting, column, order}, changeSorting, id}) => {
    const arrow = order === 'reverse' ? <span>&uarr;</span> : <span>&darr;</span>;

    const handleClick = useCallback(() => {
        if(isSorting) {
            changeSorting();
        }
    }, [isSorting, changeSorting]);

    return (
        <HeadCell isPointer={isSorting} onClick={handleClick}>
            {label}
            <Arrow>
                {column === id && arrow}
            </Arrow>
        </HeadCell>
    );
};

TableHeadCell.propTypes = {
    label: PropTypes.string.isRequired,
}

export default TableHeadCell;
