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

interface IProps {
    id: number;
    name: string;
    level: number;
    setTitleText: React.Dispatch<React.SetStateAction<string>>;
    setCurrentPlanet: React.Dispatch<React.SetStateAction<string | undefined>>;
    setIsUnlocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlanetSwitch = ({
    setTitleText,
    setCurrentPlanet,
    setIsUnlocked,
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
                        to={'/'}
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setTitleText('Меркурий');
                            setCurrentPlanet(mercury);
                            setIsUnlocked(level <= userLevel);
                        }}
                        onMouseLeave={() => {
                            setTitleText('Выберите планету:');
                            setCurrentPlanet(undefined);
                            setIsUnlocked(false);
                        }}
                    />
                );
            case 'Venus':
                return (
                    <Venus
                        to={'/'}
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setTitleText('Венера');
                            setCurrentPlanet(venus);
                            setIsUnlocked(level <= userLevel);
                        }}
                        onMouseLeave={() => {
                            setTitleText('Выберите планету:');
                            setCurrentPlanet(undefined);
                            setIsUnlocked(false);
                        }}
                    />
                );
            case 'Earth':
                return (
                    <Earth
                        to={'/'}
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setTitleText('Земля');
                            setCurrentPlanet(earth);
                            setIsUnlocked(level <= userLevel);
                        }}
                        onMouseLeave={() => {
                            setTitleText('Выберите планету:');
                            setCurrentPlanet(undefined);
                            setIsUnlocked(false);
                        }}
                    />
                );
            case 'mars':
                return (
                    <Mars
                        to={'/'}
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setTitleText('Марс');
                            setCurrentPlanet(mars);
                            setIsUnlocked(level <= userLevel);
                        }}
                        onMouseLeave={() => {
                            setTitleText('Выберите планету:');
                            setCurrentPlanet(undefined);
                            setIsUnlocked(false);
                        }}
                    />
                );
            case 'Jupiter':
                return (
                    <Jupiter
                        to={'/'}
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setTitleText('Юпитер');
                            setCurrentPlanet(jupiter);
                            setIsUnlocked(level <= userLevel);
                        }}
                        onMouseLeave={() => {
                            setTitleText('Выберите планету:');
                            setCurrentPlanet(undefined);
                            setIsUnlocked(false);
                        }}
                    />
                );
            case 'Saturn':
                return (
                    <Saturn
                        to={'/'}
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setTitleText('Сатурн');
                            setCurrentPlanet(saturn);
                            setIsUnlocked(level <= userLevel);
                        }}
                        onMouseLeave={() => {
                            setTitleText('Выберите планету:');
                            setCurrentPlanet(undefined);
                            setIsUnlocked(false);
                        }}
                    />
                );
            case 'Uranus':
                return (
                    <Uranus
                        to={'/'}
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setTitleText('Уран');
                            setCurrentPlanet(uranus);
                            setIsUnlocked(level <= userLevel);
                        }}
                        onMouseLeave={() => {
                            setTitleText('Выберите планету:');
                            setCurrentPlanet(undefined);
                            setIsUnlocked(false);
                        }}
                    />
                );
            case 'Neptune':
                return (
                    <Neptune
                        to={'/'}
                        aria-label={`${name} page`}
                        sectionColor="#fff"
                        onMouseEnter={() => {
                            setTitleText('Нептун');
                            setCurrentPlanet(neptune);
                            setIsUnlocked(level <= userLevel);
                        }}
                        onMouseLeave={() => {
                            setTitleText('Выберите планету:');
                            setCurrentPlanet(undefined);
                            setIsUnlocked(false);
                        }}
                    />
                );
            default:
                return;
        }
    };
    return <>{planetSwitch()}</>;
};

export default PlanetSwitch;
