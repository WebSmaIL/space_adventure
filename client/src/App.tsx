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
import Settings from './components/settings/Settings';
import PersonalAccount from './components/personalAccount/PersonalAccount';
import MiniGame from './components/minigame/MiniGame';

const App = () => {
    const user = useAppSelector(getUserInfo);
    

    return (
        <>
            {user.userInfo.isAuthorize && (
                <Header balance={user.userInfo.balance} userName={user.userInfo.login} />
            )}
            <Routes>
                <Route
                    path="/"
                    element={user.userInfo.isAuthorize ? <SolarSystem /> : <Home />}
                />
                <Route path="/login" element={<SignIn />} />

                {user.userInfo.isAuthorize && (
                    <>
                        <Route path="/profile" element={<PersonalAccount />} />
                        <Route path="/profile/settings" element={<Settings />} />
                        <Route path="/minigame/:id" element={<MiniGame />} />
                        <Route
                            path="/leaderboard/:table"
                            element={<Leaderboard />}
                        />
                    </> 
                )}
            </Routes>
            <Foooter />
        </>
    );
};

export default App;
