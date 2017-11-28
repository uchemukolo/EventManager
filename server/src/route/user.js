import user from '../controller/user';
import express from 'express';


const router = express.Router();

router.post('/', user.signup);
router.post('/', user.signin);

export default router;
