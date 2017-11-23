import center from '../controller/center';
import express from 'express';

const router = express.Router();

router.post('/', center.addCenter);
router.put('/:id', center.editCenter);
router.get('/', center.getAll);
// router.get('/:id', center.getCenter);


//console.log(center)
export default router;
