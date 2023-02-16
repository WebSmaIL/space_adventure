import React from 'react';
import styled from 'styled-components';
import Button from '../../../../assets/uikit/Button';

const ButtonContainer = () => {
    return (
        <Buttons>
            <Button text="Играть" />
            <Button text="Таблица лидеров" />
        </Buttons>
    );
};

export default ButtonContainer;

const Buttons = styled.div`
    display: flex;

    width: 730px;

    position: absolute;
    z-index: 200;
    bottom: 30px;
    left: 50%;
    margin-left: -360px;

    & button:first-child {
        margin-right: 10px;
    }

    & button:hover {
        &::before {
            transform: scale(1.01);
        }
    }
`;
