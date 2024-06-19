import express from 'express';
import { getTops, getTopById, createTop } from '../controllers/topsController';

const router = express.Router();

router.get('/', getTops);
router.get('/:id', getTopById);
router.post('/', createTop);

export default router;
