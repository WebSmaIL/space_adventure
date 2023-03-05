import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {exit_icon, profile_icon, settings_header_icon} from '../../../assets/img/svgIcons'

interface IProps {
    isVisible: boolean;
}

const Menu = ({isVisible}: IProps) => {
  return (
    <MenuContainer isVisible={isVisible}>
        <MenuSpan to="/profile"><Icon src={profile_icon} />Мой профиль</MenuSpan>
        <MenuSpan to="/profile/settings"><Icon src={settings_header_icon} />Настройки</MenuSpan>
        <MenuSpan to="/"><Icon src={exit_icon} />Выход</MenuSpan>
    </MenuContainer>
  )
}

export default Menu

const MenuContainer = styled.div<{isVisible: boolean}>`
    align-self: flex-end;
    display: ${props => props.isVisible ? 'flex' : 'none'};
    width: 250px;

    overflow-y: hidden;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.322);
    border-radius: 0 0 15px 15px;

    animation: menuAnim .5s ease alternate forwards;

    @keyframes menuAnim {
        from {
            height: 0;
        }
        to {
            height: 215px;
        }
    }
`

const MenuSpan = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 18px;
    text-decoration: none;
    color: rgba(170, 130, 255, 1);

    border-bottom: 1px solid rgba(255, 255, 255, 0.422);

    &:nth-child(3) {
        border-bottom: none;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }
`

const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 5px;
`
