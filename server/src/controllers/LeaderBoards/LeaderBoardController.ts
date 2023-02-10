import { Response, Request } from 'express';
import {
    query,
    GET_LEADERS,
    GET_BY_ID,
    ADD_LEADER,
    UPDATE_LEADER,
} from '../../database';
import { toObject, toNumber } from '../../helpers';

class LeaderBoardController {
    async getLeaderBoard(req: Request, res: Response, tableName: string) {
        try {
            const { page } = req.params;
            if (isNaN(toNumber(page))) throw Error();

            const perPage = 10;
            const start = (toNumber(page) - 1) * perPage;

            query(`SELECT count(*) FROM ${tableName}`, [])
                .then((res) => JSON.parse(JSON.stringify(res))[0]['count(*)'])
                .then((count) =>
                    query(GET_LEADERS(tableName, start, perPage), []).then(
                        (result) => {
                            res.status(200).json({ articles: result, count });
                        }
                    )
                );
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async getUserPresenceById(req: Request, res: Response, tableName: string) {
        try {
            const { id } = req.params;
            if (!id.split(':')[1]) throw Error();

            query(GET_BY_ID(tableName), [id.split(':')[1]]).then(
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
            res.status(500).json('Incorrect request');
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
            query(UPDATE_LEADER(tableName), [score, user_id]).then((result) => {
                try {
                    if (!toObject(result)[6]) throw Error();

                    res.status(200).json({ message: 'User was updated' });
                } catch (error) {
                    res.status(500).json({ message: 'User is undefined' });
                }
            });
        } catch (error) {
            res.status(500).json({ message: 'Incorrect request' });
        }
    }
}

export default new LeaderBoardController();
