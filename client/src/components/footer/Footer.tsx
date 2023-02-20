import React from 'react';
import styled from 'styled-components';
import { IconsDribbble, IconsGithub, IconsTelegram } from '../../assets/img/svgIcons';


const Foooter = () => {
    return (
        <div>
            <div>
                <Footer>
                    <Naming>SpaceAdventure</Naming>
                    <Copyright>© 2023, project</Copyright>

                    <Icons>
                        <a href='#'><img src={IconsTelegram}></img></a>
                        <a href='#'><img src={IconsGithub}></img></a>
                        <a href='#'><img src={IconsDribbble}></img></a>
                    </Icons>

                    <FooterMini>
                        <SecurityPolicy><a href='#'>Пользовательское соглашение</a></SecurityPolicy>
                        <SecurityPolicy><a href='#'>Политика конфеденциальности</a></SecurityPolicy>
                        <SecurityPolicy><a href='#'>Разработчики</a></SecurityPolicy>
                        <SecurityPolicy><a href='#'>spaceadve@mail.com</a></SecurityPolicy>
                    </FooterMini>
                </Footer>
            </div>
        </div>
    );
};

export default Foooter;


const Footer = styled.div`
    background-color: #0D0D0D;
    margin-top: 40em;
`;

const Naming = styled.h1`
    color: #ffffff;
    text-align: center;
    font-family: sans-serif;
    padding: 0.5em;
`;

const Copyright = styled.h2`
    color: #5A5A5A;
    text-align: center;
    font-family: sans-serif;
    font-size: 18px;
`;

const Icons = styled.div`
    text-align: center;

img{
    display: inline-block;
    margin:1em;
    width: 1.5em;
    transition: 0.3s;
}
img:hover{
    scale: 1.3;
}
`;

const FooterMini = styled.div`
    background-color: #141414;
    text-align: center;
    margin-top: 1em;
`;

const SecurityPolicy = styled.div`
    color: #5A5A5A;
    text-align: center;
    padding: 0.5em;
    margin: 0em 5em 0em 0em;
    display: inline-block;
    font-family: sans-serif;

a{
    color: #5A5A5A;
    text-decoration: none;
    transition: 0.3s;
}
a:hover{
    color: #999999;
    text-decoration: none;
}
`;