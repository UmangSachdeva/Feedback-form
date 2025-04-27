import express from 'express';
import { createFeedback, getAllFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/feedback', createFeedback);
router.get('/feedback', getAllFeedback);

export default router;
