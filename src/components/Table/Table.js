import React from 'react';
import PropTypes from 'prop-types';

import {Table} from "./Table.style";
import TableHeadCell from "./TableHeadCell";
import TRow from "./TRow";

const TableComponents = ({data, columns}) => {
    return (
        <Table>
            <thead>
                <tr>
                    {columns.map(i => <TableHeadCell key={i.id} label={i.label} />)}
                </tr>
            </thead>
            <tbody>
                {data.map(i => <TRow key={i.id} rowData={i} columns={columns} />)}
            </tbody>
        </Table>
    );
};

TableComponents.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        sort: PropTypes.bool,
    })).isRequired,
};

export default TableComponents;
