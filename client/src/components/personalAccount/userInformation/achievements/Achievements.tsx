import React from 'react'
import styled from 'styled-components';
import {circle} from '../../../../assets/img/svgIcons'

const Achievements = () => {
  return (
    <div>
        <Span>Достижения</Span>
            <Hr />
            <ContainerStatic>
                <CircleSvg src={circle}/>
                <p>Вход</p>
            </ContainerStatic>
            <ContainerStatic>
                <CircleSvg src={circle}/>
                <p>Регистрация</p>
            </ContainerStatic>
    </div>
  )
}

export default Achievements

const Hr = styled.hr`
    width: 100%;
    height: 7px;
    background-color: #ceb7ff;
    border: none;
    border-radius: 10em;
    box-shadow: 0px 0px 15px #ceb7ffde;
`;

const Span = styled.span`
    font-size: 40px;
    color: rgba(142, 131, 255, 1);
    font-weight: 700;
`;
const ContainerStatic = styled.div`
margin-top: 20px;
display: flex;
    font-size: 34px;
    color: rgba(206, 183, 255, 1);
    font-weight: 400;
`

const CircleSvg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
`