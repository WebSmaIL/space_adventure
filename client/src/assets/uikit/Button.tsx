import React from 'react';
import styled from 'styled-components';

interface IProps {
    text: string;
}

const Button = ({ text }: IProps) => {
    return <StyledButton>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
    min-width: 300px;

    display: inline-block;
    padding: 20px 40px;

    margin-top: 10px;
    font-family: inherit;
    font-size: 40px;
    line-height: 1.1;
    color: #ceb7ff;
    font-weight: 500;
    text-decoration: none;

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
`;
