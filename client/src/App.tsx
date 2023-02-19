import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from './hooks';
import { getUserInfo } from './redux/ducks/userInfo';
import SolarSystem from './components/solarSystem/SolarSystem';
import Header from './components/header/Header';
import SignIn from './components/signIn/SignIn';
import Leaderboard from './components/leaderboard/Leaderboard';
import Home from './components/home/Home';
import Foooter from './components/footer/Footer';

const App = () => {
    const userInfo = useAppSelector(getUserInfo);
    return (
        <>
            {/* {userInfo.isAuthorize ? <Header balance={userInfo.balance} userName={userInfo.login} /> : null}
            <Routes>
                <Route
                    path='/'
                    element={userInfo.isAuthorize ? <SolarSystem /> : null}
                />
                <Route
                    path='/login'
                    element={<SignIn />}
                />
                <Route
                    path='/leaderboard/:table'
                    element={<Leaderboard />}
                />
            </Routes> */}
            <Home />
            <Foooter />
        </>
    );
};

export default App;