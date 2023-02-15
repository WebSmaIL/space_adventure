import { AnimatePresence } from 'framer-motion';
import Wrapper from './Wrapper/Wrapper';
import KeyVisual from './KeyVisual/KeyVisual';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Planet from './planet/Planet';
import { fetchPlanets } from '../../redux/ducks/planets';
import { useAppDispatch } from '../../hooks';
import { IHoveredPlanet } from './interfaces';
import PlanetPopup from './planetPopup/PlanetPopup';

const SolarSystem = () => {
    const [hoveredPlanet, setHoveredPlanet] = useState<
        IHoveredPlanet | undefined
    >();
    const [currentPlanet, setCurrentPlanet] = useState<{id: number, src: string} | undefined>(
        undefined
    );

    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(fetchPlanets());
        };
    }, [dispatch]);

    return (
        <Main>
            <AnimatePresence initial={false}>
                {currentPlanet ? (
                    <PlanetPopup
                        planetId={currentPlanet.id}
                        source={currentPlanet.src}
                        setCurrentPlanet={setCurrentPlanet}
                    />
                ) : null}
            </AnimatePresence>
            <Wrapper>
                <Container>
                    <Planet hoveredPlanet={hoveredPlanet} />
                    <AnimatePresence>
                        <KeyVisual
                            setHoveredPlanet={setHoveredPlanet}
                            setCurrentPlanet={setCurrentPlanet}
                        />
                    </AnimatePresence>
                </Container>
            </Wrapper>
        </Main>
    );
};

export default SolarSystem;

const Main = styled.main`
    min-height: 100vh;
`;

const Container = styled.div`
    margin: 110px 200px;
    display: flex;
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
