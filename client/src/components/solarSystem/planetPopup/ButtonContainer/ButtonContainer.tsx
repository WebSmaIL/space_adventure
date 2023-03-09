import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ButtonContainer = () => {
    return (
        <Buttons>
            <Button to="/minigame">Играть</Button>
            <Button to="/">Таблица лидеров</Button>
        </Buttons>
    );
};

export default ButtonContainer;

const Buttons = styled.div`
    margin-top: 40px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    & button:first-child {
        margin-right: 10px;
    }

    & button:hover {
        &::before {
            transform: scale(1.01);
        }
    }
`;

const Button = styled(NavLink)`
    min-width: 300px;

    display: inline-block;
    padding: 20px 20px;
    
    margin-top: 10px;
    font-family: inherit;
    font-size: 40px;
    line-height: 1.1;
    color: #ceb7ff;
    font-weight: 500;
    text-decoration: none;
    text-align: center;

    background: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    transition: all 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50px;
        border: 5px solid transparent;
        background: linear-gradient(
                180deg,
                rgba(206, 183, 255, 1),
                rgba(115, 102, 255, 0.5)
            )
            border-box;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;

        transition: all 0.3s ease;
    }

    &:focus,
    &:hover {
        outline: none;
        box-shadow: 5px 5px 10px rgba(115, 102, 255, 0.5);

        &::before {
            transform: scale(1.05);
        }
    }

    &:first-child {
        margin-right: 20px;
    }
`;
