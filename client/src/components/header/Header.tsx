import React from 'react';
import styled from 'styled-components';
import { logo, avatar, coinLogo } from '../../assets/img/svg';

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
            <div>
                <div>
                    <Name>{userName}</Name>
                </div>
                <ContainerBalance>
                    <LogoCoin src={coinLogo} alt="" />
                    <UserBalance>{balance} - coin</UserBalance>
                </ContainerBalance>
                <UserAvatar src={avatar} />
            </div>
        </HeaderMain>
    );
};

export default Header;

const HeaderMain = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background: rgba(143, 143, 143, 0.4);
    border-bottom-left-radius: 50px;
    z-index: 10;
`;

const UserAvatar = styled.img`
    margin: 15px 40px 0 10px;
    transition: transform 500ms ease;
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`;
const Name = styled.h3`
    position: absolute;
    color: rgba(170, 130, 255, 1);
    font-size: 40px;
    margin: 0;
    right: 7%;
`;
const UserBalance = styled.span`
    display: block;

    width: max-content;
    font-size: 28px;
    
    color: rgba(170, 130, 255, 1);
    top: 55px;
`;
const LogoCoin = styled.img`
    display: block;

    font-size: 18px;
    right: 230px;
    top: 50px;
    font-weight: 800;
    color: #6522a8;
    background: rgba(170, 130, 255, 1);
    padding: 0px 10px;
    border-radius: 50%;
    border: 4px solid #6522a8;
    margin-right: 10px;
`;

const LogoContainer = styled.div`
    width: 170px;
`;

const Logo = styled.img`
    display: block;
    width: 100px;
    height: 86px;
    margin-left: 30px;
    transition: transform 500ms ease;
    &:hover{
        cursor: pointer;
        transform:scale(1.2);
    }
    
`;

const ContainerBalance = styled.div`
    display: flex;
    position: absolute;
    padding: 5px;
    bottom: 0;
    right: 6%;
`;
