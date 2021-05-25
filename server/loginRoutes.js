import express from 'express';
import * as loginController from './control/loginControl.js';
import passport from 'passport';
import passportConfig from './passportConfig';
import AppError from './common/AppError';

// const app = express();
const router = express.Router();

// app.use(passport.initialize());
// app.use(passport.session());
passportConfig(passport);


// regular login, create Account
// router.post('/oauthIn', loginController.loginOAuth);
// router.post('/oauthOut', loginController.logoutOAuth);
// router.post('/newUser', loginController.createNewUser);

// auth with Passport.js
router.post('/oauthIn', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    console.log(user)

    if (err) throw err;
    if (!user) res.status(400).json('No user exist.')
    req.logIn(user, err => {
        if (err) throw err;
        console.log('req.logIn', req.user)
        res.json(user)
    })
  })(req, res, next);
});
router.post('/oauthOut', loginController.logoutOAuth);
router.post('/newUser', loginController.createNewUser);

export default router;