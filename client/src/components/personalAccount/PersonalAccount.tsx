import React from 'react'
import styled from 'styled-components'
import { background_personal_account } from '../../assets/img/backgrounds'
import UserInformation from './userInformation/UserInformation'

const PersonalAccount = () => {
  return (
    <div>
        <Background src={background_personal_account} alt='' />
        <UserInformation/>
    </div>
  )
}

export default PersonalAccount

const Background = styled.img`
    
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 0;
`