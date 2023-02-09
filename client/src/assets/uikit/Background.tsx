import React from 'react';
import styled from 'styled-components';

interface IProps {
    src: string
    alt: string;
}

const Background = ({alt, src}: IProps) => {
    return <StyledBackground src={src} alt={alt} />;
};

export default Background;

const StyledBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    margin: 0;
    width: 100%;
`;
