import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { cupOne, cupTwo, cupThree } from '../../../../assets/img/svgIcons';
import Button from '../../../../assets/uikit/Button';
import { useAppSelector } from '../../../../hooks';
import { getLeaderBoard } from '../../../../redux/ducks/leaderboard/selectors';
import { ILeaderBoard } from '../../../../redux/ducks/leaderboard/interfaces';
import axios from 'axios';

// let count: number;

const UsersLeaders = () => {
    const [leaders, setLeaders] = useState<ILeaderBoard[] | undefined>(undefined)


    let count = 1;
    return (
        <>
            <Div>
                <div>
                    {leaders && leaders.map((e: ILeaderBoard) => {
                        let Component;
                        switch (count) {
                            case 1:
                                Component = (
                                    <ButtonUser
                                        key={e.id}
                                        outline={
                                            '8px solid rgba(218, 191, 155, 1)'
                                        }
                                    >
                                        <CubOne src={cupOne} alt="" />
                                        <UserName>{e.login}</UserName>
                                        <RatingUser
                                            outline={
                                                '8px solid rgba(173, 136, 86, 1)'
                                            }
                                        >
                                            {e.score}
                                        </RatingUser>
                                    </ButtonUser>
                                );
                                break;
                            case 2:
                                Component = (
                                    <ButtonUser
                                        key={e.id}
                                        outline={
                                            '8px solid rgba(127, 132, 168, 1)'
                                        }
                                    >
                                        <CubOne src={cupTwo} alt="" />
                                        <UserName>{e.login}</UserName>
                                        <RatingUser
                                            outline={
                                                '8px solid rgba(201, 224, 245, 1)'
                                            }
                                        >
                                            {e.score}
                                        </RatingUser>
                                    </ButtonUser>
                                );
                                break;
                            case 3:
                                Component = (
                                    <ButtonUser
                                        key={e.id}
                                        outline={
                                            '8px solid rgba(169, 121, 83, 1)'
                                        }
                                    >
                                        <CubOne src={cupThree} alt="" />
                                        <UserName>{e.login}</UserName>
                                        <RatingUser
                                            outline={
                                                '8px solid rgba(100, 68, 49, 1)'
                                            }
                                        >
                                            {e.score}
                                        </RatingUser>
                                    </ButtonUser>
                                );
                                break;

                            default:
                                Component = (
                                    <ButtonUser
                                        key={e.id}
                                        outline={
                                            '8px solid rgba(206, 183, 255, 1)'
                                        }
                                    >
                                        <PlaceNext>{count}</PlaceNext>
                                        <UserName>{e.login}</UserName>
                                        <RatingUser
                                            outline={
                                                '8px solid rgba(206, 183, 255, 1)'
                                            }
                                        >
                                            {e.score}
                                        </RatingUser>
                                    </ButtonUser>
                                );
                                break;
                        }
                        count++;
                        return Component;
                    })}
                </div>
            </Div>
            {/* <Button text="Еще..." /> */}
        </>
    );
};

export default UsersLeaders;

const Div = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    width: 100%;
    max-width: 1000px;

    margin: 40px auto;

    border-radius: 60px;
    font-size: 40px;
    line-height: 60px;
`;

const ButtonUser = styled.button<{ outline: string }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 550px;
    height: 100px;
    border-radius: 100px;
    background: #262626;
    outline: ${(props) => props.outline};
    outline-offset: -8px;
    margin-bottom: 50px;
    padding-left: 25px;
`;

const CubOne = styled.img`
    position: relative;
    width: 70px;
    height: 70px;
    z-index: 50;
`;

const RatingUser = styled.div<{ outline: string }>`
    background: #343434;
    width: 150px;
    height: 84px;
    border-radius: 100px;
    outline: ${(props) => props.outline};
    font-size: 40px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font-weight: 700;
    line-height: 200%;
    position: relative;
    z-index: 51;
`;
const UserName = styled.span`
    display: block;
    font-size: 40px;
    color: #fff;
`;
const PlaceNext = styled.span`
    position: relative;
    display: block;
    font-size: 40px;
    color: #757575;
    text-align: center;
    line-height: 180%;
    width: 70px;
    height: 70px;
    background: #343434;
    border-radius: 50%;
    z-index: 50;
`;
