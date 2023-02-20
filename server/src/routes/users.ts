import express, { Response, Request } from 'express';
import { UsersController } from '../controllers/Users';

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

router.put('/users/update_login_pass', (req: Request, res: Response) =>
    UsersController.updateUserLoginPass(req, res, 'users')
);

router.put('/users/update_balance', (req: Request, res: Response) =>
    UsersController.updateUserBalance(req, res, 'users')
);

router.put('/users/update_email', (req: Request, res: Response) =>
    UsersController.updateUserEmail(req, res, 'users')
);

export default router;
