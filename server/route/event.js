import event from '../controller/event';
import express from 'express';

const router = express.Router();

router.post('/', event.addEvent);
router.put('/:id', event.editEvent);
router.delete('/:id', event.deleteEvent);

export default router;
