import React from 'react';
import styled from 'styled-components';
import { spaceX } from '../../../assets/img/svgIcons';
import Achievements from './achievements/Achievements';
import StatisticUser from './statisticUser/StatisticUser';
import UserInfo from './userInfo/UserInfo';

const UserInformation = () => {
    return (
        <Container>
            <ContainerUserInfo><UserInfo/></ContainerUserInfo>
            <ContainerAchievementsUser><Achievements/></ContainerAchievementsUser>
            <Ship src={spaceX} />
            <ContainerStatisticUser><StatisticUser/></ContainerStatisticUser>
            <Button>Улучшить</Button>
        </Container>
    );
};

export default UserInformation;

const Container = styled.div`
    position: relative;
    margin: 40px auto 0;

    display: flex;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    width: 1400px;
    height: 930px;
    backdrop-filter: blur(10px);
    border-radius: 60px;
    z-index: 1;
`;

const Ship = styled.img`
    margin-top: 300px;
    width: 351px;
    height: 588px;
`;
const Button = styled.button`
    position: absolute;
    background: transparent;
    color: rgba(206, 183, 255, 1);
    font-size: 40px;
    font-weight: 400;
    
    border: 5px solid rgba(206, 183, 255, 1);
    bottom: 40px;
    width: 300px;
    height: 70px;
    filter: drop-shadow(0px 0px 20px #8A53FF);
    border-radius: 36px;
`;

const ContainerStatisticUser = styled.div`
    position: absolute;
    top: 400px;
    right: 40px;
`
const ContainerAchievementsUser = styled.div`
    position: absolute;
    top: 400px;
    left: 40px;
`
const ContainerUserInfo = styled.div`
    position: absolute;
    left: 50px;
    top: 50px;
`