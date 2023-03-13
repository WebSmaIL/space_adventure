import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { background_leaders } from '../../assets/img/backgrounds';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchLeaders } from '../../redux/ducks/leaderboard/asyncThunk';
import Leaders from './leaders/Leaders';

const Leaderboard = () => {

    
    // const leaders = useAppSelector(getLeaderBoard);
    
    // const dispatch = useAppDispatch();
    // const location = useLocation();
    // const { state } = location;

    // const tableName = state.table;

    // useEffect(() => {
    //     dispatch(fetchLeaders({table: tableName}));
    //     console.log(leaders)
    // }, [leaders])
    

    

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
