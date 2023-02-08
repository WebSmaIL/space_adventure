import React from 'react';
import styled from 'styled-components';
import Header from './components/header/Header';
import HomePage from './components/homePage/HomePage';
import Leaderboard from './components/leaderboard/Leaderboard';

const App = () => {
    return (
        <div>
            <Header userName={'Kirya'} balance={36}/>
            <Leaderboard/>
        </div>
    );
};

export default App;


