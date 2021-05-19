import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import DefaultFormatter from "../../lib/cellFormatters/DefaultFormatter";

const TRow = ({rowData, columns}) => {

    return (
        <tr>
            {columns.map(col => {
                if (col.formatter) {
                    //TODO: Change fragment to td
                    return <Fragment key={col.id}>
                        {col.formatter({colData: col, value: rowData[col.id], data: rowData})}
                    </Fragment>;
                }
                return <DefaultFormatter key={col.id} value={rowData[col.id]} />
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

export default TRow;
