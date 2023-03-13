import React from 'react';
import styled from 'styled-components';
import { background_settings } from '../../assets/img/backgrounds';

import Password from './password/Password';
import Login from './login/Login';
import Mail from './mail/Mail';

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
    background-image: url(${background_settings});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    padding: 200px 0;
`;

const PositionLogin = styled.div`
    display: inline-block;
`;

const SettingsName = styled.h1`
    font-size: 48px;
    color: #ceb7ff;
    text-align: left;
    padding-left: 1.2em;
    padding-top: 0.5em;
`;

const Backgrounds = styled.div`
    background-color: #0000008f;
    backdrop-filter: blur(10px);
    border-radius: 1em;
    margin: 0 auto;
    width: 60%;
`;
