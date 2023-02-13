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
import { IPlanet } from './data';

interface IProps extends IPlanet {
    setTitleText: React.Dispatch<React.SetStateAction<string>>;
    setCurrentPlanet: React.Dispatch<React.SetStateAction<string | undefined>>;
    setIsUnlocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlanetSwitch = ({
    setTitleText,
    setCurrentPlanet,
    setIsUnlocked,
    name,
    path,
    sectionColor,
    level,
}: IProps) => {
    const userLevel = 9;
    const planetSwitch = () => {
        switch (name) {
            case 'Mercury':
                return (
                    <Mercury
                        to={path}
                        aria-label={`${name} page`}
                        sectionColor={sectionColor}
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
                        to={path}
                        aria-label={`${name} page`}
                        sectionColor={sectionColor}
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
                        to={path}
                        aria-label={`${name} page`}
                        sectionColor={sectionColor}
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
            case 'Mars':
                return (
                    <Mars
                        to={path}
                        aria-label={`${name} page`}
                        sectionColor={sectionColor}
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
                        to={path}
                        aria-label={`${name} page`}
                        sectionColor={sectionColor}
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
                        to={path}
                        aria-label={`${name} page`}
                        sectionColor={sectionColor}
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
                        to={path}
                        aria-label={`${name} page`}
                        sectionColor={sectionColor}
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
                        to={path}
                        aria-label={`${name} page`}
                        sectionColor={sectionColor}
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
