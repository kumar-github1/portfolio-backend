import express from 'express';
import { getProjects, createProject, updateProject, deleteProject } from '../controllers/projectController.js';
import { verifyToken, requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', verifyToken, requireAdmin, createProject);
router.put('/:id', verifyToken, requireAdmin, updateProject);
router.delete('/:id', verifyToken, requireAdmin, deleteProject);

export default router;