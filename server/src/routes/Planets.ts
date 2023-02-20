import express, { Response, Request } from 'express';
import { PlanetsController } from '../controllers/Planets';

const router = express.Router();

router.get('/planets', (req: Request, res: Response) =>
    PlanetsController.getPlanets(req, res, 'planets')
);

router.get('/planets/:id', (req: Request, res: Response) =>
    PlanetsController.getPlanetById(req, res, 'planets')
);

export default router;
