import React from 'react';
import styled from 'styled-components';
import { background_leaders } from '../../assets/img/backgrounds/index';
import Leaders from './leaders/Leaders';
import Background from '../../assets/uikit/Background';

const Leaderboard = () => {
    return (
        <div>
            <Container>
                <Leaders />
            </Container>
            <Background src={background_leaders} alt='' />
        </div>
    );
};

export default Leaderboard;

const Container = styled.div`
    position: relative;
    width: 100%;
`;
