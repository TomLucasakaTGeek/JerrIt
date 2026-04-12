import { writeAIModule } from '../fileCreator.js';

export const aiPlugin = (langchoice) => {
  const isTS = langchoice.includes('Typescript');

  return {
    name: 'ai',

    async setup() {
      await writeAIModule(langchoice);
    },

    inject: {
      import: isTS
        ? "import aiRoutes from '../modules/ai/ai.routes';"
        : "import aiRoutes from '../modules/ai/ai.routes.js';",

      use: "router.use('/ai', aiRoutes);"
    },

    dependencies: {
      openai: '^4.0.0'
    }
  };
};