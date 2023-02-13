import React from 'react';
import SolarSystem from './components/solarSystem/SolarSystem';
import Header from './components/header/Header';

const App = () => {    
    return (
        <div>
            <Header balance={9999} userName='Илья' />
            <SolarSystem />
        </div>
    );
};

export default App;
