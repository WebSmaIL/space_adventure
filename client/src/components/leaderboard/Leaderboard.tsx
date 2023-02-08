import React from 'react'
import styled from 'styled-components'
import bgLider from '../../assets/img/backgrounds/BackLiders.png';
import Leaders from './leaders/Leaders';

const Leaderboard = () => {
  return (
    <div>
        <Container><Leaders/></Container>
        
        <LeaderBg src={bgLider} alt=''></LeaderBg>
        
    </div>
  )
}

export default Leaderboard

const LeaderBg = styled.img`
  position: relative;
  
  margin: 0;
  width: 100%;
  
    
`
const Container = styled.div`
background-color: #080808;
  position: absolute;
  width: 100%;
`