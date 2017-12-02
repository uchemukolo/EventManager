import event from '../controller/event';
import express from 'express';
import validate from '../middlewares/Validations';
import Auth from '../middlewares/authenticate';



const router = express.Router();

router.post('/', Auth.Verify, validate.addEvent, event.add);
router.put('/:id', Auth.Verify, validate.addEvent, event.update);
router.delete('/:id', Auth.Verify, event.delete);

export default router;
