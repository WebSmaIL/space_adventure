import { Response, Request } from 'express';
import { query } from '../../database';
import {
    DELETE_USER_BY_ID,
    GET_ALL,
    GET_BY_ID,
    ADD_USER,
    UPDATE_USER_BY_ID,
} from '../../database/queries';
import { toNumber, toObject } from '../../helpers';

class UsersController {
    async getUsers(req: Request, res: Response, tableName: string) {
        try {
            query(GET_ALL(tableName), []).then((result) => {
                res.send(result);
                res.status(200);
            });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async getUserById(req: Request, res: Response, tableName: string) {
        try {
            const { id } = req.params;
            if (!id.split(':')[1]) throw Error();
            query(GET_BY_ID(tableName), [id.split(':')[1]]).then((result) => {
                try {
                    res.send(result).status(200);
                } catch (error) {
                    res.status(500).json(error);
                }
            });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async deleteUserById(req: Request, res: Response, tableName: string) {
        try {
            const { id } = req.params;
            if (!id.split(':')[1]) throw Error();
            query(DELETE_USER_BY_ID, [id.split(':')[1]]).then((result) => {
                try {
                    if (!toObject(result)[1]) {
                        throw Error('User not found');
                    }
                    res.send(`User with ${id} was deleted`);
                    res.status(200);
                } catch (error) {
                    res.status(500).json(error);
                }
            });
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async addUser(req: Request, res: Response, tableName: string) {
        try {
            const { id, name, login, password, email } = req.body;
            query(ADD_USER, [id, name, login, password, email])
                .then((result) => {
                    res.status(200).json({ message: 'User was added' });
                })
                .catch((error) =>
                    res.status(500).json({ message: 'User already exists' })
                );
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async updateUser(req: Request, res: Response, tableName: string) {
        try {
            const { name, login, password, email, id } = req.body;

            query(UPDATE_USER_BY_ID, [name, login, password, email, Number(id)])
                .then((result) => {
                    res.status(200).json({ message: 'User was updated' });
                })
                .catch((error) =>
                    res.status(500).json({ message: 'User already exists' })
                );
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }
}

export default new UsersController();
