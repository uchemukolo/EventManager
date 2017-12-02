import center from '../controller/center';
import express from 'express';
import Auth from '../middlewares/authenticate';
import validate from '../middlewares/Validations';



const router = express.Router();

router.post('/', Auth.Verify, Auth.Admin, validate.addCenter, center.add);
router.put('/:id', Auth.Verify, Auth.Admin, validate.addCenter, center.update);
router.get('/', Auth.Verify, center.getAll);
router.get('/:id', Auth.Verify, center.getOne);

export default router;
