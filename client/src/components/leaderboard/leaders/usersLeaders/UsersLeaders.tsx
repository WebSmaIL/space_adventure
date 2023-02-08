import React from 'react';
import styled from 'styled-components';
import { cupOne,cupTwo,cupThree } from '../../../../assets/img/svg';
const UsersLeaders = () => {
    return (
        <Div>
            <Ol>
                <div>
                    <ButtonUser outline={'8px solid rgba(218, 191, 155, 1)'}>
                        <CubOne src={cupOne} alt="" />
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(173, 136, 86, 1)'}>0</RatingUser>
                    </ButtonUser>
                    <ButtonUser outline={'8px solid rgba(127, 132, 168, 1)'}>
                        <CubOne src={cupTwo} alt="" />
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(201, 224, 245, 1)'}>0</RatingUser>
                    </ButtonUser>
                    <ButtonUser outline={'8px solid rgba(169, 121, 83, 1)'}>
                        <CubOne src={cupThree} alt="" />
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(100, 68, 49, 1)'}>0</RatingUser>
                    </ButtonUser>
                    <ButtonUser outline={'8px solid rgba(206, 183, 255, 1)'}>
                        <PlaceNext>4</PlaceNext>
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(206, 183, 255, 1)'}>0</RatingUser>
                    </ButtonUser>
                    <ButtonUser outline={'8px solid rgba(206, 183, 255, 1)'}>
                        <PlaceNext>5</PlaceNext>
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(206, 183, 255, 1)'}>0</RatingUser>
                    </ButtonUser>
                    <ButtonUser outline={'8px solid rgba(206, 183, 255, 1)'}>
                        <PlaceNext>6</PlaceNext>
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(206, 183, 255, 1)'}>0</RatingUser>
                    </ButtonUser>
                    <ButtonUser outline={'8px solid rgba(206, 183, 255, 1)'}>
                        <PlaceNext>7</PlaceNext>
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(206, 183, 255, 1)'}>0</RatingUser>
                    </ButtonUser>
                    <ButtonUser outline={'8px solid rgba(206, 183, 255, 1)'}>
                        <PlaceNext>8</PlaceNext>
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(206, 183, 255, 1)'}>0</RatingUser>
                    </ButtonUser>
                    <ButtonUser outline={'8px solid rgba(206, 183, 255, 1)'}>
                        <PlaceNext>9</PlaceNext>
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(206, 183, 255, 1)'}>0</RatingUser>
                    </ButtonUser>
                    <ButtonUser outline={'8px solid rgba(206, 183, 255, 1)'}>
                        <PlaceNext>10</PlaceNext>
                        <UserName>Username</UserName>
                        <RatingUser outline={'8px solid rgba(206, 183, 255, 1)'}>0</RatingUser>
                    </ButtonUser>
                    
                </div>
                
            </Ol>
            <Button>Ещё...</Button>
        </Div>
    );
};

export default UsersLeaders;

const Div = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    
    width: 1000px;
    
    margin: 150px auto;

    border-radius: 60px;
    font-size: 40px;
    line-height: 60px;
`;

const Ol = styled.div`
    
    text-align: center;
    
`;

const Button = styled.button`
    position: absolute;
    width: 300px;
    height: 70px;
    background: transparent;
    border-radius: 40px;
    border: 1px solid rgba(206, 183, 255, 1);
    color: rgba(206, 183, 255, 1);
    font-size: 40px;
    box-shadow: 0 2px 5px #8a53ff, 0 -2px 5px #8a53ff;
    bottom: -100px;
    transition: all 500ms ease;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        background: #8953ff3d;
        color: #fff;
        border: none;
    }
`;

const ButtonUser = styled.button<{outline: string}>`
    position: relative;
    width: 550px;
    height: 100px;
    border-radius: 100px;
    background: #262626;
    outline: ${props=>props.outline};
    outline-offset: -8px;
    
    margin-bottom: 50px;
`;
const CubOne = styled.img`
    position: absolute;
    width: 70px;
    height: 70px;
    z-index: 50;
    top: 13px;
    left: 20px;
`;

const RatingUser = styled.div<{outline: string}>`
    position: absolute;
    background: #343434;
    width: 150px;
    height: 84px;
    border-radius: 100px;
    outline: ${props=>props.outline};
    right: 6px;
    top: 6px;
    font-size: 40px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font-weight: 700;
    line-height: 200%;

  `
const UserName = styled.span `
position: absolute;
    font-size: 40px;
    color: #fff;
    left: 120px;
    top: 25px;
`
const PlaceNext = styled.span`
    position: absolute;
    font-size: 40px;
    color: #757575;
    align-items: center;
    text-align: center;
    line-height: 180%;
    width: 70px;
    height: 70px;
    background: #343434;
    border-radius: 50%;
    z-index: 50;
    top: 12px;
    left: 20px;
`;   