import React from 'react';
import PropTypes from 'prop-types';
import {Container, Modal} from "./ModalContainer.styles";

const ModalContainer = ({width}) => {

    //TODO: implement context for Modal
    return (
        <Container>
            <Modal width={width}>
                1235
            </Modal>
        </Container>
    );
};

ModalContainer.defaultProps = {
    width: '600px',
};

ModalContainer.propTypes = {
    width: PropTypes.string,
}
export default ModalContainer;
