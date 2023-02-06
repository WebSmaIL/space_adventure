import { Response, Request } from 'express';
import {query, PLANET_INFO, PLANET_INFO_BY_ID} from '../../database';
import { toNumber, toObject } from '../../helpers';

class PlanetsController{
    async getPlanets(req: Request, res: Response) {
        try {
            query(PLANET_INFO, []).then((result) => {
                res.send(result);
                res.status(200);
            });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }

    }

    async getPlanetById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            if (!(id.split(':')[1])) throw Error();

            query(PLANET_INFO_BY_ID, [id.split(':')[1]]).then(
                (result) => {
                    res.send(result).status(200);
                });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

}

export default new PlanetsController();