import React from 'react';
import Leaderboard from './components/leaderboard/Leaderboard';
import { useAppSelector } from './hooks';

const App = () => {
    return (
        <div>
            <Leaderboard />
        </div>
    );
};

export default App;
