import express, { Response, Request } from 'express';
import { LeaderBoardController } from '../controllers/LeaderBoards';
import { leaders_table_names } from '../database';

const router = express.Router();

leaders_table_names.forEach((el) => {
    const url = '/' + el.split('_').join('');

    router.get(url + '/:page', (req: Request, res: Response) =>
        LeaderBoardController.getLeaderBoard(req, res, el)
    );

    router.get(url + '/user/:id', (req: Request, res: Response) =>
        LeaderBoardController.getUserPresenceById(req, res, el)
    );

    router.post(url, (req: Request, res: Response) =>
        LeaderBoardController.addUser(req, res, el)
    );

    router.put(url, (req: Request, res: Response) =>
        LeaderBoardController.updateUser(req, res, el)
    );
});

export default router;
