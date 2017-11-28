import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import event from './route/event';
import center from './route/center';
import user from './route/user';



const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/users', user);
app.use('/api/v1/events', event);
app.use('/api/v1/centers', center);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome To Event manager API!!!'
}));


export default app;
