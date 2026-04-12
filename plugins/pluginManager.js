export const applyPlugins = async (plugins = [], context = {}) => {
  for (const plugin of plugins) {
    if (!plugin) continue;

    try {
      console.log(`⚙️ Applying plugin: ${plugin.name}`);

      if (plugin.setup) {
        await plugin.setup(context);
      }

    } catch (err) {
      console.error(`❌ Plugin failed: ${plugin.name}`);
      console.error(err);
      process.exit(1);
    }
  }
};