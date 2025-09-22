import express from 'express'
import { loginUser, registerUser, registerAdmin } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/register-admin', registerAdmin); // Temporary endpoint

export default router