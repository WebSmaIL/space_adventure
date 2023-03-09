import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { logo, coinLogo } from '../../assets/img/svgIcons';
import avatar_icon from '../../assets/img/pngIcons/profile.png';
import Menu from './menu/Menu';
import { useAppSelector } from '../../hooks';
import { getUserInfo } from '../../redux/ducks/userInfo';

interface IProps {
    userName: string;
    balance: number;
}

const Header = ({ userName, balance }: IProps) => {
    const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
    const user = useAppSelector(getUserInfo);

    const [currentAvatar, setCurrentAvatar] = useState('');

    useEffect(() => {
        if (user.userInfo.avatar_src) {
            setCurrentAvatar(
                `http://localhost:8000/${user.userInfo.avatar_src}?r`
            )
        } else {
            setCurrentAvatar(avatar_icon);
        }
    }, [user]);

    return (
        <Container>
            <HeaderMain>
                <LogoContainer>
                    <NavLink to="/">
                        <Logo src={logo} />
                    </NavLink>
                </LogoContainer>
                <FlexContainer>
                    <UserInfoContainer>
                        <Name>{userName}</Name>
                        <ContainerBalance>
                            <LogoCoin src={coinLogo} alt="" />
                            <UserBalance>{balance} - coin</UserBalance>
                        </ContainerBalance>
                    </UserInfoContainer>
                    <div onClick={() => setIsVisibleMenu(!isVisibleMenu)}>
                        <UserAvatar src={currentAvatar} />
                    </div>
                </FlexContainer>
            </HeaderMain>
            <Menu setIsVisible={setIsVisibleMenu} isVisible={isVisibleMenu} />
        </Container>
    );
};

export default Header;

const Container = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 85px;
    background: rgba(255, 255, 255, 0.322);
`;

const UserAvatar = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;

    margin: 0 30px 0 10px;
    transition: transform 500ms ease;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;
const Name = styled.h3`
    color: rgba(170, 130, 255, 1);
    font-size: 24px;
    margin: 0;
`;
const UserBalance = styled.span`
    display: block;

    width: max-content;
    font-size: 20px;

    color: rgba(170, 130, 255, 1);
`;
const LogoCoin = styled.img`
    display: block;
    color: #6522a8;
    background: rgba(170, 130, 255, 1);
    border-radius: 50%;
    border: 4px solid #6522a8;
    margin-right: 10px;
    width: 30px;
    height: 30px;
`;

const LogoContainer = styled.div`
    width: 170px;
`;

const Logo = styled.img`
    display: block;
    width: 100px;
    height: 86px;
    margin-left: 30px;
    margin-top: 0;
    transition: transform 500ms ease;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;

const ContainerBalance = styled.div`
    display: flex;
    align-items: center;
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
`;

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 15px;
`;
