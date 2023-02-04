import { Response, Request } from 'express';
import { GET_ALL_USERS_QUERY, query } from '../../database';
import { DELETE_USER_BY_ID, GET_USER_BY_ID, ADD_USER, UPDATE_USER_BY_ID } from '../../database/queries';
import { toNumber, toObject } from '../../helpers';

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
            const { name, login, password, email, id } = req.body;
    
            query(UPDATE_USER_BY_ID, [name, login, password, email, Number(id)]).then((result) => {
                try {
    
                    if (!toObject(result)[6]) {
                        throw Error('User was not updated');
                    }
                    res.send(`User with ${id} was updated`);
                    res.status(200);
                } catch (error) {
                    res.status(500).json(error);
                }
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

export default new UsersController();
