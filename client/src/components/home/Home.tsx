import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { background_home } from '../../assets/img/backgrounds';
import Foooter from '../footer/Footer';
import BlockType from './block_type/BlockType';


const Home = () => {
    return (
        <Wrapper>
            <Signin to='/login'>
                Вход / Регистрация
            </Signin>
            <Name>Space<br></br>Adventure</Name>
            <About>Обучающая игровая платформа</About>
            <BlockType />
        </Wrapper>
    );
};

export default Home;

const Wrapper = styled.div`
    background-image: url(${background_home});
    width: 100%;
    height: 100%;
`;

const Signin = styled(NavLink)`
    display: block;
    justify-content: right;
    color: #CEB7FF;
    text-align: right;
    text-decoration: none;
    font-size: 24px;
    padding: 1em 1em 0em 1em;
    font-family: sans-serif;
`;

const Name = styled.h1`
    text-align: center;
    font-size: 128px;
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