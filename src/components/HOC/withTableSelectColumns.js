import React, {useMemo, useState} from 'react';
import {Button} from "../../elemetns/Button";
import ModalContainer from "../Modals/ModalContainer";

const withTableSelectColumns = Component => ({columns, ...props}) => {
    const [visibleColumns, setVisibleColumns] = useState(columns.map(({id}) => id));

    const correctColumns = useMemo(() => {
        return columns;
    }, [columns, visibleColumns]);



    return (
        <>
            <ModalContainer />
            <Button>Select columns</Button>
            <Component columns={correctColumns} {...props} />
        </>
    );
};

export default withTableSelectColumns;
