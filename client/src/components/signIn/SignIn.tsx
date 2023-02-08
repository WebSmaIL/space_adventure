import React from 'react';
import styled from 'styled-components';
import SignInForm from './signInForm/SingInForm';
import logo from '../../assets/img/png/Logo.png';
import SignUpForm from './signUpForm/SignUpForm';

interface IProps {
  titleText: string
  isRegister: boolean
}

const SignIn = ({titleText, isRegister}: IProps) => {

    return (
        <Container>
            <Content>
                <Title>{titleText}</Title>

                <Logo>
                    <img src={logo} alt="" />
                </Logo>

                {isRegister ? <SignUpForm /> : <SignInForm />}                
            </Content>
        </Container>
    );
};

export default SignIn;

const Container = styled.div`
    width: fit-content;
    border-radius: 40px;
    margin: 100px auto 0 auto;
    padding: 20px 100px;
    background-color: #00000092;
    z-index: 3;

    font-family: sans-serif;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin: 20px 0;
    text-align: center;
    font-size: 32px;
    color: #ceb7ff;
`;

const Logo = styled.div`
    width: 250px;
    height: 125px;
    margin-bottom: 80px;
`;