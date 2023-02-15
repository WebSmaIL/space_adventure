import React from 'react';
import anim_logo from '../../assets/img/animations/loader.svg';
import { background_authorize } from '../../assets/img/backgrounds';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Loader = () => {
    const animContainer = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 1 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 1 },
        },
    };
    return (
        <motion.div
            variants={animContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Title>
                Loading<span>.</span>
                <span>.</span>
                <span>.</span>
            </Title>
            <Img src={anim_logo} alt="" />
            <Shadow />
            <BlurBg />
        </motion.div>
    );
};

export default Loader;

const Title = styled.h1`
    position: relative;
    z-index: 1001;
    color: #8e83ff;
    font-size: 62px;
    text-align: center;
    margin-top: 60px;

    & span:nth-child(1) {
        animation: spanAnim 0.5s ease-in-out infinite 1.75s;
        animation-direction: alternate;
    }
    & span:nth-child(2) {
        animation: spanAnim 0.5s ease-in-out infinite 1s;
        animation-direction: alternate;
    }
    & span:nth-child(3) {
        animation: spanAnim 0.5s ease-in-out infinite 0.25s;
        animation-direction: alternate;
    }

    @keyframes spanAnim {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const BlurBg = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100vh;
    background: url(${background_authorize});
    filter: blur(30px) brightness(30%);
`;

const Img = styled.img`
    width: 400px;
    height: 400px;

    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -200px;
    z-index: 1001;
    border-radius: 20%;

    animation: logoAnim 2s ease-in-out infinite 2.5s;
    animation-direction: alternate;

    @keyframes logoAnim {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(40px);
        }
    }
`;

const Shadow = styled.div`
    display: block;
    width: 300px;
    height: 100px;
    position: absolute;
    bottom: 140px;
    left: 50%;
    margin-left: -150px;
    z-index: 1001;
    background: #0000005a;
    border-radius: 50%;
    filter: blur(15px);

    animation: shadowAnim 2s ease-in-out infinite 2.5s;
    animation-direction: alternate;

    @keyframes shadowAnim {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.1);
        }
    }
`;
