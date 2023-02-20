import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchPlanets, getPlanets } from '../../../redux/ducks/planets';
import { IHoveredPlanet } from '../interfaces';
import { Container, Sun } from './KeyVisualStyles';
import PlanetSwitch from './PlanetSwitch';

interface IProps {
    setHoveredPlanet: React.Dispatch<React.SetStateAction<IHoveredPlanet | undefined>>
    setCurrentPlanet: React.Dispatch<React.SetStateAction<{
        id: number;
        src: string;
    } | undefined>>
}

const KeyVisual = ({
    setHoveredPlanet,
    setCurrentPlanet,
}: IProps) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 6,
            rotate: '-40deg',
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { delay: 1, duration: 3 },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            rotate: '-10deg',
            transition: { duration: 1 },
        },
    };

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchPlanets());
    }, [dispatch])
    
    const planets = useAppSelector(getPlanets);

    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Sun />
            {planets.list.map((planet) => (
                <PlanetSwitch
                    name={planet.planet_key}
                    id={planet.id}
                    key={planet.id}
                    setHoveredPlanet={setHoveredPlanet}
                    level={planet.level}
                    setCurrentPlanet={setCurrentPlanet}
                />
            ))}
        </Container>
    );
};

export default KeyVisual;
