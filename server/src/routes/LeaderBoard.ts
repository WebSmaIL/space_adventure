import express, { Response, Request } from 'express';
import {GET_LEADERS} from '../database'
import { LeaderBoardController } from '../controllers/Users'

const router = express.Router()

router.get('/venusleaders', (req: Request, res: Response) => LeaderBoardController.getLeaderBoard(req, res, 'venus_leaders'))
router.get('/jupiterleaders', (req: Request, res: Response) => LeaderBoardController.getLeaderBoard(req, res, 'jupiter_leaders'))
router.get('/moonleaders', (req: Request, res: Response) => LeaderBoardController.getLeaderBoard(req, res, 'moon_leaders'))
router.get('/marsleaders', (req: Request, res: Response) => LeaderBoardController.getLeaderBoard(req, res, 'mars_leaders'))
router.get('/saturnleaders', (req: Request, res: Response) => LeaderBoardController.getLeaderBoard(req, res, 'saturn_leaders'))
router.get('/mercuryleaders', (req: Request, res: Response) => LeaderBoardController.getLeaderBoard(req, res, 'mercury_leaders'))
router.get('/neptuneleaders', (req: Request, res: Response) => LeaderBoardController.getLeaderBoard(req, res, 'neptune_leaders'))
router.get('/uranusleaders', (req: Request, res: Response) => LeaderBoardController.getLeaderBoard(req, res, 'uranus_leaders'))


router.get('/venusleaders/:id', (req: Request, res: Response) => LeaderBoardController.getUserPresenceById(req, res, 'venus_leaders'))

export default router
