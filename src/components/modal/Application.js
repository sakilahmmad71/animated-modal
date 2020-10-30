import React, { useState } from 'react';
import Modal from './Modal';
import { Container, Button } from './StyledComponents';

const Application = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <>
            <Container>
                <Button onClick={openModal}>Open Modal</Button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </Container>
        </>
    );
};

export default Application;
