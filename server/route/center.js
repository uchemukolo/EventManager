import center from '../controller/center';
import express from 'express';

const router = express.Router();

router.post('/', center.addCenter);
// router.get('/', center.getAll);
// router.get('/:id', center.getCenter);
// router.put('/:id', center.editCenter);


//console.log(center)
export default router;
