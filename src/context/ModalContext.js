import {createContext, useCallback, useState} from "react";

export const ModalContext = createContext();

const defaultModalInfo = {
    modalId: null,
    data: {},
}

const ModalContextProvider = ({children}) => {
    const [modalInfo, setModalInfo] = useState(defaultModalInfo);

    const setModal = useCallback((modalId, data) => {
        setModalInfo({modalId, data});
    }, []);

    const closeModal = useCallback(() => {
        setModalInfo(defaultModalInfo);
    }, []);

    return (
        <ModalContext.Provider value={{modalInfo, setModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalContextProvider;
