import { Response, Request } from 'express';
import { query, GET_ALL, GET_BY_ID } from '../../database';

class SpaceShipsController {
    async getSpaceShips(req: Request, res: Response, tableName: string) {
        try {
            query(GET_ALL(tableName), []).then((result) => {
                res.send(result);
                res.status(200);
            });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async getSpaceShipsById(req: Request, res: Response, tableName: string) {
        try {
            const { id } = req.params;
            if (!id.split(':')[1]) throw Error();

            query(GET_BY_ID(tableName), [id.split(':')[1]]).then((result) => {
                res.send(result).status(200);
            });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }
}

export default new SpaceShipsController();
