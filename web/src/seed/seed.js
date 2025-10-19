// src/seed/seed.js (ESM)
import 'dotenv/config';
import mongoose from 'mongoose';
import * as models from '../models/index.js';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/swd392_group1';

async function main() {
  try {
    console.log('🚀 Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI, { autoIndex: true });
    console.log('✅ Connected to:', MONGO_URI);

    const modelEntries = Object.entries(models);
    console.log('📦 Loaded models:', modelEntries.map(([name]) => name).join(', '));

    // Create empty collections for each model (no documents)
    await Promise.all(
      modelEntries.map(async ([name, Model]) => {
        try {
          await Model.createCollection();
          console.log(`📁 ensured collection: ${Model.collection.collectionName}`);
        } catch (e) {
          console.log(`ℹ️  skip ${name}: ${e.message}`);
        }
      })
    );

    console.log(`🧩 Database ready: ${mongoose.connection.name}`);
    console.log('✅ Collections were created with NO documents.');

  } catch (err) {
    console.error('❌ Seed Error:', err.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected.');
  }
}

main();
