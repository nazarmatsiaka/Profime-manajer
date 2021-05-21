import React, {memo, useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash';


import {Table} from "./Table.style";
import TableHeadCell from "./TableHeadCell";
import TRow from "./TRow";
import moment from "moment";
import withTableSelectColumns from "../HOC/withTableSelectColumns";
import {getTableSortingFromLocalStorage, setTableSortingToLocalStorage} from "../../localStorage/localStorage";

const TableComponents = ({data, columns, defaultSorting, tableId}) => {
    const [sorting, setSorting] = useState(defaultSorting);

    useEffect(() => {
        const localStorageSorting = getTableSortingFromLocalStorage(tableId);
        localStorageSorting && setSorting(localStorageSorting);
    }, []);

    const correctData = useMemo(
        () => {
            if (sorting && !isEmpty(data)) {
                let sortableData;

                if (data[0][sorting.column] instanceof Date) {
                    sortableData = data.sort((a, b) => moment(a[sorting.column]).isAfter(b[sorting.column]) ? 1 : -1);
                } else {
                    sortableData = data.sort((a, b) => a[sorting.column] > b[sorting.column] ? 1 : -1);
                }

                return sorting.order === 'reverse' ? sortableData.reverse() : sortableData;
            }

            return data;
        },
        [sorting, data],
    );

    const changeSorting = (id) => () => {
        setSorting((prev) => {
            let newSorting;

            if(prev.column === id) {
                newSorting = {...prev, order: prev.order === 'reverse' ? 'default' : 'reverse'};
            } else {
                newSorting = {
                    column: id,
                    order: 'default',
                };
            }


            setTableSortingToLocalStorage(tableId, newSorting);

            return newSorting
        });
    };

    return (
        <Table>
            <thead>
                <tr>
                    {columns.map(i => <TableHeadCell
                        key={i.id}
                        id={i.id}
                        label={i.label}
                        sorting={{...sorting, isSorting: i.sort}}
                        changeSorting={changeSorting(i.id)}
                    />)}
                </tr>
            </thead>
            <tbody>
                {correctData.map(i => <TRow key={i.id} rowData={i} columns={columns}/>)}
            </tbody>
        </Table>
    );
};

TableComponents.defaultProps = {
    defaultSorting: {
        column: 'id',
        order: 'back',
    },
};

TableComponents.propTypes = {
    tableId: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    columns: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        sort: PropTypes.bool,
    })).isRequired,
    defaultSorting: PropTypes.shape({
        column: PropTypes.string.isRequired,
        order: PropTypes.string.isRequired,
    }),
};

export default withTableSelectColumns(memo(TableComponents));
