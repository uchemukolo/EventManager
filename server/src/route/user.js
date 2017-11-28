import users from '../controller/user';
import express from 'express';


const router = express.Router();

router.post('/', users.signup);
router.post('/login', users.signin);

export default router;
