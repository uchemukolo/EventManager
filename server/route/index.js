import express from 'express';

import event from './event';

const route = express.Router();

route.use('/events', event);

export default route;
