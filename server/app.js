import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import passportConfig from './passportConfig';
import router from './loginRoutes.js';
import AppError from './common/AppError';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(
  session({
    secret: process.env.REACT_APP_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env.REACT_APP_SECRET));

//middleware passport
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

// Routes
// app.post('/user/oauthIn', (req, res) => {
//   passport.authenticate('local', {failureRedirect: '/login', successRedirect: '/'}, (req, res) => {
//     // if (err) throw err;
//     // if (!user) res.send('No user exist.')
//     // if (user) {
//     //     req.logIn(user, err => {
//     //         if (err) throw err;
//     //         console.log(req.user)
//     //         res.send('log in success!.')
//     //         res.redirect('/');
//     //     })
//     // }
//     res.send('login sucess')
//   });
// });
app.use('/user', router);

// Error handling
// app.use((err, req, res) => {
//   res.status(err.status ? err.status : 404).json({message: err.message, error: err.stack});
// });

const port = process.env.PORT || 5000;
mongoose.connect(process.env.REACT_APP_MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
