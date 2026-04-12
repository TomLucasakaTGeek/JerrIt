import OpenAI from 'openai';

class AIProvider {
  constructor() {
    this.client = null;
  }

  init() {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is missing in .env');
    }

    this.client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async chat(messages) {
    if (!this.client) {
      this.init();
    }

    const response = await this.client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages
    });

    return response.choices[0]?.message?.content || '';
  }
}

export default new AIProvider();