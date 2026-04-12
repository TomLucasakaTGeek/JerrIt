import { writeDbFiles } from '../fileCreator.js';

export const mongodbPlugin = (langchoice) => {
  return {
    name: 'mongodb',

    async setup() {
      await writeDbFiles('MongoDB', langchoice);
    },

    dependencies: {
      mongoose: '^8.0.0'
    }
  };
};