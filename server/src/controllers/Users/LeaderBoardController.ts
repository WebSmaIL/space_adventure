import { Response, Request } from 'express';
import { query } from '../../database';
import { GET_LEADERS, GET_USER_PRESENCE_BY_ID } from '../../database/queries';
import { toObject } from '../../helpers';

class LeaderBoardController{
    async getLeaderBoard(req: Request, res: Response, tableName: string){
        try {
            query(GET_LEADERS(tableName), []).then((result) => {
                res.send(result);
                res.status(200);
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
    async getUserPresenceById(req: Request, res: Response, tableName: string) {
        try {
            const { id } = req.params;

            query(GET_USER_PRESENCE_BY_ID(tableName), [id.split(":")[1]]).then((result) => {
                res.send({isPresence: !!toObject(result)[0]});
                res.status(200);
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

export default new LeaderBoardController();