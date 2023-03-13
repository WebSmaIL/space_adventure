import React from 'react';
import styled from 'styled-components';

interface IAuthorizationLink {
    linkText: String;
    text: String;
    isRegister: boolean;
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthorizationLink = ({
    linkText,
    text,
    isRegister,
    setIsRegister,
}: IAuthorizationLink) => {
    return (
        <LinkContainer>
            <StyledSpan>{text}</StyledSpan>
            <StyledLink onClick={() => setIsRegister(!isRegister)}>
                {linkText}
            </StyledLink>
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

const StyledLink = styled.a`
    cursor: pointer;
    margin-left: 20px;
    color: rgba(142, 131, 255, 1);
`;
