import React, {memo} from 'react';
import PropTypes from 'prop-types';
import DefaultFormatter from "../../lib/cellFormatters/DefaultFormatter";
import {BodyCell} from "./Table.style";

const TRow = ({rowData, columns}) => {

    return (
        <tr>
            {columns.map(col => {
                if (col.formatter) {
                    const component = col.formatter({colData: col, value: rowData[col.id], data: rowData})
                    return <BodyCell key={col.id}>
                        {component}
                    </BodyCell>;
                }
                return (
                    <BodyCell key={col.id}>
                        <DefaultFormatter value={rowData[col.id]}/>
                    </BodyCell>
                );
            })}
        </tr>
    )
};

TRow.propTypes = {
    rowData: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.object,
    ])).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        sort: PropTypes.bool,
    })).isRequired,
}

export default memo(TRow);
