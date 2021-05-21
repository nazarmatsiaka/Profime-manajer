import React, {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {Button} from "../../elemetns/Button";
import {ModalContext} from "../../context/ModalContext";
import {getTableColumnsFromLocalStorage, getTableSortingFromLocalStorage} from "../../localStorage/localStorage";

const withTableSelectColumns = Component => ({withSelectColumns, tableId, columns, ...props}) => {
    const [visibleColumnsId, setVisibleColumnsId] = useState(columns.map(i => i.id));

    useEffect(() => {
        const localStorageColumns = getTableColumnsFromLocalStorage(tableId);
        localStorageColumns && setVisibleColumnsId(localStorageColumns);
    }, []);

    const {setModal} = useContext(ModalContext);

    const correctColumns = useMemo(() => {
        if (withSelectColumns) {
            return columns.filter(i => visibleColumnsId.includes(i.id));
        }
        return columns;
    }, [columns, visibleColumnsId, withSelectColumns]);

    const handleClick = useCallback(() => {
        setModal('select-columns', {onSubmit: setVisibleColumnsId, visibleColumnsId, allColumns: columns, tableId});
    }, [visibleColumnsId, setVisibleColumnsId, setModal]);

    return (
        <>
            {withSelectColumns && <Button onClick={handleClick}>Select columns</Button>}
            <Component columns={correctColumns} tableId={tableId} {...props} />
        </>
    );
};

export default withTableSelectColumns;
