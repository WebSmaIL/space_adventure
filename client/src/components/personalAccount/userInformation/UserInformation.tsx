import React from 'react';
import styled from 'styled-components';
import { spaceX } from '../../../assets/img/svgIcons';
import Button from '../../../assets/uikit/Button';
import Achievements from './achievements/Achievements';
import StatisticUser from './statisticUser/StatisticUser';
import UserInfo from './userInfo/UserInfo';
import { NavLink } from 'react-router-dom';
import settings from '../../../assets/img/svgIcons/settings_icon.svg';

const UserInformation = () => {
    return (
        <Container>
            <ContainerUserInfo>
                <UserInfo />
            </ContainerUserInfo>
            <ContainerAchievementsUser>
                <Achievements />
            </ContainerAchievementsUser>
            <Ship src={spaceX} />

            <ContainerStatisticUser>
                <StatisticUser />
            </ContainerStatisticUser>
            <ContainerBackground>
                <Button text="Улучшить" />
            </ContainerBackground>
            
            <Settings to={'/profile/settings'} />
        </Container>
    );
};

export default UserInformation;


const Settings = styled(NavLink)`
    display: block;
    width: 50px;
    height: 50px;
    background: url(${settings});
    background-size: cover;

    position: absolute;
    top: 50px;
    right: 50px;

    transition: all .3s ease;

    &:hover {
        transform: rotate(45deg) scale(1.05);
    }
`;

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

const ContainerStatisticUser = styled.div`
    position: absolute;
    top: 400px;
    right: 40px;
`;
const ContainerAchievementsUser = styled.div`
    position: absolute;
    top: 400px;
    left: 40px;
`;
const ContainerUserInfo = styled.div`
    position: absolute;
    left: 50px;
    top: 50px;
`;

const ContainerBackground = styled.div`
    position: absolute;
    bottom: 40px;
`;
