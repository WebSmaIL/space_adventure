import express, { Response, Request } from 'express';
import { UsersController } from '../controllers/Users';
import { table_names } from '../database';

const router = express.Router();

table_names.forEach((el) => {
    const url = '/' + el.split('_').join('');

    router.get(url, (req: Request, res: Response) =>
        UsersController.getUsers(req, res, el)
    );

    router.get(url + '/:id', (req: Request, res: Response) =>
        UsersController.getUserById(req, res, el)
    );

    router.post(url, (req: Request, res: Response) =>
        UsersController.addUser(req, res, el)
    );

    router.delete(url + '/:id', (req: Request, res: Response) =>
        UsersController.deleteUserById(req, res, el)
    );

    router.put(url + '/update_login_pass', (req: Request, res: Response) =>
        UsersController.updateUserLoginPass(req, res, el)
    );

    router.put(url + '/update_balance', (req: Request, res: Response) =>
        UsersController.updateUserBalance(req, res, el)
    );

    router.put(url + '/update_email', (req: Request, res: Response) =>
        UsersController.updateUserEmail(req, res, el)
    );
});

export default router;
