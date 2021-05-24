import AppError from '../common/AppError';
import TestUser from '../model/testUser.js';
import * as loginService from '../service/loginService';

export const loginOAuth = async (req, res, next) => {
    try {
        console.log('login', req.body)
        const { email, password } = req.body;
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
        const { email, password } = req.body;

        const account = await loginService.getUserByEmail(email);
        // cannot make a new account, account already exist.
        if (account) {
            throw new AppError('Account already exists.')
        }

        // can make a new account.
        if (!account) {
            const newAccount = await loginService.createNewUser({email, password})
            res.json(newAccount)
        }

    } catch (err) {
        next(err)
    }
}