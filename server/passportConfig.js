import TestUser from './model/testUser';
import bycrypt from 'bcryptjs';
import passportLocal from 'passport-local';
import * as loginService from './service/loginService';

const LocalStrategy = passportLocal.Strategy;

const passportConfig = (passport) => {
    
    const authenticateUser = async (email, password, done) => {
        const user = await loginService.getUserByEmail(email);
        if (!user) return done(null, false);
        bycrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        });
    }

    passport.use(
        new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, authenticateUser)
    )

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        TestUser.findById(id , (err, user) => {
            done(err, user);
        })
    })
}

export default passportConfig;