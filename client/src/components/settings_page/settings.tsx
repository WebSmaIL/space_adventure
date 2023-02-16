import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/uikit/Background';

interface IProps {
    startNaming: string;
}

const settings = () => {
    return (
        <div>
            <div>
                <Backgrounds>
                    <Positoin_login>
                        <Header_settings_name>Настройки</Header_settings_name>
                        <Caption>Смена юзернаме</Caption>
                        <Line></Line>
                        <Input placeholder='Новое юзернаме'></Input>
                        <Button>Сменить юзернаме</Button>
                    </Positoin_login>

                    <Positoin_login>
                        <Positoin_mail>
                            <Caption>Смена почты</Caption>
                            <Line></Line>
                            <Input placeholder='Новая почта'></Input>
                            <Button>Сменить почту</Button>
                        </Positoin_mail>
                    </Positoin_login>

                    <Caption>Смена пароля</Caption>
                    <Line></Line>
                    <Input placeholder='Старый пароль'></Input>
                    <Input placeholder='Новый пароль'></Input>
                    <Input placeholder='Подтвердите новый пароль'></Input>
                    <Button>Сменить пароль</Button>
                </Backgrounds>
            </div>
        </div>
    );
};

export default settings;


const Positoin_login = styled.div`
    display: inline-block;
`;

const Positoin_mail = styled.div`
    margin-left: 5em;
`;

const Header_settings_name = styled.h1`
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

const Caption = styled.h1`
    font-size: 42px;
    color: #8E83FF;
    margin-top: 2em;
    position: relative;
    margin-left: 1.3em;
    font-family: sans-serif;
`;

const Line = styled.hr`
    width: 22em;
    height: 5px;
    background-color: #CEB7FF;
    border: none;
    border-radius: 10em;
    box-shadow: 0px 0px 15px #ceb7ffde;
    position: absolute;
    margin-top: 1em;
    margin-bottom: 2em;
    margin-left: 3.5em;
`;

const Input = styled.input`
    border: none;
    border-radius: 0.5em;
    height: 2em;
    width: 15em;
    font-size: 28px;
    border: solid #CEB7FF;
    background-color: #ffffff14;
    outline: 0;
    color: #CEB7FF;
    display: block;
    box-shadow: 0px 0px 20px #8953ffb3;
    margin-top: 2em;
    margin-left: 2em;
    font-family: sans-serif;
    padding: 1em 0em 1em 0.5em;

    ::placeholder{
    color: #786C8F;
}
`;

const Button = styled.button`
    border: none;
    border-radius: 1em;
    border: solid #CEB7FF;
    background-color: #ffffff14;
    color: #CEB7FF;
    font-size: 28px;
    box-shadow: 0px 0px 20px #8953ffb3;
    margin-top: 1em;
    margin-bottom: 2em;
    margin-left: 2em;
    padding: 0.3em 0.5em 0.3em 0.5em;

    &:hover {
        background: linear-gradient(#CEB7FF 0%, #443F78 100%);
    }
`;