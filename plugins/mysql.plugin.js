import { writeDbFiles } from '../fileCreator.js';

export const mysqlPlugin = (langchoice) => {
  return {
    name: 'mysql',

    async setup() {
      await writeDbFiles('MySQL', langchoice);
    },

    dependencies: {
      mysql2: '^3.0.0'
    }
  };
};