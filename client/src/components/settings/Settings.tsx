import React from 'react';
import styled from 'styled-components';
import BackgroundImg from '../../assets/img/settings_background/Background.svg'

import Password from './password/Password';
import Login from './login/Login';
import Mail from './mail/Mail';


const Settings = () => {
    return (
        <div>
            <div>
                <BackgroundImage>
                <Backgrounds>
                    <SettingsName>Настройки</SettingsName>
                    
                    <PositionLogin>
                    <Login/>
                    </PositionLogin>
                    
                    <PositionLogin>
                    <Mail/>
                    </PositionLogin>

                    <Password/>
                </Backgrounds>

                </BackgroundImage>
            </div>
        </div>
    );
};

export default Settings;


const BackgroundImage = styled.div`
    background: url(${BackgroundImg}) no-repeat;
    background-size: cover;
    
`;

const PositionLogin = styled.div`
    display: inline-block;
`;

const SettingsName = styled.h1`
    font-size: 48px;
    color: #CEB7FF;
    text-align: left;
    margin-top: 1em;
    margin-left: 1.2em;
`;

const Backgrounds = styled.div`
    background-color: #0000008f;
    backdrop-filter: blur(10px);
    border-radius: 1em;
    margin-top: 10em;
    margin-bottom: 10em;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
`;