import React from 'react';
import { FieldError } from 'react-hook-form';
import styled from 'styled-components';

interface IProps {
    name: string;
    placeholder: string;
    type: string
    errorMessage: string
    error?: FieldError | undefined
    registerObj: {}
}

const Input = ({ name, placeholder, registerObj, type, error, errorMessage }: IProps) => {
    return (
        <>
           
            <FormGroup isError={!!error}>
                {!!error && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <StyledInput {...registerObj} name={name} placeholder={placeholder} type={type} />
                <Line isError={!!error} />
            </FormGroup>

        </>
    );
};

export default Input;

const FormGroup = styled.div<{isError: boolean}>`
    width: 100%;
    position: relative;
    
    margin-bottom: 85px;

    &:hover {
      & span {
        box-shadow: 0px 0px 30px ${props => props.isError ? 'red' : '#ceb7ff'}, 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
`;

const StyledInput = styled.input`
    margin-bottom: 10px;
    display: inline-block;
    color: #fff;
    width: 100%;
    height: 43px;
    font-size: 24px;
    border: none;
    background: none;
    &:focus {
        outline: none;
    }
`;

const Line = styled.span<{isError: boolean}>`
    position: absolute;
    display: block;
    width: 100%;
    bottom: -5px;
    left: 0;
    border: 3px solid ${props => props.isError ? 'red' : '#ceb7ff'};
    border-radius: 5px;
    box-shadow: 0px 0px 20px ${props => props.isError ? 'red' : '#ceb7ff'}, 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ErrorMessage = styled.p`
    position: absolute;
    
    bottom: -80px;
    width: 300px; 
    height: 70px;
    padding: 8px;
    border-radius: 10px;
    background: #00000055;
    color: #fd3333;
    font-size: 13px;
`