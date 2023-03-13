import React from 'react';
import styled from 'styled-components';


const BlockType = () => {
    return (
        <Container>
            <ContainerInfo>
                <ContainerInfoLeft>
                    <H2>Опыт</H2>
                    <Span>Неповторимый космический опыт. Обнаружь возможности космических исследований.</Span>
                </ContainerInfoLeft>
                <ContainerInfoLeft>
                    <H2>Пространство</H2>
                    <Span>Изучай космос и получай невероятные впечатления. Будь тем, кто на самом деле изучает глубины космического пространства!</Span>
                </ContainerInfoLeft>
                <ContainerInfoLeft>
                    <H2>Иновация</H2>
                    <Span>Улучшай свои знания о космосе вместе с космической инновационной платформой!</Span>
                </ContainerInfoLeft>
                <ContainerInfoLeft>
                    <H2>Впечатления</H2>
                    <Span>Новые знания, интересные игры и незабываемые впечатления – все это ты найдешь у нас!</Span>
                </ContainerInfoLeft>
            </ContainerInfo>

            <ContainerInfo2>
                <ContainerInfoRight>
                    <H2>Вызовы</H2>
                    <Span>Противиться к космическим вызовам на сайте, который обеспечит вам невероятный космический опыт!</Span>
                </ContainerInfoRight>
                <ContainerInfoRight>
                    <H2>Подход</H2>
                    <Span>Онлайн-платформа, которая гарантирует широчайший спектр знаний и уникальный подход к обучению.</Span>
                </ContainerInfoRight>
                <ContainerInfoRight>
                    <H2>Всё в ваших руках</H2>
                    <Span>Держи в своих руках знания о космосе! Откройте для себя невиданные до сих пор границы в космических исследованиях!</Span>
                </ContainerInfoRight>
                <ContainerInfoRight>
                    <H2>Интерактив</H2>
                    <Span>Приложив усилия и участвуя в наших интерактивных упражнениях, вы получите драгоценный опыт в космических исследованиях.</Span>
                </ContainerInfoRight>
            </ContainerInfo2>
        </Container>
    );
};

export default BlockType;


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 400px auto;
`;

const ContainerInfo = styled.div`
`;

const ContainerInfoLeft = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 32px;
    width: 11em;
    padding: 10px;
    padding-bottom: 50px;
    background-color: #31313198;
    border-radius: 1em;
    margin: 100px 50px;
`;

const ContainerInfoRight = styled.div`
    color: #ffffff;
    text-align: center;
    font-size: 32px;
    width: 11em;
    background-color: #31313198;
    border-radius: 1em;
    padding: 10px;
    padding-bottom: 50px;
    margin: 100px 50px;
`;

const ContainerInfo2 = styled.div`
    margin-top: 250px;
`;

const H2 = styled.h2`
    color: #8E83FF;
    font-size: 38px;
`;

const Span = styled.span`
`;