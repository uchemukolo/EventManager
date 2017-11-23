import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import event from './route/index';

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));

app.use('/api/', event)

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to our first route!!!'
}));
// app.use((req, res, next) => {
//     const err = res.status(404).send({
//         ERROR: '404 Page not found!'
//     })
//     next(err)
// });

export default app;