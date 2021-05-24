import AppError from './common/AppError';
import TestUser from './model/testUser.js';
import * as loginService from './service/loginService';

export const loginOAuth = async (req, res, next) => {
    try {
        console.log('login', req.body)
        const { email, password } = req.body
        const newUser = new TestUser({
            email,
            password
        })
        const account = await loginService.getUserByEmail(email)
        if (!account) throw new AppError('User not exists')
        res.json(account)

    } catch (err) {
        next(err)
    }
}

export const logoutOAuth = async (req, res, next) => [
    console.log('log out', req.body)
]

export const createNewUser = async (req, res, next) => {
    try {
        console.log('create new user');
        const { email, password } = req.body;
        console.log(email,password)
        // const account = await loginService.getUserByEmail(email);
        // if (!account) {
        //     const newAccount = await loginService.createNewUser({email, password})
        //     res.json(newAccount)
        // }
        res.json({ email, password})
    } catch (err) {
        next(err)
    }
}