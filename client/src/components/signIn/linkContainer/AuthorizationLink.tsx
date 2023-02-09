import React from 'react';
import { Link, To } from 'react-router-dom';
import styled from 'styled-components';

interface IAuthorizationLink {
    path: To;
    linkText: String;
    text: String;
}

const AuthorizationLink = ({ linkText, path, text }: IAuthorizationLink) => {
    return (
        <LinkContainer>
            <StyledSpan>{text}</StyledSpan>
            <StyledLink to={path}>{linkText}</StyledLink>
        </LinkContainer>
    );
};

export default AuthorizationLink;

const LinkContainer = styled.div`
    display: block;
    margin-top: 50px;

    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
`;

const StyledSpan = styled.span`
    color: rgba(255, 255, 255, 0.6);
`;

const StyledLink = styled(Link)`
    margin-left: 20px;
    color: rgba(142, 131, 255, 1);
`;
