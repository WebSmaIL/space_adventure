import React from 'react';
import styled from 'styled-components';
import { unknow_planet } from '../../../assets/img/svgIcons';

interface IProps {
    titleText: string;
    currentPlanet: string | undefined;
    isUnlocked: boolean;
}

const Planet = ({ currentPlanet, isUnlocked, titleText }: IProps) => {
    return (
        <PlanetContainer>
            <Title>{titleText}</Title>
            {currentPlanet ? (
                <PlanetImg src={currentPlanet} alt="" />
            ) : (
                <UnknowPlanet src={unknow_planet} alt="" />
            )}
            <Title>
                Статус:{' '}
                {currentPlanet
                    ? isUnlocked
                        ? 'Разблокировано'
                        : 'Заблокировано'
                    : 'Неизвестен'}
            </Title>
        </PlanetContainer>
    );
};

export default Planet;

const Title = styled.h1`
    color: rgba(170, 130, 255, 1);
    font-size: 40px;
`;

const PlanetContainer = styled.div`
    position: relative;
    width: 600px;
    height: 800px;
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    text-align: center;

    opacity: 0;
    transform: scale(0.8);
    animation: titleAnimation 1s ease forwards alternate 4s;

    @keyframes titleAnimation {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 50px;
        border: 5px solid transparent;
        background: linear-gradient(180deg, #ae9bd8, rgba(115, 102, 255, 0.5))
            border-box;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;

        transition: all 0.3s ease;
    }
`;

const PlanetImg = styled.img`
    width: 100%;
    height: 500px;

    transform: scale(0.9);
    opacity: 0;

    animation: planetAnimation 0.5s ease forwards alternate;

    @keyframes planetAnimation {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;

const UnknowPlanet = styled(PlanetImg)`
    filter: grayscale(100%);
    height: 500px;
`;
