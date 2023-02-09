import express, { Response, Request } from 'express';
import { PlanetsController } from '../controllers/Planets'
const router = express.Router();

router.get('/planets', PlanetsController.getPlanets)

router.get('/planets/:id' , PlanetsController.getPlanetById)

export default router;
