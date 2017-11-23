import express from 'express';

import event from './event';
import center from './center';


const route = express.Router();

route.use('/events', event);
route.use('/centers', center);

export default route;
