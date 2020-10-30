import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import {
    Background,
    CloseModalButton,
    ModalContent,
    ModalImg,
    ModalWrapper,
} from './StyledComponents';

const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 300,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>
                            <ModalImg
                                src={require('./pexels.jpg')}
                                alt='Modal Image'
                            />
                            <ModalContent>
                                <h1>Are You Ready?</h1>
                                <p>Get exclusive access to our next launch</p>
                                <button>Join Now</button>
                            </ModalContent>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowModal((prev) => !prev)}
                            />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null}
        </>
    );
};

export default Modal;
