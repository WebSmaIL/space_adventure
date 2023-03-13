import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../hooks';
import { getPlanetById } from '../../../redux/ducks/planets';
import { motion } from 'framer-motion';
import { mainContainerVars, planetContainerVars } from './popupVars';
import { close } from '../../../assets/img/svgIcons';
import Characteristics from './Characteristics/Characteristics';
import Description from './Description/Description';
import ButtonContainer from './ButtonContainer/ButtonContainer';

interface IProps {
    planetId: number;
    source: string;
    setCurrentPlanet: React.Dispatch<
        React.SetStateAction<
            | {
                  id: number;
                  src: string;
              }
            | undefined
        >
    >;
}

const PlanetPopup = ({ planetId, source, setCurrentPlanet }: IProps) => {
    const planetInfo = useAppSelector(getPlanetById(planetId));

    return (
        <Container
            variants={mainContainerVars}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <PlanetContainer
                variants={planetContainerVars}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <Title>{planetInfo?.name}</Title>
                <Description planetInfo={planetInfo} source={source} />
                <Characteristics planetInfo={planetInfo} />
                <ButtonContainer minigame_id={planetInfo?.minigame_id} usersleader_id={planetInfo?.leader_table_name}/>

                <CloseButton onClick={() => setCurrentPlanet(undefined)} />
            </PlanetContainer>
        </Container>
    );
};

export default PlanetPopup;

const Container = styled(motion.div)`
    display: block;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 150;

    width: 100%;
    min-height: 100%;

    background: #000000d7;
    backdrop-filter: blur(10px);
`;

const PlanetContainer = styled(motion.div)`
    position: relative;
    z-index: 200;

    margin: 120px auto;
    width: 800px;
    min-height: 800px;
    padding: 20px;

    border-radius: 10px;

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

const CloseButton = styled(motion.button)`
    position: absolute;
    top: 20px;
    right: 20px;

    width: 50px;
    height: 50px;

    background: none;
    background-image: url(${close});
    background-size: contain;
    border: none;
    border-radius: 50%;

    cursor: pointer;

    transition: all 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }
`;

const Title = styled.h1`
    font-family: sans-serif;
    text-align: center;
    font-size: 32px;
`;
