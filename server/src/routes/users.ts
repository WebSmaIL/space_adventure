import express, { Response, Request } from 'express';
import { UsersController } from '../controllers/Users';
import { MinigameController } from '../controllers/Minigame'

const router = express.Router();

router.get('/users', (req: Request, res: Response) =>
    UsersController.getUsers(req, res, 'users')
);

router.get('/users/:id', (req: Request, res: Response) =>
    UsersController.getUserById(req, res, 'users')
);

router.get('/users/getbylogin/:login&:password', (req: Request, res: Response) =>
    UsersController.getUserByLogin(req, res)
);

router.post('/users', (req: Request, res: Response) =>
    UsersController.addUser(req, res)
);

router.delete('/users/:id', (req: Request, res: Response) =>
    UsersController.deleteUserById(req, res, 'users')
);

router.put('/users/update_login', (req: Request, res: Response) =>
    UsersController.updateUserLogin(req, res, 'users')
);

router.put('/users/update_password', (req: Request, res: Response) =>
    UsersController.updateUserPassword(req, res, 'users')
);

router.put('/users/update_balance', (req: Request, res: Response) =>
    UsersController.updateUserBalance(req, res, 'users')
);

router.put('/users/update_level', (req: Request, res: Response) =>
    UsersController.updateUserLevel(req, res, 'users')
);

router.put('/users/update_email', (req: Request, res: Response) =>
    UsersController.updateUserEmail(req, res, 'users')
);

router.post('/users/upload', (req: Request, res: Response) =>
    UsersController.addUserAvatar(req, res)
);

router.post('/users/coinsupdate', (req: Request, res: Response) =>
    MinigameController.updateCoins(req, res)
);

router.post('/users/updatescore', (req: Request, res: Response) =>
    MinigameController.updateScore(req, res)
);

export default router;
