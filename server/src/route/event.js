import event from '../controller/event';
import express from 'express';
import validate from '../middlewares/validations';
import Auth from '../middlewares/authenticate';



const router = express.Router();

router.post('/', Auth.Verify, validate.addEvent, event.addEvent);
// router.put('/:id', Auth.Verify, validate.editEvent, event.editEvent);
// router.delete('/:id', Auth.Verify, event.deleteEvent);

export default router;
