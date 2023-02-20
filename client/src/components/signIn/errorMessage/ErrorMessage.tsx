import React from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../../hooks';
import { zeroingError } from '../../../redux/ducks/userInfo/UsersInfoSlice';

interface IProps {
    errorMessage: string;
}

const ErrorMessage = ({ errorMessage }: IProps) => {
    const dispatch = useAppDispatch()
    setTimeout(()=>dispatch(zeroingError()), 5000);

    return (
        <ErrorContainer>
            <span>{errorMessage}</span>
        </ErrorContainer>
    );
};

export default ErrorMessage;

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 60px;
    padding: 20px;
    border-radius: 10px;
    background: #00000094;
    color: #a00000;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -100px;
    margin-top: -30px;
    opacity: 1;
    animation: errorAnim 5s ease-out alternate forwards;

    @keyframes errorAnim {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
