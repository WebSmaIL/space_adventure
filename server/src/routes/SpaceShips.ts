import express, { Response, Request } from 'express';
import { SpaceShips } from '../controllers/SpaceShips';

const router = express.Router();

router.get('/spaceships', (req: Request, res: Response) =>
    SpaceShips.getSpaceShips(req, res, 'spaceships')
);

router.get('/spaceships/:id', (req: Request, res: Response) =>
    SpaceShips.getSpaceShipsById(req, res, 'spaceships')
);

export default router;
