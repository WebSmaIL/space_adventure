import React from 'react';
import styled from 'styled-components';
import {
    Sun,
    earth,
    saturn,
    mars,
    moon,
    uranus,
    jupiter,
    neptune,
    mercury,
    venus,
    pluto,
} from '../../../assets/img/svg';
import UsersLeaders from './usersLeaders/UsersLeaders';

const Leaders = () => {
    return (
        <Div>
            <Span>
                Таблица лидеров
                <Hr />
            </Span>

            <PlanetsDiv>
                <Planet src={Sun} alt="" />
                <Planet src={earth} alt="" />
                <Planet src={saturn} alt="" />
                <Planet src={mars} alt="" />
                <Planet src={moon} alt="" />
                <Planet src={uranus} alt="" />
                <Planet src={jupiter} alt="" />
                <Planet src={neptune} alt="" />
                <Planet src={mercury} alt="" />
                <Planet src={venus} alt="" />
                <Planet src={pluto} alt="" />
            </PlanetsDiv>
            <UsersLeaders />
        </Div>
    );
};

export default Leaders;

const Div = styled.div`
    position: relative;
    width: 1250px;
    height: 1800px;
    left: 18%;
    margin-top: 100px;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    padding-top: 280px;
    border-radius: 60px;
    backdrop-filter: blur(10px);
    border: 5px solid rgba(206, 183, 255, 1);
`;

const Span = styled.span`
    position: absolute;
    top: 30px;
    font-size: 40px;
    font-weight: 700;
    margin-left: 40px;
    padding-bottom: 10px;
    color: rgba(142, 131, 255, 1);
`;
const PlanetsDiv = styled.div`
    width: 1100px;
    font-size: 50px;
    margin: -100px auto;
`;
const Hr = styled.hr`
    width: 100%;
    height: 7px;
    background-color: #ceb7ff;
    border: none;
    border-radius: 10em;
    box-shadow: 0px 0px 15px #ceb7ffde;
`;

const Planet = styled.img`
    width: 100px;
    transition: all 500ms ease;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;
