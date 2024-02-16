import express from 'express';
import { activateUser, loginUser, logoutUser, registerUser } from '../controllers/userAuth.controller.js';
import { isAuthenticated } from '../middleware/auth.js';

const userAuthRouter = express.Router();

userAuthRouter.post('/registerUser',registerUser);
userAuthRouter.post('/activateUser',activateUser);
userAuthRouter.post('/loginUser',loginUser);
userAuthRouter.get('/logoutUser',isAuthenticated,logoutUser);

export default userAuthRouter