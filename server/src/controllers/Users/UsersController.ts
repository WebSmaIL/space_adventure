import { Response, Request } from 'express';
import { GET_ALL_USERS_QUERY, query } from '../../database';
import { DELETE_USER_BY_ID, GET_USER_BY_ID, ADD_USER } from '../../database/queries';
import { toNumber, toObject } from '../../helpers';

interface IUser {
    id: number;
    name: string;
    isOnline: boolean;
}

const users: IUser[] = [
    { id: 1, name: 'Ivan', isOnline: true },
    { id: 2, name: 'Sanya', isOnline: false },
    { id: 3, name: 'Danya', isOnline: true },
];

class UsersController {
    async getUsers(req: Request, res: Response) {
        try {
            query(GET_ALL_USERS_QUERY, []).then((result) => {
                res.send(result);
                res.status(200);
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            query(GET_USER_BY_ID, [toNumber(id)]).then((result) => {
                try {
                    if (!toObject(result)[0]) {
                        throw Error('This user undefined');
                    }
                    res.send(result);
                    res.status(200);
                } catch (error) {
                    res.status(500).json(error);
                }
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            query(DELETE_USER_BY_ID, [toNumber(id)]).then((result) => {
                try {
                    if (!toObject(result)[1]) {
                        throw Error("User not found")
                    }
                    res.send(`User with ${id} was deleted`);
                    res.status(200);
                } catch (error) {
                    res.status(500).json(error);
                }
            });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async addUser(req: Request, res: Response) {
        try {

            const { id, name, login, password, email } = req.body;
            console.log(typeof id, typeof name, typeof login, typeof password, typeof email);
            console.log('1231231231231231231231231231231233123');
            query(ADD_USER, [id, name, login, password, email]).then((result)=>{
                try {
                    if (!result) {
                        throw Error('You try to add incorrect user');
                    }
                    res.send(`User was added`);
                    res.status(200);
                } catch (error) {
                    res.status(500).json(error);
                }
            })
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userOfRequest = req.body;
            if (!userOfRequest.id || !userOfRequest.name) {
                throw new Error('Your update incorrectly');
            }

            const user = users.find((user) => user.id === userOfRequest.id);
            if (!user) {
                throw new Error('This user is undefined');
            }

            user.name = userOfRequest.name;
            res.send(`User with ${userOfRequest.id} was updated`);
            res.status(200);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new UsersController();
