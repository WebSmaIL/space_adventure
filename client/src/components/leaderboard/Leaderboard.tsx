import React from 'react';
import styled from 'styled-components';
import { background_leaders } from '../../assets/img/backgrounds';
import Leaders from './leaders/Leaders';

const Leaderboard = () => {
    return (
        <Wrapper>
            <Container>
                <Leaders />
            </Container>
        </Wrapper>
    );
};

export default Leaderboard;

const Container = styled.div`
    position: relative;
    width: 100%;
`;

const Wrapper = styled.div`
    width: 100%;
    background-image: url(${background_leaders});
    padding: 100px 0;
`;
