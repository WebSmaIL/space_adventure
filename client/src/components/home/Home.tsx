import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return (
        <div>
            <div>
                <Signin>Вход / Регистрация</Signin>
            </div>
            <div>
                <Name>Space<br></br>Adventure</Name>
            </div>
            <div>
                <About>Обучающая игровая платформа</About>
            </div>
            <div>
                <BlockTypeStart>Лучшие игры современности<br></br><Span>Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста</Span></BlockTypeStart>
            </div>
            <div>
                <BlockTypeAwayRight>Лучшие игры современности<br></br><Span>Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста</Span></BlockTypeAwayRight>
            </div>
            <div>
                <BlockTypeAwayLeft>Лучшие игры современности<br></br><Span>Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста</Span></BlockTypeAwayLeft>
            </div>
            <div>
                <BlockTypeAwayRight>Лучшие игры современности<br></br><Span>Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста</Span></BlockTypeAwayRight>
            </div>
            <div>
                <BlockTypeAwayLeft>Лучшие игры современности<br></br><Span>Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста</Span></BlockTypeAwayLeft>
            </div>
            <div>
                <BlockTypeAwayRight>Лучшие игры современности<br></br><Span>Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста Описание текста</Span></BlockTypeAwayRight>
            </div>
            <div>
                <Footer>© Space Adventure<br></br><br></br>+7 (913) 684-55-43<br></br>e.viktorovvv@yandex.com<br></br><br></br>Пользовательское соглашение<br></br><br></br>link.com<br></br>2023</Footer>
            </div>
        </div>
    );
};

export default Home;


const Signin = styled.h1`
    color: #CEB7FF;
    text-align: right;
    font-size: 24px;
    margin-right: 2em;
    margin-top: 1em;
    font-family: sans-serif;
`;

const Name = styled.h1`
    text-align: center;
    font-size: 144px;
    color: transparent;
    -webkit-text-stroke: 3px #8E83FF;
    text-shadow: 5px 5px 15px #8E83FF;
`;

const About = styled.h1`
    color: #8E83FF;
    text-align: center;
    font-size: 24px;
    font-family: sans-serif;
`;

const BlockTypeStart = styled.div`
    color: #8E83FF;
    text-align: center;
    font-size: 48px;
    font-family: sans-serif;
    background-color: #31313198;
    border-radius: 1em;
    width: 25%;
    margin-left: 8em;
    display: inline-block;
    margin-top: 40em;
    font-weight: 700;
`;

const BlockTypeAwayRight = styled.div`
    color: #8E83FF;
    text-align: center;
    font-size: 48px;
    font-family: sans-serif;
    background-color: #31313198;
    border-radius: 1em;
    width: 25%;
    display: inline-block;
    margin-right: 8em;
    float: right;
    margin-top: -5em;
    font-weight: 700;
`;

const BlockTypeAwayLeft = styled.div`
    color: #8E83FF;
    text-align: center;
    font-size: 48px;
    font-family: sans-serif;
    background-color: #31313198;
    border-radius: 1em;
    width: 25%;
    margin-left: 8em;
    display: inline-block;
    margin-top: 4em;
    font-weight: 700;
`;

const Span = styled.span`
    color: #ffffff;
    font-size: 38px;
    font-weight: 100;
`;


const Footer = styled.h1`
    color: #ffffff;
    text-align: center;
    font-size: 22px;
    font-family: sans-serif;
    margin-top: 35em;
    margin-bottom: 5em;
`;