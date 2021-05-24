import express from 'express';
import * as loginController from './loginControl.js';

const router = express.Router();

router.post('/oauthIn', loginController.loginOAuth);
router.post('/oauthOut', loginController.logoutOAuth);
router.post('/newUser', loginController.createNewUser);

export default router;