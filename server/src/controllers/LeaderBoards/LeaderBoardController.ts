import { Response, Request } from 'express';
import {
    query,
    GET_LEADERS,
    GET_BY_ID,
    ADD_LEADER,
    UPDATE_LEADER,
} from '../../database';
import { toObject, toNumber } from '../../helpers';

interface Leader {
    id: number,
    user_id: string,
    score: number
}
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

    async getLeaderBoardEase(req: Request, res: Response) {
        try {
            const { table } = req.params;

            query(`SELECT * FROM ${table.split(":")[1]} ORDER BY score DESC LIMIT 5`, []).then((result) => {
                res.status(200).json(JSON.parse(JSON.stringify(result)))
            })
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }
}

export default new LeaderBoardController();
