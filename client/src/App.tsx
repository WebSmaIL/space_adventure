import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from './components/signIn/SignIn';

const App = () => {
    return (
        <Routes>
                <Route path='/register' element={<SignIn isRegister={true} titleText="Регистрация" />} />
                <Route path='/login' element={<SignIn isRegister={false} titleText="Вход в аккаунт" />} />
        </Routes>
    );
};

export default App;
