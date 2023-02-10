import express, { Response, Request } from 'express';
import { PlanetsController } from '../controllers/Planets';
import { table_names } from '../database';

const router = express.Router();

table_names.forEach((el) => {
    const url = '/' + el.split('_').join('');

    router.get(url, (req: Request, res: Response) =>
        PlanetsController.getPlanets(req, res, el)
    );

    router.get(url + '/:id', (req: Request, res: Response) =>
        PlanetsController.getPlanetById(req, res, el)
    );
});

export default router;
