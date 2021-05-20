import React, {useCallback, useContext, useMemo, useState} from 'react';
import {Button} from "../../elemetns/Button";
import {ModalContext} from "../../context/ModalContext";

const withTableSelectColumns = Component => ({withSelectColumns, columns, ...props}) => {
    const [visibleColumnsId, setVisibleColumnsId] = useState(columns.map(i => i.id));

    const {setModal} = useContext(ModalContext);

    const correctColumns = useMemo(() => {
        if (withSelectColumns) {
            return columns.filter(i => visibleColumnsId.includes(i.id));
        }
        return columns;
    }, [columns, visibleColumnsId, withSelectColumns]);

    const handleClick = useCallback(() => {
        setModal('select-columns', {onSubmit: setVisibleColumnsId, visibleColumnsId, allColumns: columns});
    }, [visibleColumnsId, setVisibleColumnsId, setModal]);

    return (
        <>
            {withSelectColumns && <Button onClick={handleClick}>Select columns</Button>}
            <Component columns={correctColumns} {...props} />
        </>
    );
};

export default withTableSelectColumns;
