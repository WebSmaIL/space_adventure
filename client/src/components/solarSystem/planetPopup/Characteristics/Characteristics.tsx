import React from 'react';
import styled from 'styled-components';
import { IPlanet } from '../../../../redux/ducks/planets/interfaces';

interface IProps {
    planetInfo: IPlanet | undefined;
}

const Characteristics = ({ planetInfo }: IProps) => {
    return (
        <>
            <СharacteristicsContainer>
                <Сharacteristic>
                    Температура: {planetInfo?.surface_temperature}°C
                </Сharacteristic>
                <Сharacteristic>
                    До солнца: {planetInfo?.distance_from_the_sun} км
                </Сharacteristic>
                <Сharacteristic>
                    Экватор: {planetInfo?.diameter_equator} км
                </Сharacteristic>
            </СharacteristicsContainer>

            <СharacteristicsContainer>
                <Сharacteristic>Масса: {planetInfo?.weight} кг</Сharacteristic>
                <Сharacteristic>
                    Плотность: {planetInfo?.density} г/см³
                </Сharacteristic>
            </СharacteristicsContainer>
        </>
    );
};

export default Characteristics;

const СharacteristicsContainer = styled.div`
    position: relative;
    z-index: 200;
    display: flex;
    margin-bottom: 20px;
`;

const Сharacteristic = styled.div`
    position: relative;
    display: block;
    min-width: 200px;
    height: 50px;
    text-align: center;
    padding: 10px;
    margin-right: 20px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid transparent;
        background: linear-gradient(180deg, #ae9bd8, rgba(115, 102, 255, 0.5))
            border-box;
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;

        transition: all 0.3s ease;
    }
`;
