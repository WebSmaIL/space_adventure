import express, { Response, Request } from 'express';
import { UsersController } from '../controllers/Users'
import { table_names } from '../database';

const router = express.Router()


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

    router.put(url, (req: Request, res: Response) =>
        UsersController.updateUser(req, res, el)
    );
});

export default router;