import { askAI } from './ai.service.js';

export const handleAIChat = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: 'Prompt is required'
      });
    }

    const response = await askAI(prompt);

    res.status(200).json({
      success: true,
      data: response
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: 'AI request failed',
      error: error.message
    });
  }
};