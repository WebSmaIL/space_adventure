import { Response, Request, ErrorRequestHandler } from 'express';
import { query } from '../../database';
import {
    GET_LEADERS,
    GET_USER_PRESENCE_BY_ID,
    ADD_LEADER,
    UPDATE_LEADER,
} from '../../database/queries';
import { toObject } from '../../helpers';

class LeaderBoardController {
    async getLeaderBoard(req: Request, res: Response, tableName: string) {
        try {
            query(GET_LEADERS(tableName), []).then((result) => {
                res.status(200).json(result);
            });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }
    async getUserPresenceById(req: Request, res: Response, tableName: string) {
        try {
            const { id } = req.params;
            query(GET_USER_PRESENCE_BY_ID(tableName), [id.split(':')[1]]).then(
                (result) => {
                    const isPresence = !!toObject(result)[0];
                    res.send({
                        isPresence,
                        score: isPresence
                            ? JSON.parse(JSON.stringify(result))[0].score
                            : null,
                    }).status(200);
                }
            );
        } catch (error) {
            res.status(500).json();
        }
    }
    async addUser(req: Request, res: Response, tableName: string) {
        try {
            const { user_id, score } = req.body;

            query(ADD_LEADER(tableName), [user_id, score])
                .then((result) => {
                    res.status(200).json({ message: 'User was added' });
                })
                .catch((error) =>
                    res.status(500).json({ message: 'User already exists' })
                );
        } catch (error) {
            res.status(500).json({ message: 'Incorrect request' });
        }
    }

    async updateUser(req: Request, res: Response, tableName: string) {
        try {
            const { user_id, score } = req.body;

            query(UPDATE_LEADER(tableName), [score, user_id])
                .then((result) => {
                    try {
                        if (!toObject(result)[6]) {
                            throw Error('User was not updated');
                        }
                        res.status(200).json({ message: 'User was updated' });
                    } catch (error) {
                        res.status(500).json({ message: 'User is undefined' });
                    }
                })
        } catch (error) {
            res.status(500).json({ message: 'Incorrect request' });
        }
    }
}

export default new LeaderBoardController();
