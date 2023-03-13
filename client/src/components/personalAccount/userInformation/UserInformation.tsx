import React, { useState } from 'react';
import styled from 'styled-components';
import { spaceX } from '../../../assets/img/svgIcons';
import Button from '../../../assets/uikit/Button';
import Achievements from './achievements/Achievements';
import StatisticUser from './statisticUser/StatisticUser';
import UserInfo from './userInfo/UserInfo';
import { NavLink } from 'react-router-dom';
import settings from '../../../assets/img/svgIcons/settings_icon.svg';
import UploadPopup from './uploadAvatarPopup/UploadPopup';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { getUserInfo } from '../../../redux/ducks/userInfo';
import { updateLevel } from '../../../redux/ducks/userInfo/asyncThunk';


const UserInformation = () => {
    const [uploadedFile, setUploadedFile] = useState<File | null>(null)

    const userInfo = useAppSelector(getUserInfo);
    const dispatch = useAppDispatch();

 
        const handleSaveLevel = () => {
            dispatch(updateLevel({
                id: userInfo.userInfo.id, level: userInfo.userInfo.level , balance: userInfo.userInfo.balance
            }));
        };
         

    return (
        <Container>
            <ContainerUserInfo>
                <UserInfo setUploadedFile={setUploadedFile} />
            </ContainerUserInfo>
            <ContainerAchievementsUser>
                <Achievements />
            </ContainerAchievementsUser>
            <Ship src={spaceX} />

            <ContainerStatisticUser>
                <StatisticUser />
            </ContainerStatisticUser>
            <ContainerBackground>
                <StyledButton onClick={handleSaveLevel}>Улучшить</StyledButton>
            </ContainerBackground>
            
            <Settings to={'/profile/settings'} />

            {uploadedFile && <UploadPopup setUploadedFile={setUploadedFile} uploadedFile={uploadedFile} />}
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

    overflow-y: hidden;

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


const StyledButton = styled.button`
    min-width: 300px;

    display: inline-block;
    padding: 20px 40px;

    margin-top: 10px;
    font-family: inherit;
    font-size: 40px;
    line-height: 1.1;
    color: #ceb7ff;
    font-weight: 500;
    text-decoration: none;

    background: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    transition: all 0.3s ease;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50px;
        border: 5px solid transparent;
        background: linear-gradient(
                180deg,
                rgba(206, 183, 255, 1),
                rgba(115, 102, 255, 0.5)
            )
            border-box;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;

        transition: all 0.3s ease;
    }

    &:focus,
    &:hover {
        outline: none;
        box-shadow: 5px 5px 10px rgba(115, 102, 255, 0.5);

        &::before {
            transform: scale(1.05);
        }
    }
`;