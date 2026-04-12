import aiProvider from './ai.provider.js';

export const askAI = async (userInput) => {
  const messages = [
    {
      role: 'system',
      content: 'You are a helpful backend AI assistant.'
    },
    {
      role: 'user',
      content: userInput
    }
  ];

  return await aiProvider.chat(messages);
};