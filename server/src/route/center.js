import center from '../controller/center';
import express from 'express';
import Auth from '../middlewares/authenticate';
import validate from '../middlewares/validations';



const router = express.Router();

router.post('/', Auth.Verify, validate.addCenter, center.addCenter);
router.put('/:id', center.editCenter);
router.get('/', center.getAll);
router.get('/:id', center.getCenter);

export default router;
