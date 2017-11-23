import event from '../controller/event';
import express from 'express';

const router = express.Router();

router.post('/', event.addEvent);
router.put('/:id', event.addEvent);
router.get('/', event.addEvent);



//console.log(event)
export default router;
