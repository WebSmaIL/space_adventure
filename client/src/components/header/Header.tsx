import React from 'react';
import styled from 'styled-components';
import { logo, avatar, coinLogo } from '../../assets/img/svgIcons';

interface IProps {
    userName: string;
    balance: number;
}

const Header = ({ userName, balance }: IProps) => {
    return (
        <HeaderMain>
            <LogoContainer>
                <Logo src={logo} />
            </LogoContainer>
            <FlexContainer>
                <UserInfoContainer>
                    <Name>{userName}</Name>
                    <ContainerBalance>
                        <LogoCoin src={coinLogo} alt="" />
                        <UserBalance>{balance} - coin</UserBalance>
                    </ContainerBalance>
                </UserInfoContainer>
                <UserAvatar src={avatar} />
            </FlexContainer>
        </HeaderMain>
    );
};

export default Header;

const HeaderMain = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 85px;
    background: rgba(255, 255, 255, 0.322);
    z-index: 1000;
    &:before {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 2px;
        z-index: -1;
    }
`;

const UserAvatar = styled.img`
    margin: 0 40px 0 10px;
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
