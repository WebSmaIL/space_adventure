import React from 'react';
import styled from 'styled-components';
import { background_personal_account } from '../../../assets/img/backgrounds';
import { spaceX } from '../../../assets/img/svgIcons';
import Button from '../../../assets/uikit/Button';
import Achievements from './achievements/Achievements';
import StatisticUser from './statisticUser/StatisticUser';
import UserInfo from './userInfo/UserInfo';

const UserInformation = () => {
    return (
        <Wrapper>
            <Container>
                <ContainerUserInfo><UserInfo/></ContainerUserInfo>
                <ContainerAchievementsUser><Achievements/></ContainerAchievementsUser>
                <Ship src={spaceX} />
                
                <ContainerStatisticUser><StatisticUser/></ContainerStatisticUser>
                <ContainerBackground><Button text='Улучшить'/></ContainerBackground>
            </Container>
            
        </Wrapper>
        
    );
};

export default UserInformation;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${background_personal_account});
    padding: 100px 0;
`

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

const ContainerBackground = styled.div`
    position: absolute;
    bottom: 40px;
`