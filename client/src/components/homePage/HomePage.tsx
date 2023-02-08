import img from '../../assets/img/backgrounds/Background.svg';
import React from 'react'
import styled from 'styled-components';

const HomePage = () => {
  return (
    <div>
        <BackHome width={'100%'} background={'#222'} src={img} alt=''/>
    </div>
  )
}

export default HomePage

const BackHome = styled.img<{width: string, background: string}>`
    width: ${props=>props.width};
    background: ${props=>props.background};
`