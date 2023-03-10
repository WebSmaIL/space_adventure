import React, { useState } from 'react';
import styled from 'styled-components';
import SignInForm from './signInForm/SingInForm';
import { logo } from '../../assets/img/svgIcons';
import SignUpForm from './signUpForm/SignUpForm';
import { background_authorize } from '../../assets/img/backgrounds';

const SignIn = () => {
    const [isRegister, setIsRegister] = useState<boolean>(true);
    return (
        <Wrapper>
            <Container>
                <Content>
                    <Title>{isRegister ? 'Вход' : 'Регистрация'}</Title>

                    <Logo>
                        <img src={logo} alt="" />
                    </Logo>

                    {isRegister ? (
                        <SignInForm
                            isRegister={isRegister}
                            setIsRegister={setIsRegister}
                        />
                    ) : (
                        <SignUpForm
                            isRegister={isRegister}
                            setIsRegister={setIsRegister}
                        />
                    )}
                </Content>
            </Container>
        </Wrapper>
    );
};

export default SignIn;

const Container = styled.div`
    width: fit-content;
    border-radius: 40px;
    margin: 0 auto 0 auto;
    padding: 20px 100px;
    background: #000000bd;
    backdrop-filter: blur(10px);
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
    margin-bottom: 100px;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background_authorize});
    padding: 100px 0;
`;
