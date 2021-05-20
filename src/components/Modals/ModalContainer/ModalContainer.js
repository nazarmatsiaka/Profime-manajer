import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {Container, Cross, Modal, ModalBody, ModalHeader, Title} from "./ModalContainer.styles";
import {ModalContext} from "../../../context/ModalContext";
import {getModal} from "../modalConfig";

const ModalContainer = ({width}) => {

    const {modalInfo: {modalId}, closeModal} = useContext(ModalContext);

    const {title, BodyComponent} = getModal(modalId);
    return (
        <>
            {modalId && <Container>
                <Modal width={width}>
                    <ModalHeader>
                        <Title>{title}</Title>
                        <Cross onClick={closeModal}>X</Cross>
                    </ModalHeader>
                    <ModalBody>
                        <BodyComponent />
                    </ModalBody>
                </Modal>
            </Container>}
        </>
    );
};

ModalContainer.defaultProps = {
    width: '600px',
};

ModalContainer.propTypes = {
    width: PropTypes.string,
}
export default ModalContainer;
