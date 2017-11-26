import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import event from './route/index.js';


const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', event);
app.use('/api/v1', center);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to our first route!!!'
}));


export default app;
