import { AnimatePresence } from 'framer-motion';
import Wrapper from './Wrapper/Wrapper';
import KeyVisual from './KeyVisual/KeyVisual';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Planet from './planet/Planet';
import { fetchPlanets } from '../../redux/ducks/planets';
import { useAppDispatch } from '../../hooks';

const SolarSystem = () => {
    const [titleText, setTitleText] = useState('Выберите планету');
    const [currentPlanet, setCurrentPlanet] = useState<string | undefined>(
        undefined
    );
    const [isUnlocked, setIsUnlocked] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
            dispatch(fetchPlanets());
        };
    }, [dispatch]);

    return (
        <Wrapper>
            <Container>
                <Planet
                    currentPlanet={currentPlanet}
                    isUnlocked={isUnlocked}
                    titleText={titleText}
                />
                <AnimatePresence>
                    <KeyVisual
                        setIsUnlocked={setIsUnlocked}
                        setCurrentPlanet={setCurrentPlanet}
                        setTitleText={setTitleText}
                    />
                </AnimatePresence>
            </Container>
        </Wrapper>
    );
};

export default SolarSystem;

const Container = styled.div`
    margin: 110px 200px;
    display: flex;
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
