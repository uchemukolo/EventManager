import event from '../controller/event';
import express from 'express';

const router = express.Router();

router.post('/', event.addEvent);
router.put('/:id', event.editEvent);
// router.get('/:id', event.deleteEvent);



//console.log(event)
export default router;
