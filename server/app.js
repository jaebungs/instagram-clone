import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from 'cookie-parser';
import bycrypt from 'bcryptjs';
import session from 'express-session';
import router from './loginRoutes.js';

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.REACT_APP_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.use(cookieParser(process.env.REACT_APP_SECRET))

// Routes
app.use('/user', router);

// Error handling 
app.use((err, req, res) => {
    res.status(err.status ? err.status : 404).json({message: err.message, error: err.stack})
})

const port = process.env.PORT || 5000;
mongoose.connect(process.env.REACT_APP_MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.listen(port, () => {
    console.log(`server is running on ${port}`)
})