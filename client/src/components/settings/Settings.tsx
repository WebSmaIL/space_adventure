import React from 'react';
import styled from 'styled-components';
import { background_settings } from '../../assets/img/backgrounds';

import Password from './password/Password';
import Login from './login/Login';
import Mail from './mail/Mail';
import Header from '../header/Header';


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
`;

const PositionLogin = styled.div`
    display: inline-block;
`;

const SettingsName = styled.h1`
    font-size: 48px;
    color: #CEB7FF;
    text-align: left;
    margin-left: 1.2em;
`;

const Backgrounds = styled.div`
    background-color: #0000008f;
    backdrop-filter: blur(10px);
    border-radius: 1em;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`;