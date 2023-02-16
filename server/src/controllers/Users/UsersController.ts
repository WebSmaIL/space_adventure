import { Response, Request } from 'express';
import { query } from '../../database';
import {
    DELETE_USER_BY_ID,
    GET_ALL,
    GET_BY_ID,
    ADD_USER,
    UPDATE_USER_LOGIN_PASS,
    UPDATE_USER_BALANCE,
    UPDATE_USER_EMAIL,
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
            const { id, login, password, email, balance, level } = req.body;
            query(ADD_USER, [id, login, password, email, balance, level])
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

    async updateUserLoginPass(req: Request, res: Response, tableName: string) {
        try {
            const { login, password, id } = req.body;

            query(UPDATE_USER_LOGIN_PASS, [login, password, id])
                .then((result) => {
                    res.status(200).json({
                        message: 'User login and password was updated',
                    });
                })
                .catch((error) =>
                    res.status(500).json({ message: 'User already exists' })
                );
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async updateUserBalance(req: Request, res: Response, tableName: string) {
        try {
            const { balance, id } = req.body;
            query(UPDATE_USER_BALANCE, [balance, id])
                .then((result) => {
                    res.status(200).json({
                        message: 'User balance was updated',
                    });
                })
                .catch((error) =>
                    res.status(500).json({ message: 'User already exists' })
                );
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }

    async updateUserEmail(req: Request, res: Response, tableName: string) {
        try {
            const { email, id } = req.body;
            query(UPDATE_USER_EMAIL, [email, id])
                .then((result) => {
                    res.status(200).json({ message: 'User email was updated' });
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
