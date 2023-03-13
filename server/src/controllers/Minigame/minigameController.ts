import { Response, Request } from 'express';
import {
    query,
    GET_ALL,
    GET_BY_ID,
    UPDATE_USER_BALANCE,
    UPDATE_LEADER,
    ADD_LEADER,
    GET_USER_PRESENCE_BY_ID,
} from '../../database';
import { toObject } from '../../helpers';

class MiniGameController {
    async updateCoins(req: Request, res: Response) {
        try {
            const { coins, userid } = req.body;

            query('SELECT balance FROM users WHERE id=?', [userid])
                .then((result) => {
                    return (
                        Number(JSON.parse(JSON.stringify(result))[0].balance) +
                        Number(coins)
                    );
                })
                .then((updatedBalance) => {
                    query(UPDATE_USER_BALANCE, [updatedBalance, userid])
                        .then((result) => {
                            query('SELECT balance FROM users WHERE id=?', [
                                userid,
                            ])
                                .then((result) => {
                                    res.status(200).json(
                                        JSON.parse(JSON.stringify(result))[0]
                                    );
                                })
                                .catch((error) =>
                                    res.status(500).json({
                                        message:
                                            'Error in get new balance process',
                                    })
                                );
                        })
                        .catch((error) =>
                            res
                                .status(500)
                                .json({ message: 'User already exists' })
                        );
                })
                .catch((error) =>
                    res.status(500).json({ message: 'User already exists' })
                );
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async updateScore(req: Request, res: Response) {
        try {
            const { score, userid, leadertbl } = req.body;

            query(GET_USER_PRESENCE_BY_ID(leadertbl), [userid]).then(
                (result) => {
                    let isPresence = !!toObject(result)[0];
                    if (isPresence) {
                        try {
                            if (
                                Number(score) >
                                Number(
                                    JSON.parse(JSON.stringify(result))[0].score
                                )
                            ) {
                                query(UPDATE_LEADER(leadertbl), [
                                    score,
                                    userid,
                                ]);
                            }
                            res.status(200).json({
                                message: 'Operation complete',
                            });
                        } catch (error) {
                            res.status(500).json({
                                message: 'User is undefined',
                            });
                        }
                    } else {
                        query('SELECT login FROM users WHERE id=?', [
                            userid,
                        ]).then((result) => {
                            query(ADD_LEADER(leadertbl), [
                                userid,
                                score,
                                JSON.parse(JSON.stringify(result))[0].login,
                            ])
                                .then((result) => {
                                    res.status(200).json({
                                        message: 'User was added',
                                    });
                                })
                                .catch((error) =>
                                    res
                                        .status(500)
                                        .json({
                                            message: 'User already exists',
                                        })
                                );
                        });
                    }
                }
            );
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }
}

export default new MiniGameController();
