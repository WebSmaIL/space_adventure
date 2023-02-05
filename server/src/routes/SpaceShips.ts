import express from 'express';
import { SpaceShips } from '../controllers/SpaceShips'
const router = express.Router();

router.get('/spaceships', SpaceShips.getSpaceShips)

router.get('/spaceships/:id', SpaceShips.getSpaceShipsById)




export default router;
