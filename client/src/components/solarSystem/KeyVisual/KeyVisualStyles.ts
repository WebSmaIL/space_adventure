import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
    Sun as SunSvg,
    mars,
    mercury,
    earth,
    jupiter,
    neptune,
    venus,
    uranus,
    saturn,
} from '../../../assets/img/svgIcons';

export const Container = styled(motion.div)`
    position: relative;
    min-height: 85vh;
`;

export const Planet = styled.a<{ sectionColor: string }>`
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(146, 186, 226, 0.5);
    border-radius: 50%;
    background: none;
    cursor: pointer;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    &::before {
        position: absolute;
        content: '';
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 100px;
        transition: transform 300ms ease;
    }

    &:hover {
        border: 1px solid rgba(255, 255, 255, 1);
        box-shadow: 0 0 5px ${(props) => props.sectionColor},
            inset 0 0 5px ${(props) => props.sectionColor};
    }
    @keyframes orbit {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(-360deg);
        }
    }
`;

export const Sun = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    background-image: url(${SunSvg});
    background-size: cover;
    box-shadow: 0 0 10px 2px rgba(255, 107, 0, 0.4),
        0 0 22px 11px rgba(255, 203, 0, 0.13);
    transform: translate(-50%, -50%);
    z-index: 100;
`;

export const Mercury = styled(Planet)`
    width: 130px;
    height: 130px;
    animation: orbit 7.1867343561s linear infinite;
    z-index: 100;
    &::before {
        height: 20px;
        width: 20px;
        background-image: url(${mercury});
        background-size: cover;
    }
`;

export const Venus = styled(Planet)`
    width: 200px;
    height: 200px;
    animation: orbit 18.4555338265s linear infinite;
    z-index: 99;
    &::before {
        height: 30px;
        width: 30px;
        background-image: url(${venus});
        background-size: cover;
    }
`;

export const Earth = styled(Planet)`
    width: 300px;
    height: 300px;
    animation: orbit 30s linear infinite;
    z-index: 98;
    &::before {
        width: 40px;
        height: 40px;
        background-image: url(${earth});
        background-size: cover;
    }
`;

export const Mars = styled(Planet)`
    width: 400px;
    height: 400px;
    animation: orbit 56.4261314589s linear infinite;
    z-index: 97;
    &::before {
        width: 35px;
        height: 35px;
        background-image: url(${mars});
        background-size: cover;
    }
`;

export const Jupiter = styled(Planet)`
    width: 500px;
    height: 500px;
    animation: orbit 355.7228171013s linear infinite;
    z-index: 96;
    &::before {
        width: 50px;
        height: 50px;
        background-image: url(${jupiter});
        background-size: cover;
    }
`;

export const Saturn = styled(Planet)`
    width: 600px;
    height: 600px;
    animation: orbit 882.6952471456s linear infinite;
    z-index: 95;
    &::before {
        width: 45px;
        height: 45px;
        background-image: url(${saturn});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const Uranus = styled(Planet)`
    width: 700px;
    height: 700px;
    animation: orbit 2512.4001967933s linear infinite;
    z-index: 94;
    &::before {
        width: 40px;
        height: 30px;
        background-image: url(${uranus});
        background-size: cover;
    }
`;

export const Neptune = styled(Planet)`
    width: 800px;
    height: 800px;
    animation: orbit 3000s linear infinite;
    backdrop-filter: blur(3px);
    transition: backdrop-filter 1s ease;
    z-index: 93;
    &::before {
        width: 30px;
        height: 30px;
        background-image: url(${neptune});
        background-size: cover;
    }
`;
