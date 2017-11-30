import event from '../controller/event';
import express from 'express';
import validate from '../middlewares/validations';
import Auth from '../middlewares/authenticate';



const router = express.Router();

router.post('/', validate.addEvent, event.addEvent);
router.put('/:id', validate.addEvent, event.editEvent);
router.delete('/:id', event.deleteEvent);

export default router;
