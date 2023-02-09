import React from 'react';
import Header from './components/header/Header';
import Leaderboard from './components/leaderboard/Leaderboard';

const App = () => {
    return (
        <div>
            <Header userName={'Kirya'} balance={36} />
            <Leaderboard />
        </div>
    );
};

export default App;
