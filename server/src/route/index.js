import express from 'express';

import event from './event';
import center from './center';


const v1 = express.Router();

v1.use('/events', event);
v1.use('/centers', center);

export default v1;
