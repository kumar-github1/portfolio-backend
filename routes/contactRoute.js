import express from "express";
import { getContact, createContact } from "../controllers/contactController";

const router = express.Router();

router.get('/', getContact);
router.post('/', createContact);

export default router;
