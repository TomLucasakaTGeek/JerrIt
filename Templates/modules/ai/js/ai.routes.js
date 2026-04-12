import express from 'express';
import { handleAIChat } from './ai.controller.js';

const router = express.Router();

router.post('/chat', handleAIChat);

export default router;