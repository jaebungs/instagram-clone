import express from 'express';
import cors from 'cors';
import router from './loginRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})