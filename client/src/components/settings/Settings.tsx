import React from 'react';
import styled from 'styled-components';
import Password from './password/Password';
import Login from './login/Login';
import Mail from './mail/Mail';
import { background_settings } from '../../assets/img/backgrounds';

const Settings = () => {
    return (
        <Wrapper>
            <Backgrounds>
                <SettingsName>Настройки</SettingsName>
                <PositionLogin>
                    <Login />
                </PositionLogin>
                <PositionLogin>
                    <Mail />
                </PositionLogin>
                <Password />
            </Backgrounds>
        </Wrapper>
    );
};

export default Settings;

const Wrapper = styled.div`
    width: 100%;
    background-image: url(${background_settings});
    padding: 100px 0;
`;

const PositionLogin = styled.div`
    display: inline-block;
`;

const SettingsName = styled.h1`
    font-size: 48px;
    color: #ceb7ff;
    text-align: left;
    
    padding: 0.5em 0 0 1.2em;
`;

const Backgrounds = styled.div`
    background-color: #0000008f;
    backdrop-filter: blur(10px);
    border-radius: 1em;
    margin: 140px auto;
    
    width: 60%;
    
`;
