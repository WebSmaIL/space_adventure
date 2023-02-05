import { Response, Request } from 'express';
import {query, SPACE_SHIPS, SPACE_SHIPS_BY_ID} from '../../database';
import { toNumber, toObject } from '../../helpers';

class SpaceShipsController{

    async getSpaceShips(req: Request, res: Response) {
        try {
            query(SPACE_SHIPS, []).then((result) => {
                res.send(result);
                res.status(200);
            });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async getSpaceShipsById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!(id.split(':')[1])) throw Error();

            query(SPACE_SHIPS_BY_ID, [id.split(':')[1]]).then(
                (result) => {
                    res.send(result).status(200);
                });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }
    
}

export default new SpaceShipsController();
