import React from 'react'
import styled from 'styled-components'
import {avatar, coinLogo} from '../../../../assets/img/svgIcons'
import { useAppSelector } from '../../../../hooks'
import { getUserInfo } from '../../../../redux/ducks/userInfo'
const UserInfo = () => {
    const user = useAppSelector(getUserInfo)
  return (
    <Container>
        <UserAvatar src={avatar}/>
        <ContainerInfo>
            <UserName>{user.userInfo.login}</UserName>
            <Level>Уровень - {user.userInfo.level}</Level>
            <ContainerBalance>
                    <LogoCoin src={coinLogo} alt="" />
                    <UserBalance>{user.userInfo.balance} - coin</UserBalance>
            </ContainerBalance>
        </ContainerInfo>
    </Container>
  )
}

export default UserInfo

const Container = styled.div`
    display: flex;
`

const UserAvatar = styled.img`
    width: 200px;
    height: 200px;
`

const ContainerInfo = styled.div`
    position: relative;
    margin-left: 20px;
    margin-top: 10px;
    

`

const UserName = styled.p`
    font-weight: 600;
font-size: 64px;



color: #8E83FF;
`

const Level = styled.p`
    font-weight: 300;
font-size: 24px;
color: #AA82FF;
padding-bottom: 10px;

`
const ContainerBalance = styled.div`
    display: flex;
    
    padding: 5px;
    bottom: 0;
    right: 6%;
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

const UserBalance = styled.span`
    display: block;

    width: max-content;
    font-size: 28px;
    
    color: rgba(170, 130, 255, 1);
    top: 55px;
`;