import {
    Mercury,
    Venus,
    Earth,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
} from './KeyVisualStyles';
import {
    mars,
    mercury,
    earth,
    jupiter,
    neptune,
    venus,
    uranus,
    saturn,
} from '../../../assets/img/svgIcons';
import { IHoveredPlanet } from '../interfaces';

interface IProps {
    id: number;
    name: string;
    level: number;
    setHoveredPlanet: React.Dispatch<
        React.SetStateAction<IHoveredPlanet | undefined>
    >;
    setCurrentPlanet: React.Dispatch<React.SetStateAction<{
        id: number;
        src: string;
    } | undefined>>
}

const PlanetSwitch = ({
    setHoveredPlanet,
    setCurrentPlanet,
    name,
    level,
    id,
}: IProps) => {
    const userLevel = 9;
    const planetSwitch = () => {
        switch (name) {
            case 'Mercury':
                return (
                    <Mercury
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setHoveredPlanet({
                                name: 'Меркурий',
                                src: mercury,
                                isUnlocked: level <= userLevel,
                            });
                        }}
                        onMouseLeave={() => {
                            setHoveredPlanet(undefined);
                        }}
                        onClick={() => setCurrentPlanet({id, src: mercury})}
                    />
                );
            case 'Venus':
                return (
                    <Venus
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setHoveredPlanet({
                                name: 'Венера',
                                src: venus,
                                isUnlocked: level <= userLevel,
                            });
                        }}
                        onMouseLeave={() => {
                            setHoveredPlanet(undefined);
                        }}
                        onClick={() => setCurrentPlanet({id, src: venus})}
                    />
                );
            case 'Earth':
                return (
                    <Earth
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setHoveredPlanet({
                                name: 'Земля',
                                src: earth,
                                isUnlocked: level <= userLevel,
                            });
                        }}
                        onMouseLeave={() => {
                            setHoveredPlanet(undefined);
                        }}
                        onClick={() => setCurrentPlanet({id, src: earth})}
                    />
                );
            case 'Mars':
                return (
                    <Mars
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setHoveredPlanet({
                                name: 'Марс',
                                src: mars,
                                isUnlocked: level <= userLevel,
                            });
                        }}
                        onMouseLeave={() => {
                            setHoveredPlanet(undefined);
                        }}
                        onClick={() => setCurrentPlanet({id, src: mars})}
                    />
                );
            case 'Jupiter':
                return (
                    <Jupiter
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setHoveredPlanet({
                                name: 'Юпитер',
                                src: jupiter,
                                isUnlocked: level <= userLevel,
                            });
                        }}
                        onMouseLeave={() => {
                            setHoveredPlanet(undefined);
                        }}
                        onClick={() => setCurrentPlanet({id, src: jupiter})}
                    />
                );
            case 'Saturn':
                return (
                    <Saturn
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setHoveredPlanet({
                                name: 'Сатурн',
                                src: saturn,
                                isUnlocked: level <= userLevel,
                            });
                        }}
                        onMouseLeave={() => {
                            setHoveredPlanet(undefined);
                        }}
                        onClick={() => setCurrentPlanet({id, src: saturn})}
                    />
                );
            case 'Uranus':
                return (
                    <Uranus
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setHoveredPlanet({
                                name: 'Уран',
                                src: uranus,
                                isUnlocked: level <= userLevel,
                            });
                        }}
                        onMouseLeave={() => {
                            setHoveredPlanet(undefined);
                        }}
                        onClick={() => setCurrentPlanet({id, src: uranus})}
                    />
                );
            case 'Neptune':
                return (
                    <Neptune
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setHoveredPlanet({
                                name: 'Нептун',
                                src: neptune,
                                isUnlocked: level <= userLevel,
                            });
                        }}
                        onMouseLeave={() => {
                            setHoveredPlanet(undefined);
                        }}
                        onClick={() => setCurrentPlanet({id, src: neptune})}
                    />
                );
            default:
                return;
        }
    };
    return <>{planetSwitch()}</>;
};

export default PlanetSwitch;
