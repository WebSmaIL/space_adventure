import React from 'react'
import styled from 'styled-components';
import { background_minigame } from '../../assets/img/backgrounds';

const MiniGame = () => {
    return (
        <Wrapper>
            <Minigame />
        </Wrapper>
    );
};

export default MiniGame;


const Wrapper = styled.div`
    padding-top: 150px;
    width: 100%;
    min-height: 100vh;
    background-image: url(${background_minigame});
`
const Minigame = styled.div`
    width: 800px;
    height: 600px;
    position: relative;
    background-color: #63636399;
    margin: 0 auto;
    border: 5px solid #CEB7FF;   
`