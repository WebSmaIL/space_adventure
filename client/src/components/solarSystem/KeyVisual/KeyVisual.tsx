import { Container, Sun } from './KeyVisualStyles';
import { IPlanet, planets } from './data';
import PlanetSwitch from './PlanetSwitch';

interface IProps {
    setTitleText: React.Dispatch<React.SetStateAction<string>>
    setCurrentPlanet: React.Dispatch<React.SetStateAction<string | undefined>>
    setIsUnlocked: React.Dispatch<React.SetStateAction<boolean>>
}

const KeyVisual = ({ setTitleText, setCurrentPlanet, setIsUnlocked }: IProps) => {
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

    return (
        <Container
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Sun />
            {planets.map((planet: IPlanet) => (
                <PlanetSwitch
                    name={planet.name}
                    path={planet.path}
                    color={planet.color}
                    id={planet.id}
                    sectionColor={planet.sectionColor}
                    key={planet.id}
                    setTitleText={setTitleText}
                    setCurrentPlanet={setCurrentPlanet}
                    setIsUnlocked={setIsUnlocked}
                    level={planet.level}
                />
            ))}
        </Container>
    );
};

export default KeyVisual;
