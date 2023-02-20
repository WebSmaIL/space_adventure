import React from 'react';
import styled from 'styled-components';


const BlockType = () => {
    return (
        <Container>
            <ContainerInfo>
                <ContainerInfoLeft>
                    <H2>Лучшие игры современности</H2>
                    <Span>Текст описание Текст описание Текст описание Текст описание Текст описание Текст описание</Span>
                </ContainerInfoLeft>
                <ContainerInfoLeft>
                    <H2>Лучшие игры современности</H2>
                    <Span>Текст описание Текст описание Текст описание Текст описание Текст описание Текст описание</Span>
                </ContainerInfoLeft>
            </ContainerInfo>

            <ContainerInfo2>
                <ContainerInfoRight>
                    <H2>Лучшие игры современности</H2>
                    <Span>Текст описание Текст описание Текст описание Текст описание Текст описание Текст описание</Span>
                </ContainerInfoRight>
                <ContainerInfoRight>
                    <H2>Лучшие игры современности</H2>
                    <Span>Текст описание Текст описание Текст описание Текст описание Текст описание Текст описание</Span>
                </ContainerInfoRight>
            </ContainerInfo2>
        </Container>
    );
};

export default BlockType;


const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 1000px;
    margin: 1500px auto;
`;

const ContainerInfo = styled.div`
    margin-bottom: 50px;
    
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
    
`