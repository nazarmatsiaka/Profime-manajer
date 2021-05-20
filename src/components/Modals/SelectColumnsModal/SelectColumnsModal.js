import React, {useCallback, useContext, useState} from 'react';
import {ModalContext} from "../../../context/ModalContext";
import Checkbox from "../../../elemetns/Checkbox";
import {ButtonsContainer} from "../../../elemetns/ButtonsContainer";
import {Button} from "../../../elemetns/Button";

const SelectColumnsModal = () => {
    const {
        modalInfo: {data: {visibleColumnsId, allColumns, onSubmit}},
        closeModal,
    } = useContext(ModalContext);

    const [dataForRender, setDataForRender] = useState(allColumns.map(({id, label}) => {
        return {
            id,
            label,
            isSelect: visibleColumnsId.includes(id),
        }
    }));

    const handleClick = useCallback((columnId) => (e) => {
        setDataForRender(prevVal => prevVal.map(i => i.id === columnId
            ? {...i, isSelect: e.target.checked}
            : i));
    }, [setDataForRender]);

    const handleSubmit = useCallback(() => {
        onSubmit(dataForRender.filter(i => i.isSelect).map(i => i.id));
        closeModal();
    }, [dataForRender, onSubmit]);

    return (
        <div>
            {dataForRender.map(i => <div key={i.id}>
                <Checkbox id={i.id} checked={i.isSelect} onChange={handleClick(i.id)} />
                <label htmlFor={i.id}>{i.label}</label>
            </div>)}
            <ButtonsContainer>
                <Button color={'green'} onClick={handleSubmit}>Apply</Button>
                <Button onClick={closeModal}>Close</Button>
            </ButtonsContainer>
        </div>
    );
}
;

export default SelectColumnsModal;
