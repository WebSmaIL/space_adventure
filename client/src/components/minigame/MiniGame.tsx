import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { background_minigame, GameFrame } from '../../assets/img/backgrounds';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getMiniGameById } from '../../redux/ducks/miniGame/selectors';
import { fetchUpdateCoins, getUserInfo, fetchUpdateScore } from '../../redux/ducks/userInfo';

const MiniGame = () => {
    const location = useLocation();
    const { state } = location;

    const miniGame = useAppSelector(getMiniGameById(state.minigame_id));
    const user = useAppSelector(getUserInfo);
    const dispatch = useAppDispatch()

    window.addEventListener(
        'message',
        (event) => {
            
            if (!!event.data.coins) {
                dispatch(fetchUpdateCoins({userid: user.userInfo.id, coins: event.data.coins}));
                dispatch(fetchUpdateScore({userid: user.userInfo.id, leadertbl: state.leader_table, score: event.data.score}));
            }
        },
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
    background-color: #63636399;
    margin: 0 auto;
    border: 5px solid #CEB7FF;   

    padding: 6px 23px;
    z-index: 1;
    border-radius: 25px;
`;
const MiniFrame = styled.img`
    position: absolute;
    z-index: 10;
    left: 0;
    top: 0;
`;
