import express from "express";
import { getSkills, createSkills, updateSkill, deleteSkill } from "../controllers/skillController.js";
import { verifyToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getSkills);
router.post('/', verifyToken, requireAdmin, createSkills);
router.put('/:id', verifyToken, requireAdmin, updateSkill);
router.delete('/:id', verifyToken, requireAdmin, deleteSkill);

export default router;