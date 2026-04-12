import app from './app.js';
import { config } from './config/index.js';
import { connectDB } from './config/db.js';

const start = async () => {
  try {
    if (connectDB) {
      await connectDB();
    }

    app.listen(config.port, () => {
      console.log(`🚀 Server running on port ${config.port}`);
    });

  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
};

start();