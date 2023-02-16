import React from 'react';
import Leaderboard from './components/leaderboard/Leaderboard';
import { useAppSelector } from './hooks';
import SolarSystem from './components/solarSystem/SolarSystem';
import Header from './components/header/Header';
import Settings from './components/settings_page/settings';

const App = () => {
    return (
        <div>
            <Header balance={0} userName='Eugene' />
            <Settings />
        </div>
    );
};

export default App;
