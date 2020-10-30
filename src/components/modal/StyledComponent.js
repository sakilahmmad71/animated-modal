import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
`;

export const Background = styled.div`
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #ffffff;
    color: #000000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    border-radius: 10px;
    z-index: 10;
`;

export const ModalImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px 0 0 10px;
    background: #000000;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.8;
    color: #141414;

    p {
        margin-bottom: 10px;
    }

    button {
        padding: 10px 24px;
        color: #ffffff;
        background: #141414;
        border: none;
    }
`;

export const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    height: 32px;
    width: 32px;
    padding: 0;
    z-index: 10;
`;
