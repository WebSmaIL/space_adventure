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
    GET_BY_LOGIN,
    UPDATE_USER_AVATAR,
} from '../../database/queries';
import { toObject } from '../../helpers';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

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

    async getUserByLogin(req: Request, res: Response) {
        try {
            const { login, password } = req.params;

            if (!login) throw Error();
            query(GET_BY_LOGIN, [login.split(':')[1]]).then((result) => {
                try {
                    const correctlyPass = JSON.parse(JSON.stringify(result))[0]
                        .password;

                    if (password.split(':')[1] === correctlyPass) {
                        res.json(JSON.parse(JSON.stringify(result))[0]).status(
                            200
                        );
                    } else {
                        throw Error();
                    }
                } catch (error) {
                    res.status(500).json({
                        message: 'Не верный логин или пароль',
                    });
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

    async addUser(req: Request, res: Response) {
        try {
            const { login, password, email } = req.body;
            const id = uuidv4();
            const balance = 0,
                level = 0;

            query(ADD_USER, [id, login, password, email, balance, level])
                .then((result) => {
                    console.log([id, login, password, email, balance, level]);

                    query(GET_BY_ID('users'), [id])
                        .then((result) => {
                            res.status(200).json(
                                JSON.parse(JSON.stringify(result))[0]
                            );
                        })
                        .catch((error) => {
                            res.status(500).json({
                                message: 'User is wasn`t added',
                            });
                        });
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

    async addUserAvatar(req: Request, res: Response) {
        try {
            const file = req.body.file;
            const uId = req.body.userId;
            const base64Data = file.replace(/^data:image\/png;base64,/, '');

            if (file && uId) {
                fs.writeFile(
                    `./files/${uId}.png`,
                    base64Data,
                    'base64url',
                    function (err) {
                        if (err) {
                            res.status(500).json('Incorrect request');
                        }
                    }
                );
                query(UPDATE_USER_AVATAR, [`${uId}.png`, uId])
                    .then((result) => {
                        res.status(200).json({
                            avatar_src: `${uId}.png`,
                        });
                    })
                    .catch((error) =>
                        res.status(500).json({ message: 'User already exists' })
                    );
            }
        } catch (error) {
            res.status(500).json('Incorrect request');
        }
    }
}

export default new UsersController();
