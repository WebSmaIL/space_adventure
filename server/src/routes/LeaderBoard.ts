import express, { Response, Request } from 'express';
import { LeaderBoardController } from '../controllers/Users'

const router = express.Router()

const table_names = ['venus_leaders', 'jupiter_leaders', 'moon_leaders', 'mars_leaders', 'saturn_leaders', 'mercury_leaders', 'neptune_leaders', 'uranus_leaders']

table_names.forEach((el) => {
    const url = '/' + el.split("_").join("");
    router.get(url, (req: Request, res: Response) => LeaderBoardController.getLeaderBoard(req, res, el));
    router.get(url + '/:id', (req: Request, res: Response) => LeaderBoardController.getUserPresenceById(req, res, el));
    router.post(url, (req: Request, res: Response) => LeaderBoardController.addUser(req, res, el));
    router.put(url, (req: Request, res: Response) => LeaderBoardController.updateUser(req, res, el))
})


export default router
