import React from 'react';
import styled from 'styled-components';
import { background_personal_account } from '../../assets/img/backgrounds';
import UserInformation from './userInformation/UserInformation';

const PersonalAccount = () => {
    return (
        <Wrapper>
            <UserInformation />
        </Wrapper>
    );
};

export default PersonalAccount;

const Wrapper = styled.div`
    width: 100%;
    background-image: url(${background_personal_account});
    padding: 100px 0;
`;
