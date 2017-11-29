import users from '../controller/user';
import express from 'express';
import validate from '../middlewares/validations';


const router = express.Router();

router.post('/', validate.signUp, users.signup);
router.post('/login', validate.signIn, users.signin);

export default router;
