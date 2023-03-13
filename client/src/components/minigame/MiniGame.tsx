import { relative } from 'path';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { background_minigame, GameFrame } from '../../assets/img/backgrounds';
import { useAppSelector } from '../../hooks';
import { getMiniGameById } from '../../redux/ducks/miniGame/selectors';

const MiniGame = () => {
    const params = useParams();
    const id = Number(params.id);

    const miniGame = useAppSelector(getMiniGameById(id));

    window.addEventListener(
        'message',
        (event) => console.log(event.data),
        false
    );

    return (
        <Wrapper>
            <Minigame>
                <MiniFrame src={GameFrame} />
                <iframe
                    src={miniGame?.src}
                    title="game"
                    style={{
                        position: 'relative',
                        zIndex: 0,
                        width: '100%',
                        minHeight: '625px', 
                        border: 'none',
                }}
                />
            </Minigame>
        </Wrapper>
    );
};

export default MiniGame;

const Wrapper = styled.div`
    padding-top: 150px;
    width: 100%;
    min-height: 100vh;
    background-image: url(${background_minigame});
`;
const Minigame = styled.div`
    width: 1100px;
    min-height: 640px;
    position: relative;
    padding: 6px 23px;
    z-index: 1;
    margin: 0 auto;
    border-radius: 25px;
`;
const MiniFrame = styled.img`
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
`;
