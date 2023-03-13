import express, { Response, Request } from 'express';
import MinigameController from '../controllers/Minigame/minigameController';

const router = express.Router();

router.post('/users/coinsupdate', (req: Request, res: Response) =>
    MinigameController.updateCoins(req, res)
);
router.post('/users/updatescore', (req: Request, res: Response) =>
    MinigameController.updateScore(req, res)
);

export default router;
