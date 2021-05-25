import AppError from '../common/AppError';
import TestUser from '../model/testUser.js';
import * as loginService from '../service/loginService';
import bycrypt from 'bcryptjs';

export const loginOAuth = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const account = await loginService.getUserByEmail(email)
        if (!account) throw new AppError('User not exists.')
        
        const isPasswordCorrect = await bycrypt.compare(password, account.password);
        if (!isPasswordCorrect) throw new AppError('Password incorrect.')
        res.json(account);
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
        const encryptPWD = bycrypt.hashSync(password, 10)

        const account = await loginService.getUserByEmail(email);
        // cannot make a new account, account already exist.
        if (account) {
            throw new AppError('Account already exists.')
        }

        // can make a new account.
        if (!account) {
            const newAccount = await loginService.createNewUser({email, password: encryptPWD})
            res.json(newAccount);-+[]
        }
    } catch (err) {
        next(err)
    }
}