import express, { Response, Request } from 'express';
import { LeaderBoardController } from '../controllers/LeaderBoards';
import { table_names } from '../database';

const router = express.Router();

table_names.forEach((el) => {
    const url = '/' + el.split('_').join('');

    router.get(url + '/:page', (req: Request, res: Response) =>
        LeaderBoardController.getLeaderBoard(req, res, el)
    );
});

router.get('/leaders/:table', (req: Request, res: Response) => LeaderBoardController.getLeaderBoardEase(req, res))

export default router;
