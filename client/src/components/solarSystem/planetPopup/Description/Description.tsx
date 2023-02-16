import React from 'react';
import { IPlanet } from '../../../../redux/ducks/planets/interfaces';
import styled from 'styled-components';

interface IProps {
    planetInfo: IPlanet | undefined;
    source: string;
}

const Description = ({planetInfo, source}: IProps) => {
    return (
        <>
            <DescriptionContainer>
                <PlanetImg src={source} />
                <DescriptionText>{planetInfo?.description}</DescriptionText>
            </DescriptionContainer>
            {planetInfo?.satellites ? <Satellites><i>Спутники:</i> {planetInfo?.satellites}</Satellites> : null}
        </>
    );
};

export default Description;

const DescriptionText = styled.span`
    position: relative;
    z-index: 200;
    width: 400px;
    height: 200px;
    overflow-y: auto;
    font-family: sans-serif;
    font-size: 18px;
`;

const PlanetImg = styled.img`
    width: fit-content;
    height: 300px;
`;

const DescriptionContainer = styled.div`
    position: relative;
    z-index: 200;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Satellites = styled(DescriptionText)`
    display: inline-block;
    width: 100%;
    height: 100%;
    max-height: 120px;
    margin-bottom: 20px;
`;
