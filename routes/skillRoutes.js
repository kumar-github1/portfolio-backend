import express from "express";
import { getSkills, createSkills } from "../controllers/skillController.js";

const router = express.Router();

router.get('/', getSkills);
router.post('/', createSkills);

export default router;