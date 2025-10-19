import mongoose from 'mongoose';

/**
 * Connect to MongoDB using mongoose.
 * @param {string} uri - MongoDB connection string
 * @returns {Promise<mongoose>}
 */
export async function connectDB(uri = process.env.MONGO_URI) {
  if (!uri) throw new Error('MONGO_URI not provided');
  const opts = {
    // keep defaults but allow mongoose to create indexes during dev
    autoIndex: true,
    // use the new unified topology (default in modern mongoose)
    // other options can be added here if needed
  };
  await mongoose.connect(uri, opts);
  console.log('✅ MongoDB connected:', mongoose.connection.name || uri);
  return mongoose;
}

export default connectDB;
