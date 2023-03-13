import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
    exit_icon,
    profile_icon,
    settings_header_icon,
} from '../../../assets/img/svgIcons';
import { useAppDispatch } from '../../../hooks';
import { logOut } from '../../../redux/ducks/userInfo';

interface IProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({ isVisible, setIsVisible }: IProps) => {
    const dispatch = useAppDispatch()


    return (
        <MenuContainer isVisible={isVisible}>
            <MenuLink
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
                to="/profile"
            >
                <Icon src={profile_icon} />
                Мой профиль
            </MenuLink>
            <MenuLink
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
                to="/profile/settings"
            >
                <Icon src={settings_header_icon} />
                Настройки
            </MenuLink>
            <MenuLink
                onClick={() => {
                    setIsVisible(!isVisible);
                    dispatch(logOut());
                }}
                to="/"
            >
                <Icon src={exit_icon} />
                Выход
            </MenuLink>
        </MenuContainer>
    );
};

export default Menu;

const MenuContainer = styled.div<{ isVisible: boolean }>`
    align-self: flex-end;
    display: ${(props) => (props.isVisible ? 'flex' : 'none')};
    width: 250px;

    overflow-y: hidden;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.322);
    backdrop-filter: blur(10px);
    border-radius: 0 0 15px 15px;

    animation: menuAnim 0.5s ease alternate forwards;

    @keyframes menuAnim {
        from {
            height: 0;
        }
        to {
            height: 215px;
        }
    }
`;

const MenuLink = styled(NavLink)`
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
`;

const Icon = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 5px;
`;
