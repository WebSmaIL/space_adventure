import React from 'react';
import styled from 'styled-components';

const StatisticUser = () => {
    return (
        <div>
            <Span>Статистика планет</Span>
            <Hr />
            <ContainerStatic>
                <p>Луна - 30 место</p>
                <p>Марс - 5 место</p>
            </ContainerStatic>
        </div>
    );
};

export default StatisticUser;

const Hr = styled.hr`
    width: 100%;
    height: 7px;
    background-color: #ceb7ff;
    border: none;
    border-radius: 10em;
    box-shadow: 0px 0px 15px #ceb7ffde;
`;

const Span = styled.span`
    font-size: 40px;
    color: rgba(142, 131, 255, 1);
    font-weight: 700;
`;
const ContainerStatic = styled.div`
    font-size: 34px;
    color: rgba(206, 183, 255, 1);
    font-weight: 400;
`